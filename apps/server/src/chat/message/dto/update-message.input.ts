import { CreateMessageInput } from '#app/chat/message/dto/create-message.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  @Field(() => Int)
  id: number;
}
