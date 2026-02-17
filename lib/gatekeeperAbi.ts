export const GATEKEEPER_ABI = [
  {
    type: "function",
    name: "owner",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }]
  },
  {
    type: "function",
    name: "setGlobalDailyLimit",
    stateMutability: "nonpayable",
    inputs: [{ name: "newLimit", type: "uint256" }],
    outputs: []
  },
  {
    type: "function",
    name: "setUserDailyLimit",
    stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address" },
      { name: "newLimit", type: "uint256" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "remainingToday",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [
      { name: "dailySponsoredAmount", type: "uint256" },
      { name: "userDailyLimit", type: "uint256" }
    ]
  },
  {
    type: "function",
    name: "globalDailyLimit",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "userDailyLimit",
    stateMutability: "view",
    inputs: [{ name: "user", type: "address" }],
    outputs: [{ type: "uint256" }]
  },
  {
    type: "function",
    name: "sponsorGas",
    stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address" },
      { name: "gasAmount", type: "uint256" }
    ],
    outputs: []
  }
];
