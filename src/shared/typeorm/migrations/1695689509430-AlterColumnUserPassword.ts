import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterColumnUserPassword1695689509430
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adhem_users', 'password');
    await queryRunner.addColumn(
      'adhem_users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adhem_users', 'password');
  }
}
