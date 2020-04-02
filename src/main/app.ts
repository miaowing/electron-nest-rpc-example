import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { NestRPC } from 'electron-nest-rpc';
import { INestApplicationContext } from "@nestjs/common";

export async function bootstrap(): Promise<INestApplicationContext> {
    const nestContext = await NestFactory.createApplicationContext(AppModule, {});
    NestRPC.register(nestContext);

    return nestContext;
}
