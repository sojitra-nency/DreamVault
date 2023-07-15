export const CONTRACT_ADDRESS ="0x06E7b6a2D86DdA6b9030d61dd8Fc31e553e328EA";


export const abi = [
	{
		"inputs": [],
		"name": "campaign",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amountNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numOfInvestors",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_companyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_eventName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_image",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amountNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCampaignDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "companyName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "eventName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amountNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numOfInvestors",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "invest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];