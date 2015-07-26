define([
	'backbone',
	'TimelineLite',
	'communicator',
	'views/homepage',
	'views/404',
	'routers/router'
],

function( Backbone, TimelineLite, Communicator, homepage, notfound, router) {
    'use strict';

	var App = new Marionette.Application();
	var mainRegion;

	/* Add application regions here */
	//App.addRegions({mainRegion: "#main-wrapper"});

	/* Add initializers here */
	App.addInitializer( function () {
		/*App.getRegion('mainRegion').show(new homepage());
		var tl = new TimelineLite();
		tl.fromTo($("#main-wrapper"), 10, { opacity:0}, { opacity:1}); 
		*/

	});
	App.on('start', function() {
		Communicator.mediator.trigger("APP:START");

		mainRegion = Communicator.reqres.request('RM:addRegion', "mainRegion","#main-wrapper");
		
		App.router = new router();
		Backbone.history.start({pushState: false});

	});



	Communicator.mediator.on("ROUTER:DEFAULT", function(){
		mainRegion.show(new notfound());
	});
	Communicator.mediator.on("ROUTER:HOME", function(){
		mainRegion.show(new homepage());
	});



	return App;
});
