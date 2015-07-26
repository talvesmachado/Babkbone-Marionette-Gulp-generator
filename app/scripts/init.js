require.config({

    baseUrl: "/scripts",
    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main'],
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        TimelineLite : {
          deps: ['TweenLite'],
          exports: 'TimelineLite'
        }
    },

    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        backbone: '../../bower_components/backbone-amd/backbone',
        underscore: '../../bower_components/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',

        /* alias the bootstrap js lib */
        bootstrap: '../../bower_components/sass-bootstrap/dist/js/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/hbs/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../../bower_components/require-handlebars-plugin/hbs',

        TweenLite: '../../bower_components/gsap/src/uncompressed/TweenLite',
        TimelineLite: '../../bower_components/gsap/src/uncompressed/TimelineLite',
        TimelineMax: '../../bower_components/gsap/src/uncompressed/TimelineMax',
        },

    hbs: {
        disableI18n: true
    }
});
