import Em from 'ember';

export default Em.Controller.extend({
  actions: {
    log(message) {
      console.log(message);
    }
  }
});
