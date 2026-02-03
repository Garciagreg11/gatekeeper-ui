import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example static value — replace with real logic later
  res.status(200).json({ limit: 1000 });
}
