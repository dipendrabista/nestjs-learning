import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'index';
    }

    @Post()
    createMessages(@Body() body: any) {
        console.log(body);
        return body;
    }
    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log('id', id)
        return 'get particular message!';
    }
}
