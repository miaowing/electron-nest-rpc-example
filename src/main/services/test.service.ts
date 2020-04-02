import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
export class TestService {
    public nowTime() {
        return new Date();
    }

    public callback(cb: (value: string) => void) {
        cb('callback data');
    }
}
