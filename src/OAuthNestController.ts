import { Controller, Get } from '@nestjs/common';

@Controller('/dj/oauth')
export class OAuthNestController {

    public constructor() {

    }

    @Get('/login')
    public sendMessage(): string {

        return 'aiutjed';

    }

}
