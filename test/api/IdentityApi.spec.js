/*
 * ez-deploy apiserver.
 * apiserver
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EzDeployApiserver);
  }
}(this, function(expect, EzDeployApiserver) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EzDeployApiserver.IdentityApi();
  });

  describe('(package)', function() {
    describe('IdentityApi', function() {
      describe('createUser', function() {
        it('should call createUser successfully', function(done) {
          // TODO: uncomment, update parameter values for createUser call and complete the assertions
          /*
          var body = new EzDeployApiserver.UserInfo();
          body.id = 1;
          body.userName = "foobar";
          body.password = "foobar123";
          body.email = "foo@bar.com";

          instance.createUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzDeployApiserver.Error);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("error message");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUser', function() {
        it('should call getUser successfully', function(done) {
          // TODO: uncomment, update parameter values for getUser call and complete the assertions
          /*
          var id = 56;

          instance.getUser(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzDeployApiserver.UserInfo);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.userName).to.be.a('string');
            expect(data.userName).to.be("foobar");
            expect(data.password).to.be.a('string');
            expect(data.password).to.be("foobar123");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("foo@bar.com");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('login', function() {
        it('should call login successfully', function(done) {
          // TODO: uncomment, update parameter values for login call and complete the assertions
          /*
          var body = new EzDeployApiserver.UserInfo();
          body.id = 1;
          body.userName = "foobar";
          body.password = "foobar123";
          body.email = "foo@bar.com";

          instance.login(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzDeployApiserver.UserInfo);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.userName).to.be.a('string');
            expect(data.userName).to.be("foobar");
            expect(data.password).to.be.a('string');
            expect(data.password).to.be("foobar123");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("foo@bar.com");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('logout', function() {
        it('should call logout successfully', function(done) {
          // TODO: uncomment logout call
          /*

          instance.logout(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('whoami', function() {
        it('should call whoami successfully', function(done) {
          // TODO: uncomment whoami call and complete the assertions
          /*

          instance.whoami(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzDeployApiserver.UserInfo);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(1);
            expect(data.userName).to.be.a('string');
            expect(data.userName).to.be("foobar");
            expect(data.password).to.be.a('string');
            expect(data.password).to.be("foobar123");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("foo@bar.com");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
