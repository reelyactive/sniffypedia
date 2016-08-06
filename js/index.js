/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


// Bluetooth Low Energy 16-bit UUIDs
// See: https://www.bluetooth.com/specifications/assigned-numbers/16-bit-uuids-for-members
var ble_uuid16 = {
  "feed": "Product/Tile_Tile"
};


// Bluetooth Low Energy 128-bit UUIDs
var ble_uuid128 = {
  "7265656c794163746976652055554944": "Product/reelyActive_RA-R436",
  "7265656c7941707020416e64726f6964": "Product/reelyActive_reelyApp-Android",
  "7265656c7941707020666f7220694f53": "Product/reelyActive_reelyApp-iOS"
};


// Bluetooth Low Energy company identifiers
// See:https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers
var ble_companyIdentifiers = {
  "004c": "Organization/Apple_Inc"
};


// Bluetooth Low Energy iBeacons (128-bit UUIDs)
var ble_iBeacons = {

};


// Bluetooth Low Energy
var ble = {
  uuid16: ble_uuid16,
  uuid128: ble_uuid128,
  companyIdentifiers: ble_companyIdentifiers,
  iBeacons: ble_iBeacons
};


// The Sniffypedia index
var sniffypedia_index = {
  ble: ble
};


