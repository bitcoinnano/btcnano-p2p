'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on btcnano-p2p Module {0}'
};

module.exports = require('btcnano-lib').errors.extend(spec);
