import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		sortBy: {
			refreshModel: true
		},
		sortAscending: {
			refreshModel: true
		}
	},
	model: function() {
		return this.store.find('friend');
	},
	actions: {
	}
});
