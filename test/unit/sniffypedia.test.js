/**
 * Copyright reelyActive 2016-2021
 * We believe in an open Internet of Things
 */


const sniffypedia = require('../../lib/sniffypedia.js');
const assert = require ('assert');


// Input data for the scenario
const INPUT_DATA_INVALID_ID = 'n/a';
const INPUT_DATA_KNOWN_UUID = 'f7826da64fa24e988024bc5b71e0893e';
const INPUT_DATA_BLE_UUID16 = 'feaa';
const INPUT_DATA_BLE_UUID16_OPTIONS = { protocol: 'ble', type: 'uuid16' };


// Expected outputs for the scenario
const EXPECTED_DATA_INVALID_INPUT = null;
const EXPECTED_DATA_KNOWN_UUID = 'https://sniffypedia.org/Product/Kontakt_Beacon/';
const EXPECTED_DATA_BLE_UUID16 = 'https://sniffypedia.org/Product/Google_Eddystone/';


// Describe the scenario
describe('sniffypedia', function() {

  // Test the lookup function with no input data
  it('should handle no input data', function() {
    assert.deepEqual(sniffypedia.lookup(), EXPECTED_DATA_INVALID_INPUT);
  });

  // Test the lookup function with known UUID
  it('should handle a known UUID', function() {
    assert.deepEqual(sniffypedia.lookup(INPUT_DATA_KNOWN_UUID),
                     EXPECTED_DATA_KNOWN_UUID);
  });

  // Test the lookup function with a BLE UUID16
  it('should handle a BLE UUID16', function() {
    assert.deepEqual(sniffypedia.lookup(INPUT_DATA_BLE_UUID16,
                                        INPUT_DATA_BLE_UUID16_OPTIONS),
                     EXPECTED_DATA_BLE_UUID16);
  });

});