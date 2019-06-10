import { Controller, Get } from '@nestjs/common';

@Controller('/oauth')
export class OAuthNestController {

    @Get('/asdf')
    public sendMessage(): string {

        return 'aiutjed';

    }

}
