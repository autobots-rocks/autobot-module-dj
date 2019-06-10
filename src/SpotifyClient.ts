import * as request from 'request';

export class SpotifyClient {

    public static async search(token: string, type: string, terms: string) {

        request.get(this.getHeaders('search?q=' + terms + '&type=' + type, token), (error, response, body) => {

            console.log(error);
            console.log(response);
            console.log(body);

        });

    }

    public static getHeaders(path: string, accessToken: string) {

        return {

            url: 'https://api.spotify.com/v1/' + path,
            headers: { 'Authorization': 'Bearer ' + accessToken },
            json: true

        };

    }

}
