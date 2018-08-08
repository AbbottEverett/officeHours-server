// 'organizations' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('organizations', table => {
    table.increments('id');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.string('name').notNullable();
    table.string('short_description').notNullable();
    table.text('long_description').notNullable();
    table.text('logo_img_url').notNullable();
    table.text('website_url').notNullable().defaultTo('N/A');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('organizations');
};
