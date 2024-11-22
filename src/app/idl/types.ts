/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/skytrade_program.json`.
 */
export type SkytradeProgram = {
  address: 'B7Apr6RYBsGV5Quobj3Dj8GDaSFcZW6H6NRxj5eN3Ven';
  metadata: {
    name: 'skytradeProgram';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'acceptOffer';
      discriminator: [227, 82, 234, 131, 1, 18, 48, 2];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'seller';
          writable: true;
          signer: true;
        },
        {
          name: 'rentReceiver';
          writable: true;
        },
        {
          name: 'buyer';
          writable: true;
        },
        {
          name: 'assetId';
        },
        {
          name: 'offer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [111, 102, 102, 101, 114];
              },
              {
                kind: 'account';
                path: 'assetId';
              },
              {
                kind: 'account';
                path: 'buyer';
              },
            ];
          };
        },
        {
          name: 'paymentCurrency';
        },
        {
          name: 'sellerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'offerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'offer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'leafDelegate';
        },
        {
          name: 'bubblegumProgram';
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'logWrapper';
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'config';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'acceptOfferArgs';
            };
          };
        },
      ];
    },
    {
      name: 'addVerificationCreator';
      docs: [
        'Adds the signature for the second creator (`VerificationCreator`) and sends the token',
        'to the property owner user or to the on-going auction if corresponds',
      ];
      discriminator: [60, 196, 250, 122, 77, 195, 54, 52];
      accounts: [
        {
          name: 'dataAccountAuthority';
          writable: true;
          signer: true;
        },
        {
          name: 'collectionAuthority';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'recipient';
          writable: true;
        },
        {
          name: 'treeConfig';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
        },
        {
          name: 'logWrapper';
        },
        {
          name: 'compressionProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'collectionMint';
        },
        {
          name: 'collectionMetadata';
          writable: true;
        },
        {
          name: 'tokenMetadataProgram';
        },
        {
          name: 'verificationCreator';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  118,
                  101,
                  114,
                  105,
                  102,
                  105,
                  99,
                  97,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  114,
                  101,
                  97,
                  116,
                  111,
                  114,
                ];
              },
            ];
          };
        },
        {
          name: 'assetId';
        },
        {
          name: 'unverifiedTokenHolder';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  118,
                  101,
                  114,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  104,
                  111,
                  108,
                  100,
                  101,
                  114,
                ];
              },
              {
                kind: 'account';
                path: 'recipient';
              },
              {
                kind: 'account';
                path: 'assetId';
              },
            ];
          };
        },
        {
          name: 'auction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 99, 116, 105, 111, 110];
              },
              {
                kind: 'account';
                path: 'recipient';
              },
              {
                kind: 'account';
                path: 'merkleTree';
              },
              {
                kind: 'arg';
                path: 'args.nonce';
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'metadataArgs';
          type: {
            defined: {
              name: 'anchorUpdateMetadataInstructionArgs';
            };
          };
        },
      ];
    },
    {
      name: 'cancelAuction';
      discriminator: [156, 43, 197, 110, 218, 105, 143, 182];
      accounts: [
        {
          name: 'seller';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'rentPayer';
          docs: [
            'Account originally set in [`Auction`] at its creation to receive the rent back',
          ];
          writable: true;
          signer: true;
          relations: ['auction'];
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'logWrapper';
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'priceDestination';
          docs: [
            'Account in which the buyer gets the price plus `penalty_fee` back',
          ];
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'bidder';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'paymentCurrency';
          docs: [
            'This account is used to be able to init `auction_ata` on-chain',
          ];
        },
        {
          name: 'bidder';
          optional: true;
        },
        {
          name: 'penaltyFeeOrigin';
          docs: ['Account the seller uses to pay the `penalty_fee`'];
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'priceEscrow';
          docs: ['Account that stores the price paid by the buyer'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'cancelAuctionArgs';
            };
          };
        },
      ];
    },
    {
      name: 'cancelBid';
      discriminator: [40, 243, 190, 217, 208, 253, 86, 206];
      accounts: [
        {
          name: 'config';
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'priceEscrow';
          docs: [
            'Escrow token account in which the program is going to hold the bid price',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
        {
          name: 'bidderAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction.bidder.expect("Previous bidder not matching withdrawal authority")';
                account: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rentPayer';
          docs: [
            'Account originally set in [`Auction`] at its creation to receive the rent back',
          ];
          writable: true;
          relations: ['auction'];
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'cancelBidArgs';
            };
          };
        },
      ];
    },
    {
      name: 'cancelOffer';
      discriminator: [92, 203, 223, 40, 92, 89, 53, 119];
      accounts: [
        {
          name: 'buyer';
          writable: true;
          signer: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'rentReceiver';
          writable: true;
        },
        {
          name: 'assetId';
        },
        {
          name: 'offer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [111, 102, 102, 101, 114];
              },
              {
                kind: 'account';
                path: 'assetId';
              },
              {
                kind: 'account';
                path: 'buyer';
              },
            ];
          };
        },
        {
          name: 'paymentCurrency';
        },
        {
          name: 'buyerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'offerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'offer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
      ];
      args: [];
    },
    {
      name: 'createAuction';
      discriminator: [234, 6, 201, 246, 47, 219, 176, 107];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'seller';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'auction';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 99, 116, 105, 111, 110];
              },
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'account';
                path: 'merkleTree';
              },
              {
                kind: 'arg';
                path: 'args.transfer_instruction_args.nonce';
              },
            ];
          };
        },
        {
          name: 'paymentCurrency';
          docs: [
            'This account is used to be able to init `auction_ata` on-chain',
          ];
        },
        {
          name: 'auctionAta';
          docs: [
            'Create or assert that the ATA for auction price escrow is created',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'leafDelegate';
        },
        {
          name: 'logWrapper';
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'landPdaOwner';
          docs: [
            'Account owning the asset_id in case of an unverified LAND cnft',
          ];
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'createAuctionArgs';
            };
          };
        },
      ];
    },
    {
      name: 'createOffer';
      discriminator: [237, 233, 192, 168, 248, 7, 249, 241];
      accounts: [
        {
          name: 'buyer';
          writable: true;
          signer: true;
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'assetId';
        },
        {
          name: 'offer';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [111, 102, 102, 101, 114];
              },
              {
                kind: 'account';
                path: 'assetId';
              },
              {
                kind: 'account';
                path: 'buyer';
              },
            ];
          };
        },
        {
          name: 'buyerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'offerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'offer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'paymentCurrency';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'createOfferArgs';
            };
          };
        },
      ];
    },
    {
      name: 'executeSale';
      discriminator: [37, 74, 217, 157, 79, 49, 35, 6];
      accounts: [
        {
          name: 'config';
        },
        {
          name: 'auction';
          docs: ['Auction account, also owning the cnft'];
          writable: true;
        },
        {
          name: 'priceEscrow';
          docs: [
            'Escrow token account in which the program is going to hold the bid price',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'priceDestination';
          docs: ['Account set for the seller to receive the price paid'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'paymentCurrency';
          docs: [
            'This account is used to be able to init `auction_ata` on-chain',
          ];
        },
        {
          name: 'buyer';
          docs: ['Account in which the buyer wants to receive the cNFT token'];
          optional: true;
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
        {
          name: 'rentPayer';
          docs: [
            'Account originally set in [`Auction`] at its creation to receive the rent back',
          ];
          writable: true;
          signer: true;
          relations: ['auction'];
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'bubblegumProgram';
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'logWrapper';
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'seller';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'executeSaleArgs';
            };
          };
        },
      ];
    },
    {
      name: 'initializeConfig';
      discriminator: [208, 127, 21, 1, 194, 190, 196, 70];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          signer: true;
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
        {
          name: 'feesTreasury';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'authority';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'treasuryMint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'treasuryMint';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'initializeConfigArgs';
            };
          };
        },
      ];
    },
    {
      name: 'mintRentalToken';
      discriminator: [151, 120, 245, 217, 57, 128, 233, 152];
      accounts: [
        {
          name: 'config';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
        {
          name: 'mint';
        },
        {
          name: 'centralizedAccount';
          writable: true;
          signer: true;
        },
        {
          name: 'caller';
          writable: true;
          signer: true;
        },
        {
          name: 'callerAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'caller';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'mint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'rentEscrow';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [101, 115, 99, 114, 111, 119];
              },
              {
                kind: 'arg';
                path: 'landAssetId';
              },
              {
                kind: 'arg';
                path: 'creationTime';
              },
            ];
          };
        },
        {
          name: 'rentEscrowAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'rentEscrow';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'mint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'rentalMerkleTree';
          writable: true;
        },
        {
          name: 'treeConfig';
          writable: true;
        },
        {
          name: 'landMerkleTree';
        },
        {
          name: 'collectionMint';
        },
        {
          name: 'collectionMetadata';
          writable: true;
        },
        {
          name: 'collectionEdition';
        },
        {
          name: 'landOwner';
        },
        {
          name: 'landDelegate';
        },
        {
          name: 'bubblegumSigner';
        },
        {
          name: 'bubblegumProgram';
          address: 'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY';
        },
        {
          name: 'logWrapper';
          address: 'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV';
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'tokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        },
      ];
      args: [
        {
          name: 'landAssetId';
          type: 'pubkey';
        },
        {
          name: 'creationTime';
          type: 'string';
        },
        {
          name: 'mintMetadataArgs';
          type: 'bytes';
        },
        {
          name: 'landAssetIdLeafData';
          type: {
            defined: {
              name: 'leafData';
            };
          };
        },
      ];
    },
    {
      name: 'mintToken';
      docs: [
        'Mints a new LAND cnft to our central account, without the verification creator signature',
      ];
      discriminator: [172, 137, 183, 14, 207, 110, 234, 56];
      accounts: [
        {
          name: 'dataAccountAuthority';
          writable: true;
          signer: true;
        },
        {
          name: 'collectionAuthority';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'recipient';
        },
        {
          name: 'treeConfig';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
        },
        {
          name: 'logWrapper';
        },
        {
          name: 'compressionProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'collectionMint';
        },
        {
          name: 'collectionMetadata';
          writable: true;
        },
        {
          name: 'collectionEdition';
        },
        {
          name: 'bubblegumSigner';
        },
        {
          name: 'tokenMetadataProgram';
        },
        {
          name: 'mintCreator';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  101,
                  97,
                  116,
                  111,
                  114,
                ];
              },
            ];
          };
        },
        {
          name: 'verificationCreator';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  118,
                  101,
                  114,
                  105,
                  102,
                  105,
                  99,
                  97,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  114,
                  101,
                  97,
                  116,
                  111,
                  114,
                ];
              },
            ];
          };
        },
        {
          name: 'treeCreator';
        },
      ];
      args: [
        {
          name: 'metadataArgs';
          type: 'bytes';
        },
      ];
    },
    {
      name: 'mintTokenUnverified';
      docs: [
        'Mints a new LAND cnft to our central account, without the verification creator signature',
      ];
      discriminator: [172, 98, 255, 155, 160, 195, 196, 5];
      accounts: [
        {
          name: 'dataAccountAuthority';
          writable: true;
          signer: true;
        },
        {
          name: 'collectionAuthority';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'treeConfig';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
        },
        {
          name: 'logWrapper';
        },
        {
          name: 'compressionProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'collectionMint';
        },
        {
          name: 'collectionMetadata';
          writable: true;
        },
        {
          name: 'collectionEdition';
        },
        {
          name: 'bubblegumSigner';
        },
        {
          name: 'tokenMetadataProgram';
        },
        {
          name: 'mintCreator';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  109,
                  105,
                  110,
                  116,
                  95,
                  99,
                  114,
                  101,
                  97,
                  116,
                  111,
                  114,
                ];
              },
            ];
          };
        },
        {
          name: 'propertyOwnerUserWallet';
        },
        {
          name: 'assetId';
        },
        {
          name: 'unverifiedTokenHolder';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  117,
                  110,
                  118,
                  101,
                  114,
                  105,
                  102,
                  105,
                  101,
                  100,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110,
                  95,
                  104,
                  111,
                  108,
                  100,
                  101,
                  114,
                ];
              },
              {
                kind: 'account';
                path: 'propertyOwnerUserWallet';
              },
              {
                kind: 'account';
                path: 'assetId';
              },
            ];
          };
        },
        {
          name: 'treeCreator';
        },
      ];
      args: [
        {
          name: 'metadataArgs';
          type: 'bytes';
        },
      ];
    },
    {
      name: 'placeBid';
      discriminator: [238, 77, 148, 91, 200, 151, 92, 146];
      accounts: [
        {
          name: 'buyer';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'priceOrigin';
          docs: ['Account that holds the price to be paid'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'priceEscrow';
          docs: [
            'Escrow token account in which the program is going to hold the bid price',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
        {
          name: 'previousBidderPriceWithdrawal';
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction.bidder.expect("Previous bidder not matching withdrawal authority")';
                account: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'placeBidArgs';
            };
          };
        },
      ];
    },
    {
      name: 'topUpBid';
      discriminator: [166, 77, 80, 87, 98, 175, 133, 62];
      accounts: [
        {
          name: 'buyer';
          signer: true;
        },
        {
          name: 'config';
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'priceOrigin';
          docs: ['Account that holds the price to be paid'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'buyer';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'priceEscrow';
          docs: [
            'Escrow token account in which the program is going to hold the bid price',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'topUpBidArgs';
            };
          };
        },
      ];
    },
    {
      name: 'transferOnExpiry';
      discriminator: [0, 233, 194, 15, 51, 107, 73, 166];
      accounts: [
        {
          name: 'mint';
          writable: true;
        },
        {
          name: 'config';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
        {
          name: 'feeAccount';
          writable: true;
        },
        {
          name: 'feeAccountAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'feeAccount';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'mint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'landOwner';
        },
        {
          name: 'landDelegate';
        },
        {
          name: 'paymentReceiver';
        },
        {
          name: 'paymentReceiverAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'paymentReceiver';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'mint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'rentEscrow';
          writable: true;
        },
        {
          name: 'rentEscrowAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'rentEscrow';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'mint';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'merkleTree';
        },
        {
          name: 'compressionProgram';
          address: 'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
      ];
      args: [
        {
          name: 'leaf';
          type: {
            defined: {
              name: 'leafData';
            };
          };
        },
      ];
    },
    {
      name: 'updateAuctionDeadlines';
      discriminator: [185, 54, 183, 20, 43, 169, 189, 52];
      accounts: [
        {
          name: 'authority';
          signer: true;
          relations: ['config'];
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'updateAuctionDeadlinesArgs';
            };
          };
        },
      ];
    },
    {
      name: 'updateConfig';
      discriminator: [29, 158, 252, 191, 10, 83, 219, 99];
      accounts: [
        {
          name: 'authority';
          signer: true;
          relations: ['config'];
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'updateConfigArgs';
            };
          };
        },
      ];
    },
    {
      name: 'updateConfigAuthFee';
      discriminator: [135, 172, 16, 42, 178, 129, 194, 14];
      accounts: [
        {
          name: 'authority';
          signer: true;
          relations: ['config'];
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
            ];
          };
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'updateConfigAuthFeeArgs';
            };
          };
        },
      ];
    },
    {
      name: 'withdrawDeposit';
      discriminator: [197, 59, 182, 208, 73, 187, 119, 25];
      accounts: [
        {
          name: 'seller';
        },
        {
          name: 'config';
          writable: true;
        },
        {
          name: 'auction';
          writable: true;
        },
        {
          name: 'sellerAta';
          docs: ['Account that holds the price to be paid'];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'seller';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'paymentCurrency';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'priceEscrow';
          docs: [
            'Escrow token account in which the program is going to hold the bid price',
          ];
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'auction';
              },
              {
                kind: 'const';
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: 'account';
                path: 'auction.payment_currency';
                account: 'auction';
              },
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: 'paymentCurrency';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rentPayer';
          docs: [
            'Account originally set in [`Auction`] at its creation to receive the rent back',
          ];
          writable: true;
          signer: true;
          relations: ['auction'];
        },
        {
          name: 'feesTreasury';
          writable: true;
        },
        {
          name: 'merkleTree';
          writable: true;
        },
        {
          name: 'bubblegumProgram';
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'logWrapper';
        },
        {
          name: 'compressionProgram';
        },
      ];
      args: [
        {
          name: 'args';
          type: {
            defined: {
              name: 'withdrawDepositArgs';
            };
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'auction';
      discriminator: [218, 94, 247, 242, 126, 233, 131, 81];
    },
    {
      name: 'config';
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
    },
    {
      name: 'offer';
      discriminator: [215, 88, 60, 71, 170, 162, 73, 229];
    },
    {
      name: 'rentEscrow';
      discriminator: [111, 62, 46, 78, 190, 210, 170, 252];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidRentReceiver';
      msg: 'Invalid Rent Receiver account';
    },
    {
      code: 6001;
      name: 'invalidAsset';
      msg: 'Invalid asset id';
    },
    {
      code: 6002;
      name: 'unverifiedAsset';
      msg: 'The Asset Collection is unverified';
    },
    {
      code: 6003;
      name: 'noCollection';
      msg: 'The Asset does not belong to a collection';
    },
    {
      code: 6004;
      name: 'creatorNotFound';
      msg: 'The Creator of the Asset cannot be found';
    },
    {
      code: 6005;
      name: 'creatorUnverified';
      msg: 'Asset is not verified';
    },
    {
      code: 6006;
      name: 'assetAlreadyVerified';
      msg: 'Asset was already verified. Bid has to be topped up';
    },
    {
      code: 6007;
      name: 'auctionNotVerified';
      msg: 'Auction asset was not verified by the auction creator';
    },
    {
      code: 6008;
      name: 'unverifiedAuctionInThreshold';
      msg: 'Auction is still in threshold for the winner to top up their bid deposit';
    },
    {
      code: 6009;
      name: 'alreadyToppedUp';
      msg: 'Winner bid was topped up. Auction sale has to be executed';
    },
    {
      code: 6010;
      name: 'bidNotToppedUp';
      msg: 'Winner bid was not topped up by the auction winner';
    },
    {
      code: 6011;
      name: 'accountInfoNotFound';
      msg: 'Expected optional account not received';
    },
    {
      code: 6012;
      name: 'bidderUnavailable';
      msg: 'No previous bidder found';
    },
    {
      code: 6013;
      name: 'invalidBuyer';
      msg: 'Invalid buyer account';
    },
    {
      code: 6014;
      name: 'invalidCnft';
      msg: 'Only Verified CNFTs are eligible for auctions and offers!';
    },
    {
      code: 6015;
      name: 'assetDoesNotMatch';
      msg: 'Metadata of asset does not match the data hash';
    },
    {
      code: 6016;
      name: 'invalidOwner';
      msg: 'The owner provided is not the correct owner of the nft';
    },
    {
      code: 6017;
      name: 'auctionExpired';
      msg: 'The auction has ended';
    },
    {
      code: 6018;
      name: 'auctionInProgress';
      msg: 'The auction is in progress';
    },
    {
      code: 6019;
      name: 'invalidEndTime';
      msg: 'Invalid end_time for the auction';
    },
    {
      code: 6020;
      name: 'invalidBidAmount';
      msg: 'The bid is less than the minimum required';
    },
    {
      code: 6021;
      name: 'alreadyInitialized';
      msg: 'Program already initialized!';
    },
    {
      code: 6022;
      name: 'invalidAuthority';
      msg: 'Invalid authority provided!';
    },
    {
      code: 6023;
      name: 'invalidReceiver';
      msg: 'Payment receiver is not the actual owner';
    },
    {
      code: 6024;
      name: 'insuffientFunds';
      msg: "Caller doesn't have enough funds to complete this call";
    },
    {
      code: 6025;
      name: 'invalidLandNftData';
      msg: 'Provided Land NFT data is invalid';
    },
    {
      code: 6026;
      name: 'invalidRentalAddressPassed';
      msg: 'Provided Rental Address is invalid';
    },
    {
      code: 6027;
      name: 'invalidRemainingAccountsPassed';
      msg: 'Provided Accounts should be a multiple of 2';
    },
    {
      code: 6028;
      name: 'invalidTime';
      msg: 'Provided minutes in the time should be 00 or 30';
    },
    {
      code: 6029;
      name: 'invalidTimeString';
      msg: 'the iso time string is invalid';
    },
    {
      code: 6030;
      name: 'timeToFarInFuture';
      msg: 'Provided time shouldnt be more than 3 month in future';
    },
    {
      code: 6031;
      name: 'invalidMint';
      msg: 'this token mint is not supoorted';
    },
    {
      code: 6032;
      name: 'invalidTransferTime';
      msg: 'Rental token has not expired yet';
    },
    {
      code: 6033;
      name: 'invalidReceivedCreatorHash';
      msg: 'Invalid Received Creators Hash';
    },
    {
      code: 6034;
      name: 'invalidReceivedCreator';
      msg: 'Invalid Received Creator';
    },
    {
      code: 6035;
      name: 'invalidCreatorsAmount';
      msg: 'Invalid number of creators!';
    },
    {
      code: 6036;
      name: 'invalidCreator';
      msg: 'Invalid creator!';
    },
    {
      code: 6037;
      name: 'invalidAssetId';
      msg: 'InvalidAssetId!';
    },
    {
      code: 6038;
      name: 'invalidAuction';
      msg: 'InvalidAuction!';
    },
    {
      code: 6039;
      name: 'auctionInvalidToVerify';
      msg: 'The auction is not valid to be verified';
    },
    {
      code: 6040;
      name: 'genericError';
      msg: 'GenericError!';
    },
  ];
  types: [
    {
      name: 'acceptOfferArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'transferCnftArgs';
            type: {
              defined: {
                name: 'anchorTransferInstructionArgs';
              };
            };
          },
        ];
      };
    },
    {
      name: 'anchorCollection';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'verified';
            type: 'bool';
          },
          {
            name: 'key';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'anchorCreator';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'address';
            type: 'pubkey';
          },
          {
            name: 'verified';
            type: 'bool';
          },
          {
            name: 'share';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'anchorMetadataArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            docs: ['The name of the asset'];
            type: 'string';
          },
          {
            name: 'symbol';
            docs: ['The symbol for the asset'];
            type: 'string';
          },
          {
            name: 'uri';
            docs: ['URI pointing to JSON representing the asset'];
            type: 'string';
          },
          {
            name: 'sellerFeeBasisPoints';
            docs: [
              'Royalty basis points that goes to creators in secondary sales (0-10000)',
            ];
            type: 'u16';
          },
          {
            name: 'primarySaleHappened';
            type: 'bool';
          },
          {
            name: 'isMutable';
            type: 'bool';
          },
          {
            name: 'collection';
            docs: ['Collection'];
            type: {
              option: {
                defined: {
                  name: 'anchorCollection';
                };
              };
            };
          },
          {
            name: 'creators';
            type: {
              vec: {
                defined: {
                  name: 'creator';
                };
              };
            };
          },
        ];
      };
    },
    {
      name: 'anchorTransferInstructionArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'dataHash';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'creatorHash';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'index';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'anchorUpdateArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: {
              option: 'string';
            };
          },
          {
            name: 'symbol';
            type: {
              option: 'string';
            };
          },
          {
            name: 'uri';
            type: {
              option: 'string';
            };
          },
          {
            name: 'creators';
            type: {
              option: {
                vec: {
                  defined: {
                    name: 'anchorCreator';
                  };
                };
              };
            };
          },
          {
            name: 'sellerFeeBasisPoints';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'primarySaleHappened';
            type: {
              option: 'bool';
            };
          },
          {
            name: 'isMutable';
            type: {
              option: 'bool';
            };
          },
        ];
      };
    },
    {
      name: 'anchorUpdateMetadataInstructionArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'index';
            type: 'u32';
          },
          {
            name: 'currentMetadata';
            type: {
              defined: {
                name: 'anchorMetadataArgs';
              };
            };
          },
          {
            name: 'updateArgs';
            type: {
              defined: {
                name: 'anchorUpdateArgs';
              };
            };
          },
        ];
      };
    },
    {
      name: 'auction';
      docs: [
        'Created by the Token owner, holds the most updated data of the Auction',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'nonceBytes';
            type: {
              array: ['u8', 8];
            };
          },
          {
            name: 'assetId';
            type: 'pubkey';
          },
          {
            name: 'merkleTree';
            type: 'pubkey';
          },
          {
            name: 'initialPrice';
            type: 'u64';
          },
          {
            name: 'endTime';
            docs: ['Timestamp until which the `Auction` accepts bids'];
            type: 'i64';
          },
          {
            name: 'seller';
            docs: ['Owner of the cNFT and creator of the `Auction`'];
            type: 'pubkey';
          },
          {
            name: 'rentPayer';
            docs: [
              'The signing account that originally paid rent for the Auction and ATAs creation.',
              'And to which the rent is returned upon Auction finalization',
            ];
            type: 'pubkey';
          },
          {
            name: 'paymentCurrency';
            docs: ['The mint in which this individual `Auction` is based'];
            type: 'pubkey';
          },
          {
            name: 'bidder';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'currentPrice';
            type: 'u64';
          },
          {
            name: 'filledAmount';
            type: 'u64';
          },
          {
            name: 'topUpBidDeadline';
            type: 'i64';
          },
          {
            name: 'assetVerificationDeadline';
            type: 'i64';
          },
          {
            name: 'isVerified';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'auctionTimeExtension';
      docs: [
        'Data related to how the Auctions should be extended if they receive a bid',
        'when they are about to close',
      ];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'timeThreshold';
            docs: [
              'Minimum amount of seconds remaining in auction to extend its duration',
            ];
            type: 'i64';
          },
          {
            name: 'additionalSecs';
            docs: [
              'Seconds added to previous finalization if auction is under [`time_threshold`]',
            ];
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'cancelAuctionArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'transferInstructionArgs';
            type: {
              defined: {
                name: 'anchorTransferInstructionArgs';
              };
            };
          },
        ];
      };
    },
    {
      name: 'cancelBidArgs';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'config';
      docs: ['Holds all the general configuration for the program'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'feesTreasury';
            type: 'pubkey';
          },
          {
            name: 'treasuryMint';
            docs: ['Mint for the [`fees_treasury`]'];
            type: 'pubkey';
          },
          {
            name: 'collection';
            type: 'pubkey';
          },
          {
            name: 'authority';
            type: 'pubkey';
          },
          {
            name: 'sellerFeeBasisPoints';
            type: 'u16';
          },
          {
            name: 'cancellingAuctionBasisPoints';
            type: 'u16';
          },
          {
            name: 'buyerFeeBasisPoints';
            type: 'u16';
          },
          {
            name: 'bidMinGapBasisPoints';
            type: 'u16';
          },
          {
            name: 'auctionTimeExtension';
            type: {
              defined: {
                name: 'auctionTimeExtension';
              };
            };
          },
          {
            name: 'creators';
            type: {
              defined: {
                name: 'creators';
              };
            };
          },
          {
            name: 'unverifiedAuctions';
            type: {
              defined: {
                name: 'unverifiedAuctions';
              };
            };
          },
          {
            name: 'rentConfig';
            type: {
              defined: {
                name: 'rentConfig';
              };
            };
          },
        ];
      };
    },
    {
      name: 'createAuctionArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'initialPrice';
            type: 'u64';
          },
          {
            name: 'endTime';
            type: 'i64';
          },
          {
            name: 'transferInstructionArgs';
            type: {
              defined: {
                name: 'anchorTransferInstructionArgs';
              };
            };
          },
          {
            name: 'isVerified';
            type: 'bool';
          },
          {
            name: 'landPdaOwnerBump';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'createOfferArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'priceAmount';
            type: 'u64';
          },
          {
            name: 'bumpAuth';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'creator';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'address';
            type: 'pubkey';
          },
          {
            name: 'verified';
            type: 'bool';
          },
          {
            name: 'share';
            docs: [
              'The percentage share.',
              '',
              'The value is a percentage, not basis points.',
            ];
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'creators';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'skytradeCreator';
            type: 'pubkey';
          },
          {
            name: 'verifiedLandCreator';
            type: 'pubkey';
          },
          {
            name: 'royaltiesCreator';
            type: 'pubkey';
          },
        ];
      };
    },
    {
      name: 'executeSaleArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'transferInstructionArgs';
            type: {
              defined: {
                name: 'anchorTransferInstructionArgs';
              };
            };
          },
        ];
      };
    },
    {
      name: 'initializeConfigArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collection';
            type: 'pubkey';
          },
          {
            name: 'sellerFeeBasisPoints';
            type: 'u16';
          },
          {
            name: 'cancellingAuctionBasisPoints';
            type: 'u16';
          },
          {
            name: 'buyerFeeBasisPoints';
            type: 'u16';
          },
          {
            name: 'bidMinGapBasisPoints';
            type: 'u16';
          },
          {
            name: 'auctionTimeExtension';
            type: {
              defined: {
                name: 'auctionTimeExtension';
              };
            };
          },
          {
            name: 'creators';
            type: {
              defined: {
                name: 'creators';
              };
            };
          },
          {
            name: 'unverifiedAuctions';
            type: {
              defined: {
                name: 'unverifiedAuctions';
              };
            };
          },
          {
            name: 'baseCost';
            type: 'u64';
          },
          {
            name: 'adminQuota';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'leafData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'index';
            type: 'u32';
          },
          {
            name: 'nonce';
            type: 'u64';
          },
          {
            name: 'root';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'hash';
            type: {
              array: ['u8', 32];
            };
          },
          {
            name: 'creatorHash';
            type: {
              array: ['u8', 32];
            };
          },
        ];
      };
    },
    {
      name: 'offer';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'assetId';
            type: 'pubkey';
          },
          {
            name: 'buyer';
            type: 'pubkey';
          },
          {
            name: 'priceAmount';
            type: 'u64';
          },
          {
            name: 'priceSplAddress';
            type: 'pubkey';
          },
          {
            name: 'rentPayer';
            type: 'pubkey';
          },
          {
            name: 'offerAuthorityBumpSeed';
            type: {
              array: ['u8', 1];
            };
          },
        ];
      };
    },
    {
      name: 'placeBidArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bidPrice';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'rentConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'baseCost';
            type: 'u64';
          },
          {
            name: 'adminQuota';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'rentEscrow';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'landAssetId';
            type: 'pubkey';
          },
          {
            name: 'creationTime';
            type: 'string';
          },
          {
            name: 'endTime';
            type: 'string';
          },
          {
            name: 'expectedCost';
            type: 'u64';
          },
          {
            name: 'feeQuota';
            type: 'u64';
          },
          {
            name: 'escrowBump';
            type: {
              array: ['u8', 1];
            };
          },
        ];
      };
    },
    {
      name: 'topUpBidArgs';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'unverifiedAuctions';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'topUpBidDefaultSeconds';
            type: 'i64';
          },
          {
            name: 'assetVerificationDefaultSeconds';
            type: 'i64';
          },
          {
            name: 'initialDepositForBidBasisPoints';
            type: 'u16';
          },
          {
            name: 'cancellingPartialBidBasisPoints';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'updateAuctionDeadlinesArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'topUpBidDeadline';
            type: {
              option: 'i64';
            };
          },
          {
            name: 'assetVerificationDeadline';
            type: {
              option: 'i64';
            };
          },
        ];
      };
    },
    {
      name: 'updateConfigArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collection';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'sellerFeeBasisPoints';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'cancellingAuctionBasisPoints';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'buyerFeeBasisPoints';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'bidMinGapBasisPoints';
            type: {
              option: 'u16';
            };
          },
          {
            name: 'auctionTimeExtension';
            type: {
              option: {
                defined: {
                  name: 'auctionTimeExtension';
                };
              };
            };
          },
          {
            name: 'treasuryMint';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'feesTreasury';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'creators';
            type: {
              option: {
                defined: {
                  name: 'creators';
                };
              };
            };
          },
          {
            name: 'unverifiedAuctions';
            type: {
              option: {
                defined: {
                  name: 'unverifiedAuctions';
                };
              };
            };
          },
          {
            name: 'baseCost';
            type: {
              option: 'u64';
            };
          },
          {
            name: 'adminQuota';
            type: {
              option: 'u16';
            };
          },
        ];
      };
    },
    {
      name: 'updateConfigAuthFeeArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'authority';
            type: {
              option: 'pubkey';
            };
          },
          {
            name: 'feeTreasury';
            type: {
              option: 'pubkey';
            };
          },
        ];
      };
    },
    {
      name: 'withdrawDepositArgs';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'transferInstructionArgs';
            type: {
              defined: {
                name: 'anchorTransferInstructionArgs';
              };
            };
          },
        ];
      };
    },
  ];
};
