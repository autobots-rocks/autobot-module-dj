import * as request from 'request';

export class SpotifyClient {

    public static async search(token: string, type: string, terms: string) {

        return new Promise((resolve: any, reject: any) => {

            request.get(this.getHeaders(token, 'search?q=' + terms + '&type=' + type), (error: any, response: any, body: any) => {

                if (error) {

                    console.log(error);
                    reject(error);

                } else {

                    resolve(body);
                   
                }

            });

        });

    }

    public static getHeaders(token: string, path: string) {

        return {

            url: 'https://api.spotify.com/v1/' + path,
            headers: { 'Authorization': 'Bearer ' + token },
            json: true

        };

    }

}
