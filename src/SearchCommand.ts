import { BOT, Command, CommandBase, CommandParser, Event, Logger } from '@autobot/common';
import { RichEmbed }                                               from "discord.js";
import { filter, first }                                           from 'rxjs/operators';
import { SpotifyClient }                                           from './SpotifyClient';

/**
 * Search the HelpDesk questions.
 *
 * Example: !search #javascript #js
 *
 */
@Command
export class SearchCommand extends CommandBase {

    public constructor() {

        //
        // Set this commands configuration.
        //
        super({

            event: Event.MESSAGE,
            name: `${ process.env.SPOTIFY_SEARCH_PREFIX }`,
            group: 'music',
            description: 'Search',
            params: [

                { name: 'album' },
                { name: 'artist' },
                { name: 'playlist' },
                { name: 'track' }

            ]

        });

    }

    //
    // Called when a command matches config.name.
    //
    public async run(command: CommandParser) {

        console.log(command);

        BOT.events$.pipe(filter(event => event.name === 'refreshToken'), first()).subscribe(async (config: any) => {

            const results: any = await SpotifyClient.search(config.token || config.payload.token, 'track', command.namedarguments.track);

            if (results.tracks.items.length === 0) {

                command.obj.reply(new RichEmbed().setTitle(process.env.DJBOT_NAME)
                                                 .setColor(15158332)
                                                 .setDescription(`No results found for "${ command.namedarguments.track }"`));

            } else {

                console.log(results);
                console.log(results.tracks);

                results.tracks.forEach((track: any) => {

                    console.log(track.artists);


                });

            }

        });
        //
        // const tags = command.obj.content.match(/#([a-z0-9]+)/gi);
        //
        // if (results.length > 0) {
        //
        //     const embed = new RichEmbed().setTitle('Search Results');
        //
        //     results.forEach(result => {
        //
        //         embed.addField(`#${ result.id } (${ result.status })`, result.question);
        //
        //     });
        //
        //     command.obj.reply(embed);
        //
        // } else {
        //
        //     command.obj.reply(new RichEmbed().setTitle('Search Results').setDescription(`No results found.`));
        //
        // }

        Logger.log(`AskCommand.search: ${ command.obj.content }`);

    }

}
