# ez_deploy_apiserver

EzDeployApiserver - JavaScript client for ez_deploy_apiserver
apiserver
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ez_deploy_apiserver --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your ez_deploy_apiserver from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('ez_deploy_apiserver')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/ez_deploy_apiserver
then install it via:

```shell
    npm install YOUR_USERNAME/ez_deploy_apiserver --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EzDeployApiserver = require('ez_deploy_apiserver');

var api = new EzDeployApiserver.IdentityApi()

var body = new EzDeployApiserver.UserInfo(); // {UserInfo} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUser(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EzDeployApiserver.IdentityApi* | [**createUser**](docs/IdentityApi.md#createUser) | **POST** /user/create | 
*EzDeployApiserver.IdentityApi* | [**getUser**](docs/IdentityApi.md#getUser) | **GET** /user/get | 
*EzDeployApiserver.IdentityApi* | [**login**](docs/IdentityApi.md#login) | **POST** /user/login | 
*EzDeployApiserver.IdentityApi* | [**logout**](docs/IdentityApi.md#logout) | **GET** /user/logout | 
*EzDeployApiserver.IdentityApi* | [**whoami**](docs/IdentityApi.md#whoami) | **GET** /whoami | 
*EzDeployApiserver.PodApi* | [**checkPodTicket**](docs/PodApi.md#checkPodTicket) | **GET** /visit/pod/ticket/check | 
*EzDeployApiserver.PodApi* | [**createPodTicket**](docs/PodApi.md#createPodTicket) | **POST** /visit/pod/ticket/create | 
*EzDeployApiserver.ProjectApi* | [**createProject**](docs/ProjectApi.md#createProject) | **POST** /project/create | 
*EzDeployApiserver.ProjectApi* | [**getProject**](docs/ProjectApi.md#getProject) | **GET** /project/get | 
*EzDeployApiserver.RBACApi* | [**getProjectRBAC**](docs/RBACApi.md#getProjectRBAC) | **GET** /rbac/project/get | 
*EzDeployApiserver.RBACApi* | [**getUserRBAC**](docs/RBACApi.md#getUserRBAC) | **GET** /rbac/user/get | 
*EzDeployApiserver.ServiceApi* | [**createService**](docs/ServiceApi.md#createService) | **POST** /service/create | 
*EzDeployApiserver.ServiceApi* | [**createServiceVersion**](docs/ServiceApi.md#createServiceVersion) | **POST** /service/version/create | 
*EzDeployApiserver.ServiceApi* | [**deleteService**](docs/ServiceApi.md#deleteService) | **DELETE** /service/delete | 
*EzDeployApiserver.ServiceApi* | [**getServiceVersion**](docs/ServiceApi.md#getServiceVersion) | **GET** /service/version/get | 
*EzDeployApiserver.ServiceApi* | [**listService**](docs/ServiceApi.md#listService) | **GET** /service/list | 
*EzDeployApiserver.ServiceApi* | [**listServicePod**](docs/ServiceApi.md#listServicePod) | **GET** /service/pod/list | 
*EzDeployApiserver.ServiceApi* | [**listServiceVersion**](docs/ServiceApi.md#listServiceVersion) | **GET** /service/version/list | 
*EzDeployApiserver.ServiceApi* | [**updateServiceDescription**](docs/ServiceApi.md#updateServiceDescription) | **PUT** /service/update/desc | 
*EzDeployApiserver.ServiceApi* | [**updateServiceVersion**](docs/ServiceApi.md#updateServiceVersion) | **PUT** /service/update/deploy | 


## Documentation for Models

 - [EzDeployApiserver.AuthInfo](docs/AuthInfo.md)
 - [EzDeployApiserver.EnvironmentVariable](docs/EnvironmentVariable.md)
 - [EzDeployApiserver.Error](docs/Error.md)
 - [EzDeployApiserver.GetTicketReq](docs/GetTicketReq.md)
 - [EzDeployApiserver.PodInfo](docs/PodInfo.md)
 - [EzDeployApiserver.ProjectInfo](docs/ProjectInfo.md)
 - [EzDeployApiserver.ProjectRole](docs/ProjectRole.md)
 - [EzDeployApiserver.RoleInfo](docs/RoleInfo.md)
 - [EzDeployApiserver.RoleMember](docs/RoleMember.md)
 - [EzDeployApiserver.RolePermission](docs/RolePermission.md)
 - [EzDeployApiserver.RoleView](docs/RoleView.md)
 - [EzDeployApiserver.SSHPodTicket](docs/SSHPodTicket.md)
 - [EzDeployApiserver.ServiceInfo](docs/ServiceInfo.md)
 - [EzDeployApiserver.ServiceVersion](docs/ServiceVersion.md)
 - [EzDeployApiserver.Token](docs/Token.md)
 - [EzDeployApiserver.UserInfo](docs/UserInfo.md)
 - [EzDeployApiserver.UserRole](docs/UserRole.md)


## Documentation for Authorization


### key

- **Type**: API key
- **API key parameter name**: Cookie
- **Location**: HTTP header

