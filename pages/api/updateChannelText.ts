// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { APIAuthentication, Hop } from "@onehop/js";
import { json } from "stream/consumers";
const hop = new Hop(process.env.HOP_TOKEN! as APIAuthentication);

const updateChannelText = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, markdown } = req.body;
    await hop.channels.setState(id, {
        id: id,
        markdown: markdown
    });
    
    res.status(200).json({
        success: true
    })
}

export default updateChannelText;