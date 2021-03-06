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
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ServiceInfo'), require('../model/ServiceVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.EzDeployApiserver) {
      root.EzDeployApiserver = {};
    }
    root.EzDeployApiserver.ServiceApi = factory(root.EzDeployApiserver.ApiClient, root.EzDeployApiserver.Error, root.EzDeployApiserver.ServiceInfo, root.EzDeployApiserver.ServiceVersion);
  }
}(this, function(ApiClient, Error, ServiceInfo, ServiceVersion) {
  'use strict';

  /**
   * Service service.
   * @module api/ServiceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ServiceApi. 
   * @alias module:api/ServiceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createService operation.
     * @callback module:api/ServiceApi~createServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Service
     * @param {module:model/ServiceInfo} body 
     * @param {module:api/ServiceApi~createServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.createService = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createService");
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/service/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createServiceVersion operation.
     * @callback module:api/ServiceApi~createServiceVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Service Version
     * @param {module:model/ServiceVersion} body 
     * @param {module:api/ServiceApi~createServiceVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceVersion}
     */
    this.createServiceVersion = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createServiceVersion");
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
      var returnType = ServiceVersion;

      return this.apiClient.callApi(
        '/service/version/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteService operation.
     * @callback module:api/ServiceApi~deleteServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Service
     * @param {Number} id 
     * @param {module:api/ServiceApi~deleteServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.deleteService = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteService");
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

      var authNames = ['key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/service/delete', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getServiceVersion operation.
     * @callback module:api/ServiceApi~getServiceVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Service Version by version ID.
     * @param {Number} serviceId 
     * @param {Number} versionId 
     * @param {module:api/ServiceApi~getServiceVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceVersion}
     */
    this.getServiceVersion = function(serviceId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getServiceVersion");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getServiceVersion");
      }


      var pathParams = {
      };
      var queryParams = {
        'service_id': serviceId,
        'version_id': versionId,
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
      var returnType = ServiceVersion;

      return this.apiClient.callApi(
        '/service/version/get', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listService operation.
     * @callback module:api/ServiceApi~listServiceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Service by project ID, service ID, service name.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.projectId 
     * @param {Number} opts.serviceId 
     * @param {String} opts.serviceName 
     * @param {module:api/ServiceApi~listServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listService = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'project_id': opts['projectId'],
        'service_id': opts['serviceId'],
        'service_name': opts['serviceName'],
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/service/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listServicePod operation.
     * @callback module:api/ServiceApi~listServicePodCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Service Pod by service ID.
     * @param {Number} serviceId 
     * @param {module:api/ServiceApi~listServicePodCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listServicePod = function(serviceId, callback) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listServicePod");
      }


      var pathParams = {
      };
      var queryParams = {
        'service_id': serviceId,
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/service/pod/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listServiceVersion operation.
     * @callback module:api/ServiceApi~listServiceVersionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Service Version by service ID.
     * @param {Number} serviceId 
     * @param {module:api/ServiceApi~listServiceVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.listServiceVersion = function(serviceId, callback) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listServiceVersion");
      }


      var pathParams = {
      };
      var queryParams = {
        'service_id': serviceId,
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/service/version/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceDescription operation.
     * @callback module:api/ServiceApi~updateServiceDescriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Service Description
     * @param {module:model/ServiceInfo} body 
     * @param {module:api/ServiceApi~updateServiceDescriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.updateServiceDescription = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServiceDescription");
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/service/update/desc', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateServiceVersion operation.
     * @callback module:api/ServiceApi~updateServiceVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Service Version
     * @param {module:model/ServiceInfo} body 
     * @param {module:api/ServiceApi~updateServiceVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfo}
     */
    this.updateServiceVersion = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateServiceVersion");
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
      var returnType = ServiceInfo;

      return this.apiClient.callApi(
        '/service/update/deploy', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
