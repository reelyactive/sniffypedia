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
  "fefd": "Organization/Gimbal_Inc/",
  "fefc": "Organization/Gimbal_Inc/",
  "fefa": "Organization/PayPal_Inc/",
  "fef9": "Organization/PayPal_Inc/",
  "fef4": "Organization/Google/",
  "fef3": "Organization/Google/",
  "feef": "Organization/Polar_Electro_Oy/",
  "feee": "Organization/Polar_Electro_Oy/",
  "feed": "Product/Tile_Tile/",
  "feeb": "Organization/Swirl_Networks_Inc/",
  "feea": "Organization/Swirl_Networks_Inc/",
  "fee7": "Organization/Tencent_Holdings_Limited/",
  "fee6": "Organization/Seed_Labs_Inc/",
  "fedd": "Organization/Jawbone/",
  "fedc": "Organization/Jawbone/",
  "fed9": "Organization/Pebble_Technology_Corporation/",
  "fed4": "Organization/Apple_Inc/",
  "fed3": "Organization/Apple_Inc/",
  "fed2": "Organization/Apple_Inc/",
  "fed1": "Organization/Apple_Inc/",
  "fed0": "Organization/Apple_Inc/",
  "fecf": "Organization/Apple_Inc/",
  "fece": "Organization/Apple_Inc/",
  "fecd": "Organization/Apple_Inc/",
  "fecc": "Organization/Apple_Inc/",
  "fecb": "Organization/Apple_Inc/",
  "feca": "Organization/Apple_Inc/",
  "fec9": "Organization/Apple_Inc/",
  "fec8": "Organization/Apple_Inc/",
  "fec7": "Organization/Apple_Inc/",
  "febe": "Organization/Bose_Corporation/",
  "feba": "Organization/Tencent_Holdings_Limited/",
  "feb8": "Organization/Facebook_Inc/",
  "feb7": "Organization/Facebook_Inc/",
  "feb2": "Organization/Microsoft/",
  "feb0": "Organization/Nest_Labs/",
  "feaf": "Organization/Nest_Labs/",
  "feaa": "Product/Google_Eddystone/",
  "fea0": "Organization/Google/",
  "fe9f": "Organization/Google/",
  "fe9a": "Organization/Estimote_Inc/",
  "fe8b": "Organization/Apple_Inc/",
  "fe8a": "Organization/Apple_Inc/",
  "fe56": "Organization/Google/",
  "fe55": "Organization/Google/",
  "fe50": "Organization/Google/"
};


// Bluetooth Low Energy 128-bit UUIDs
var ble_uuid128 = {
  "adabfb006e7d4601bda2bffaa68956ba": "Product/Fitbit_Wearable/",
  "52052c11e701478299f58ce88dbb1500": "Product/Allegion_ENGAGE/",
  "7265656c794163746976652055554944": "Product/reelyActive_RA-R436/",
  "7265656c7941707020416e64726f6964": "Product/reelyActive_reelyApp-Android/",
  "7265656c7941707020666f7220694f53": "Product/reelyActive_reelyApp-iOS/",
  "cbbfe0e1f7f3420684e084cbb3d09dfc": "Product/ASUS_Nexus-Player/",
  "d2d3f8ef9c994d9ca2b391c85d44326c": "Product/Nest_Cam/",
  "d5060001a904deb947482c7f4a124842": "Product/Thalmic-Labs_Myo/",
  "f02adfc026e711e49edc0002a5d5c51b": "Product/Shortcut-Labs_FLIC/"
};


// Bluetooth Low Energy company identifiers
// See:https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers
var ble_companyIdentifiers = {
  "004c": "Organization/Apple_Inc/",
  "0075": "Organization/Samsung/",
  "0087": "Organization/Garmin_International/",
  "008c": "Organization/Gimbal_Inc/",
  "00df": "Organization/Misfit_Inc/",
  "0131": "Organization/Cypress_Semiconductor_Corporation/",
  "0157": "Organization/Xiaomi/",
  "015d": "Organization/Estimote_Inc/"
};


// Bluetooth Low Energy iBeacons (128-bit UUIDs)
var ble_iBeacons = {
  "07775dd0111b11e491910800200c9a66": "Product/XY-Findables_Beacon/",
  "2f234454cf6d4a0fadf2f4911ba9ffa6": "Product/Radius-Networks_Beacon/",
  "3d4f13b4d1fd404980e5d3edcc840b69": "Product/Orange_Beacon/",
  "8deefbb9f7384297804096668bb44281": "Product/Roximity_Beacon/",
  "b9407f30f5f8466eaff925556b57fe6d": "Product/Estimote_Beacon/",
  "d0d3fa86ca7645ec9bd96af4927d7be1": "Product/Estimote_Beacon/",
  "dab59c4fa4d6ee286bfe8e0000bbc2bb": "Product/Cocoanut-Manor_eNote/",
  "e2c56db5dffb48d2b060d0f5a71096e0": "Product/Bright_Beacon/",
  "f0018b9b75094c31a9051a27d39c003c": "Product/Locoslab_Beacon/",
  "f3077abe93ac465aacf167f080cb7aef": "Product/The-Bubbles-Company_Beacon/",
  "f7826da64fa24e988024bc5b71e0893e": "Product/Kontakt_Beacon/"
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


module.exports.index = sniffypedia_index;
