import { CommandContext } from "@api/Commands";
import { Message } from "discord.js";
import { PartialDeep } from "type-fest";
import { join } from 'path';
import { profile } from "console";
import { sendBotMessage } from '../../api/Commands/commandHelpers';
import { send } from "process";

export async function handlecommands(ctx: CommandContext, message: string) {
    let shit = message.split(" ").slice(1).toString();

    switch (message.split(" ")[0]) {
        case "echo": Vencord.Webpack.findByProps("editMessage").sendMessage(ctx.channel.id, { content: shit });
            return;
        case "profile":
            let lmao = await fetch(`https://dp.nea.moe/avatar/${shit.replaceAll("<@", "").replaceAll(">", "")}.json`);
            let cbt = await lmao.json();
            sendBotMessage(ctx.channel.id, { content: cbt.avatar });
            return;
    }


}
