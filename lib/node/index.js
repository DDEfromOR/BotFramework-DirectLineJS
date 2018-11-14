(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DirectLine"] = factory();
	else
		root["DirectLine"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/directLine.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/botframework-schema/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/botframework-schema/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines values for RoleTypes.
 * Possible values include: 'user', 'bot'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: RoleTypes = <RoleTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var RoleTypes;
(function (RoleTypes) {
    RoleTypes["User"] = "user";
    RoleTypes["Bot"] = "bot";
})(RoleTypes = exports.RoleTypes || (exports.RoleTypes = {}));
/**
 * Defines values for ActivityTypes.
 * Possible values include: 'message', 'contactRelationUpdate',
 * 'conversationUpdate', 'typing', 'endOfConversation', 'event', 'invoke',
 * 'deleteUserData', 'messageUpdate', 'messageDelete', 'installationUpdate',
 * 'messageReaction', 'suggestion', 'trace', 'handoff'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ActivityTypes =
 * <ActivityTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes["Message"] = "message";
    ActivityTypes["ContactRelationUpdate"] = "contactRelationUpdate";
    ActivityTypes["ConversationUpdate"] = "conversationUpdate";
    ActivityTypes["Typing"] = "typing";
    ActivityTypes["EndOfConversation"] = "endOfConversation";
    ActivityTypes["Event"] = "event";
    ActivityTypes["Invoke"] = "invoke";
    ActivityTypes["DeleteUserData"] = "deleteUserData";
    ActivityTypes["MessageUpdate"] = "messageUpdate";
    ActivityTypes["MessageDelete"] = "messageDelete";
    ActivityTypes["InstallationUpdate"] = "installationUpdate";
    ActivityTypes["MessageReaction"] = "messageReaction";
    ActivityTypes["Suggestion"] = "suggestion";
    ActivityTypes["Trace"] = "trace";
    ActivityTypes["Handoff"] = "handoff";
})(ActivityTypes = exports.ActivityTypes || (exports.ActivityTypes = {}));
/**
 * Defines values for TextFormatTypes.
 * Possible values include: 'markdown', 'plain', 'xml'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: TextFormatTypes =
 * <TextFormatTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var TextFormatTypes;
(function (TextFormatTypes) {
    TextFormatTypes["Markdown"] = "markdown";
    TextFormatTypes["Plain"] = "plain";
    TextFormatTypes["Xml"] = "xml";
})(TextFormatTypes = exports.TextFormatTypes || (exports.TextFormatTypes = {}));
/**
 * Defines values for AttachmentLayoutTypes.
 * Possible values include: 'list', 'carousel'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: AttachmentLayoutTypes =
 * <AttachmentLayoutTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var AttachmentLayoutTypes;
(function (AttachmentLayoutTypes) {
    AttachmentLayoutTypes["List"] = "list";
    AttachmentLayoutTypes["Carousel"] = "carousel";
})(AttachmentLayoutTypes = exports.AttachmentLayoutTypes || (exports.AttachmentLayoutTypes = {}));
/**
 * Defines values for MessageReactionTypes.
 * Possible values include: 'like', 'plusOne'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: MessageReactionTypes =
 * <MessageReactionTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var MessageReactionTypes;
(function (MessageReactionTypes) {
    MessageReactionTypes["Like"] = "like";
    MessageReactionTypes["PlusOne"] = "plusOne";
})(MessageReactionTypes = exports.MessageReactionTypes || (exports.MessageReactionTypes = {}));
/**
 * Defines values for InputHints.
 * Possible values include: 'acceptingInput', 'ignoringInput', 'expectingInput'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: InputHints = <InputHints>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var InputHints;
(function (InputHints) {
    InputHints["AcceptingInput"] = "acceptingInput";
    InputHints["IgnoringInput"] = "ignoringInput";
    InputHints["ExpectingInput"] = "expectingInput";
})(InputHints = exports.InputHints || (exports.InputHints = {}));
/**
 * Defines values for ActionTypes.
 * Possible values include: 'openUrl', 'imBack', 'postBack', 'playAudio',
 * 'playVideo', 'showImage', 'downloadFile', 'signin', 'call', 'payment',
 * 'messageBack'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ActionTypes =
 * <ActionTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["OpenUrl"] = "openUrl";
    ActionTypes["ImBack"] = "imBack";
    ActionTypes["PostBack"] = "postBack";
    ActionTypes["PlayAudio"] = "playAudio";
    ActionTypes["PlayVideo"] = "playVideo";
    ActionTypes["ShowImage"] = "showImage";
    ActionTypes["DownloadFile"] = "downloadFile";
    ActionTypes["Signin"] = "signin";
    ActionTypes["Call"] = "call";
    ActionTypes["Payment"] = "payment";
    ActionTypes["MessageBack"] = "messageBack";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
/**
 * Defines values for EndOfConversationCodes.
 * Possible values include: 'unknown', 'completedSuccessfully',
 * 'userCancelled', 'botTimedOut', 'botIssuedInvalidMessage', 'channelFailed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EndOfConversationCodes =
 * <EndOfConversationCodes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var EndOfConversationCodes;
(function (EndOfConversationCodes) {
    EndOfConversationCodes["Unknown"] = "unknown";
    EndOfConversationCodes["CompletedSuccessfully"] = "completedSuccessfully";
    EndOfConversationCodes["UserCancelled"] = "userCancelled";
    EndOfConversationCodes["BotTimedOut"] = "botTimedOut";
    EndOfConversationCodes["BotIssuedInvalidMessage"] = "botIssuedInvalidMessage";
    EndOfConversationCodes["ChannelFailed"] = "channelFailed";
})(EndOfConversationCodes = exports.EndOfConversationCodes || (exports.EndOfConversationCodes = {}));
/**
 * Defines values for ActivityImportance.
 * Possible values include: 'low', 'normal', 'high'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ActivityImportance =
 * <ActivityImportance>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ActivityImportance;
(function (ActivityImportance) {
    ActivityImportance["Low"] = "low";
    ActivityImportance["Normal"] = "normal";
    ActivityImportance["High"] = "high";
})(ActivityImportance = exports.ActivityImportance || (exports.ActivityImportance = {}));
/**
 * Defines values for DeliveryModes.
 * Possible values include: 'normal', 'notification'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: DeliveryModes =
 * <DeliveryModes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var DeliveryModes;
(function (DeliveryModes) {
    DeliveryModes["Normal"] = "normal";
    DeliveryModes["Notification"] = "notification";
})(DeliveryModes = exports.DeliveryModes || (exports.DeliveryModes = {}));
/**
 * Defines values for ContactRelationUpdateActionTypes.
 * Possible values include: 'add', 'remove'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ContactRelationUpdateActionTypes =
 * <ContactRelationUpdateActionTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ContactRelationUpdateActionTypes;
(function (ContactRelationUpdateActionTypes) {
    ContactRelationUpdateActionTypes["Add"] = "add";
    ContactRelationUpdateActionTypes["Remove"] = "remove";
})(ContactRelationUpdateActionTypes = exports.ContactRelationUpdateActionTypes || (exports.ContactRelationUpdateActionTypes = {}));
/**
 * Defines values for InstallationUpdateActionTypes.
 * Possible values include: 'add', 'remove'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: InstallationUpdateActionTypes =
 * <InstallationUpdateActionTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var InstallationUpdateActionTypes;
(function (InstallationUpdateActionTypes) {
    InstallationUpdateActionTypes["Add"] = "add";
    InstallationUpdateActionTypes["Remove"] = "remove";
})(InstallationUpdateActionTypes = exports.InstallationUpdateActionTypes || (exports.InstallationUpdateActionTypes = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/connectionStatus.ts":
/*!*********************************!*\
  !*** ./src/connectionStatus.ts ***!
  \*********************************/
/*! exports provided: ConnectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function() { return ConnectionStatus; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ConnectionStatus {
  // The bot is unavailable or returned an error
  // currently trying to connect to the conversation
  // the bot ended the conversation
  // last operation produced an error with an expired token. Possibly waiting for someone to supply a new one.
  // the initial attempt to connect to the conversation failed. No recovery possible.
  // a non-specific error occurred
  // successfully connected to the conversation. Connection is healthy so far as we know.
  // the status when the DirectLine object is first created/constructed

  /**
   * Details about the error associated with this status.
   */
  constructor() {
    _defineProperty(this, "error", void 0);

    if (Object.isFrozen(ConnectionStatus)) {
      throw new Error('ConnectionStatus cannot be constructed');
    }
  }

}

_defineProperty(ConnectionStatus, "BotError", new ConnectionStatus());

_defineProperty(ConnectionStatus, "Connecting", new ConnectionStatus());

_defineProperty(ConnectionStatus, "Ended", new ConnectionStatus());

_defineProperty(ConnectionStatus, "ExpiredToken", new ConnectionStatus());

_defineProperty(ConnectionStatus, "FailedToConnect", new ConnectionStatus());

_defineProperty(ConnectionStatus, "IndeterminateError", new ConnectionStatus());

_defineProperty(ConnectionStatus, "Online", new ConnectionStatus());

_defineProperty(ConnectionStatus, "Uninitialized", new ConnectionStatus());

Object.freeze(ConnectionStatus);


/***/ }),

