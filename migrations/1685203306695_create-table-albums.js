/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('albums', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      //   check: 'year >= 0',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('albums');
};
