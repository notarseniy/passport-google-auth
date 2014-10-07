(function (should, lib) {
    describe('Passport Module', function () {
        it('should export the Strategy', function () {
            lib.Strategy.should.be.a.Function;
        });
    });
}(require('should'), require('../index')));