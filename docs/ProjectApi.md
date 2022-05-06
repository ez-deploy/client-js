# EzDeployApiserver.ProjectApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProject**](ProjectApi.md#createProject) | **POST** /project/create | 
[**getProject**](ProjectApi.md#getProject) | **GET** /project/get | 


<a name="createProject"></a>
# **createProject**
> ProjectInfo createProject(body)



Create Project

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ProjectApi();

var body = new EzDeployApiserver.ProjectInfo(); // ProjectInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectInfo**](ProjectInfo.md)|  | 

### Return type

[**ProjectInfo**](ProjectInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProject"></a>
# **getProject**
> ProjectInfo getProject(id)



Get Project

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.ProjectApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProject(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**ProjectInfo**](ProjectInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

