# EzDeployApiserver.ServiceInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**projectId** | **Number** | project id | [optional] 
**running** | **Boolean** | service is running or not | [optional] 
**versionId** | **Number** | version id | [optional] 
**name** | **String** | service name | [optional] 
**description** | **String** | service description | [optional] 
**replica** | **Number** | number of pod replicas | [optional] 
**exposeType** | **String** | expose service or not | [optional] 
**inClusterPort** | **Number** | in-cluster expose port | [optional] 
**nodePort** | **Number** | node-port expose port | [optional] 
**createAt** | **Number** | create at, unix timestamp | [optional] 
**updateAt** | **Number** | update at, unix timestamp | [optional] 


<a name="ExposeTypeEnum"></a>
## Enum: ExposeTypeEnum


* `incluster` (value: `"incluster"`)

* `nodeport` (value: `"nodeport"`)

* `none` (value: `"none"`)




