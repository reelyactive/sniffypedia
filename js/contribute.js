/*
 * This Sniffypedia is made available under the Open Database License:
 * http://opendatacommons.org/licenses/odbl/1.0/.
 * Any rights in individual contents of the database are licensed under
 * Creative Commons Attribution-ShareAlike 4.0 International:
 * https://creativecommons.org/licenses/by-sa/4.0/
 */


fetchButton.addEventListener('click', handleFetch);
productName.addEventListener('input', handleProduct);
productManufacturer.addEventListener('input', handleProduct);
productModel.addEventListener('input', handleProduct);
productUrl.addEventListener('input', handleProduct);
productImageUrl.addEventListener('input', handleProduct);


function handleFetch(event) {
  try {
    new URL(urlToFetch.value);
    cormorant.retrieveStory(urlToFetch.value, {}, (story) => {
      if(story) {
        storyRaw.textContent = JSON.stringify(story, null, 2);
      }
      else {
        storyRaw.textContent = 'Fetch did not return JSON-LD';
      }
    });
  }
  catch(error) {
    storyRaw.textContent = 'Not a valid URL.';
  }
}


function handleProduct(event) {
  let story = {
    "@context": {
      "schema": "http://schema.org/"
    },
    "@graph": [
      {
        "@id": "product",
        "@type": "schema:Product"
      }
    ]
  };

  if(productName.value) {
    story["@graph"][0]["schema:name"] = productName.value;
  }
  if(productManufacturer.value) {
    story["@graph"][0]["schema:model"] = productManufacturer.value;
  }
  if(productModel.value) {
    story["@graph"][0]["schema:model"] = productModel.value;
  }
  if(productUrl.value) {
    story["@graph"][0]["schema:url"] = productUrl.value;
  }
  if(productImageUrl.value) {
    story["@graph"][0]["schema:image"] = productImageUrl.value;
  }

  productStory.textContent = JSON.stringify(story, null, 2);
}


handleProduct();