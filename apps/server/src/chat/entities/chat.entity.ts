import { User } from '#app/auth/entities/user.entity';
import { Message } from '#app/chat/message/entities/message.entity';
import { MBaseEntity } from '#app/common/entities/mBase.entity';
import {
  Collection,
  Entity,
  ManyToMany,
  OneToMany,
  Ref,
} from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Chat extends MBaseEntity {
  @Field(() => [Message])
  @OneToMany(() => Message, 'chat')
  messages = new Collection<Message>(this);

  @Field(() => [User])
  @ManyToMany(() => User, 'chats', { owner: true })
  users = new Collection<User>(this);

  constructor(partial: Partial<Chat>) {
    super();
    Object.assign(this, partial);
  }
  protected generateId(): string {
    return 'cht_' + super.generateId();
  }
}
