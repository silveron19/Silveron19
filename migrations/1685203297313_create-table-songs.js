/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(100)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      //   check: 'year >= 0',
      notNull: true,
    },
    performer: {
      type: 'TEXT',
      notNull: true,
    },
    genre: {
      type: 'TEXT',
      notNull: true,
    },
    duration: {
      type: 'INTEGER',
      //   check: 'duration >= 0',
      notNull: false,
    },
    albumId: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
