// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { APIAuthentication, Hop, ChannelType } from "@onehop/js";
const hop = new Hop(process.env.HOP_TOKEN! as APIAuthentication);

const ensureChannelExists = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.body.id;
    if(id) {
        const channel = await hop.channels.get(id);
        if(channel) {
            return res.status(200).json({
                exists: true
            })
        }
        else {
            return res.status(404).json({
                exists: false,
            })
        }
    }
    else {
        return res.status(400).json({
            exists: false
        })
    }
}

export default ensureChannelExists;