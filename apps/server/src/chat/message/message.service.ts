import { CreateMessageInput } from '#app/chat/message/dto/create-message.input';
import { UpdateMessageInput } from '#app/chat/message/dto/update-message.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  create(createMessageInput: CreateMessageInput) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageInput: UpdateMessageInput) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
