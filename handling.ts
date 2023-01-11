import { CommandContext } from "@api/Commands";
import { Message } from "discord.js";
import { PartialDeep } from "type-fest";
import { join } from 'path';

export function handlecommands(ctx: CommandContext, message: string) {

    switch (message.split(" ")[0]) {
        case "echo": Vencord.Webpack.findByProps("editMessage").sendMessage(ctx.channel.id, { content: message.split(" ").slice(1).toString() });
    }


}
function echo(channel, msg) {
    Vencord.Webpack.findByProps("editMessage").sendMessage(channel, { content: msg });
}