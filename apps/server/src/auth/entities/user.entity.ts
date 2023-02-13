import { Chat } from '#app/chat/entities/chat.entity';
import { MBaseEntity } from '#app/common/entities/mBase.entity';
import { Collection, Entity, ManyToMany, Property, Ref } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User extends MBaseEntity {
  @Field(() => String)
  @Property()
  name!: string;

  @Field(() => String)
  @Property()
  email!: string;

  @Field(() => String)
  @Property({ hidden: true })
  password!: string;

  @Field(() => String)
  @Property()
  handle!: string;

  @Field(() => [Chat])
  @ManyToMany(() => Chat, (chat) => chat.users)
  chats = new Collection<Chat>(this);

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  protected generateId(): string {
    return 'usr_' + super.generateId();
  }
}
