import { Global, Module } from '@nestjs/common';
import { TestService } from "./services";

@Global()
@Module({
    imports: [],
    providers: [TestService],
    controllers: []
})
export class AppModule {

}
