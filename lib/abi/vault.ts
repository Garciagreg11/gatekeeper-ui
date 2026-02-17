export const VAULT_ABI = [
  {
    "type": "function",
    "name": "balance",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "uint256" }
    ]
  },
  {
    "type": "function",
    "name": "asset",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "address" }
    ]
  },
  {
    "type": "function",
    "name": "deposit",
    "stateMutability": "nonpayable",
    "inputs": [
      { "name": "amount", "type": "uint256" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "withdraw",
    "stateMutability": "nonpayable",
    "inputs": [
      { "name": "amount", "type": "uint256" }
    ],
    "outputs": []
  }
] as const;

