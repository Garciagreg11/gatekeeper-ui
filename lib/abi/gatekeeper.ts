export const GATEKEEPER_ADDRESS =
  "0x3F0c2937E1B4854E6Bb78AE5E7ce49AF3B42D84e";

export const GATEKEEPER_ABI = [
  {
    "type": "function",
    "name": "sponsorGas",
    "stateMutability": "payable",
    "inputs": [
      { "name": "user", "type": "address" },
      { "name": "maxAmount", "type": "uint256" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "batchSponsorGas",
    "stateMutability": "payable",
    "inputs": [
      { "name": "users", "type": "address[]" },
      { "name": "maxAmounts", "type": "uint256[]" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "remainingToday",
    "stateMutability": "view",
    "inputs": [{ "name": "user", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }]
  },
  {
    "type": "function",
    "name": "withdraw",
    "stateMutability": "nonpayable",
    "inputs": [{ "name": "amount", "type": "uint256" }],
    "outputs": []
  },
  {
    "type": "function",
    "name": "owner",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address" }]
  },
  {
    "type": "function",
    "name": "dailyLimit",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }]
  },
  {
    "type": "event",
    "name": "Sponsored",
    "inputs": [
      { "name": "user", "type": "address", "indexed": true },
      { "name": "amount", "type": "uint256", "indexed": false }
    ],
    "anonymous": false
  }
];

