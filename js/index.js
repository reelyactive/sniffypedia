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
  "adabfb006e7d4601bda2bffaa68956ba": "Product/Fitbit_Wearable",
  "52052c11e701478299f58ce88dbb1500": "Product/Allegion_ENGAGE",
  "7265656c794163746976652055554944": "Product/reelyActive_RA-R436",
  "7265656c7941707020416e64726f6964": "Product/reelyActive_reelyApp-Android",
  "7265656c7941707020666f7220694f53": "Product/reelyActive_reelyApp-iOS",
  "cbbfe0e1f7f3420684e084cbb3d09dfc": "Product/ASUS_Nexus-Player",
  "d2d3f8ef9c994d9ca2b391c85d44326c": "Product/Nest_Cam",
  "d5060001a904deb947482c7f4a124842": "Product/Thalmic-Labs_Myo",
  "f02adfc026e711e49edc0002a5d5c51b": "Product/Shortcut-Labs_FLIC"
};


// Bluetooth Low Energy company identifiers
// See:https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers
var ble_companyIdentifiers = {
  "004c": "Organization/Apple_Inc"
};


// Bluetooth Low Energy iBeacons (128-bit UUIDs)
var ble_iBeacons = {
  "8deefbb9f7384297804096668bb44281": "Product/Roximity_Beacon",
  "b9407f30f5f8466eaff925556b57fe6d": "Product/Estimote_Beacon",
  "f7826da64fa24e988024bc5b71e0893e": "Product/Kontakt_Beacon"
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


