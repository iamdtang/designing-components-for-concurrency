import Component from '@ember/component';
import fetch from 'fetch';

function callNext(iterator, component, data) {
  let yielded = iterator.next(data);

  if (yielded.done) {
    return;
  }

  yielded.value.then((data) => {
    if (component.isDestroyed) {
      console.log('object was destroyed', data);
    } else {
      callNext(iterator, component, data);
    }
  });
}

function task(generator) {
  return function() {
    let iterator = generator.call(this);
    callNext(iterator, this);
  };
}

export default Component.extend({
  fetchTrendingTopics: task(function* () {
    let response = yield fetch('/trending-topics');
    let topics = yield response.json();
    this.setProperties({ topics });
  }),
  didInsertElement() {
    // fetch('/trending-topics')
    //   .then((response) => response.json())
    //   .then((topics) => this.setProperties({ topics }));

    this.fetchTrendingTopics();
  }
});
