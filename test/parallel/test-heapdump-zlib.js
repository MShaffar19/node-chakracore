// Flags: --expose-internals
'use strict';
require('../common');
const { validateSnapshotNodes } = require('../common/heap');
const zlib = require('zlib');

validateSnapshotNodes('Node / ZCtx', []);
// eslint-disable-next-line no-unused-vars
const gunzip = zlib.createGunzip();
validateSnapshotNodes('Node / ZCtx', [
  {
    children: [
      { node_name: 'Zlib', edge_name: 'wrapped' },
      { node_name: 'Node / zlib_memory', edge_name: 'zlib_memory' }
    ]
  }
]);
