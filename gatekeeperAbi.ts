// gatekeeperAbi.ts

export const gatekeeperAbi = [
  {
    "type": "function",
    "name": "globalDailyLimit",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "uint256" }]
  },
  {
    "type": "function",
    "name": "userDailyLimit",
    "stateMutability": "view",
    "inputs": [{ "name": "user", "type": "address" }],
    "outputs": [{ "type": "uint256" }]
  },
  {
    "type": "function",
    "name": "setGlobalDailyLimit",
    "stateMutability": "nonpayable",
    "inputs": [{ "name": "newLimit", "type": "uint256" }],
    "outputs": []
  },
  {
    "type": "function",
    "name": "setUserDailyLimit",
    "stateMutability": "nonpayable",
    "inputs": [
      { "name": "user", "type": "address" },
      { "name": "newLimit", "type": "uint256" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "owner",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "address" }]
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "stateMutability": "nonpayable",
    "inputs": [{ "name": "newOwner", "type": "address" }],
    "outputs": []
  },
  {
    "type": "event",
    "name": "GlobalDailyLimitUpdated",
    "inputs": [
      { "name": "newLimit", "type": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UserDailyLimitUpdated",
    "inputs": [
      { "name": "user", "type": "address", "indexed": true },
      { "name": "newLimit", "type": "uint256", "indexed": false }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      { "name": "previousOwner", "type": "address", "indexed": true },
      { "name": "newOwner", "type": "address", "indexed": true }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "NotOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotGatekeeper",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientBalance",
    "inputs": []
  }
];

