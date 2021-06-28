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

console.log(uri);
```

The output should be [https://sniffypedia.org/Organization/Apple_Inc/](https://sniffypedia.org/Organization/Apple_Inc/) as _0x004c_ is Apple's Bluetooth-assigned company identifier.


Options
-------

__sniffypedia__ supports the following options for its lookup function:

| Property | Default                   | Description                          | 
|:---------|:--------------------------|:-------------------------------------|
| origin   | 'https://sniffypedia.org' | URI origin to which path is appended |
| protocol | null                      | See Indexed URIs below               |
| type     | null                      | See Indexed URIs below               |


Indexed URIs
------------

The Sniffypedia index includes:

| protocol | type                | Description                                 |
|:---------|:--------------------|:--------------------------------------------|
| null     | null                | Protocol-agnostic 128-bit UUIDs             |
| 'ble'    | 'companyIdentifier' | [16-bit Bluetooth-assigned Company Identifiers](https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers) |
| 'ble'    | 'uuid16'            | [16-bit Bluetooth-assigned UUIDs for members](https://www.bluetooth.com/specifications/assigned-numbers/16-bit-uuids-for-members) |


Project History
---------------

The __sniffypedia__ project began in 2016 to associate wireless device identifiers with structured data about the products and organizations they represent, including links to websites, social media channels and images.

In 2021, __sniffypedia__ was redesigned and updated to v1.x to better reflect the best practices for coding of the time and to couple with [advlib](https://github.com/reelyactive/advlib) v1.x.

__sniffypedia__ v1.0.0 was released in April 2021, superseding all earlier versions, the latest of which remains available in the [release-0.1 branch](https://github.com/reelyactive/sniffypedia/tree/release-0.1) and as [sniffypedia@0.1.22 on npm](https://www.npmjs.com/package/sniffypedia/v/0.1.22).


Contributing
------------

Discover [how to contribute](CONTRIBUTING.md) to this open source project which upholds a standard [code of conduct](CODE_OF_CONDUCT.md).


License
-------

This Sniffypedia is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/.  Any rights in individual contents of the database are licensed under Creative Commons Attribution-ShareAlike 4.0 International: https://creativecommons.org/licenses/by-sa/4.0/


