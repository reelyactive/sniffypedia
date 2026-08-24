/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


const SNIFFYPEDIA_STORY = {
  "@context": {
    "schema": "http://schema.org/"
  },
  "@graph": [
    {
      "@id": "product",
      "@type": "schema:Product",
      "schema:name": "Sniffypedia",
      "schema:image": "https://sniffypedia.org/images/working-logo.png"
    }
  ]
};
let selectedProtocol = ble;


identifierSelect.addEventListener('change', updateIdentifierType);
valueSelect.addEventListener('change', handleIdentifierSelection);
searchName.addEventListener('input', handleSearch);


// Update the identifier option values based on the selected identifier type
function updateIdentifierType(event) {
  identifierValues = selectedProtocol[identifierSelect.value];
  valueSelect.innerHTML = '';

  let optionsFragment = document.createDocumentFragment();
  let option = document.createElement('option');
  option.textContent = "Select";
  option.selected = true;

  optionsFragment.appendChild(option);

  Object.entries(identifierValues).forEach(([key, value]) => {
    option = document.createElement('option');
    option.value = value;
    option.textContent = key;
    optionsFragment.appendChild(option);
  });

  valueSelect.appendChild(optionsFragment);
}


// Update the URL based on the selected identifier value
function handleIdentifierSelection(event) {
  selectedUrl.textContent = valueSelect.value;
  selectedUrl.href = valueSelect.value;
  searchResult.hidden = false;
}


// Update the URL based on the typed search
function handleSearch(event) {
  if(searchName.value.length >= 3) {
    for(protocolName in sniffypedia_index) {
      for(type in sniffypedia_index[protocolName]) {
        let values = Object.values(sniffypedia_index[protocolName][type]);
        let matches = values.filter(item => item.includes(searchName.value));

        if(matches.length > 0) {
          selectedUrl.textContent = matches[0];
          selectedUrl.href = matches[0];
          searchResult.hidden = false;
          return;
        }
      }
    }
  }
}


updateIdentifierType();
cuttlefishStory.render(SNIFFYPEDIA_STORY, storyRender);