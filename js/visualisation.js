/**
 * Copyright reelyActive 2016-2026
 * We believe in an open Internet of Things
 */

cormorant.retrieveStory(window.location.href, {}, (story) => {
  if(story) {
    cuttlefishStory.render(story, storyRender);
    storyRaw.textContent = JSON.stringify(story, null, 2);
  }
});