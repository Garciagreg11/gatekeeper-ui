import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;

  // Example static values — replace with real logic later
  res.status(200).json({
    address,
    limit: 100,
    remaining: 42,
  });
}
