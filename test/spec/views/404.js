(function() {
	'use strict';

	var root = this;

	root.define([
		'views/404'
		],
		function( 404 ) {

			describe('404 View', function () {

				it('should be an instance of 404 View', function () {
					var 404 = new 404();
					expect( 404 ).to.be.an.instanceof( 404 );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );