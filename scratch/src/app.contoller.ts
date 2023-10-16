import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/')
    getRootRoute() {
        return 'Hello From Nest!'
    }

    @Get('/bye')
    getByeThere() {
        return 'Bye There!'
    }
}