import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { limit } = JSON.parse(req.body);

  // Replace with real update logic
  console.log("Updating global limit to:", limit);

  res.status(200).json({ success: true });
}
