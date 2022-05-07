# EzDeployApiserver.PodApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPodTicket**](PodApi.md#checkPodTicket) | **GET** /visit/pod/ticket/check | 
[**createPodTicket**](PodApi.md#createPodTicket) | **POST** /visit/pod/ticket/create | 


<a name="checkPodTicket"></a>
# **checkPodTicket**
> SSHPodTicket checkPodTicket(ticketValue)



Check Pod Ticket, and delete it

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');

var apiInstance = new EzDeployApiserver.PodApi();

var ticketValue = "ticketValue_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkPodTicket(ticketValue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketValue** | **String**|  | 

### Return type

[**SSHPodTicket**](SSHPodTicket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPodTicket"></a>
# **createPodTicket**
> SSHPodTicket createPodTicket(body)



Create Visit Pod Once Ticket

### Example
```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');
var defaultClient = EzDeployApiserver.ApiClient.instance;

// Configure API key authorization: key
var key = defaultClient.authentications['key'];
key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//key.apiKeyPrefix = 'Token';

var apiInstance = new EzDeployApiserver.PodApi();

var body = new EzDeployApiserver.GetTicketReq(); // GetTicketReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPodTicket(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GetTicketReq**](GetTicketReq.md)|  | 

### Return type

[**SSHPodTicket**](SSHPodTicket.md)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

