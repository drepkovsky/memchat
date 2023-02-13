import { CreateChatInput } from '#app/chat/dto/create-chat.input';
import { UpdateChatInput } from '#app/chat/dto/update-chat.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  create(createChatInput: CreateChatInput) {
    return 'This action adds a new chat';
  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatInput: UpdateChatInput) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
