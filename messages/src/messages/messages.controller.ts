import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('/messages')
export class MessagesController {

    @Get()
    listMessages() {
        return 'index';
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        console.log(body);
        return body;
    }
    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log('id', id)
        return 'get particular message!';
    }
}
