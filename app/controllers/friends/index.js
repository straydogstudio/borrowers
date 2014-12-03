import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortAscending: false,
	sortBy: 'fullName',
	sortProperties: Ember.computed('sortBy', function() {
		return [this.get('sortBy')];
	}),
	actions: {
		setSortBy: function(fieldName) {
			console.log('setting sort by to '+fieldName);
			this.set('sortBy', fieldName);
			this.toggleProperty('sortAscending');
			return false;
		}
	}
});