// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { APIAuthentication, Hop } from "@onehop/js";
const hop = new Hop(process.env.HOP_TOKEN! as APIAuthentication);

const updateChannelText = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.body;

    const channelState = await hop.channels.get(id);

    res.status(200).json({
        success: true,
        newState: channelState.state.markdown
    })
}

export default updateChannelText;