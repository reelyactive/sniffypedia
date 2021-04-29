/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


const ble = require('./bluetoothlowenergy');
const uri = require('./uri');


const UUID = {
    "07775dd0111b11e491910800200c9a66": "/Product/XY-Findables_Beacon/",
    "0d60a2892039442198216b12c4274890": "/Product/Bluetooth_World_2017_Beacon/",
    "2f234454cf6d4a0fadf2f4911ba9ffa6": "/Product/Radius-Networks_Beacon/",
    "3d4f13b4d1fd404980e5d3edcc840b69": "/Product/Orange_Beacon/",
    "52052c11e701478299f58ce88dbb1500": "/Product/Allegion_ENGAGE/",
    "61687109905f443691f8e602f514c96d": "/Product/BlueCats_Beacon/",
    "6e400001b5a3f393e0a9e50e24dcca9e": "/Organization/Nordic_Semiconductor_ASA/",
    "7265656c794163746976652055554944": "/Product/reelyActive_RA-R436/",
    "7265656c7941707020416e64726f6964": "/Product/reelyActive_reelyApp-Android/",
    "7265656c7941707020666f7220694f53": "/Product/reelyActive_reelyApp-iOS/",
    "74278bdab64445208f0c720eaf059935": "/Product/Minew_Beacon/",
    "7a4385c9f7c74e229afd16d68fc588ca": "/Product/SocketMobile_S550/",
    "8deefbb9f7384297804096668bb44281": "/Product/Roximity_Beacon/",
    "adab0bd16e7d4601bda2bffaa68956ba": "/Product/Fitbit_Wearable/",
    "adab0cf56e7d4601bda2bffaa68956ba": "/Product/Fitbit_Wearable/",
    "adab71766e7d4601bda2bffaa68956ba": "/Product/Fitbit_Wearable/",
    "adabfb006e7d4601bda2bffaa68956ba": "/Product/Fitbit_Wearable/",
    "b9407f30f5f8466eaff925556b57fe6d": "/Product/Estimote_Beacon/",
    "cbbfe0e1f7f3420684e084cbb3d09dfc": "/Product/ASUS_Nexus-Player/",
    "d0d3fa86ca7645ec9bd96af4927d7be1": "/Product/Estimote_Beacon/",
    "d2d3f8ef9c994d9ca2b391c85d44326c": "/Product/Nest_Cam/",
    "d5060001a904deb947482c7f4a124842": "/Product/Thalmic-Labs_Myo/",
    "dab59c4fa4d6ee286bfe8e0000bbc2bb": "/Product/Cocoanut-Manor_eNote/",
    "e2c56db5dffb48d2b060d0f5a71096e0": "/Product/Bright_Beacon/",
    "f0018b9b75094c31a9051a27d39c003c": "/Product/Locoslab_Beacon/",
    "f02adfc026e711e49edc0002a5d5c51b": "/Product/Shortcut-Labs_FLIC/",
    "f3077abe93ac465aacf167f080cb7aef": "/Product/The-Bubbles-Company_Beacon/",
    "f7826da64fa24e988024bc5b71e0893e": "/Product/Kontakt_Beacon/"
};


/**
 * Lookup the given id with the given options to return a URI.
 * @param {String} id The identifier as a hexadecimal string.
 * @param {Object} options The lookup options, if any.
 * @return {String} The URI or null if unable to look up.
 */
function lookup(id, options) {
  options = options || {};

  if(!id) {
    return null;
  }

  let isSpecificProtocol = options.hasOwnProperty('protocol');

  if(isSpecificProtocol) {
    switch(options.protocol) {
      case 'ble':
        return ble.lookup(id, options);
    }
  }

  return uri.construct(UUID[id], options.origin);
}


module.exports.UUID = UUID;
module.exports.ORIGIN = uri.ORIGIN;
module.exports.ble = ble;
module.exports.lookup = lookup;