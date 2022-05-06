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
    module.exports = factory(require('../ApiClient'), require('./RoleInfo'), require('./RoleMember'), require('./RolePermission'));
  } else {
    // Browser globals (root is window)
    if (!root.EzDeployApiserver) {
      root.EzDeployApiserver = {};
    }
    root.EzDeployApiserver.RoleView = factory(root.EzDeployApiserver.ApiClient, root.EzDeployApiserver.RoleInfo, root.EzDeployApiserver.RoleMember, root.EzDeployApiserver.RolePermission);
  }
}(this, function(ApiClient, RoleInfo, RoleMember, RolePermission) {
  'use strict';

  /**
   * The RoleView model module.
   * @module model/RoleView
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RoleView</code>.
   * Authority Role View Object
   * @alias module:model/RoleView
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RoleView</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleView} obj Optional instance to populate.
   * @return {module:model/RoleView} The populated <code>RoleView</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('info'))
        obj.info = RoleInfo.constructFromObject(data['info']);
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [RolePermission]);
      if (data.hasOwnProperty('members'))
        obj.members = ApiClient.convertToType(data['members'], [RoleMember]);
    }
    return obj;
  }

  /**
   * @member {module:model/RoleInfo} info
   */
  exports.prototype.info = undefined;

  /**
   * permissions
   * @member {Array.<module:model/RolePermission>} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * members
   * @member {Array.<module:model/RoleMember>} members
   */
  exports.prototype.members = undefined;


  return exports;

}));