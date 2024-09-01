import { AnchorProvider, BN, Program } from "@coral-xyz/anchor"
import * as anchor from "@coral-xyz/anchor"
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import IDL from '../idl/ah-idl.json';
import { AuctionHouse } from '../idl/type';
import { fetchTreeConfigFromSeeds, getAssetWithProof, mplBubblegum } from "@metaplex-foundation/mpl-bubblegum";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { publicKey } from "@metaplex-foundation/umi";
import { ConcurrentMerkleTreeAccount } from "@solana/spl-account-compression";
import 'dotenv/config'
import { getMint } from "@solana/spl-token";


export const getMplData = async (connection: Connection, umi: any, assetId: PublicKey) => {
  const assetWithProof = await getAssetWithProof(umi, publicKey(assetId.toBase58()));

  const description = assetWithProof.rpcAsset.content.metadata.description
  const img = assetWithProof.rpcAsset.content.files![0].uri
  const links = [assetWithProof.rpcAsset.content.json_uri]

  const splCMT = await ConcurrentMerkleTreeAccount.fromAccountAddress(
    connection,
    new PublicKey(assetWithProof.merkleTree)
  );
  const canopyDepth = splCMT.getCanopyDepth();
  const treeConfig = await fetchTreeConfigFromSeeds(umi, {
    merkleTree: assetWithProof.merkleTree,
  });

  const proof = assetWithProof.proof
    .map((node) => ({
      pubkey: new PublicKey(node),
      isSigner: false,
      isWritable: false,
    }))
    .slice(0, assetWithProof.proof.length - canopyDepth);

  return {
    proof,
    metadata: {
      root: Array.from(assetWithProof.root),
      dataHash: Array.from(assetWithProof.dataHash),
      creatorHash: Array.from(assetWithProof.creatorHash),
      nonce: new BN(assetWithProof.nonce),
      index: assetWithProof.index,
    },
    treeConfig: new PublicKey(treeConfig.publicKey),
    description,
    img,
    links
  }
}

export const getEnvOrError = () => {
  const exist = (envVar: any) => {
    if (!envVar) {
      throw `${envVar} does not exist on .env`
    }

    return envVar;
  }

  return {
    RPC: exist(process.env.RPC),
    WALLET: exist(process.env.WALLET),
    COMMITMENT: exist(process.env.COMMITMENT),
    ALT: exist(process.env.ALT),
    SERVER_URL: exist(process.env.SERVER_URL),
  }
}

export const initialSetup = async () => {
  const { RPC, COMMITMENT, WALLET } = getEnvOrError()

  const connection = new Connection(RPC, COMMITMENT);
  const umi = createUmi(RPC, { commitment: COMMITMENT }).use(mplBubblegum());

  const wallet = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(WALLET)));
  const provider = new AnchorProvider(connection, new anchor.Wallet(wallet));
  const program = new Program(IDL as AuctionHouse, provider)

  const [config] = PublicKey.findProgramAddressSync(
    [Buffer.from("config")],
    program.programId
  );

  const configData = await program.account.config.fetch(config);

  const usdcDevMint = new PublicKey(
    "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
  );

  const mintData = await getMint(connection, usdcDevMint)
  const mintDecimals = Math.pow(10, mintData.decimals)

  return {
    wallet,
    connection,
    provider,
    program,
    config,
    usdcDevMint,
    mintDecimals,
    feesTreasury: configData.feesTreasury,
    umi
  }
}