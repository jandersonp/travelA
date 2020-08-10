import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTravels1597084659478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'travels',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'origin',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'destination',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'datefrom',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'dateto',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'travelersnumber',
            type: 'number',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('travels');
  }
}
