import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1608500868064 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'uuid',
          isGenerated: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'float',
        },
        {
          name: 'longitude',
          type: 'float',
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
