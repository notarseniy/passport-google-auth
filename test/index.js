(function (should, lib) {
    'use strict';
    /* jshint -W030 */
    describe('Passport Module', function () {
        it('should export the Strategy', function () {
            lib.Strategy.should.be.a.Function;
        });
    });
}(require('should'), require('../index')));
