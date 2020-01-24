exports.up = knex =>
  knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table
        .text('recipe')
        .index()
        .unique()
    })
    .createTable('steps', table => {
      table.increments('step_id')
      table
        .integer('step_number')
        .notNullable()
        .unsigned()
      table.text('instruction').notNullable()
      table
        .integer('recipe_id')
        .unsigned()
        .references('recipes.recipe_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
    })
    .createTable('amounts', table => {
      table.increments('amount_id')
      table
        .float('amount')
        .unique()
        .index()
    })
    .createTable('measurements', table => {
      table.increments('measurement_id')
      table
        .text('unit')
        .unique()
        .index()
    })
    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table
        .text('name')
        .unique()
        .notNullable()
        .index()
    })
    .createTable('recipe_ingredient_info', table => {
      table.increments('recipe_ingredient_info_id')
      table
        .integer('amount_id')
        .references('amounts.amount_id')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('measurement_id')
        .references('measurements.measurement_id')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('ingredient_id')
        .references('ingredients.ingredient_id')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('recipe_id')
        .references('recipes.recipe_id')
        .unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
    })

exports.down = knex =>
  knex.schema
    .dropTableIfExists('recipe_ingredient_info')
    .dropTableIfExists('measurements')
    .dropTableIfExists('amounts')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
