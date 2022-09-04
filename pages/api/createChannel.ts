// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { APIAuthentication, Hop, ChannelType } from "@onehop/js";
import { makeID } from "./utils/makeID";
const hop = new Hop(process.env.HOP_TOKEN! as APIAuthentication);

const createChannel = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(process.env.HOP_TOKEN);
    const newChannelID = makeID(8);

    const newChannel = await hop.channels.create(ChannelType.UNPROTECTED, newChannelID, {
        state: {
            id: newChannelID,
            markdown: "# Welcome to Hopdown!\n\nHopdown is a realtime, collaborative markdown editor to boost productivity!"
        }
    });

    if(newChannel) {
        return res.status(200).json({
            success: true,
            id: newChannel.id
        })
    }
    else {
        return res.status(500).json({
            success: false,
            error: "Uh oh! Please try again."
        })
    }
}

export default createChannel;