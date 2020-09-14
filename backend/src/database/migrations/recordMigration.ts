import Knex from 'knex'

export async function up(knex : Knex) {
    return knex.schema.createTable('RECORD', table => {
        table.increments('id').primary(); // chave primária de nossa tabela
        table.string('name').notNullable()
        table.integer('age').notNullable()
        table.timestamp('moment').defaultTo(knex.fn.now());
        table.integer('game_id').references('id').inTable('GAME');
    })
}

export async function down(knex : Knex) {
    return knex.schema.dropTable('RECORD')
}

