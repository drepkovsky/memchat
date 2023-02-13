import { MBaseEntity } from '#app/common/entities/mBase.entity';
import { Entity } from '@mikro-orm/core';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User extends MBaseEntity {}
