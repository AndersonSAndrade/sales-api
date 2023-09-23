import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1695494616462 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adhem_users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'firstname',
            type: 'varchar(100)',
          },
          {
            name: 'lastname',
            type: 'varchar(100)',
          },
          {
            name: 'email',
            type: 'varchar(200)',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar(8)',
          },
          {
            name: 'avatar',
            type: 'varchar(100)',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar(15)',
            isNullable: true,
          },
          {
            name: 'biography',
            type: 'varchar(15)',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adhem_users');
  }
}
