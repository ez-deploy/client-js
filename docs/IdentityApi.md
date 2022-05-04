# EzDeployApiserver.IdentityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](IdentityApi.md#createUser) | **POST** /user/create | 
[**login**](IdentityApi.md#login) | **POST** /user/login | 
[**logout**](IdentityApi.md#logout) | **GET** /user/logout | 
[**whoami**](IdentityApi.md#whoami) | **GET** /whoami | 


<a name="createUser"></a>
# **createUser**
> ResponsesCreated createUser(body)



Create User

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');

var apiInstance = new EzDeployApiserver.IdentityApi();

var body = new EzDeployApiserver.UserInfo(); // UserInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserInfo**](UserInfo.md)|  | 

### Return type

[**ResponsesCreated**](ResponsesCreated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> UserInfo login(body)



User Login

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');

var apiInstance = new EzDeployApiserver.IdentityApi();

var body = new EzDeployApiserver.UserInfo(); // UserInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserInfo**](UserInfo.md)|  | 

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout()



Logout

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.IdentityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="whoami"></a>
# **whoami**
> UserInfo whoami()



Get Current User's Info

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.IdentityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.whoami(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserInfo**](UserInfo.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

