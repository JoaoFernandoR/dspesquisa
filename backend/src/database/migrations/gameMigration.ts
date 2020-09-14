import Knex from 'knex'

export async function up(knex : Knex) {
    return knex.schema.createTable('GAME', table => {
        table.increments('id').primary(); // chave primária de nossa tabela
        table.string('title').notNullable()
        table.enu('platform', ['PC', 'PLAYSTATION', 'XBOX'])
        table.integer('genre_id').references('id').inTable('GENRE');
    })
}

export async function down(knex : Knex) {
    return knex.schema.dropTable('GAME')
}