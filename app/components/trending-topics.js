import Component from '@ember/component';
import fetch from 'fetch';

export default Component.extend({
  didInsertElement() {
    fetch('/trending-topics')
      .then((response) => response.json())
      .then((topics) => this.setProperties({ topics }));
  }
});
