(function (should, sinon, GoogleOAuth2Strategy) {
    'use strict';
    /* jshint unused: false */
    /* jshint -W030 */
    describe('Google OAuth 2.0 Strategy', function () {
        it('should require the `verify` callback', function () {
            var strategy = new GoogleOAuth2Strategy({}).should.throw('GoogleOAuth2Strategy requires a verify callback');
        });
        it('should require the `clientId`', function () {
            var strategy = new GoogleOAuth2Strategy(
                {

                },
                function () {
                    return '';
                }).should.throw('GoogleOAuth2Strategy requires a [clientId]');
        });
        it('should require the `clientId` to be a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 42
                },
                function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [clientId] to be a [string] but it was a [number]');
        });
        it('should require the `clientSecret`', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'H2G2'
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy requires a [clientSecret]');
        });
        it('should require the `clientSecret` to be a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Always Carry a Towel',
                    clientSecret: 42
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [clientSecret] to be a [string] but it was a [number]');
        });
        it('should require the `callbackURL`', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Toy Story 3 Was Okay',
                    clientSecret: 'Darth Vader is Luke\'s father'
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy requires a [callbackURL]');
        });
        it('should require the `callbackURL` to be a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 42
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [callbackURL] to be a [string] but it was a [number]');
        });
        it('should be able to instantiate the Strategy', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool'
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        it('should require the `accessType` to be a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    accessType: 42
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [accessType] to be a [string] but it was a [number]');
        });
        it('should be able to set the `accessType` to a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    accessType: 'I\'m a String'
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        it('should require the `scope` to be a String or Array', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    scope: 42
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [scope] to be a [array or string] but it was a [number]');
        });
        it('should be able to set the `scope` to a String', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    scope: 'I\'m a String'
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        it('should be able to set the `scope` to an Array', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    scope: [
                        'I\'m', 'an', 'Array'
                    ]
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        it('should require `skipUserProfile` to be a Boolean', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    skipUserProfile: 'Bork Bork Bork!'
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [skipUserProfile] to be a [boolean] but it was a [string]');
        });
        it('should be able to set `skipUserProfile` to a Boolean', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    skipUserProfile: true
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        it('should require `passReqToCallback` to be a Boolean', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    passReqToCallback: 'Bork Bork Bork!'
                }, function () {
                    return '';
                }
            ).should.throw('GoogleOAuth2Strategy expects [passReqToCallback] to be a [boolean] but it was a [string]');
        });
        it('should be able to set `passReqToCallback` to a Boolean', function () {
            var strategy = new GoogleOAuth2Strategy(
                {
                    clientId: 'Odoyle Rules!',
                    clientSecret: 'Darth Vader is Luke\'s father',
                    callbackURL: 'Bow Ties are cool',
                    passReqToCallback: true
                }, function () {
                    return '';
                }
            ).should.not.throw();
            strategy.should.be.ok;
        });
        //TODO: Add tests for the strategy itself and mocks for it also.
    });
}(require('should'), require('sinon'), require('../index').Strategy));
