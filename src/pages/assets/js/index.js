'use strict'
import('./dynamic').then(js => js.run())
import('./pure/Main').then(js => js.main())
import('./pure/Tool').then(js => js.run())

console.log('Hello world from /js/index.js!')
