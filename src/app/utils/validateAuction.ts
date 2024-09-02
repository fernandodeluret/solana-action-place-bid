import { PublicKey } from "@solana/web3.js";
import { initialSetup } from "./initialSetup";

export const validateAuction = async (auction: PublicKey) => {
  const { program, connection, mintDecimals } = await initialSetup()

  const auctionData = await program.account.auction.fetch(auction)
  if (!auctionData) {
    throw 'not existent auction'
  } else {
    const slot = await connection.getSlot();
    const timestamp = await connection.getBlockTime(slot);
    const isAuctionEnded = timestamp && timestamp > auctionData.endTime.toNumber()
    if (isAuctionEnded) {
      throw 'auction has already end'
    }
  }

  let price = auctionData.initialPrice.toNumber()
  if (auctionData.currentPrice.toNumber() > price) {
    price = auctionData.currentPrice.toNumber()
  }
  // Set the proper price scale
  price = price / mintDecimals

  return {
    price,
    endTime: auctionData.endTime.toNumber(),
    assetId: auctionData.assetId,
    auctionData
  }
}