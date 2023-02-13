import WithSoftDelete from '#app/common/entities/with-soft-delete.filter';
import { Entity } from '@mikro-orm/core';
import { BaseEntity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { nanoid } from 'nanoid';

@ObjectType({ isAbstract: true })
@Entity({ abstract: true })
@WithSoftDelete()
export class MBaseEntity extends BaseEntity<MBaseEntity, 'id'> {
  @Field(() => String)
  @PrimaryKey()
  id: string = this.generateId();

  @Field(() => Date)
  @Property({
    onCreate: () => new Date(),
    type: 'timestamptz',
    length: 6,
    defaultRaw: 'CURRENT_TIMESTAMP',
  })
  createdAt: Date = new Date();

  @Field(() => Date)
  @Property({
    onUpdate: () => new Date(),
    type: 'timestamptz',
    length: 6,
    defaultRaw: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date = new Date();

  @Field(() => Date, { nullable: true })
  @Property({ type: 'timestamptz', length: 6, nullable: true })
  deletedAt: Date | null = null;

  @Property({ nullable: true })
  protected generateId(): string {
    return nanoid();
  }
}
