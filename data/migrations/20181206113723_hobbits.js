exports.up = function (knex) {
  return knex.schema.createTable("jokes", tbl => {
    tbl.increments();

    tbl.string("joke", 255).unique().notNullable();
  });
};

exports.down = function (knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("jokes");
};
