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
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EzDeployApiserver) {
      root.EzDeployApiserver = {};
    }
    root.EzDeployApiserver.RoleMember = factory(root.EzDeployApiserver.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RoleMember model module.
   * @module model/RoleMember
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RoleMember</code>.
   * Authority Role Member Object
   * @alias module:model/RoleMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RoleMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleMember} obj Optional instance to populate.
   * @return {module:model/RoleMember} The populated <code>RoleMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('role_id'))
        obj.roleId = ApiClient.convertToType(data['role_id'], 'Number');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'Number');
    }
    return obj;
  }

  /**
   * id
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * role id
   * @member {Number} roleId
   */
  exports.prototype.roleId = undefined;

  /**
   * user id
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;


  return exports;

}));