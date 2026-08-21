/**
 * Copyright reelyActive 2016-2023
 * We believe in an open Internet of Things
 */


let cuttlefishStory = (function() {

  // Internal constants

  // Render a story
  function render(story, target, options) {
    let element = determinePrimaryElement(story);
    let title = determineElementTitle(element);
    let imageUrl = determineElementImageUrl(element);
    let isRenderableStory = (title || imageUrl);
    let card = new DocumentFragment();

    if(isRenderableStory) {
      let cardComponents = [];

      if(imageUrl) {
        let img = createElement('img', 'card-img-top');
        img.setAttribute('src', imageUrl);
        cardComponents.push(img);
      }

      if(title) {
        let cardTitle = createElement('h5', 'card-title', title);
        let cardBody = createElement('div', 'card-body', cardTitle);
        cardComponents.push(cardBody);
      }

      card = createElement('div', 'card', cardComponents);
    }

    if(target) {
      target.replaceChildren(card);
    }

    return card;
  }

  // Determine the primary story element, or empty object if none
  function determinePrimaryElement(story) {
    if(story && story.hasOwnProperty('@graph') &&
       Array.isArray(story['@graph'])) {
      return story['@graph'][0];
    }

    return {};
  }

  // Determine the title of the story
  function determineTitle(story) {
    let element = determinePrimaryElement(story);

    return determineElementTitle(element);
  }

  // Determine the title of the element
  function determineElementTitle(element) {
    if(element.hasOwnProperty("schema:name")) {
      return element["schema:name"];
    }
    else if(element.hasOwnProperty("schema:givenName") ||
            element.hasOwnProperty("schema:familyName")) {
      return (element["schema:givenName"] || '') + ' ' +
             (element["schema:familyName"] || '');
    }
    else {
      return null;
    }
  }

  // Determine the image URL of the story
  function determineImageUrl(story) {
    let element = determinePrimaryElement(story);

    return determineElementImageUrl(element);
  }

  // Determine the image URL of the element
  function determineElementImageUrl(element) {
    if(element.hasOwnProperty("schema:image")) {
      return element["schema:image"];
    }
    else if(element.hasOwnProperty("schema:logo")) {
      return element["schema:logo"];
    }

    return null;
  }

  // Create an element as specified, appending optional content as child(ren)
  function createElement(elementName, classNames, content) {
    let element = document.createElement(elementName);

    if(classNames) {
      element.setAttribute('class', classNames);
    }

    if((content instanceof Element) || (content instanceof DocumentFragment)) {
      element.appendChild(content);
    }
    else if(Array.isArray(content)) {
      content.forEach(function(item) {
        if((item instanceof Element) || (item instanceof DocumentFragment)) {
          element.appendChild(item);
        }
        else {
          element.appendChild(document.createTextNode(item));
        }
      });
    }
    else if(content) {
      element.appendChild(document.createTextNode(content));
    }

    return element;
  }

  // Expose the following functions and variables
  return {
    render: render,
    determineImageUrl: determineImageUrl,
    determineTitle: determineTitle
  }

}());
