import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1589265510662 implements MigrationInterface {
    name = 'Initial1589265510662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "server" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL DEFAULT (''), "host" varchar NOT NULL, "port" integer NOT NULL, "description" varchar NOT NULL DEFAULT (''), "nickname" varchar NOT NULL DEFAULT (''), "password" varchar NOT NULL DEFAULT (''), "extraInject" text NOT NULL, "groupId" integer)`, undefined);
        await queryRunner.query(`CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "selected" boolean NOT NULL DEFAULT (1))`, undefined);
        await queryRunner.query(`CREATE TABLE "settings" ("id" integer PRIMARY KEY NOT NULL, "nickname" varchar NOT NULL DEFAULT (''), "gameDirectory" varchar NOT NULL DEFAULT (''), "autoSwitchNickname" boolean NOT NULL DEFAULT (1), "deletionConfirm" boolean NOT NULL DEFAULT (1), "serverRefreshDelay" integer NOT NULL DEFAULT (1000), "refreshAllServers" boolean NOT NULL DEFAULT (0), "extraInject" text NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_server" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL DEFAULT (''), "host" varchar NOT NULL, "port" integer NOT NULL, "description" varchar NOT NULL DEFAULT (''), "nickname" varchar NOT NULL DEFAULT (''), "password" varchar NOT NULL DEFAULT (''), "extraInject" text NOT NULL, "groupId" integer, CONSTRAINT "FK_af02f86a1b76bf8257271d332c5" FOREIGN KEY ("groupId") REFERENCES "group" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_server"("id", "name", "host", "port", "description", "nickname", "password", "extraInject", "groupId") SELECT "id", "name", "host", "port", "description", "nickname", "password", "extraInject", "groupId" FROM "server"`, undefined);
        await queryRunner.query(`DROP TABLE "server"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_server" RENAME TO "server"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "server" RENAME TO "temporary_server"`, undefined);
        await queryRunner.query(`CREATE TABLE "server" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL DEFAULT (''), "host" varchar NOT NULL, "port" integer NOT NULL, "description" varchar NOT NULL DEFAULT (''), "nickname" varchar NOT NULL DEFAULT (''), "password" varchar NOT NULL DEFAULT (''), "extraInject" text NOT NULL, "groupId" integer)`, undefined);
        await queryRunner.query(`INSERT INTO "server"("id", "name", "host", "port", "description", "nickname", "password", "extraInject", "groupId") SELECT "id", "name", "host", "port", "description", "nickname", "password", "extraInject", "groupId" FROM "temporary_server"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_server"`, undefined);
        await queryRunner.query(`DROP TABLE "settings"`, undefined);
        await queryRunner.query(`DROP TABLE "group"`, undefined);
        await queryRunner.query(`DROP TABLE "server"`, undefined);
    }

}
