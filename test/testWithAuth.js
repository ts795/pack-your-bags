var sinon = require("sinon");
var assert = require('assert');
var withAuth = require('../utils/auth');
describe('withAuth', function() {
   describe('withAuthWhenLoggedIn', function() {
    it('should go to next when the user is loggedin', function() {
        var req = {session: {loggedIn: true}}
        var res = sinon.fake();
        var next = sinon.fake();
        withAuth(req, res, next)
    assert(next.calledOnce);
    });
    it('if youre not logged in, it should redirect to /', function() {
        var req = {session: {loggedIn: false}}
        var res = {redirect: sinon.fake()};
        var next = sinon.fake();
        withAuth(req, res, next)
    assert(res.redirect.calledWith("/"));
    });

  });
});
