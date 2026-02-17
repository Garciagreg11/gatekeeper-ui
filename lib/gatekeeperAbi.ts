export const GATEKEEPER_ABI = [
  {
    type: "function",
    name: "sponsorGas",
    stateMutability: "payable",
    inputs: [
      { name: "user", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "getSponsoredGas",
    stateMutability: "view",
    inputs: [
      { name: "user", type: "address" }
    ],
    outputs: [
      { name: "", type: "uint256" }
    ]
  }
];
