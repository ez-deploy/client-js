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
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/GetTicketReq'), require('../model/SSHPodTicket'));
  } else {
    // Browser globals (root is window)
    if (!root.EzDeployApiserver) {
      root.EzDeployApiserver = {};
    }
    root.EzDeployApiserver.PodApi = factory(root.EzDeployApiserver.ApiClient, root.EzDeployApiserver.Error, root.EzDeployApiserver.GetTicketReq, root.EzDeployApiserver.SSHPodTicket);
  }
}(this, function(ApiClient, Error, GetTicketReq, SSHPodTicket) {
  'use strict';

  /**
   * Pod service.
   * @module api/PodApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PodApi. 
   * @alias module:api/PodApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkPodTicket operation.
     * @callback module:api/PodApi~checkPodTicketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHPodTicket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check Pod Ticket, and delete it
     * @param {String} ticketValue 
     * @param {module:api/PodApi~checkPodTicketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHPodTicket}
     */
    this.checkPodTicket = function(ticketValue, callback) {
      var postBody = null;

      // verify the required parameter 'ticketValue' is set
      if (ticketValue === undefined || ticketValue === null) {
        throw new Error("Missing the required parameter 'ticketValue' when calling checkPodTicket");
      }


      var pathParams = {
      };
      var queryParams = {
        'ticket_value': ticketValue,
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
      var returnType = SSHPodTicket;

      return this.apiClient.callApi(
        '/visit/pod/ticket/check', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPodTicket operation.
     * @callback module:api/PodApi~createPodTicketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHPodTicket} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Visit Pod Once Ticket
     * @param {module:model/GetTicketReq} body 
     * @param {module:api/PodApi~createPodTicketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHPodTicket}
     */
    this.createPodTicket = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPodTicket");
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

      var authNames = ['key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SSHPodTicket;

      return this.apiClient.callApi(
        '/visit/pod/ticket/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
