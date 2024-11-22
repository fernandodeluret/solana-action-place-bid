import { getAccount, getAssociatedTokenAddressSync } from "@solana/spl-token";
import { initialSetup } from "../src/app/utils/initialSetup";
import { PublicKey, VersionedTransaction } from "@solana/web3.js";
import { toUint8Array } from "js-base64";

// const config = require("../src/app/utils/initialSetup");

const test = async () => {
  const { wallet, connection, usdcDevMint, mintDecimals } =
    await initialSetup();
  console.log(wallet.publicKey.toBase58());

  const amount = 1500;
  const url = `http://localhost:3001/api/actions/place-bid?auction=Ant8qoUbnsYd54cywvUhWND4RtqSspeAeu3537WWSjG3&amount=${amount}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account: "8MbJpTkFxpnQcxs1No1WLhvAfAz8pZViw1yJRbcWDU2M",
    }),
  });

  const ata = getAssociatedTokenAddressSync(usdcDevMint, wallet.publicKey);
  const ataData = await getAccount(connection, ata);
  console.log("ataData.amount: ", ataData.amount);
  console.log("mintDecimals: ", mintDecimals);

  const payload = await res.json();
  console.log(payload);

  const serializedTx = payload["transaction"];
  const tx = VersionedTransaction.deserialize(toUint8Array(serializedTx));
  tx.sign([wallet]);

  const sig = await connection.sendTransaction(tx);
  await connection.confirmTransaction(sig, "confirmed");
  console.log("sig: ", sig);
  console.log("testPlaceBid done!");
};

test()
  .then(() => console.log("ok"))
  .catch((e) => console.log(e));
