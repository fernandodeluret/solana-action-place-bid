import {
  ActionPostResponse,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
  createActionHeaders,
} from '@solana/actions';
import {
  PublicKey,
  Transaction,
} from '@solana/web3.js';

const headers = createActionHeaders();

export const GET = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { auction } = validatedAuctionQueryParam(requestUrl);


    const baseHref = new URL(
      `/api/actions/place-bid?auction=${auction.toBase58()}`,
      // requestUrl.origin,
      'https://solana-action-place-bid-49210566320.us-central1.run.app',
    ).toString();

    const payload: ActionGetResponse = {
      type: 'action',
      title: `Place bid to auction: ${auction.toBase58()}`,
      icon: 'https://lh3.googleusercontent.com/mSOpg5plu1vHpJXMKGSAFkJW3DTOlvRzxOSGGlFfsnSccVCKHGYZ07egWJYxLRCbfFrVY2_oMK6Chj0sBSMgl1g_ig5ZZHNML-Qbdso=w609',
      description:
        'property cNFT metadata placeholder',
      label: 'Place bid', // this value will be ignored since `links.actions` exists
      links: {
        actions: [
          {
            label: 'Place Bid', // button text
            href: `${baseHref}&amount={amount}`, // this href will have a text input
            parameters: [
              {
                name: 'amount', // parameter name in the `href` above
                label: 'Enter the amount of USDC for the bid', // placeholder of the text input
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

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
export const OPTIONS = async (req: Request) => {
  return new Response(null, { headers });
};

export const POST = async (req: Request) => {
  try {
    const requestUrl = new URL(req.url);
    const { auction } = validatedAuctionQueryParam(requestUrl);
    const { bidAmount } = validatedBidAmountQueryParam(requestUrl);

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

    // const connection = new Connection(
    //   process.env.SOLANA_RPC! || clusterApiUrl('mainnet-beta'),
    // );



    // create a legacy transaction
    const transaction = new Transaction()

    // versioned transactions are also supported
    // const transaction = new VersionedTransaction(
    //   new TransactionMessage({
    //     payerKey: account,
    //     recentBlockhash: blockhash,
    //     instructions: [transferSolInstruction],
    //   }).compileToV0Message(),
    //   // note: you can also use `compileToLegacyMessage`
    // );

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: `You have placed a bid with account: ${bidder.toBase58()}!`,
      },
      // note: no additional signers are needed
      // signers: [],
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
    return { bidAmount }
  } else {
    throw 'Invalid input query parameter: auction';
  }
}
