# EzDeployApiserver.RBACApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProjectRBAC**](RBACApi.md#getProjectRBAC) | **GET** /rbac/project/get | 
[**getUserRBAC**](RBACApi.md#getUserRBAC) | **GET** /rbac/user/get | 


<a name="getProjectRBAC"></a>
# **getProjectRBAC**
> ProjectRole getProjectRBAC(id)



Get Project RBAC

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.RBACApi();

var id = 56; // Number | projectID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjectRBAC(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| projectID | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserRBAC"></a>
# **getUserRBAC**
> UserRole getUserRBAC()



Get User RBAC

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.RBACApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserRBAC(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserRole**](UserRole.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

