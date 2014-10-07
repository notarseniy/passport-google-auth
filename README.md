# Passport-Google-Auth
[![NPM version](https://badge.fury.io/js/passport-google-auth.svg)](http://badge.fury.io/js/passport-google-auth)
[![Build Status](https://travis-ci.org/RiptideCloud/passport-google-auth.svg?branch=master)](https://travis-ci.org/RiptideCloud/passport-google-auth)
[![Coverage Status](https://img.shields.io/coveralls/RiptideCloud/passport-google-auth.svg?branch=master)](https://coveralls.io/r/RiptideCloud/passport-google-auth)

[Passport](http://passportjs.org/) strategies for authenticating with [Google](http://www.google.com/)
using OAuth 2.0.

This module lets you authenticate using Google in your Node.js applications.
By plugging into Passport, Google authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-google-auth

## Usage

### Configure Strategy

The Google authentication strategy authenticates users using a Google
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```js
var passport = require('passport'),
    GoogleStrategy = require('passport-google-auth').Strategy;

passport.use(new GoogleOAuth2Strategy({
    clientID: '123-456-789',
    clientSecret: 'shhh-its-a-secret',
    callbackURL: 'https://www.example.com/auth/example/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function (err, user) {
      done(err, user);
    });
  }
));
```

If the `passReqToCallback` options is passed and it is true, then the `verify` callback signature
will look like the following instead.

```js
var passport = require('passport'),
    GoogleStrategy = require('passport-google-auth').Strategy;

passport.use(new GoogleOAuth2Strategy({
    clientID: '123-456-789',
    clientSecret: 'shhh-its-a-secret',
    callbackURL: 'https://www.example.com/auth/example/callback'
  },
  function(req, accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function (err, user) {
      done(err, user);
    });
  }
));
```

#### Options
The `Strategy` can be configured with the following options.

* `clientId`          `String` identifies the client to the service provider **Required**
* `clientSecret`      `String` secret used to establish ownershup of the client identifier **Required**
* `callbackURL`       `String` URL to which the service provider will redirect the user after obtaining authorization. **Required**
* `accessType`        `String` Type of access to be requested from the service provider. Can be `online` (default) or `offline` (gets refresh_token) _Optional_
* `scope`             `String` or `Array` representing the permission scopes to request access to. (default: `https://www.googleapis.com/auth/userinfo.email`) _Optional_
* `skipUserProfile`   `Boolean` If set to false, profile information will be retrieved from Google+. (default: `true`) _Optional_
* `passReqToCallback` `Boolean` When `true`, `req` is the first argument to the verify callback (default: `false`)

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'google'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
var express = require('express'),
    app = express();

app.get('/login', passport.authenticate('google'));

app.get('/auth/callback/google', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect to your app.
        res.redirect('/');
    }
);
```

## License

[The MIT License](http://opensource.org/licenses/MIT)