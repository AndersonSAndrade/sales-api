import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnProduts1695518402261 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adhem_products',
      new TableColumn({
        name: 'ross_weight',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'adhem_products',
      new TableColumn({
        name: 'net_weight',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'adhem_products',
      new TableColumn({
        name: 'toler_weight',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'adhem_products',
      new TableColumn({
        name: 'volume',
        type: 'int',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('adhem_products', 'ross_weight');
    await queryRunner.dropColumn('adhem_products', 'questionId');
    await queryRunner.dropColumn('adhem_products', 'toler_weight');
    await queryRunner.dropColumn('adhem_products', 'volume');
  }
}
