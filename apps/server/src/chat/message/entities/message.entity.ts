import { User } from '#app/auth/entities/user.entity';
import { Chat } from '#app/chat/entities/chat.entity';
import { MBaseEntity } from '#app/common/entities/mBase.entity';
import { Entity, ManyToMany, ManyToOne, Property, Ref } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Message extends MBaseEntity {
  @Field(() => Chat)
  @ManyToOne(() => Chat)
  chat!: Ref<Chat>;

  @Field(() => User)
  @ManyToOne(() => User)
  author!: Ref<User>;

  @Field(() => String)
  @Property()
  content!: string;

  constructor(payload: Partial<Message>) {
    super();
    Object.assign(this, payload);
  }

  protected generateId(): string {
    return 'msg_' + super.generateId();
  }
}
