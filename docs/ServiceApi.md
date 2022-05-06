# EzDeployApiserver.ServiceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServiceApi.md#createService) | **POST** /service/create | 
[**createServiceVersion**](ServiceApi.md#createServiceVersion) | **POST** /service/version/create | 
[**deleteService**](ServiceApi.md#deleteService) | **DELETE** /service/delete | 
[**getServiceVersion**](ServiceApi.md#getServiceVersion) | **GET** /service/version/get | 
[**listService**](ServiceApi.md#listService) | **GET** /service/list | 
[**listServicePod**](ServiceApi.md#listServicePod) | **GET** /service/pod/list | 
[**listServiceVersion**](ServiceApi.md#listServiceVersion) | **GET** /service/version/list | 
[**updateServiceDescription**](ServiceApi.md#updateServiceDescription) | **PUT** /service/update/desc | 
[**updateServiceVersion**](ServiceApi.md#updateServiceVersion) | **PUT** /service/update/deploy | 


<a name="createService"></a>
# **createService**
> ServiceInfo createService(body)



Create Service

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var body = new EzDeployApiserver.ServiceInfo(); // ServiceInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createService(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceInfo**](ServiceInfo.md)|  | 

### Return type

[**ServiceInfo**](ServiceInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createServiceVersion"></a>
# **createServiceVersion**
> ServiceVersion createServiceVersion(body)



Create Service Version

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var body = new EzDeployApiserver.ServiceVersion(); // ServiceVersion | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createServiceVersion(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceVersion**](ServiceVersion.md)|  | 

### Return type

[**ServiceVersion**](ServiceVersion.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteService"></a>
# **deleteService**
> ServiceInfo deleteService(id)



Delete Service

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteService(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ServiceInfo**](ServiceInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getServiceVersion"></a>
# **getServiceVersion**
> ServiceVersion getServiceVersion(serviceId, versionId)



get Service Version by version ID.

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var serviceId = 56; // Number | 

var versionId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getServiceVersion(serviceId, versionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**|  | 
 **versionId** | **Number**|  | 

### Return type

[**ServiceVersion**](ServiceVersion.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listService"></a>
# **listService**
> Object listService(opts)



List Service by project ID, service ID, service name.

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var opts = { 
  'projectId': 56, // Number | 
  'serviceId': 56, // Number | 
  'serviceName': "serviceName_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listService(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**|  | [optional] 
 **serviceId** | **Number**|  | [optional] 
 **serviceName** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listServicePod"></a>
# **listServicePod**
> Object listServicePod(serviceId)



List Service Pod by service ID.

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var serviceId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listServicePod(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**|  | 

### Return type

**Object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listServiceVersion"></a>
# **listServiceVersion**
> Object listServiceVersion(serviceId)



List Service Version by service ID.

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var serviceId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listServiceVersion(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**|  | 

### Return type

**Object**

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateServiceDescription"></a>
# **updateServiceDescription**
> ServiceInfo updateServiceDescription(body)



Update Service Description

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var body = new EzDeployApiserver.ServiceInfo(); // ServiceInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServiceDescription(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceInfo**](ServiceInfo.md)|  | 

### Return type

[**ServiceInfo**](ServiceInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateServiceVersion"></a>
# **updateServiceVersion**
> ServiceInfo updateServiceVersion(body)



Update Service Version

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ServiceApi();

var body = new EzDeployApiserver.ServiceInfo(); // ServiceInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateServiceVersion(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ServiceInfo**](ServiceInfo.md)|  | 

### Return type

[**ServiceInfo**](ServiceInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

