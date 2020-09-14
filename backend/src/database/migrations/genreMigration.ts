import Knex from 'knex'

export async function up(knex : Knex) {
    return knex.schema.createTable('GENRE', table => {
        table.increments('id').primary(); // chave primária de nossa tabela
        table.string('name').notNullable()
    })
}

export async function down(knex : Knex) {
    return knex.schema.dropTable('GENRE')
}