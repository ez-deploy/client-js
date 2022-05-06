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
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.EzDeployApiserver) {
      root.EzDeployApiserver = {};
    }
    root.EzDeployApiserver.IdentityApi = factory(root.EzDeployApiserver.ApiClient, root.EzDeployApiserver.Error, root.EzDeployApiserver.UserInfo);
  }
}(this, function(ApiClient, Error, UserInfo) {
  'use strict';

  /**
   * Identity service.
   * @module api/IdentityApi
   * @version 1.0.0
   */

  /**
   * Constructs a new IdentityApi. 
   * @alias module:api/IdentityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/IdentityApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create User
     * @param {module:model/UserInfo} body 
     * @param {module:api/IdentityApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    this.createUser = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Error;

      return this.apiClient.callApi(
        '/user/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/IdentityApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Info by id
     * @param {Number} id User id
     * @param {module:api/IdentityApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfo}
     */
    this.getUser = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserInfo;

      return this.apiClient.callApi(
        '/user/get', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/IdentityApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Login
     * @param {module:model/UserInfo} body 
     * @param {module:api/IdentityApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfo}
     */
    this.login = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserInfo;

      return this.apiClient.callApi(
        '/user/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/IdentityApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout
     * @param {module:api/IdentityApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.logout = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/logout', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the whoami operation.
     * @callback module:api/IdentityApi~whoamiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Current User's Info
     * @param {module:api/IdentityApi~whoamiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfo}
     */
    this.whoami = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserInfo;

      return this.apiClient.callApi(
        '/whoami', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
