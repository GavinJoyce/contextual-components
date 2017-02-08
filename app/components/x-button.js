import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNameBindings: ['type'],
  attributeBindings: ['disabled'],
  type: 'normal',
  label: 'Untitled Button',
  isEnabled: true,
  disabled: Ember.computed('isEnabled', function() {
    let isEnabled = this.get('isEnabled');

    if(isEnabled === undefined) {
      return false;
    } else {
      return !isEnabled;
    }
  }),

  click() {
    let action = this.get('onClick');
    if(action) {
     	action(); 
    }
  }
});
