define([
	'backbone',
	'hbs!tmpl/404'
],
function(Backbone, Template ){
    'use strict';

	return Marionette.LayoutView.extend({
		template: Template,
		tagName: 'div',
		initialize: function() {
			console.log("initialize a Homepage View");
		}
	});
});
