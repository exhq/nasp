import { ApplicationCommandInputType, findOption, RequiredMessageOption, sendBotMessage } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { _handlePreSend } from '../../api/MessageEvents';
import { handlecommands } from "./handling";



export default definePlugin({
    name: "Nasp",
    description: "Not A Selfbot Plugin",
    authors: [Devs.echo],
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "nasp",
            description: "this isnt a command added by a selfbot plugin",
            options: [{ name: "message", displayName: "NOT your command", type: 3, description: "Your message", displayDescription: "its not your command", required: true }],
            inputType: ApplicationCommandInputType.BOT,
            execute: (opts, ctx) => {
                const content = findOption(opts, "message", "");
                sendBotMessage;
                handlecommands(ctx, content);
            },
        },
    ]
});