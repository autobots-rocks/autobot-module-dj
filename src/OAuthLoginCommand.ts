import { Command, CommandBase, CommandParser, Event } from '@autobot/common';
import { RichEmbed }                                  from 'discord.js';
import { DJBotUtil }                                  from './DJBotUtil';

/**
 * Initiates OAuth Login Sequence.
 *
 * Example message: `$login`
 */
@Command
export class OAuthLoginCommand extends CommandBase {

    public constructor() {

        //
        // Set this commands configuration.
        //
        super({

            event: Event.MESSAGE,
            requiredEnvVars: DJBotUtil.REQUIRED_ENV_VARS,
            name: '$login',
            group: 'music',
            description: 'Initiates OAuth Login Sequence.',

        });

    }

    /**
     * Called when a command matches config.name.
     *
     * @param command Parsed out commamd
     *
     */
    public run(command: CommandParser): void {

        console.log(command);

        command.obj.reply(new RichEmbed().setTitle('Test received!'));

    }

}
