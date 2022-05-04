/*
 * easy-deploy
 * easy-deploy
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
    if (!root.EasyDeploy) {
      root.EasyDeploy = {};
    }
    root.EasyDeploy.UserInfo = factory(root.EasyDeploy.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UserInfo model module.
   * @module model/UserInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * User's Info
   * @alias module:model/UserInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('user_name'))
        obj.userName = ApiClient.convertToType(data['user_name'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }

  /**
   * id
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * user's name, not unique
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * password
   * @member {String} password
   */
  exports.prototype.password = undefined;

  /**
   * email, unique
   * @member {String} email
   */
  exports.prototype.email = undefined;


  return exports;

}));
