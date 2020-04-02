import * as React from 'react';
import 'reflect-metadata';
import { nestRPC } from 'electron-nest-rpc/dist/renderer';
import { TestService } from "../main/services";

export class HelloWorld extends React.Component<any, any> {
    private readonly testService = nestRPC<TestService>(TestService);

    public state = {
        time: 0
    };

    async componentDidMount() {
        const time = await this.testService.nowTime();
        this.setState({ time });

        this.testService.callback(value => console.log(value));
    }

    render() {
        return <div className="content">
            hello world, {this.state.time}
        </div>;
    }
}
