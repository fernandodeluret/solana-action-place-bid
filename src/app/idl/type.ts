/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/auction_house.json`.
 */
export type AuctionHouse = {
  address: 'ahpDxBMbyGLzDXAT7zLDyDBhvhXHAQyAAQFZerA4phL';
  metadata: {
    name: 'auctionHouse';
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
          relations: ['auction'];
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
                path: 'auction.bidder';
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
                path: 'payer';
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
        },
        {
          name: 'treeConfig';
        },
        {
          name: 'leafDelegate';
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
                path: 'auction.seller';
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
          name: 'buyer';
          docs: ['Account in which the buyer wants to receive the cNFT token'];
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
        },
        {
          name: 'logWrapper';
        },
        {
          name: 'compressionProgram';
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
          name: 'paymentCurrency';
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
          name: 'previousBidderId';
          optional: true;
        },
        {
          name: 'previousBidderPriceWithdrawal';
          writable: true;
          optional: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'previousBidderId';
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
      name: 'updateConfig';
      discriminator: [29, 158, 252, 191, 10, 83, 219, 99];
      accounts: [
        {
          name: 'payer';
          writable: true;
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
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
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
          name: 'payer';
          writable: true;
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
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
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
  ];
  errors: [
    {
      code: 6000;
      name: 'invalidAuthority';
      msg: 'invalidAuthority';
    },
    {
      code: 6001;
      name: 'invalidRentReceiver';
      msg: "The account provided can't receiver rent when the  offer or auction is completed";
    },
    {
      code: 6002;
      name: 'invalidAsset';
      msg: 'The asset provided does not match the id in the offer or auction';
    },
    {
      code: 6003;
      name: 'unverifiedAsset';
      msg: 'The Asset Collection is unverified';
    },
    {
      code: 6004;
      name: 'noCollection';
      msg: 'The Asset does not belong to a collection';
    },
    {
      code: 6005;
      name: 'creatorNotFound';
      msg: 'The Creator of the Asset cannot be found';
    },
    {
      code: 6006;
      name: 'creatorUnverified';
      msg: 'This Creator is unverified';
    },
    {
      code: 6007;
      name: 'accountInfoNotFound';
      msg: 'Information on this account cannot be found';
    },
    {
      code: 6008;
      name: 'bidderUnavailable';
      msg: 'Bidder not available in the auction, a bidder needs to be set in the auction';
    },
    {
      code: 6009;
      name: 'invalidBuyer';
      msg: 'The buyer account provided is not the buyer in the  auction or offer';
    },
    {
      code: 6010;
      name: 'invalidCnft';
      msg: 'Only Verified CNFTs are eligible for auctions and offers!';
    },
    {
      code: 6011;
      name: 'assetDoesNotMatch';
      msg: 'Metadata of asset does not match the data hash';
    },
    {
      code: 6012;
      name: 'invalidOwner';
      msg: 'The owner provided is not the correct owner of the nft';
    },
    {
      code: 6013;
      name: 'auctionExpired';
      msg: 'The auction has ended';
    },
    {
      code: 6014;
      name: 'auctionInProgress';
      msg: 'The auction is in progress';
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
          {
            name: 'metadata';
            type: {
              defined: {
                name: 'anchorMetadataArgs';
              };
            };
          },
        ];
      };
    },
    {
      name: 'anchorMetadataArgs';
      docs: ['Wrapper for MPL MetadataArgs to implement Anchor serialization'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'symbol';
            type: 'string';
          },
          {
            name: 'uri';
            type: 'string';
          },
          {
            name: 'sellerFeeBasisPoints';
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
            name: 'saleType';
            type: 'u8';
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
            name: 'creator';
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
            name: 'royaltiesBasisPoints';
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
                name: 'partialAnchorTransferInstructionArgs';
              };
            };
          },
          {
            name: 'metadata';
            type: {
              defined: {
                name: 'anchorMetadataArgs';
              };
            };
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
            name: 'creator';
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
            name: 'royaltiesBasisPoints';
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
      name: 'partialAnchorTransferInstructionArgs';
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
            name: 'creator';
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
            name: 'royaltiesBasisPoints';
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
  ];
};
