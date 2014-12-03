import Ember from 'ember';

export default Ember.Controller.extend({
	hasDescription: Ember.computed.notEmpty('model.description'),
	hasNotes: Ember.computed.notEmpty('model.notes'),
	isValid: Ember.computed.and('hasDescription','hasNotes'),
	actions: {
		save: function() {
			var model = this.get('model');
			console.log(model);
			console.log(model.description);
			console.log(model.notes);
			if (this.get('isValid')) {
				return true;
			} else {
				this.set('errorMessage', 'You have to fill in all the fields.');
				return false;
			}
		}
	}
});