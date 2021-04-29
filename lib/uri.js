/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


const ORIGIN = 'https://sniffypedia.org';


/**
 * Construct a URI from the given URI component, if any.
 * @param {String} uriComponent The component of the URI, or the entire URI.
 * @param {String} origin The optional URI origin.
 * @return {String} The URI or null if unable to look up.
 */
function construct(uriComponent, origin) {
  if(!uriComponent) {
    return null;
  }

  let isPath = (uriComponent.indexOf('/') === 0);

  if(isPath) {
    return (origin || ORIGIN) + uriComponent;
  }

  return uriComponent;
}


module.exports.ORIGIN = ORIGIN;
module.exports.construct = construct;