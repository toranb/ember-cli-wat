import Ember from 'ember';

export default Ember.Component.extend({
  focus: false,
  didInsertElement: function() {
      console.log('did insert element invoked');
      var thing = this.$('textarea');
      console.log(thing);
  },
  willDestroyElement: function() {
    console.log('will destroy invoked');
    this.$('textarea').destroy();
  },
  keyUp: function() {
    console.log('keyup invoked');
  }
});
