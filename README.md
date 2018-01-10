Btcnano P2P
=======

[![NPM Package](https://img.shields.io/npm/v/tcnano-p2p.svg?style=flat-square)](https://www.npmjs.org/package/tcnano-p2p)
[![Build Status](https://img.shields.io/travis/bitcoinnano/btcnano-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/bitcoinnano/btcnano-p2p)
[![Coverage Status](https://img.shields.io/coveralls/bitcoinnano/btcnano-p2p.svg?style=flat-square)](https://coveralls.io/r/bitcoinnano/btcnano-p2p?branch=master)

`bitcore-p2p` adds [Bitcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Bitcore.

See [the main bitcore repo](https://github.com/bitpay/bitcore) for more information.

## Getting Started

```sh
npm install btcnano-p2p
```
In order to connect to the Btcnano network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('btcnano-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2015-2021 Btcnano, Inc. Btcnano is a trademark maintained by Btcnano, Inc.
