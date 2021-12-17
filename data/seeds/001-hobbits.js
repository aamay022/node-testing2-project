exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('jokes')
    .truncate()
    .then(function() {
      return knex('jokes').insert([
        { joke: 'sam' },
        { joke: 'frodo' },
        { joke: 'pippin' },
        { joke: 'merry' },
      ]);
    });
};
