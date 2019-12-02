module.exports = {
  name: 'stock',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/stock',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
