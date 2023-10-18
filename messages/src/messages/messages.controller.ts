import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'index';
    }

    @Post()
    createMessages() {
        return 'Hi there!';
    }
    @Get('/:id')
    getMessage() {
        return 'get particular message!';
    }
}
