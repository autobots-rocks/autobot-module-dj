import { Module }              from '@nestjs/common';
import { OAuthNestController } from './OAuthNestController';

@Module({

    imports: [

        // PassportModule.register({ defaultStrategy: 'jwt' }),
        //
        // JwtModule.register({
        //
        //     secretOrPrivateKey: 'secretKey',
        //     signOptions: {
        //
        //         expiresIn: 86400 * 7,
        //
        //     }
        //
        // })

    ],
    controllers: [

        OAuthNestController
    ],
    providers: [

        // JwtStrategy

    ],
    exports: [

        // PassportModule,
        // AuthService

    ]

})

export class OAuthNestModule {
}