/***/ "./src/directLine.ts":
/*!***************************!*\
  !*** ./src/directLine.ts ***!
  \***************************/
/*! exports provided: DirectLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectLine", function() { return DirectLine; });
/* harmony import */ var botframework_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! botframework-schema */ "./node_modules/botframework-schema/lib/index.js");
/* harmony import */ var botframework_schema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(botframework_schema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connectionStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connectionStatus */ "./src/connectionStatus.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




if (true) {
  new Function(`
  if (!('FormData' in global)) {
    global.FormData = require('form-data');
  }

  if (!('fetch' in global)) {
    global.fetch = require('node-fetch');
  }`)();
}
/**
 * The DirectLine class is an implementation of the
 * DirectLine APIs provided as part of the Azure Bot Services
 * that allows your client application to communicate with
 * your bot. This implementation provides some common usages
 * of the API including creating or reconnecting to a conversation,
 * token retrieval and refreshing, and sending/retrieving activities.
 */


var _Symbol$iterator = Symbol.iterator;
class DirectLine {
  constructor(options) {
    _defineProperty(this, "referenceGrammarId", void 0);

    _defineProperty(this, "domain", void 0);

    _defineProperty(this, "status", _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Uninitialized);

    _defineProperty(this, "conversationId", void 0);

    _defineProperty(this, "isomorphicWS", void 0);

    _defineProperty(this, "pendingResolvers", new WeakMap());

    _defineProperty(this, "pollingInterval", void 0);

    _defineProperty(this, "resolver", void 0);

    _defineProperty(this, "secret", void 0);

    _defineProperty(this, "socketConnection", void 0);

    _defineProperty(this, "streamUrl", void 0);

    _defineProperty(this, "token", void 0);

    _defineProperty(this, "useWebSocket", void 0);

    _defineProperty(this, "watermark", '');

    _defineProperty(this, "tokenRefreshTimer", void 0);

    const conversationId = options.conversationId,
          _options$domain = options.domain,
          domain = _options$domain === void 0 ? 'https://directline.botframework.com/v3/directline' : _options$domain,
          isomorphicWS = options.isomorphicWS,
          _options$pollingInter = options.pollingInterval,
          pollingInterval = _options$pollingInter === void 0 ? 1000 : _options$pollingInter,
          secret = options.secret,
          streamUrl = options.streamUrl,
          token = options.token,
          watermark = options.watermark,
          useWebSocket = options.useWebSocket;
    Object.assign(this, {
      conversationId,
      domain,
      isomorphicWS,
      pollingInterval,
      secret,
      streamUrl,
      token,
      watermark,
      useWebSocket
    });
  }
  /**
   * The generator that delivers Promises that resolve to
   * either a ConnectionStatus object or an array of Activity
   * objects. The iterator will continue to deliver Promises until
   * end() is called.
   *
   * Consumers of the iterator must wait until the Promise is
   * resolved before advancing the cursor.
   *
   * @example
   * const directLine = new DirectLine(directLineOptions);
   * async function directLineConsumer(directLine: DirectLine): void {
   *   for (let promise: Promise<ConnectionStatus | Activity[]> of directLine) {
   *     const result = await promise; // Resolved with a ConnectionStatus or an Array of Activity objects
   *     if (result instanceof ConnectionStatus) {
   *       // do connection status related things
   *     } else if (result instanceof Array) {
   *       // do activity related things
   *     }
   *     if (<some condition>) {
   *        // Stop the loop manually
   *       directLine.end();
   *       break;
   *     }
   *   }
   *   return true;
   * }
   *
   * directLineConsumer(directLine).then(done => console.log('Conversation ended'));
   */


  *[_Symbol$iterator]() {
    while (this.status !== _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Ended) {
      // If we have a promise in queue, return it
      let pendingPromise = this.pendingResolvers.get(this.resolver);

      if (pendingPromise) {
        yield pendingPromise;
      } // Otherwise, create a new one


      pendingPromise = new Promise(async resolve => {
        this.resolver = resolve;
        this.pendingResolvers.set(resolve, pendingPromise); // Attempt the initial connection - this status transition happens just once.

        if (this.status === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Uninitialized) {
          resolve(this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Connecting);
        } else {
          const connection = await this.checkConnection();

          if (connection) {
            resolve(connection);
          } else if (!this.useWebSocket) {
            const pollResponse = await this.poll();
            resolve(pollResponse);
          }
        }
      });
      yield pendingPromise;
    }
  }
  /**
   * Posts an activity to the conversation. If a conversation does not
   * exist, a new on is created. If a conversation exists but the
   * connection has been lost, ana attempt to reconnect is made.
   *
   * @param {Activity} activity The Activity object to post to the conversation
   */


  async postActivity(activity) {
    const connectionStatus = await this.checkConnection();

    if (connectionStatus === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].FailedToConnect) {
      const _ConnectionStatus$Fai = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].FailedToConnect.error,
            status = _ConnectionStatus$Fai.status,
            statusText = _ConnectionStatus$Fai.statusText;
      throw new Error(`${status}: ${statusText}`);
    }

    if (activity.type === botframework_schema__WEBPACK_IMPORTED_MODULE_0__["ActivityTypes"].Message && (activity.attachments || []).length) {
      return this.postMessageWithAttachments(activity);
    }

    const conversationId = this.conversationId,
          domain = this.domain,
          headers = this.headers;
    headers['Content-type'] = 'application/json';
    const url = `${domain}/conversations/${conversationId}/activities`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(activity),
      headers
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const _ref = await response.json(),
          id = _ref.id;

    return id;
  }
  /**
   * Reconnects to the specified conversation
   * and opens a socket to receive activities if
   * the usage of a socket was specified in the
   * DirectLineOptions
   *
   * @param {Conversation} conversation The conversation to reconnect to
   */


  async reconnect(conversation) {
    const token = conversation.token,
          streamUrl = conversation.streamUrl;
    Object.assign(this, {
      token,
      streamUrl
    });
    return this.checkConnection();
  }
  /**
   * Ends the current conversation and closes
   * the socket connection if one exists.
   */


  end() {
    if (this.socketConnection) {
      this.socketConnection.close(1000);
    }

    this.resolver(this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Ended); // Normalize and prepare for a new conversation

    this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Uninitialized;
  }
  /**
   * Gets the session ID of the current conversation.
   * If a conversation has not yet been started, an
   * attempt is made to start one before the session ID
   * is returned. If an existing conversation was started
   * but the connection has been lost, an attempt to
   * reconnect is made.
   */


  async getSesstionId() {
    const connectionStatus = await this.checkConnection();

    if (connectionStatus === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].FailedToConnect) {
      throw new Error('Error: could not connect to the conversation');
    }

    const domain = this.domain,
          headers = this.headers;
    const url = `${domain}/session/getsessionid`;
    const response = await fetch(url, {
      headers,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const _ref2 = await response.json(),
          sessionId = _ref2.sessionId;

    return sessionId;
  }
  /**
   * Polls DirectLine for activities based on the pollingInterval
   * specified in the DirectLineOptions. The promise is resolved
   * only after new activities are received.
   */


  async poll() {
    // Poll until we receive an error or a
    // non-zero length array of activities.
    while (this.status === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online) {
      await new Promise(resolve => setTimeout(resolve, this.pollingInterval));
      const conversationId = this.conversationId,
            domain = this.domain,
            headers = this.headers,
            watermark = this.watermark;
      const url = `${domain}/conversations/${conversationId}/activities?watermark=${watermark}`;
      const response = await fetch(url, {
        headers
      });

      if (!response.ok) {
        return this.processError(response);
      }

      const _ref3 = await response.json(),
            activities = _ref3.activities,
            advancedWatermark = _ref3.watermark;

      this.watermark = advancedWatermark;

      if ((activities || []).length) {
        return activities;
      }
    }

    return null;
  }
  /**
   * Opens a socket connection to the streamUrl.
   * This function is called when a conversation is
   * created and the DirectLineOptions indicate the
   * usage of a socket.
   */


  openSocketConnection() {
    if (this.socketConnection) {
      this.socketConnection.close(1000);
    }

    this.socketConnection = new this.isomorphicWS(this.streamUrl);

    this.socketConnection.onmessage = event => {
      this.resolver(JSON.parse(event.data));
    };

    this.socketConnection.onclose = () => {
      this.resolver(this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Ended);
    };

    this.socketConnection.onerror = this.reconnectToConversation;
    return new Promise(resolve => this.socketConnection.onopen = () => resolve(_connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online));
  }
  /**
   * Checks the connection to DirectLine and stats a new
   * conversation if one does not already exist or connects
   * to an existing conversation a conversationId is available.
   */


  async checkConnection() {
    if (this.status === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online) {
      return null;
    } // If we're not online, attempt to connect


    const response = await this.startConversation();
    const status = response.status,
          statusText = response.statusText;

    if (!response.ok) {
      _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].FailedToConnect.error = {
        status,
        statusText
      };
      return this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].FailedToConnect;
    }

    const _ref4 = await response.json(),
          conversationId = _ref4.conversationId,
          eTag = _ref4.eTag,
          streamUrl = _ref4.streamUrl,
          referenceGrammarId = _ref4.referenceGrammarId,
          token = _ref4.token,
          expires_in = _ref4.expires_in;

    Object.assign(this, {
      conversationId,
      token,
      streamUrl,
      eTag,
      referenceGrammarId
    });

    if (!this.secret) {
      this.refreshTokenHeartbeat(expires_in);
    } // We're socket enabled - connect with the streamUrl in the response
    // and hand off the connection status update to the socket.


    if (streamUrl && this.useWebSocket) {
      return this.status = await this.openSocketConnection();
    } // We're polling so assume an online status.


    return this.status = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online;
  }
  /**
   * Starts a new conversation or gets an existing
   * conversation if an conversationId exists.
   */


  async startConversation() {
    const conversationId = this.conversationId,
          domain = this.domain,
          headers = this.headers,
          watermark = this.watermark;
    let url = `${domain}/conversations`;

    if (conversationId) {
      url += `/${conversationId}?watermark=${watermark}`;
    }

    const method = conversationId ? 'GET' : 'POST';
    return fetch(url, {
      method,
      headers
    });
  }
  /**
   * Initiates a perpetual heartbeat tht refreshes the
   * token at the specified expiry interval minus 60 seconds.
   * This heartbeat dies when the connection status changes
   * to anything other than ConnectionStatus.Online.
   *
   * @param {number} expiry The number of seconds before the
   * token expires
   */


  refreshTokenHeartbeat(expiry) {
    if (this.tokenRefreshTimer) {
      clearTimeout(this.tokenRefreshTimer);
    }

    const doTokenRefresh = async () => {
      // Late check for the connection status in case
      // it has changed since the timeout was initiated.
      if (this.status === _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Online) {
        return null;
      }

      const url = `${this.domain}/tokens/refresh`;
      const response = await fetch(url, {
        method: 'POST',
        headers: this.headers
      });

      if (!response.ok) {
        return this.processError(response);
      }

      const _ref5 = await response.json(),
            token = _ref5.token,
            expires_in = _ref5.expires_in;

      this.token = token;
      return this.refreshTokenHeartbeat(expires_in);
    }; // refresh 60 seconds before expiration.


    this.tokenRefreshTimer = setTimeout(doTokenRefresh, expiry - 60 * 60 * 1000);
  }
  /**
   * Reconnects to the current conversation stream. This
   * function is used to re-establish a socket connection if
   * it was disconnected abruptly.
   */


  async reconnectToConversation() {
    const conversationId = this.conversationId,
          domain = this.domain,
          watermark = this.watermark,
          headers = this.headers;
    const url = `${domain}/conversations/${conversationId}?watermark=${watermark}`;
    const response = await fetch(url, {
      headers
    });

    if (!response.ok) {
      return this.processError(response);
    }

    const _ref6 = await response.json(),
          token = _ref6.token,
          streamUrl = _ref6.streamUrl;

    Object.assign(this, {
      token,
      streamUrl
    });
    return this.status = await this.openSocketConnection();
  }
  /**
   * Maps an unsuccessful response to one of the enumerated
   * Connection status objects and returns that object.
   *
   * @param {Response} response The Response object from an unsuccessful fetch operation.
   */


  processError(response) {
    const status = response.status,
          statusText = response.statusText;
    let connectionStatus;

    switch (status) {
      case 403:
        connectionStatus = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].ExpiredToken;
        break;

      case 404:
        connectionStatus = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].Ended;
        break;

      case 502:
        connectionStatus = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].BotError;
        break;

      default:
        connectionStatus = _connectionStatus__WEBPACK_IMPORTED_MODULE_1__["ConnectionStatus"].IndeterminateError;
        break;
    }

    if (connectionStatus) {
      connectionStatus.error = {
        status,
        statusText
      };
    }

    return this.status = connectionStatus;
  }
  /**
   * Posts message activities with attachments using the
   * multipart/form-data protocol.
   *
   * @param {Attachment[]} attachments The array of Attachment to post
   * @param {Activity} messageWithoutAttachments The Activity with the attachments stripped.
   */


  async postMessageWithAttachments(_ref7) {
    let attachments = _ref7.attachments,
        messageWithoutAttachments = _objectWithoutProperties(_ref7, ["attachments"]);

    const body = new FormData();
    body.append('activity', JSON.stringify(messageWithoutAttachments));
    const attachmentResponses = await Promise.all(attachments.map(attachment => fetch(attachment.contentUrl)));
    attachmentResponses.forEach(async (response, index) => {
      const blob = await response.blob();
      const _attachments$index = attachments[index],
            name = _attachments$index.name,
            contentUrl = _attachments$index.contentUrl;
      const fileName = getFileNameFromPath(contentUrl);
      body.append(name, blob, fileName);
    });
    const domain = this.domain,
          conversationId = this.conversationId,
          headers = this.headers;
    const url = `${domain}/conversations/${conversationId}/upload?userId=${messageWithoutAttachments.from.id}`;
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });

    if (response.status !== 200) {
      return null;
    }

    const _ref8 = await response.json(),
          id = _ref8.id;

    return id;
  }

  get headers() {
    return {
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.secret || this.token}`
    };
  }

}
/**
 * Retrieves the file name from the specified path
 *
 * @param {string} path The path to retrieve the file name from
 */

function getFileNameFromPath(path) {
  const index = path.lastIndexOf('/');
  const targetIndex = index === -1 ? 0 : index;
  return path.substr(targetIndex);
}

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map