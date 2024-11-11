export const collection = {
	abi: [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_uri",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_contractURI",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "balance",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "needed",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ERC1155InsufficientBalance",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "approver",
					"type": "address"
				}
			],
			"name": "ERC1155InvalidApprover",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "idsLength",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "valuesLength",
					"type": "uint256"
				}
			],
			"name": "ERC1155InvalidArrayLength",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "ERC1155InvalidOperator",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				}
			],
			"name": "ERC1155InvalidReceiver",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}
			],
			"name": "ERC1155InvalidSender",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "ERC1155MissingApprovalForAll",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "OwnableInvalidOwner",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "OwnableUnauthorizedAccount",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "OfferAccepted",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				}
			],
			"name": "OfferCancelled",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "OfferMade",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "TokenListed",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "TokenPurchased",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				}
			],
			"name": "TokenUnlisted",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256[]",
					"name": "ids",
					"type": "uint256[]"
				},
				{
					"indexed": false,
					"internalType": "uint256[]",
					"name": "values",
					"type": "uint256[]"
				}
			],
			"name": "TransferBatch",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "TransferSingle",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "string",
					"name": "value",
					"type": "string"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "URI",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "offerIndex",
					"type": "uint256"
				}
			],
			"name": "acceptOffer",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "accounts",
					"type": "address[]"
				},
				{
					"internalType": "uint256[]",
					"name": "ids",
					"type": "uint256[]"
				}
			],
			"name": "balanceOfBatch",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "buyToken",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "offerIndex",
					"type": "uint256"
				}
			],
			"name": "cancelOffer",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_royaltyPercentage",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "createToken",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "creators",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getContractURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "listToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "listings",
			"outputs": [
				{
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "makeOffer",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "offers",
			"outputs": [
				{
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "royaltyPercentage",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256[]",
					"name": "ids",
					"type": "uint256[]"
				},
				{
					"internalType": "uint256[]",
					"name": "values",
					"type": "uint256[]"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "safeBatchTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_contractURI",
					"type": "string"
				}
			],
			"name": "setContractURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "newuri",
					"type": "string"
				}
			],
			"name": "setURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "tokenSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "unlistToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_id",
					"type": "uint256"
				}
			],
			"name": "uri",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	],
	bytecode: "608060405234801561000f575f80fd5b50604051614dab380380614dab83398181016040528101906100319190610327565b33826100428161010460201b60201c565b505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100b3575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100aa919061043a565b60405180910390fd5b6100c28161011760201b60201c565b50600160048190555083600590816100da9190610660565b5082600690816100ea9190610660565b5080600790816100fa9190610660565b505050505061072f565b80600290816101139190610660565b5050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610239826101f3565b810181811067ffffffffffffffff8211171561025857610257610203565b5b80604052505050565b5f61026a6101da565b90506102768282610230565b919050565b5f67ffffffffffffffff82111561029557610294610203565b5b61029e826101f3565b9050602081019050919050565b8281835e5f83830152505050565b5f6102cb6102c68461027b565b610261565b9050828152602081018484840111156102e7576102e66101ef565b5b6102f28482856102ab565b509392505050565b5f82601f83011261030e5761030d6101eb565b5b815161031e8482602086016102b9565b91505092915050565b5f805f806080858703121561033f5761033e6101e3565b5b5f85015167ffffffffffffffff81111561035c5761035b6101e7565b5b610368878288016102fa565b945050602085015167ffffffffffffffff811115610389576103886101e7565b5b610395878288016102fa565b935050604085015167ffffffffffffffff8111156103b6576103b56101e7565b5b6103c2878288016102fa565b925050606085015167ffffffffffffffff8111156103e3576103e26101e7565b5b6103ef878288016102fa565b91505092959194509250565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610424826103fb565b9050919050565b6104348161041a565b82525050565b5f60208201905061044d5f83018461042b565b92915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806104a157607f821691505b6020821081036104b4576104b361045d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104db565b61052086836104db565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61056461055f61055a84610538565b610541565b610538565b9050919050565b5f819050919050565b61057d8361054a565b6105916105898261056b565b8484546104e7565b825550505050565b5f90565b6105a5610599565b6105b0818484610574565b505050565b5b818110156105d3576105c85f8261059d565b6001810190506105b6565b5050565b601f821115610618576105e9816104ba565b6105f2846104cc565b81016020851015610601578190505b61061561060d856104cc565b8301826105b5565b50505b505050565b5f82821c905092915050565b5f6106385f198460080261061d565b1980831691505092915050565b5f6106508383610629565b9150826002028217905092915050565b61066982610453565b67ffffffffffffffff81111561068257610681610203565b5b61068c825461048a565b6106978282856105d7565b5f60209050601f8311600181146106c8575f84156106b6578287015190505b6106c08582610645565b865550610727565b601f1984166106d6866104ba565b5f5b828110156106fd578489015182556001820191506020850194506020810190506106d8565b8683101561071a5784890151610716601f891682610629565b8355505b6001600288020188555050505b505050505050565b61466f8061073c5f395ff3fe6080604052600436106101c0575f3560e01c806381257bd5116100f6578063bd85b03911610094578063e210a72d11610063578063e210a72d14610676578063e985e9c514610692578063f242432a146106ce578063f2fde38b146106f6576101c0565b8063bd85b03914610598578063cd53d08e146105d4578063d45557cc14610610578063de74e57b14610638576101c0565b806395d89b41116100d057806395d89b41146104f6578063a22cb46514610520578063ad3a358c14610548578063bce64a7d14610570576101c0565b806381257bd51461047c5780638da5cb5b146104a4578063938e3d7b146104ce576101c0565b80632693ebf2116101635780634d03a9a51161013d5780634d03a9a5146103b05780634e1273f4146103ee5780635e05b02f1461042a578063715018a614610466576101c0565b80632693ebf2146103225780632eb2c2d61461035e57806337929eb414610386576101c0565b8063057466ea1161019f578063057466ea1461026457806306fdde03146102805780630e89341c146102aa57806312926030146102e6576101c0565b8062fdd58e146101c457806301ffc9a71461020057806302fe53051461023c575b5f80fd5b3480156101cf575f80fd5b506101ea60048036038101906101e5919061301e565b61071e565b6040516101f7919061306b565b60405180910390f35b34801561020b575f80fd5b50610226600480360381019061022191906130d9565b610773565b604051610233919061311e565b60405180910390f35b348015610247575f80fd5b50610262600480360381019061025d9190613273565b610854565b005b61027e600480360381019061027991906132ba565b610868565b005b34801561028b575f80fd5b50610294610c37565b6040516102a19190613358565b60405180910390f35b3480156102b5575f80fd5b506102d060048036038101906102cb9190613378565b610cc3565b6040516102dd9190613358565b60405180910390f35b3480156102f1575f80fd5b5061030c60048036038101906103079190613378565b610cfe565b604051610319919061306b565b60405180910390f35b34801561032d575f80fd5b5061034860048036038101906103439190613378565b610d13565b604051610355919061306b565b60405180910390f35b348015610369575f80fd5b50610384600480360381019061037f9190613505565b610d28565b005b348015610391575f80fd5b5061039a610dcf565b6040516103a79190613358565b60405180910390f35b3480156103bb575f80fd5b506103d660048036038101906103d191906132ba565b610e5f565b6040516103e5939291906135df565b60405180910390f35b3480156103f9575f80fd5b50610414600480360381019061040f91906136d4565b610ebe565b6040516104219190613801565b60405180910390f35b348015610435575f80fd5b50610450600480360381019061044b9190613821565b610fc5565b60405161045d919061306b565b60405180910390f35b348015610471575f80fd5b5061047a6110bc565b005b348015610487575f80fd5b506104a2600480360381019061049d91906132ba565b6110cf565b005b3480156104af575f80fd5b506104b8611394565b6040516104c5919061388d565b60405180910390f35b3480156104d9575f80fd5b506104f460048036038101906104ef9190613273565b6113bc565b005b348015610501575f80fd5b5061050a6113d7565b6040516105179190613358565b60405180910390f35b34801561052b575f80fd5b50610546600480360381019061054191906138d0565b611463565b005b348015610553575f80fd5b5061056e60048036038101906105699190613378565b611479565b005b34801561057b575f80fd5b506105966004803603810190610591919061390e565b611610565b005b3480156105a3575f80fd5b506105be60048036038101906105b99190613378565b6117a1565b6040516105cb919061306b565b60405180910390f35b3480156105df575f80fd5b506105fa60048036038101906105f59190613378565b6117bb565b604051610607919061388d565b60405180910390f35b34801561061b575f80fd5b50610636600480360381019061063191906132ba565b6117eb565b005b348015610643575f80fd5b5061065e60048036038101906106599190613378565b6119be565b60405161066d939291906135df565b60405180910390f35b610690600480360381019061068b919061390e565b611a03565b005b34801561069d575f80fd5b506106b860048036038101906106b3919061395e565b611b78565b6040516106c5919061311e565b60405180910390f35b3480156106d9575f80fd5b506106f460048036038101906106ef919061399c565b611c06565b005b348015610701575f80fd5b5061071c60048036038101906107179190613a2f565b611cad565b005b5f805f8381526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f7fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061083d57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061084d575061084c82611d31565b5b9050919050565b61085c611d9a565b61086581611e21565b50565b610870611e34565b5f600a5f8481526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090505f81602001511161093d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093490613aa4565b60405180910390fd5b8060400151821115610984576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097b90613b32565b60405180910390fd5b5f8282602001516109959190613b7d565b9050803410156109da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d190613c08565b60405180910390fd5b5f612710600d5f8781526020019081526020015f2054836109fb9190613b7d565b610a059190613c53565b90505f8183610a149190613c83565b9050600c5f8781526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc8390811502906040515f60405180830381858888f19350505050158015610a89573d5f803e3d5ffd5b50835f015173ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f19350505050158015610ad0573d5f803e3d5ffd5b50610aef845f015133888860405180602001604052805f815250611e83565b84846040015103610b8d57600a5f8781526020019081526020015f205f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f90555050835f015173ffffffffffffffffffffffffffffffffffffffff16867fbe50bf6d5ebc58e29a68dddccdef1c087a9e6dd728a5c3247051d7fdad14219b60405160405180910390a3610bb8565b84600a5f8881526020019081526020015f206002015f828254610bb09190613c83565b925050819055505b835f015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16877f892605e5aa205718bf5422cbe570beb6c419fe374afe9a7f9c8fc114b99020a8876020015189604051610c1f929190613cb6565b60405180910390a450505050610c33611f89565b5050565b60058054610c4490613d0a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7090613d0a565b8015610cbb5780601f10610c9257610100808354040283529160200191610cbb565b820191905f5260205f20905b815481529060010190602001808311610c9e57829003601f168201915b505050505081565b6060610cce82611f93565b610cd783612025565b604051602001610ce8929190613dbe565b6040516020818303038152906040529050919050565b600d602052805f5260405f205f915090505481565b6009602052805f5260405f205f915090505481565b5f610d316120ef565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015610d765750610d748682611b78565b155b15610dba5780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401610db1929190613dec565b60405180910390fd5b610dc786868686866120f6565b505050505050565b606060078054610dde90613d0a565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0a90613d0a565b8015610e555780601f10610e2c57610100808354040283529160200191610e55565b820191905f5260205f20905b815481529060010190602001808311610e3857829003601f168201915b5050505050905090565b600b602052815f5260405f208181548110610e78575f80fd5b905f5260205f2090600302015f9150915050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60608151835114610f0a57815183516040517f5b059991000000000000000000000000000000000000000000000000000000008152600401610f01929190613cb6565b60405180910390fd5b5f835167ffffffffffffffff811115610f2657610f2561314f565b5b604051908082528060200260200182016040528015610f545781602001602082028036833780820191505090505b5090505f5b8451811015610fba57610f90610f7882876121ea90919063ffffffff16565b610f8b83876121fd90919063ffffffff16565b61071e565b828281518110610fa357610fa2613e13565b5b602002602001018181525050806001019050610f59565b508091505092915050565b5f610fce611d9a565b612710831115611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a90613eb0565b60405180910390fd5b61101d6008612210565b5f6110286008612224565b905061103633828786612230565b8460095f8381526020019081526020015f208190555033600c5f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600d5f8381526020019081526020015f2081905550809150509392505050565b6110c4611d9a565b6110cd5f6122c5565b565b6110d7611e34565b5f600b5f8481526020019081526020015f2082815481106110fb576110fa613e13565b5b905f5260205f2090600302016040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250509050806040015161118b338561071e565b10156111cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c390613f18565b60405180910390fd5b5f612710600d5f8681526020019081526020015f2054836040015184602001516111f69190613b7d565b6112009190613b7d565b61120a9190613c53565b90505f81836040015184602001516112229190613b7d565b61122c9190613c83565b9050600c5f8681526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc8390811502906040515f60405180830381858888f193505050501580156112a1573d5f803e3d5ffd5b503373ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f193505050501580156112e5573d5f803e3d5ffd5b5061130833845f015187866040015160405180602001604052805f815250611e83565b6113128585612388565b825f015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16867f8210e9bd2a5d8bc2c71608bf97cbb56d747cc7a054aed7897eec4b881c441c9a8660200151876040015160405161137d929190613cb6565b60405180910390a4505050611390611f89565b5050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6113c4611d9a565b80600790816113d391906140d3565b5050565b600680546113e490613d0a565b80601f016020809104026020016040519081016040528092919081815260200182805461141090613d0a565b801561145b5780601f106114325761010080835404028352916020019161145b565b820191905f5260205f20905b81548152906001019060200180831161143e57829003601f168201915b505050505081565b61147561146e6120ef565b83836124fc565b5050565b611481611e34565b5f600a5f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff1614611579576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611570906141ec565b60405180910390fd5b600a5f8381526020019081526020015f205f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550503373ffffffffffffffffffffffffffffffffffffffff16827fbe50bf6d5ebc58e29a68dddccdef1c087a9e6dd728a5c3247051d7fdad14219b60405160405180910390a35061160d611f89565b50565b611618611e34565b80611623338561071e565b1015611664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165b90614254565b60405180910390fd5b5f82116116a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169d906142bc565b60405180910390fd5b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815250600a5f8581526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff16837f2428821d20d9a8080d99a3d335d478f0546d90a0376be12c52a6d600f15586bf848460405161178c929190613cb6565b60405180910390a361179c611f89565b505050565b5f60095f8381526020019081526020015f20549050919050565b600c602052805f5260405f205f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6117f3611e34565b5f600b5f8481526020019081526020015f20828154811061181757611816613e13565b5b905f5260205f2090600302016040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff1614611909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190090614324565b60405180910390fd5b805f015173ffffffffffffffffffffffffffffffffffffffff166108fc8260400151836020015161193a9190613b7d565b90811502906040515f60405180830381858888f19350505050158015611962573d5f803e3d5ffd5b5061196d8383612388565b3373ffffffffffffffffffffffffffffffffffffffff16837f1f51377b3e685a0e2419f9bb4ba7c07ec54936353ba3d0fb3c6538dab676622260405160405180910390a3506119ba611f89565b5050565b600a602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b611a0b611e34565b8082611a179190613b7d565b3414611a58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4f9061438c565b60405180910390fd5b600b5f8481526020019081526020015f2060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815250908060018154018082558091505060019003905f5260205f2090600302015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff16837fd7df0c72641d362ea57ecc9cab99c77f936e36bb826f096258c3404196b26d6a8484604051611b63929190613cb6565b60405180910390a3611b73611f89565b505050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f611c0f6120ef565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015611c545750611c528682611b78565b155b15611c985780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401611c8f929190613dec565b60405180910390fd5b611ca58686868686611e83565b505050505050565b611cb5611d9a565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d25575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611d1c919061388d565b60405180910390fd5b611d2e816122c5565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611da26120ef565b73ffffffffffffffffffffffffffffffffffffffff16611dc0611394565b73ffffffffffffffffffffffffffffffffffffffff1614611e1f57611de36120ef565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611e16919061388d565b60405180910390fd5b565b8060029081611e3091906140d3565b5050565b600260045403611e79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e70906143f4565b60405180910390fd5b6002600481905550565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611ef3575f6040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611eea919061388d565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611f63575f6040517f01a83514000000000000000000000000000000000000000000000000000000008152600401611f5a919061388d565b60405180910390fd5b5f80611f6f8585612665565b91509150611f808787848487612695565b50505050505050565b6001600481905550565b606060028054611fa290613d0a565b80601f0160208091040260200160405190810160405280929190818152602001828054611fce90613d0a565b80156120195780601f10611ff057610100808354040283529160200191612019565b820191905f5260205f20905b815481529060010190602001808311611ffc57829003601f168201915b50505050509050919050565b60605f600161203384612741565b0190505f8167ffffffffffffffff8111156120515761205061314f565b5b6040519080825280601f01601f1916602001820160405280156120835781602001600182028036833780820191505090505b5090505f82602001820190505b6001156120e4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816120d9576120d8613c26565b5b0494505f8503612090575b819350505050919050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612166575f6040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161215d919061388d565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036121d6575f6040517f01a835140000000000000000000000000000000000000000000000000000000081526004016121cd919061388d565b60405180910390fd5b6121e38585858585612695565b5050505050565b5f60208202602084010151905092915050565b5f60208202602084010151905092915050565b6001815f015f828254019250508190555050565b5f815f01549050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036122a0575f6040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401612297919061388d565b60405180910390fd5b5f806122ac8585612665565b915091506122bd5f87848487612695565b505050505050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6001600b5f8581526020019081526020015f20805490506123aa9190613c83565b905080821461248c57600b5f8481526020019081526020015f2081815481106123d6576123d5613e13565b5b905f5260205f209060030201600b5f8581526020019081526020015f20838154811061240557612404613e13565b5b905f5260205f2090600302015f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155600282015481600201559050505b600b5f8481526020019081526020015f208054806124ad576124ac614412565b5b600190038181905f5260205f2090600302015f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550509055505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361256c575f6040517fced3e100000000000000000000000000000000000000000000000000000000008152600401612563919061388d565b60405180910390fd5b8060015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612658919061311e565b60405180910390a3505050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b6126a185858585612892565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461273a575f6126dd6120ef565b90506001845103612729575f6126fc5f866121fd90919063ffffffff16565b90505f6127125f866121fd90919063ffffffff16565b9050612722838989858589612c22565b5050612738565b612737818787878787612dd1565b5b505b5050505050565b5f805f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061279d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161279357612792613c26565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106127da576d04ee2d6d415b85acef810000000083816127d0576127cf613c26565b5b0492506020810190505b662386f26fc10000831061280957662386f26fc1000083816127ff576127fe613c26565b5b0492506010810190505b6305f5e1008310612832576305f5e100838161282857612827613c26565b5b0492506008810190505b612710831061285757612710838161284d5761284c613c26565b5b0492506004810190505b6064831061287a57606483816128705761286f613c26565b5b0492506002810190505b600a8310612889576001810190505b80915050919050565b80518251146128dc57815181516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016128d3929190613cb6565b60405180910390fd5b5f6128e56120ef565b90505f5b8351811015612ae1575f61290682866121fd90919063ffffffff16565b90505f61291c83866121fd90919063ffffffff16565b90505f73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614612a3f575f805f8481526020019081526020015f205f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156129eb57888183856040517f03dee4c50000000000000000000000000000000000000000000000000000000081526004016129e2949392919061443f565b60405180910390fd5b8181035f808581526020019081526020015f205f8b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614612ad457805f808481526020019081526020015f205f8973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254612acc9190614482565b925050819055505b50508060010190506128e9565b506001835103612b9c575f612aff5f856121fd90919063ffffffff16565b90505f612b155f856121fd90919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051612b8d929190613cb6565b60405180910390a45050612c1b565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051612c129291906144b5565b60405180910390a45b5050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b1115612dc9578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401612c8295949392919061453c565b6020604051808303815f875af1925050508015612cbd57506040513d601f19601f82011682018060405250810190612cba91906145a8565b60015b612d3e573d805f8114612ceb576040519150601f19603f3d011682016040523d82523d5f602084013e612cf0565b606091505b505f815103612d3657846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401612d2d919061388d565b60405180910390fd5b805181602001fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612dc757846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401612dbe919061388d565b60405180910390fd5b505b505050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b1115612f78578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401612e319594939291906145d3565b6020604051808303815f875af1925050508015612e6c57506040513d601f19601f82011682018060405250810190612e6991906145a8565b60015b612eed573d805f8114612e9a576040519150601f19603f3d011682016040523d82523d5f602084013e612e9f565b606091505b505f815103612ee557846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401612edc919061388d565b60405180910390fd5b805181602001fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614612f7657846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401612f6d919061388d565b60405180910390fd5b505b505050505050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612fba82612f91565b9050919050565b612fca81612fb0565b8114612fd4575f80fd5b50565b5f81359050612fe581612fc1565b92915050565b5f819050919050565b612ffd81612feb565b8114613007575f80fd5b50565b5f8135905061301881612ff4565b92915050565b5f806040838503121561303457613033612f89565b5b5f61304185828601612fd7565b92505060206130528582860161300a565b9150509250929050565b61306581612feb565b82525050565b5f60208201905061307e5f83018461305c565b92915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6130b881613084565b81146130c2575f80fd5b50565b5f813590506130d3816130af565b92915050565b5f602082840312156130ee576130ed612f89565b5b5f6130fb848285016130c5565b91505092915050565b5f8115159050919050565b61311881613104565b82525050565b5f6020820190506131315f83018461310f565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6131858261313f565b810181811067ffffffffffffffff821117156131a4576131a361314f565b5b80604052505050565b5f6131b6612f80565b90506131c2828261317c565b919050565b5f67ffffffffffffffff8211156131e1576131e061314f565b5b6131ea8261313f565b9050602081019050919050565b828183375f83830152505050565b5f613217613212846131c7565b6131ad565b9050828152602081018484840111156132335761323261313b565b5b61323e8482856131f7565b509392505050565b5f82601f83011261325a57613259613137565b5b813561326a848260208601613205565b91505092915050565b5f6020828403121561328857613287612f89565b5b5f82013567ffffffffffffffff8111156132a5576132a4612f8d565b5b6132b184828501613246565b91505092915050565b5f80604083850312156132d0576132cf612f89565b5b5f6132dd8582860161300a565b92505060206132ee8582860161300a565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f61332a826132f8565b6133348185613302565b9350613344818560208601613312565b61334d8161313f565b840191505092915050565b5f6020820190508181035f8301526133708184613320565b905092915050565b5f6020828403121561338d5761338c612f89565b5b5f61339a8482850161300a565b91505092915050565b5f67ffffffffffffffff8211156133bd576133bc61314f565b5b602082029050602081019050919050565b5f80fd5b5f6133e46133df846133a3565b6131ad565b90508083825260208201905060208402830185811115613407576134066133ce565b5b835b81811015613430578061341c888261300a565b845260208401935050602081019050613409565b5050509392505050565b5f82601f83011261344e5761344d613137565b5b813561345e8482602086016133d2565b91505092915050565b5f67ffffffffffffffff8211156134815761348061314f565b5b61348a8261313f565b9050602081019050919050565b5f6134a96134a484613467565b6131ad565b9050828152602081018484840111156134c5576134c461313b565b5b6134d08482856131f7565b509392505050565b5f82601f8301126134ec576134eb613137565b5b81356134fc848260208601613497565b91505092915050565b5f805f805f60a0868803121561351e5761351d612f89565b5b5f61352b88828901612fd7565b955050602061353c88828901612fd7565b945050604086013567ffffffffffffffff81111561355d5761355c612f8d565b5b6135698882890161343a565b935050606086013567ffffffffffffffff81111561358a57613589612f8d565b5b6135968882890161343a565b925050608086013567ffffffffffffffff8111156135b7576135b6612f8d565b5b6135c3888289016134d8565b9150509295509295909350565b6135d981612fb0565b82525050565b5f6060820190506135f25f8301866135d0565b6135ff602083018561305c565b61360c604083018461305c565b949350505050565b5f67ffffffffffffffff82111561362e5761362d61314f565b5b602082029050602081019050919050565b5f61365161364c84613614565b6131ad565b90508083825260208201905060208402830185811115613674576136736133ce565b5b835b8181101561369d57806136898882612fd7565b845260208401935050602081019050613676565b5050509392505050565b5f82601f8301126136bb576136ba613137565b5b81356136cb84826020860161363f565b91505092915050565b5f80604083850312156136ea576136e9612f89565b5b5f83013567ffffffffffffffff81111561370757613706612f8d565b5b613713858286016136a7565b925050602083013567ffffffffffffffff81111561373457613733612f8d565b5b6137408582860161343a565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61377c81612feb565b82525050565b5f61378d8383613773565b60208301905092915050565b5f602082019050919050565b5f6137af8261374a565b6137b98185613754565b93506137c483613764565b805f5b838110156137f45781516137db8882613782565b97506137e683613799565b9250506001810190506137c7565b5085935050505092915050565b5f6020820190508181035f83015261381981846137a5565b905092915050565b5f805f6060848603121561383857613837612f89565b5b5f6138458682870161300a565b93505060206138568682870161300a565b925050604084013567ffffffffffffffff81111561387757613876612f8d565b5b613883868287016134d8565b9150509250925092565b5f6020820190506138a05f8301846135d0565b92915050565b6138af81613104565b81146138b9575f80fd5b50565b5f813590506138ca816138a6565b92915050565b5f80604083850312156138e6576138e5612f89565b5b5f6138f385828601612fd7565b9250506020613904858286016138bc565b9150509250929050565b5f805f6060848603121561392557613924612f89565b5b5f6139328682870161300a565b93505060206139438682870161300a565b92505060406139548682870161300a565b9150509250925092565b5f806040838503121561397457613973612f89565b5b5f61398185828601612fd7565b925050602061399285828601612fd7565b9150509250929050565b5f805f805f60a086880312156139b5576139b4612f89565b5b5f6139c288828901612fd7565b95505060206139d388828901612fd7565b94505060406139e48882890161300a565b93505060606139f58882890161300a565b925050608086013567ffffffffffffffff811115613a1657613a15612f8d565b5b613a22888289016134d8565b9150509295509295909350565b5f60208284031215613a4457613a43612f89565b5b5f613a5184828501612fd7565b91505092915050565b7f546f6b656e206e6f74206c697374656420666f722073616c65000000000000005f82015250565b5f613a8e601983613302565b9150613a9982613a5a565b602082019050919050565b5f6020820190508181035f830152613abb81613a82565b9050919050565b7f4e6f7420656e6f75676820746f6b656e73206c697374656420666f722073616c5f8201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b5f613b1c602183613302565b9150613b2782613ac2565b604082019050919050565b5f6020820190508181035f830152613b4981613b10565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613b8782612feb565b9150613b9283612feb565b9250828202613ba081612feb565b91508282048414831517613bb757613bb6613b50565b5b5092915050565b7f496e73756666696369656e742066756e647300000000000000000000000000005f82015250565b5f613bf2601283613302565b9150613bfd82613bbe565b602082019050919050565b5f6020820190508181035f830152613c1f81613be6565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f613c5d82612feb565b9150613c6883612feb565b925082613c7857613c77613c26565b5b828204905092915050565b5f613c8d82612feb565b9150613c9883612feb565b9250828203905081811115613cb057613caf613b50565b5b92915050565b5f604082019050613cc95f83018561305c565b613cd6602083018461305c565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680613d2157607f821691505b602082108103613d3457613d33613cdd565b5b50919050565b5f81905092915050565b5f613d4e826132f8565b613d588185613d3a565b9350613d68818560208601613312565b80840191505092915050565b7f2e6a736f6e0000000000000000000000000000000000000000000000000000005f82015250565b5f613da8600583613d3a565b9150613db382613d74565b600582019050919050565b5f613dc98285613d44565b9150613dd58284613d44565b9150613de082613d9c565b91508190509392505050565b5f604082019050613dff5f8301856135d0565b613e0c60208301846135d0565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f526f79616c74792070657263656e74616765206d757374206265203c3d2031305f8201527f30303020626173697320706f696e747320283130302529000000000000000000602082015250565b5f613e9a603783613302565b9150613ea582613e40565b604082019050919050565b5f6020820190508181035f830152613ec781613e8e565b9050919050565b7f496e73756666696369656e742062616c616e636520746f2073656c6c000000005f82015250565b5f613f02601c83613302565b9150613f0d82613ece565b602082019050919050565b5f6020820190508181035f830152613f2f81613ef6565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613f927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613f57565b613f9c8683613f57565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613fd7613fd2613fcd84612feb565b613fb4565b612feb565b9050919050565b5f819050919050565b613ff083613fbd565b614004613ffc82613fde565b848454613f63565b825550505050565b5f90565b61401861400c565b614023818484613fe7565b505050565b5b818110156140465761403b5f82614010565b600181019050614029565b5050565b601f82111561408b5761405c81613f36565b61406584613f48565b81016020851015614074578190505b61408861408085613f48565b830182614028565b50505b505050565b5f82821c905092915050565b5f6140ab5f1984600802614090565b1980831691505092915050565b5f6140c3838361409c565b9150826002028217905092915050565b6140dc826132f8565b67ffffffffffffffff8111156140f5576140f461314f565b5b6140ff8254613d0a565b61410a82828561404a565b5f60209050601f83116001811461413b575f8415614129578287015190505b61413385826140b8565b86555061419a565b601f19841661414986613f36565b5f5b828110156141705784890151825560018201915060208501945060208101905061414b565b8683101561418d5784890151614189601f89168261409c565b8355505b6001600288020188555050505b505050505050565b7f4f6e6c792073656c6c65722063616e20756e6c697374000000000000000000005f82015250565b5f6141d6601683613302565b91506141e1826141a2565b602082019050919050565b5f6020820190508181035f830152614203816141ca565b9050919050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f61423e601483613302565b91506142498261420a565b602082019050919050565b5f6020820190508181035f83015261426b81614232565b9050919050565b7f5072696365206d7573742062652067726561746572207468616e207a65726f005f82015250565b5f6142a6601f83613302565b91506142b182614272565b602082019050919050565b5f6020820190508181035f8301526142d38161429a565b9050919050565b7f4f6e6c792062757965722063616e2063616e63656c206f6666657200000000005f82015250565b5f61430e601b83613302565b9150614319826142da565b602082019050919050565b5f6020820190508181035f83015261433b81614302565b9050919050565b7f496e636f7272656374207061796d656e742073656e74000000000000000000005f82015250565b5f614376601683613302565b915061438182614342565b602082019050919050565b5f6020820190508181035f8301526143a38161436a565b9050919050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f6143de601f83613302565b91506143e9826143aa565b602082019050919050565b5f6020820190508181035f83015261440b816143d2565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b5f6080820190506144525f8301876135d0565b61445f602083018661305c565b61446c604083018561305c565b614479606083018461305c565b95945050505050565b5f61448c82612feb565b915061449783612feb565b92508282019050808211156144af576144ae613b50565b5b92915050565b5f6040820190508181035f8301526144cd81856137a5565b905081810360208301526144e181846137a5565b90509392505050565b5f81519050919050565b5f82825260208201905092915050565b5f61450e826144ea565b61451881856144f4565b9350614528818560208601613312565b6145318161313f565b840191505092915050565b5f60a08201905061454f5f8301886135d0565b61455c60208301876135d0565b614569604083018661305c565b614576606083018561305c565b81810360808301526145888184614504565b90509695505050505050565b5f815190506145a2816130af565b92915050565b5f602082840312156145bd576145bc612f89565b5b5f6145ca84828501614594565b91505092915050565b5f60a0820190506145e65f8301886135d0565b6145f360208301876135d0565b818103604083015261460581866137a5565b9050818103606083015261461981856137a5565b9050818103608083015261462d8184614504565b9050969550505050505056fea2646970667358221220b2f43bd46b6f83a37c607c6fedadc7b7cd6078d8e65002635a795a83f07fce7564736f6c634300081a0033"
}