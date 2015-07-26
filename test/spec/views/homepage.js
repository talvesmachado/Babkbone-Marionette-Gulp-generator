(function() {
	'use strict';

	var root = this;

	root.define([
		'views/homepage'
		],
		function( Homepage ) {

			describe('Homepage View', function () {

				it('should be an instance of Homepage View', function () {
					var homepage = new Homepage();
					expect( homepage ).to.be.an.instanceof( Homepage );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );