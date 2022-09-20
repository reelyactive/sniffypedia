/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


const uri = require('./uri');
const utils = require('./utils');


// Reference:
// https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers
const COMPANY_IDENTIFIERS = {
    "0003": "/Organization/IBM_Corporation/",
    "0004": "/Organization/Toshiba_Corporation/",
    "0006": "/Organization/Microsoft/",
    "000a": "/Organization/CSR/",
    "0044": "/Organization/Socket_Mobile/",
    "004c": "/Organization/Apple_Inc/",
    "0059": "/Organization/Nordic_Semiconductor_ASA/",
    "005f": "/Organization/Wicentric_Inc/",
    "0065": "/Organization/HP_Inc/",
    "006b": "/Organization/Polar_Electro_Oy/",
    "0075": "/Organization/Samsung/",
    "0077": "/Organization/Laird_Connectivity/",
    "0078": "/Organization/Nike_Inc/",
    "0087": "/Organization/Garmin_International/",
    "008a": "/Organization/Jawbone/",
    "008c": "/Organization/Gimbal_Inc/",
    "009e": "/Organization/Bose_Corporation/",
    "00b5": "/Organization/Swirl_Networks_Inc/",
    "00bd": "/Organization/Aplix_Corporation/",
    "00c4": "/Organization/LG_Electronics/",
    "00c7": "/Organization/Quuppa_Oy/",
    "00cc": "/Organization/Beats_Electronics/",
    "00cd": "/Organization/Microchip_Technology_Inc/",
    "00d2": "/Organization/Dialog_Semiconductor_BV/",
    "00df": "/Organization/Misfit_Inc/",
    "00e0": "/Organization/Google/",
    "00f0": "/Organization/PayPal_Inc/",
    "0104": "/Organization/PLUS_Location_Systems/",
    "011b": "/Organization/Aruba_Networks/",
    "012d": "/Organization/Sony_Corporation/",
    "0131": "/Organization/Cypress_Semiconductor_Corporation/",
    "0136": "/Organization/Seed_Labs_Inc/",
    "013a": "/Organization/Tencent_Holdings_Limited/",
    "0147": "/Organization/Mighty_Cast_Inc/",
    "0154": "/Organization/Pebble_Technology_Corporation/",
    "0157": "/Organization/Xiaomi/",
    "015d": "/Organization/Estimote_Inc/",
    "015e": "/Organization/UniKey_Technologies_Inc/",
    "0171": "/Organization/Amazon_com_Services_Inc/",
    "0180": "/Organization/Gigaset_Communications_GmbH/",
    "0195": "/Organization/Zuli_Inc/",
    "01ab": "/Organization/Facebook_Inc/",
    "01b5": "/Organization/Nest_Labs/",
    "01d1": "/Organization/August_Home_Inc/",
    "01da": "/Organization/Logitech_International_SA/",
    "0211": "/Organization/Telink_Semiconductor_Co_Ltd/",
    "0225": "/Organization/Nestle_Nespresso_SA/",
    "026c": "/Organization/Efento_Sp_zoo/",
    "027d": "/Organization/Huawei_Technologies_Co_Ltd/",
    "02b2": "/Product/OURA_Ring/",
    "02d3": "/Organization/Powercast_Corporation/",
    "02f2": "/Organization/GoPro_Inc/",
    "0309": "/https://www.dolby.com/",
    "0399": "/Organization/Nikon_Corporation/",
    "03c2": "/Organization/Snapchat_Inc/",
    "03da": "/Organization/EnOcean_GmbH/",
    "0499": "/Organization/Ruuvi_Innovations_Ltd/",
    "0500": "/Organization/Wiliot_Ltd/",
    "0528": "/Organization/Lunera_Inc/",
    "0583": "/Organization/Code_Blue_Communications_Inc/",
    "0590": "/Organization/Pur3_Ltd/",
    "05a7": "/Organization/Sonos_Inc/",
    "060f": "/Organization/Signify/",
    "0639": "/Organization/Shenzhen_Minew_Technologies_Co_Ltd/"
};

// Reference:
// https://www.bluetooth.com/specifications/assigned-numbers/16-bit-uuids-for-members
const UUID16 = {
    "fefd": "/Organization/Gimbal_Inc/",
    "fefc": "/Organization/Gimbal_Inc/",
    "fefa": "/Organization/PayPal_Inc/",
    "fef9": "/Organization/PayPal_Inc/",
    "fef8": "/Organization/Aplix_Corporation/",
    "fef7": "/Organization/Aplix_Corporation/",
    "fef6": "/Organization/Wicentric_Inc/",
    "fef5": "/Organization/Dialog_Semiconductor_BV/",
    "fef4": "/Organization/Google/",
    "fef3": "/Organization/Google/",
    "fef2": "/Organization/CSR/",
    "fef1": "/Organization/CSR/",
    "feef": "/Organization/Polar_Electro_Oy/",
    "feee": "/Organization/Polar_Electro_Oy/",
    "feed": "/Product/Tile_Tile/",
    "feec": "/Product/Tile_Tile/",
    "feeb": "/Organization/Swirl_Networks_Inc/",
    "feea": "/Organization/Swirl_Networks_Inc/",
    "fee7": "/Organization/Tencent_Holdings_Limited/",
    "fee6": "/Organization/Seed_Labs_Inc/",
    "fee5": "/Organization/Nordic_Semiconductor_ASA/",
    "fee4": "/Organization/Nordic_Semiconductor_ASA/",
    "fedd": "/Organization/Jawbone/",
    "fedc": "/Organization/Jawbone/",
    "fed9": "/Organization/Pebble_Technology_Corporation/",
    "fed4": "/Organization/Apple_Inc/",
    "fed3": "/Organization/Apple_Inc/",
    "fed2": "/Organization/Apple_Inc/",
    "fed1": "/Organization/Apple_Inc/",
    "fed0": "/Organization/Apple_Inc/",
    "fecf": "/Organization/Apple_Inc/",
    "fece": "/Organization/Apple_Inc/",
    "fecd": "/Organization/Apple_Inc/",
    "fecc": "/Organization/Apple_Inc/",
    "fecb": "/Organization/Apple_Inc/",
    "feca": "/Organization/Apple_Inc/",
    "fec9": "/Organization/Apple_Inc/",
    "fec8": "/Organization/Apple_Inc/",
    "fec7": "/Organization/Apple_Inc/",
    "fec4": "/Organization/PLUS_Location_Systems/",
    "febe": "/Organization/Bose_Corporation/",
    "feba": "/Organization/Tencent_Holdings_Limited/",
    "feb9": "/Organization/LG_Electronics/",
    "feb8": "/Organization/Facebook_Inc/",
    "feb7": "/Organization/Facebook_Inc/",
    "feb2": "/Organization/Microsoft/",
    "feb0": "/Organization/Nest_Labs/",
    "feaf": "/Organization/Nest_Labs/",
    "feaa": "/Product/Google_Eddystone/",
    "fea6": "/Organization/GoPro_Inc/",
    "fea5": "/Organization/GoPro_Inc/",
    "fea0": "/Product/Google_Chromecast/",
    "fe9f": "/Product/Google_Chromecast/",
    "fe9e": "/Organization/Dialog_Semiconductor_BV/",
    "fe9a": "/Organization/Estimote_Inc/",
    "fe95": "/Organization/Xiaomi/",
    "fe8f": "/Organization/CSR/",
    "fe8b": "/Organization/Apple_Inc/",
    "fe8a": "/Organization/Apple_Inc/",
    "fe86": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fe78": "/Organization/HP_Inc/",
    "fe77": "/Organization/HP_Inc/",
    "fe65": "/Organization/CHIPOLO/",
    "fe61": "/Organization/Logitech_International_SA/",
    "fe59": "/Organization/Nordic_Semiconductor_ASA/",
    "fe58": "/Organization/Nordic_Semiconductor_ASA/",
    "fe56": "/Organization/Google/",
    "fe55": "/Organization/Google/",
    "fe50": "/Organization/Google/",
    "fe4b": "/Organization/Signify/",
    "fe3b": "https://www.dolby.com/",
    "fe36": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fe35": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fe33": "/Organization/CHIPOLO/",
    "fe2c": "/Organization/Google/",
    "fe27": "/Organization/Google/",
    "fe26": "/Organization/Google/",
    "fe25": "/Organization/Apple_Inc/",
    "fe24": "/Organization/August_Home_Inc/",
    "fe21": "/Organization/Bose_Corporation/",
    "fe1f": "/Organization/Garmin_International/",
    "fe19": "/Organization/Google/",
    "fe15": "/Organization/Amazon_com_Services_Inc/",
    "fe13": "/Organization/Apple_Inc/",
    "fe0f": "/Organization/Signify/",
    "fe08": "/Organization/Microsoft/",
    "fe07": "/Organization/Sonos_Inc/",
    "fe03": "/Organization/Amazon_com_Services_Inc/",
    "fe00": "/Organization/Amazon_com_Services_Inc/",
    "fdf7": "/Organization/HP_Inc/",
    "fdf0": "/Organization/Google/",
    "fdee": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fde2": "/Organization/Google/",
    "fddb": "/Organization/Samsung/",
    "fdd2": "/Organization/Bose_Corporation/",
    "fdd1": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fdd0": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fdb4": "/Organization/HP_Inc/",
    "fdaf": "/Organization/Wiliot_Ltd/",
    "fdab": "/Organization/Xiaomi/",
    "fdaa": "/Organization/Xiaomi/",
    "fd9c": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fd9b": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fd9a": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fd96": "/Organization/Google/",
    "fd8c": "/Organization/Google/",
    "fd8a": "/Organization/Signify/",
    "fd87": "/Organization/Google/",
    "fd84": "/Product/Tile_Tile/",
    "fd82": "/Organization/Sony_Corporation/",
    "fd7e": "/Organization/Samsung/",
    "fd7c": "/Organization/Toshiba_Corporation/",
    "fd72": "/Organization/Logitech_International_SA/",
    "fd6f": "/Service/Contact_Tracing/",
    "fd6c": "/Organization/Samsung/",
    "fd69": "/Organization/Samsung/",
    "fd63": "/Product/Fitbit_Wearable/",
    "fd62": "/Product/Fitbit_Wearable/",
    "fd5a": "/Organization/Samsung/",
    "fd59": "/Organization/Samsung/",
    "fd4b": "/Organization/Samsung/",
    "fd44": "/Organization/Apple_Inc/",
    "fd43": "/Organization/Apple_Inc/",
    "fd36": "/Organization/Google/",
    "fd31": "/Organization/LG_Electronics/",
    "fd2d": "/Organization/Xiaomi/",
    "fd2a": "/Organization/Sony_Corporation/",
    "fd22": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fd21": "/Organization/Huawei_Technologies_Co_Ltd/",
    "fd1d": "/Organization/Samsung/",
    "fd03": "/Organization/Quuppa_Oy/",
    "fcf1": "/Organization/Google/",
    "fce1": "/Organization/Sony_Corporation/"
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

  let hexId;
  let isSpecificType = options.hasOwnProperty('type');

  if(isSpecificType) {
    switch(options.type) {
      case 'uuid16':
        hexId = utils.convertToHexString(id, 2);
        return uri.construct(UUID16[hexId], options.origin);
      case 'companyIdentifier':
        hexId = utils.convertToHexString(id, 2);
        return uri.construct(COMPANY_IDENTIFIERS[hexId], options.origin);
    }
  }

  return null;
}


module.exports.COMPANY_IDENTIFIERS = COMPANY_IDENTIFIERS;
module.exports.UUID16 = UUID16;
module.exports.lookup = lookup;
