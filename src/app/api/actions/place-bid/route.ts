import { getEnvOrError, getMplData, initialSetup } from '@/app/utils/initialSetup';
import { validateAuction } from '@/app/utils/validateAuction';
import { BN } from '@coral-xyz/anchor';
import {
  ActionPostResponse,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
  createActionHeaders,
} from '@solana/actions';
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync } from '@solana/spl-token';
import {
  PublicKey,
  Transaction,
} from '@solana/web3.js';

const headers = createActionHeaders();

export const GET = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { SERVER_URL } = getEnvOrError()
    const { auction } = validatedAuctionQueryParam(requestUrl);
    const { price, endTime, assetId } = await validateAuction(auction)
    const { connection, umi } = await initialSetup()
    const { description, img, links } = await getMplData(connection, umi, assetId)

    const placeholderImg = 'https://lh3.googleusercontent.com/mSOpg5plu1vHpJXMKGSAFkJW3DTOlvRzxOSGGlFfsnSccVCKHGYZ07egWJYxLRCbfFrVY2_oMK6Chj0sBSMgl1g_ig5ZZHNML-Qbdso=w609'

    const baseHref = new URL(
      `/api/actions/place-bid?auction=${auction.toBase58()}`,
      SERVER_URL,
    ).toString();

    const payload: ActionGetResponse = {
      type: 'action',
      title: `Place bid to auction: ${auction.toBase58()}`,
      icon: img ? img : placeholderImg,
      description: ` ${description} - 
      Current Price: ${price} - 
      End time: ${new Date(endTime).toDateString()} - 
      cNFT Asset ID: ${assetId.toBase58()} - 
      Links: ${links}`,
      label: 'Place bid', // this value will be ignored since `links.actions` exists
      links: {
        actions: [
          {
            label: 'Place Bid',
            href: `${baseHref}&amount={amount}`,
            parameters: [
              {
                name: 'amount', // parameter name in the `href` above
                label: 'Enter the amount of USDC for the bid',
                required: true,
              },
            ],
          },
        ],
      },
    };

    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let message = 'An unknown error occurred';
    if (typeof err == 'string') message = err;
    return new Response(message, {
      status: 400,
      headers,
    });
  }
};


export const OPTIONS = async (_req: Request) => {
  return new Response(null, { headers });
};


export const POST = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { auction } = validatedAuctionQueryParam(requestUrl);
    const { bidAmount } = validatedBidAmountQueryParam(requestUrl);

    const { auctionData } = await validateAuction(auction)
    const { program, mintDecimals, usdcDevMint, config, feesTreasury } = await initialSetup()

    const body: ActionPostRequest = await req.json();

    // validate the client provided input
    let bidder: PublicKey;
    try {
      bidder = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers,
      });
    }


    const priceEscrow = getAssociatedTokenAddressSync(
      usdcDevMint,
      auction,
      true,
    );
    const priceOrigin = getAssociatedTokenAddressSync(
      usdcDevMint,
      bidder,
    );

    let previousBidderId = program.programId;
    let previousBidderPriceWithdrawal = program.programId;
    if (auctionData.bidder) {
      previousBidderId = auctionData.bidder;
      previousBidderPriceWithdrawal = getAssociatedTokenAddressSync(
        usdcDevMint,
        previousBidderId,
      );
    }

    const ix = await program.methods
      .placeBid({
        bidPrice: new BN(bidAmount * mintDecimals)
      })
      .accountsStrict({
        auction,
        buyer: bidder,
        priceEscrow,
        priceOrigin,
        previousBidderId,
        previousBidderPriceWithdrawal,
        config,
        feesTreasury: feesTreasury,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      })
      .instruction()

    const transaction = new Transaction().add(ix)

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: `You have placed a bid with account: ${bidder.toBase58()}!`,
      },
    });

    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let message = 'An unknown error occurred';
    if (typeof err == 'string') message = err;
    return new Response(message, {
      status: 400,
      headers,
    });
  }
};

function validatedAuctionQueryParam(requestUrl: URL) {
  try {
    const auction = requestUrl.searchParams.get('auction');
    if (auction) {
      return { auction: new PublicKey(auction) }
    } else {
      throw 'Invalid input query parameter: auction';
    }
  } catch (err) {
    throw 'Invalid input query parameter: auction';
  }
}

function validatedBidAmountQueryParam(requestUrl: URL) {
  const bidAmount = requestUrl.searchParams.get('amount');
  if (bidAmount) {
    return { bidAmount: parseFloat(bidAmount) }
  } else {
    throw 'Invalid input query parameter: auction';
  }
}
