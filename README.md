Sniffypedia
===========

This is the index to Sniffypedia, which is hosted at [sniffypedia.org](https://sniffypedia.org) as the [GitHub pages branch](https://github.com/reelyactive/sniffypedia/tree/gh-pages) of this same repository.

For more information, visit [sniffypedia.org/about](https://sniffypedia.org/about).


Installation
------------

    npm install sniffypedia


Hello Sniffypedia
-----------------

Provide an identifier and any options to lookup against a URI.

```javascript
const sniffypedia = require('sniffypedia');

let id = '004c'; // Bluetooth LE Company Identifier to look up
let options = { protocol: "ble", type: "companyIdentifier" };

let uri = sniffypedia.lookup(id, options);

console.log(uri); // https://sniffypedia.org/Organization/Apple_Inc/ 
```

The output should be [https://sniffypedia.org/Organization/Apple_Inc/](https://sniffypedia.org/Organization/Apple_Inc/) as 0x004c is Apple's Bluetooth-assigned company identifier.


Project History
---------------

The __sniffypedia__ project began in 2016 to associate wireless device identifiers with structured data about the products and organizations they represent, including links to websites, social media channels and images.

In 2021, __sniffypedia__ was redesigned and updated to v1.x to better reflect the best practices for coding of the time and to couple with [advlib](https://github.com/reelyactive/advlib) v1.x.


What's next?
------------

__sniffypedia__ v1.0.0 was released in April 2021, superseding all earlier versions, the latest of which remains available in the [release-0.1 branch](https://github.com/reelyactive/sniffypedia/tree/release-0.1) and as [sniffypedia@0.1.22 on npm](https://www.npmjs.com/package/sniffypedia/v/0.1.22).


License
-------

This Sniffypedia is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/.  Any rights in individual contents of the database are licensed under Creative Commons Attribution-ShareAlike 4.0 International: https://creativecommons.org/licenses/by-sa/4.0/


