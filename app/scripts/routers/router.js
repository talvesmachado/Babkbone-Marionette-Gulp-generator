define([
        'backbone',
        'communicator'
    ],
    function(Backbone, Communicator) {
        'use strict';

        return Backbone.Router.extend({
            initialize: function( options ) {
                console.log("Initialize The ROUTER");
            },
            /* Backbone routes hash */
            routes: {
                "": "homeRoute",
                "home": "homeRoute",
                "*other": "defaultRoute",
            },
            defaultRoute: function() {
                Communicator.mediator.trigger("ROUTER:DEFAULT");
            },
            homeRoute: function() {
                Communicator.mediator.trigger("ROUTER:HOME");
               
            }
        });
    });