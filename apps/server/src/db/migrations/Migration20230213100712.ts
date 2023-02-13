import { Migration } from '@mikro-orm/migrations';

export class Migration20230213100712 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" varchar(255) not null, "created_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "updated_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "deleted_at" timestamptz(6) null, constraint "user_pkey" primary key ("id"));',
    );
  }
}
