var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a3, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp.call(b3, prop))
      __defNormalProp(a3, prop, b3[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b3)) {
      if (__propIsEnum.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    }
  return a3;
};
var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e3) {
        reject(e3);
      }
    };
    var step = (x5) => x5.done ? resolve(x5.value) : Promise.resolve(x5.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter3;
    var __generator3;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v3) {
          return exports2[id] = previous ? previous(id, v3) : v3;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p4 in b3)
          if (Object.prototype.hasOwnProperty.call(b3, p4))
            d3[p4] = b3[p4];
      };
      __extends2 = function(d3, b3) {
        if (typeof b3 !== "function" && b3 !== null)
          throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
        extendStatics(d3, b3);
        function __() {
          this.constructor = d3;
        }
        d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
      };
      __assign2 = Object.assign || function(t3) {
        for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
          s3 = arguments[i3];
          for (var p4 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p4))
              t3[p4] = s3[p4];
        }
        return t3;
      };
      __rest2 = function(s3, e3) {
        var t3 = {};
        for (var p4 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p4) && e3.indexOf(p4) < 0)
            t3[p4] = s3[p4];
        if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i3 = 0, p4 = Object.getOwnPropertySymbols(s3); i3 < p4.length; i3++) {
            if (e3.indexOf(p4[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p4[i3]))
              t3[p4[i3]] = s3[p4[i3]];
          }
        return t3;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r3 = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i3 = decorators.length - 1; i3 >= 0; i3--)
            if (d3 = decorators[i3])
              r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
        return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P3, generator) {
        function adopt(value) {
          return value instanceof P3 ? value : new P3(function(resolve) {
            resolve(value);
          });
        }
        return new (P3 || (P3 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e3) {
              reject(e3);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e3) {
              reject(e3);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _3 = { label: 0, sent: function() {
          if (t3[0] & 1)
            throw t3[1];
          return t3[1];
        }, trys: [], ops: [] }, f3, y3, t3, g4;
        return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
          return this;
        }), g4;
        function verb(n2) {
          return function(v3) {
            return step([n2, v3]);
          };
        }
        function step(op) {
          if (f3)
            throw new TypeError("Generator is already executing.");
          while (_3)
            try {
              if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done)
                return t3;
              if (y3 = 0, t3)
                op = [op[0] & 2, t3.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t3 = op;
                  break;
                case 4:
                  _3.label++;
                  return { value: op[1], done: false };
                case 5:
                  _3.label++;
                  y3 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _3.ops.pop();
                  _3.trys.pop();
                  continue;
                default:
                  if (!(t3 = _3.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _3 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                    _3.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _3.label < t3[1]) {
                    _3.label = t3[1];
                    t3 = op;
                    break;
                  }
                  if (t3 && _3.label < t3[2]) {
                    _3.label = t3[2];
                    _3.ops.push(op);
                    break;
                  }
                  if (t3[2])
                    _3.ops.pop();
                  _3.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _3);
            } catch (e3) {
              op = [6, e3];
              y3 = 0;
            } finally {
              f3 = t3 = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m3, o3) {
        for (var p4 in m3)
          if (p4 !== "default" && !Object.prototype.hasOwnProperty.call(o3, p4))
            __createBinding2(o3, m3, p4);
      };
      __createBinding2 = Object.create ? function(o3, m3, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        var desc = Object.getOwnPropertyDescriptor(m3, k3);
        if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m3[k3];
          } };
        }
        Object.defineProperty(o3, k22, desc);
      } : function(o3, m3, k3, k22) {
        if (k22 === void 0)
          k22 = k3;
        o3[k22] = m3[k3];
      };
      __values2 = function(o3) {
        var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
        if (m3)
          return m3.call(o3);
        if (o3 && typeof o3.length === "number")
          return {
            next: function() {
              if (o3 && i3 >= o3.length)
                o3 = void 0;
              return { value: o3 && o3[i3++], done: !o3 };
            }
          };
        throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o3, n2) {
        var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
        if (!m3)
          return o3;
        var i3 = m3.call(o3), r3, ar = [], e3;
        try {
          while ((n2 === void 0 || n2-- > 0) && !(r3 = i3.next()).done)
            ar.push(r3.value);
        } catch (error2) {
          e3 = { error: error2 };
        } finally {
          try {
            if (r3 && !r3.done && (m3 = i3["return"]))
              m3.call(i3);
          } finally {
            if (e3)
              throw e3.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
          ar = ar.concat(__read2(arguments[i3]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++)
          s3 += arguments[i3].length;
        for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
          for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
            r3[k3] = a3[j3];
        return r3;
      };
      __spreadArray2 = function(to, from, pack2) {
        if (pack2 || arguments.length === 2)
          for (var i3 = 0, l3 = from.length, ar; i3 < l3; i3++) {
            if (ar || !(i3 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i3);
              ar[i3] = from[i3];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v3) {
        return this instanceof __await2 ? (this.v = v3, this) : new __await2(v3);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g4 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
        return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
          return this;
        }, i3;
        function verb(n2) {
          if (g4[n2])
            i3[n2] = function(v3) {
              return new Promise(function(a3, b3) {
                q3.push([n2, v3, a3, b3]) > 1 || resume(n2, v3);
              });
            };
        }
        function resume(n2, v3) {
          try {
            step(g4[n2](v3));
          } catch (e3) {
            settle(q3[0][3], e3);
          }
        }
        function step(r3) {
          r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f3, v3) {
          if (f3(v3), q3.shift(), q3.length)
            resume(q3[0][0], q3[0][1]);
        }
      };
      __asyncDelegator2 = function(o3) {
        var i3, p4;
        return i3 = {}, verb("next"), verb("throw", function(e3) {
          throw e3;
        }), verb("return"), i3[Symbol.iterator] = function() {
          return this;
        }, i3;
        function verb(n2, f3) {
          i3[n2] = o3[n2] ? function(v3) {
            return (p4 = !p4) ? { value: __await2(o3[n2](v3)), done: n2 === "return" } : f3 ? f3(v3) : v3;
          } : f3;
        }
      };
      __asyncValues2 = function(o3) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m3 = o3[Symbol.asyncIterator], i3;
        return m3 ? m3.call(o3) : (o3 = typeof __values2 === "function" ? __values2(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
          return this;
        }, i3);
        function verb(n2) {
          i3[n2] = o3[n2] && function(v3) {
            return new Promise(function(resolve, reject) {
              v3 = o3[n2](v3), settle(resolve, reject, v3.done, v3.value);
            });
          };
        }
        function settle(resolve, reject, d3, v3) {
          Promise.resolve(v3).then(function(v4) {
            resolve({ value: v4, done: d3 });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o3, v3) {
        Object.defineProperty(o3, "default", { enumerable: true, value: v3 });
      } : function(o3, v3) {
        o3["default"] = v3;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k3 in mod)
            if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
              __createBinding2(result, mod, k3);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f3) {
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f3) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f3)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// ../../node_modules/.pnpm/big-integer@1.6.51/node_modules/big-integer/BigInteger.js
var require_BigInteger = __commonJS({
  "../../node_modules/.pnpm/big-integer@1.6.51/node_modules/big-integer/BigInteger.js"(exports, module) {
    var bigInt = function(undefined2) {
      "use strict";
      var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
      var supportsNativeBigInt = typeof BigInt === "function";
      function Integer(v3, radix, alphabet, caseSensitive) {
        if (typeof v3 === "undefined")
          return Integer[0];
        if (typeof radix !== "undefined")
          return +radix === 10 && !alphabet ? parseValue(v3) : parseBase(v3, radix, alphabet, caseSensitive);
        return parseValue(v3);
      }
      function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
      }
      BigInteger.prototype = Object.create(Integer.prototype);
      function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
      }
      SmallInteger.prototype = Object.create(Integer.prototype);
      function NativeBigInt(value) {
        this.value = value;
      }
      NativeBigInt.prototype = Object.create(Integer.prototype);
      function isPrecise(n2) {
        return -MAX_INT < n2 && n2 < MAX_INT;
      }
      function smallToArray(n2) {
        if (n2 < 1e7)
          return [n2];
        if (n2 < 1e14)
          return [n2 % 1e7, Math.floor(n2 / 1e7)];
        return [n2 % 1e7, Math.floor(n2 / 1e7) % 1e7, Math.floor(n2 / 1e14)];
      }
      function arrayToSmall(arr) {
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
          switch (length) {
            case 0:
              return 0;
            case 1:
              return arr[0];
            case 2:
              return arr[0] + arr[1] * BASE;
            default:
              return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
          }
        }
        return arr;
      }
      function trim(v3) {
        var i4 = v3.length;
        while (v3[--i4] === 0)
          ;
        v3.length = i4 + 1;
      }
      function createArray(length) {
        var x5 = new Array(length);
        var i4 = -1;
        while (++i4 < length) {
          x5[i4] = 0;
        }
        return x5;
      }
      function truncate(n2) {
        if (n2 > 0)
          return Math.floor(n2);
        return Math.ceil(n2);
      }
      function add2(a3, b3) {
        var l_a = a3.length, l_b = b3.length, r3 = new Array(l_a), carry = 0, base2 = BASE, sum, i4;
        for (i4 = 0; i4 < l_b; i4++) {
          sum = a3[i4] + b3[i4] + carry;
          carry = sum >= base2 ? 1 : 0;
          r3[i4] = sum - carry * base2;
        }
        while (i4 < l_a) {
          sum = a3[i4] + carry;
          carry = sum === base2 ? 1 : 0;
          r3[i4++] = sum - carry * base2;
        }
        if (carry > 0)
          r3.push(carry);
        return r3;
      }
      function addAny(a3, b3) {
        if (a3.length >= b3.length)
          return add2(a3, b3);
        return add2(b3, a3);
      }
      function addSmall(a3, carry) {
        var l3 = a3.length, r3 = new Array(l3), base2 = BASE, sum, i4;
        for (i4 = 0; i4 < l3; i4++) {
          sum = a3[i4] - base2 + carry;
          carry = Math.floor(sum / base2);
          r3[i4] = sum - carry * base2;
          carry += 1;
        }
        while (carry > 0) {
          r3[i4++] = carry % base2;
          carry = Math.floor(carry / base2);
        }
        return r3;
      }
      BigInteger.prototype.add = function(v3) {
        var n2 = parseValue(v3);
        if (this.sign !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var a3 = this.value, b3 = n2.value;
        if (n2.isSmall) {
          return new BigInteger(addSmall(a3, Math.abs(b3)), this.sign);
        }
        return new BigInteger(addAny(a3, b3), this.sign);
      };
      BigInteger.prototype.plus = BigInteger.prototype.add;
      SmallInteger.prototype.add = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value;
        if (a3 < 0 !== n2.sign) {
          return this.subtract(n2.negate());
        }
        var b3 = n2.value;
        if (n2.isSmall) {
          if (isPrecise(a3 + b3))
            return new SmallInteger(a3 + b3);
          b3 = smallToArray(Math.abs(b3));
        }
        return new BigInteger(addSmall(b3, Math.abs(a3)), a3 < 0);
      };
      SmallInteger.prototype.plus = SmallInteger.prototype.add;
      NativeBigInt.prototype.add = function(v3) {
        return new NativeBigInt(this.value + parseValue(v3).value);
      };
      NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
      function subtract(a3, b3) {
        var a_l = a3.length, b_l = b3.length, r3 = new Array(a_l), borrow = 0, base2 = BASE, i4, difference;
        for (i4 = 0; i4 < b_l; i4++) {
          difference = a3[i4] - borrow - b3[i4];
          if (difference < 0) {
            difference += base2;
            borrow = 1;
          } else
            borrow = 0;
          r3[i4] = difference;
        }
        for (i4 = b_l; i4 < a_l; i4++) {
          difference = a3[i4] - borrow;
          if (difference < 0)
            difference += base2;
          else {
            r3[i4++] = difference;
            break;
          }
          r3[i4] = difference;
        }
        for (; i4 < a_l; i4++) {
          r3[i4] = a3[i4];
        }
        trim(r3);
        return r3;
      }
      function subtractAny(a3, b3, sign) {
        var value;
        if (compareAbs(a3, b3) >= 0) {
          value = subtract(a3, b3);
        } else {
          value = subtract(b3, a3);
          sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
          if (sign)
            value = -value;
          return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
      }
      function subtractSmall(a3, b3, sign) {
        var l3 = a3.length, r3 = new Array(l3), carry = -b3, base2 = BASE, i4, difference;
        for (i4 = 0; i4 < l3; i4++) {
          difference = a3[i4] + carry;
          carry = Math.floor(difference / base2);
          difference %= base2;
          r3[i4] = difference < 0 ? difference + base2 : difference;
        }
        r3 = arrayToSmall(r3);
        if (typeof r3 === "number") {
          if (sign)
            r3 = -r3;
          return new SmallInteger(r3);
        }
        return new BigInteger(r3, sign);
      }
      BigInteger.prototype.subtract = function(v3) {
        var n2 = parseValue(v3);
        if (this.sign !== n2.sign) {
          return this.add(n2.negate());
        }
        var a3 = this.value, b3 = n2.value;
        if (n2.isSmall)
          return subtractSmall(a3, Math.abs(b3), this.sign);
        return subtractAny(a3, b3, this.sign);
      };
      BigInteger.prototype.minus = BigInteger.prototype.subtract;
      SmallInteger.prototype.subtract = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value;
        if (a3 < 0 !== n2.sign) {
          return this.add(n2.negate());
        }
        var b3 = n2.value;
        if (n2.isSmall) {
          return new SmallInteger(a3 - b3);
        }
        return subtractSmall(b3, Math.abs(a3), a3 >= 0);
      };
      SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
      NativeBigInt.prototype.subtract = function(v3) {
        return new NativeBigInt(this.value - parseValue(v3).value);
      };
      NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
      BigInteger.prototype.negate = function() {
        return new BigInteger(this.value, !this.sign);
      };
      SmallInteger.prototype.negate = function() {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
      };
      NativeBigInt.prototype.negate = function() {
        return new NativeBigInt(-this.value);
      };
      BigInteger.prototype.abs = function() {
        return new BigInteger(this.value, false);
      };
      SmallInteger.prototype.abs = function() {
        return new SmallInteger(Math.abs(this.value));
      };
      NativeBigInt.prototype.abs = function() {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
      };
      function multiplyLong(a3, b3) {
        var a_l = a3.length, b_l = b3.length, l3 = a_l + b_l, r3 = createArray(l3), base2 = BASE, product, carry, i4, a_i, b_j;
        for (i4 = 0; i4 < a_l; ++i4) {
          a_i = a3[i4];
          for (var j3 = 0; j3 < b_l; ++j3) {
            b_j = b3[j3];
            product = a_i * b_j + r3[i4 + j3];
            carry = Math.floor(product / base2);
            r3[i4 + j3] = product - carry * base2;
            r3[i4 + j3 + 1] += carry;
          }
        }
        trim(r3);
        return r3;
      }
      function multiplySmall(a3, b3) {
        var l3 = a3.length, r3 = new Array(l3), base2 = BASE, carry = 0, product, i4;
        for (i4 = 0; i4 < l3; i4++) {
          product = a3[i4] * b3 + carry;
          carry = Math.floor(product / base2);
          r3[i4] = product - carry * base2;
        }
        while (carry > 0) {
          r3[i4++] = carry % base2;
          carry = Math.floor(carry / base2);
        }
        return r3;
      }
      function shiftLeft(x5, n2) {
        var r3 = [];
        while (n2-- > 0)
          r3.push(0);
        return r3.concat(x5);
      }
      function multiplyKaratsuba(x5, y3) {
        var n2 = Math.max(x5.length, y3.length);
        if (n2 <= 30)
          return multiplyLong(x5, y3);
        n2 = Math.ceil(n2 / 2);
        var b3 = x5.slice(n2), a3 = x5.slice(0, n2), d3 = y3.slice(n2), c3 = y3.slice(0, n2);
        var ac = multiplyKaratsuba(a3, c3), bd = multiplyKaratsuba(b3, d3), abcd = multiplyKaratsuba(addAny(a3, b3), addAny(c3, d3));
        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n2)), shiftLeft(bd, 2 * n2));
        trim(product);
        return product;
      }
      function useKaratsuba(l1, l22) {
        return -0.012 * l1 - 0.012 * l22 + 15e-6 * l1 * l22 > 0;
      }
      BigInteger.prototype.multiply = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value, sign = this.sign !== n2.sign, abs;
        if (n2.isSmall) {
          if (b3 === 0)
            return Integer[0];
          if (b3 === 1)
            return this;
          if (b3 === -1)
            return this.negate();
          abs = Math.abs(b3);
          if (abs < BASE) {
            return new BigInteger(multiplySmall(a3, abs), sign);
          }
          b3 = smallToArray(abs);
        }
        if (useKaratsuba(a3.length, b3.length))
          return new BigInteger(multiplyKaratsuba(a3, b3), sign);
        return new BigInteger(multiplyLong(a3, b3), sign);
      };
      BigInteger.prototype.times = BigInteger.prototype.multiply;
      function multiplySmallAndArray(a3, b3, sign) {
        if (a3 < BASE) {
          return new BigInteger(multiplySmall(b3, a3), sign);
        }
        return new BigInteger(multiplyLong(b3, smallToArray(a3)), sign);
      }
      SmallInteger.prototype._multiplyBySmall = function(a3) {
        if (isPrecise(a3.value * this.value)) {
          return new SmallInteger(a3.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a3.value), smallToArray(Math.abs(this.value)), this.sign !== a3.sign);
      };
      BigInteger.prototype._multiplyBySmall = function(a3) {
        if (a3.value === 0)
          return Integer[0];
        if (a3.value === 1)
          return this;
        if (a3.value === -1)
          return this.negate();
        return multiplySmallAndArray(Math.abs(a3.value), this.value, this.sign !== a3.sign);
      };
      SmallInteger.prototype.multiply = function(v3) {
        return parseValue(v3)._multiplyBySmall(this);
      };
      SmallInteger.prototype.times = SmallInteger.prototype.multiply;
      NativeBigInt.prototype.multiply = function(v3) {
        return new NativeBigInt(this.value * parseValue(v3).value);
      };
      NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
      function square(a3) {
        var l3 = a3.length, r3 = createArray(l3 + l3), base2 = BASE, product, carry, i4, a_i, a_j;
        for (i4 = 0; i4 < l3; i4++) {
          a_i = a3[i4];
          carry = 0 - a_i * a_i;
          for (var j3 = i4; j3 < l3; j3++) {
            a_j = a3[j3];
            product = 2 * (a_i * a_j) + r3[i4 + j3] + carry;
            carry = Math.floor(product / base2);
            r3[i4 + j3] = product - carry * base2;
          }
          r3[i4 + l3] = carry;
        }
        trim(r3);
        return r3;
      }
      BigInteger.prototype.square = function() {
        return new BigInteger(square(this.value), false);
      };
      SmallInteger.prototype.square = function() {
        var value = this.value * this.value;
        if (isPrecise(value))
          return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
      };
      NativeBigInt.prototype.square = function(v3) {
        return new NativeBigInt(this.value * this.value);
      };
      function divMod1(a3, b3) {
        var a_l = a3.length, b_l = b3.length, base2 = BASE, result = createArray(b3.length), divisorMostSignificantDigit = b3[b_l - 1], lambda = Math.ceil(base2 / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a3, lambda), divisor = multiplySmall(b3, lambda), quotientDigit, shift, carry, borrow, i4, l3, q3;
        if (remainder.length <= a_l)
          remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
          quotientDigit = base2 - 1;
          if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
            quotientDigit = Math.floor((remainder[shift + b_l] * base2 + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
          }
          carry = 0;
          borrow = 0;
          l3 = divisor.length;
          for (i4 = 0; i4 < l3; i4++) {
            carry += quotientDigit * divisor[i4];
            q3 = Math.floor(carry / base2);
            borrow += remainder[shift + i4] - (carry - q3 * base2);
            carry = q3;
            if (borrow < 0) {
              remainder[shift + i4] = borrow + base2;
              borrow = -1;
            } else {
              remainder[shift + i4] = borrow;
              borrow = 0;
            }
          }
          while (borrow !== 0) {
            quotientDigit -= 1;
            carry = 0;
            for (i4 = 0; i4 < l3; i4++) {
              carry += remainder[shift + i4] - base2 + divisor[i4];
              if (carry < 0) {
                remainder[shift + i4] = carry + base2;
                carry = 0;
              } else {
                remainder[shift + i4] = carry;
                carry = 1;
              }
            }
            borrow += carry;
          }
          result[shift] = quotientDigit;
        }
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
      }
      function divMod2(a3, b3) {
        var a_l = a3.length, b_l = b3.length, result = [], part = [], base2 = BASE, guess, xlen, highx, highy, check;
        while (a_l) {
          part.unshift(a3[--a_l]);
          trim(part);
          if (compareAbs(part, b3) < 0) {
            result.push(0);
            continue;
          }
          xlen = part.length;
          highx = part[xlen - 1] * base2 + part[xlen - 2];
          highy = b3[b_l - 1] * base2 + b3[b_l - 2];
          if (xlen > b_l) {
            highx = (highx + 1) * base2;
          }
          guess = Math.ceil(highx / highy);
          do {
            check = multiplySmall(b3, guess);
            if (compareAbs(check, part) <= 0)
              break;
            guess--;
          } while (guess);
          result.push(guess);
          part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
      }
      function divModSmall(value, lambda) {
        var length = value.length, quotient = createArray(length), base2 = BASE, i4, q3, remainder, divisor;
        remainder = 0;
        for (i4 = length - 1; i4 >= 0; --i4) {
          divisor = remainder * base2 + value[i4];
          q3 = truncate(divisor / lambda);
          remainder = divisor - q3 * lambda;
          quotient[i4] = q3 | 0;
        }
        return [quotient, remainder | 0];
      }
      function divModAny(self2, v3) {
        var value, n2 = parseValue(v3);
        if (supportsNativeBigInt) {
          return [new NativeBigInt(self2.value / n2.value), new NativeBigInt(self2.value % n2.value)];
        }
        var a3 = self2.value, b3 = n2.value;
        var quotient;
        if (b3 === 0)
          throw new Error("Cannot divide by zero");
        if (self2.isSmall) {
          if (n2.isSmall) {
            return [new SmallInteger(truncate(a3 / b3)), new SmallInteger(a3 % b3)];
          }
          return [Integer[0], self2];
        }
        if (n2.isSmall) {
          if (b3 === 1)
            return [self2, Integer[0]];
          if (b3 == -1)
            return [self2.negate(), Integer[0]];
          var abs = Math.abs(b3);
          if (abs < BASE) {
            value = divModSmall(a3, abs);
            quotient = arrayToSmall(value[0]);
            var remainder = value[1];
            if (self2.sign)
              remainder = -remainder;
            if (typeof quotient === "number") {
              if (self2.sign !== n2.sign)
                quotient = -quotient;
              return [new SmallInteger(quotient), new SmallInteger(remainder)];
            }
            return [new BigInteger(quotient, self2.sign !== n2.sign), new SmallInteger(remainder)];
          }
          b3 = smallToArray(abs);
        }
        var comparison = compareAbs(a3, b3);
        if (comparison === -1)
          return [Integer[0], self2];
        if (comparison === 0)
          return [Integer[self2.sign === n2.sign ? 1 : -1], Integer[0]];
        if (a3.length + b3.length <= 200)
          value = divMod1(a3, b3);
        else
          value = divMod2(a3, b3);
        quotient = value[0];
        var qSign = self2.sign !== n2.sign, mod = value[1], mSign = self2.sign;
        if (typeof quotient === "number") {
          if (qSign)
            quotient = -quotient;
          quotient = new SmallInteger(quotient);
        } else
          quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
          if (mSign)
            mod = -mod;
          mod = new SmallInteger(mod);
        } else
          mod = new BigInteger(mod, mSign);
        return [quotient, mod];
      }
      BigInteger.prototype.divmod = function(v3) {
        var result = divModAny(this, v3);
        return {
          quotient: result[0],
          remainder: result[1]
        };
      };
      NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
      BigInteger.prototype.divide = function(v3) {
        return divModAny(this, v3)[0];
      };
      NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v3) {
        return new NativeBigInt(this.value / parseValue(v3).value);
      };
      SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
      BigInteger.prototype.mod = function(v3) {
        return divModAny(this, v3)[1];
      };
      NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v3) {
        return new NativeBigInt(this.value % parseValue(v3).value);
      };
      SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
      BigInteger.prototype.pow = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value, value, x5, y3;
        if (b3 === 0)
          return Integer[1];
        if (a3 === 0)
          return Integer[0];
        if (a3 === 1)
          return Integer[1];
        if (a3 === -1)
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.sign) {
          return Integer[0];
        }
        if (!n2.isSmall)
          throw new Error("The exponent " + n2.toString() + " is too large.");
        if (this.isSmall) {
          if (isPrecise(value = Math.pow(a3, b3)))
            return new SmallInteger(truncate(value));
        }
        x5 = this;
        y3 = Integer[1];
        while (true) {
          if (b3 & true) {
            y3 = y3.times(x5);
            --b3;
          }
          if (b3 === 0)
            break;
          b3 /= 2;
          x5 = x5.square();
        }
        return y3;
      };
      SmallInteger.prototype.pow = BigInteger.prototype.pow;
      NativeBigInt.prototype.pow = function(v3) {
        var n2 = parseValue(v3);
        var a3 = this.value, b3 = n2.value;
        var _0 = BigInt(0), _1 = BigInt(1), _22 = BigInt(2);
        if (b3 === _0)
          return Integer[1];
        if (a3 === _0)
          return Integer[0];
        if (a3 === _1)
          return Integer[1];
        if (a3 === BigInt(-1))
          return n2.isEven() ? Integer[1] : Integer[-1];
        if (n2.isNegative())
          return new NativeBigInt(_0);
        var x5 = this;
        var y3 = Integer[1];
        while (true) {
          if ((b3 & _1) === _1) {
            y3 = y3.times(x5);
            --b3;
          }
          if (b3 === _0)
            break;
          b3 /= _22;
          x5 = x5.square();
        }
        return y3;
      };
      BigInteger.prototype.modPow = function(exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero())
          throw new Error("Cannot take modPow with modulus 0");
        var r3 = Integer[1], base2 = this.mod(mod);
        if (exp.isNegative()) {
          exp = exp.multiply(Integer[-1]);
          base2 = base2.modInv(mod);
        }
        while (exp.isPositive()) {
          if (base2.isZero())
            return Integer[0];
          if (exp.isOdd())
            r3 = r3.multiply(base2).mod(mod);
          exp = exp.divide(2);
          base2 = base2.square().mod(mod);
        }
        return r3;
      };
      NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
      function compareAbs(a3, b3) {
        if (a3.length !== b3.length) {
          return a3.length > b3.length ? 1 : -1;
        }
        for (var i4 = a3.length - 1; i4 >= 0; i4--) {
          if (a3[i4] !== b3[i4])
            return a3[i4] > b3[i4] ? 1 : -1;
        }
        return 0;
      }
      BigInteger.prototype.compareAbs = function(v3) {
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (n2.isSmall)
          return 1;
        return compareAbs(a3, b3);
      };
      SmallInteger.prototype.compareAbs = function(v3) {
        var n2 = parseValue(v3), a3 = Math.abs(this.value), b3 = n2.value;
        if (n2.isSmall) {
          b3 = Math.abs(b3);
          return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
        }
        return -1;
      };
      NativeBigInt.prototype.compareAbs = function(v3) {
        var a3 = this.value;
        var b3 = parseValue(v3).value;
        a3 = a3 >= 0 ? a3 : -a3;
        b3 = b3 >= 0 ? b3 : -b3;
        return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
      };
      BigInteger.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (this.sign !== n2.sign) {
          return n2.sign ? 1 : -1;
        }
        if (n2.isSmall) {
          return this.sign ? -1 : 1;
        }
        return compareAbs(a3, b3) * (this.sign ? -1 : 1);
      };
      BigInteger.prototype.compareTo = BigInteger.prototype.compare;
      SmallInteger.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var n2 = parseValue(v3), a3 = this.value, b3 = n2.value;
        if (n2.isSmall) {
          return a3 == b3 ? 0 : a3 > b3 ? 1 : -1;
        }
        if (a3 < 0 !== n2.sign) {
          return a3 < 0 ? -1 : 1;
        }
        return a3 < 0 ? 1 : -1;
      };
      SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
      NativeBigInt.prototype.compare = function(v3) {
        if (v3 === Infinity) {
          return -1;
        }
        if (v3 === -Infinity) {
          return 1;
        }
        var a3 = this.value;
        var b3 = parseValue(v3).value;
        return a3 === b3 ? 0 : a3 > b3 ? 1 : -1;
      };
      NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
      BigInteger.prototype.equals = function(v3) {
        return this.compare(v3) === 0;
      };
      NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
      BigInteger.prototype.notEquals = function(v3) {
        return this.compare(v3) !== 0;
      };
      NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
      BigInteger.prototype.greater = function(v3) {
        return this.compare(v3) > 0;
      };
      NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
      BigInteger.prototype.lesser = function(v3) {
        return this.compare(v3) < 0;
      };
      NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
      BigInteger.prototype.greaterOrEquals = function(v3) {
        return this.compare(v3) >= 0;
      };
      NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
      BigInteger.prototype.lesserOrEquals = function(v3) {
        return this.compare(v3) <= 0;
      };
      NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
      BigInteger.prototype.isEven = function() {
        return (this.value[0] & 1) === 0;
      };
      SmallInteger.prototype.isEven = function() {
        return (this.value & 1) === 0;
      };
      NativeBigInt.prototype.isEven = function() {
        return (this.value & BigInt(1)) === BigInt(0);
      };
      BigInteger.prototype.isOdd = function() {
        return (this.value[0] & 1) === 1;
      };
      SmallInteger.prototype.isOdd = function() {
        return (this.value & 1) === 1;
      };
      NativeBigInt.prototype.isOdd = function() {
        return (this.value & BigInt(1)) === BigInt(1);
      };
      BigInteger.prototype.isPositive = function() {
        return !this.sign;
      };
      SmallInteger.prototype.isPositive = function() {
        return this.value > 0;
      };
      NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
      BigInteger.prototype.isNegative = function() {
        return this.sign;
      };
      SmallInteger.prototype.isNegative = function() {
        return this.value < 0;
      };
      NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
      BigInteger.prototype.isUnit = function() {
        return false;
      };
      SmallInteger.prototype.isUnit = function() {
        return Math.abs(this.value) === 1;
      };
      NativeBigInt.prototype.isUnit = function() {
        return this.abs().value === BigInt(1);
      };
      BigInteger.prototype.isZero = function() {
        return false;
      };
      SmallInteger.prototype.isZero = function() {
        return this.value === 0;
      };
      NativeBigInt.prototype.isZero = function() {
        return this.value === BigInt(0);
      };
      BigInteger.prototype.isDivisibleBy = function(v3) {
        var n2 = parseValue(v3);
        if (n2.isZero())
          return false;
        if (n2.isUnit())
          return true;
        if (n2.compareAbs(2) === 0)
          return this.isEven();
        return this.mod(n2).isZero();
      };
      NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
      function isBasicPrime(v3) {
        var n2 = v3.abs();
        if (n2.isUnit())
          return false;
        if (n2.equals(2) || n2.equals(3) || n2.equals(5))
          return true;
        if (n2.isEven() || n2.isDivisibleBy(3) || n2.isDivisibleBy(5))
          return false;
        if (n2.lesser(49))
          return true;
      }
      function millerRabinTest(n2, a3) {
        var nPrev = n2.prev(), b3 = nPrev, r3 = 0, d3, t3, i4, x5;
        while (b3.isEven())
          b3 = b3.divide(2), r3++;
        next:
          for (i4 = 0; i4 < a3.length; i4++) {
            if (n2.lesser(a3[i4]))
              continue;
            x5 = bigInt(a3[i4]).modPow(b3, n2);
            if (x5.isUnit() || x5.equals(nPrev))
              continue;
            for (d3 = r3 - 1; d3 != 0; d3--) {
              x5 = x5.square().mod(n2);
              if (x5.isUnit())
                return false;
              if (x5.equals(nPrev))
                continue next;
            }
            return false;
          }
        return true;
      }
      BigInteger.prototype.isPrime = function(strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2)
          return isPrime;
        var n2 = this.abs();
        var bits = n2.bitLength();
        if (bits <= 64)
          return millerRabinTest(n2, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t3 = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
        for (var a3 = [], i4 = 0; i4 < t3; i4++) {
          a3.push(bigInt(i4 + 2));
        }
        return millerRabinTest(n2, a3);
      };
      NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
      BigInteger.prototype.isProbablePrime = function(iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined2)
          return isPrime;
        var n2 = this.abs();
        var t3 = iterations === undefined2 ? 5 : iterations;
        for (var a3 = [], i4 = 0; i4 < t3; i4++) {
          a3.push(bigInt.randBetween(2, n2.minus(2), rng));
        }
        return millerRabinTest(n2, a3);
      };
      NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
      BigInteger.prototype.modInv = function(n2) {
        var t3 = bigInt.zero, newT = bigInt.one, r3 = parseValue(n2), newR = this.abs(), q3, lastT, lastR;
        while (!newR.isZero()) {
          q3 = r3.divide(newR);
          lastT = t3;
          lastR = r3;
          t3 = newT;
          r3 = newR;
          newT = lastT.subtract(q3.multiply(newT));
          newR = lastR.subtract(q3.multiply(newR));
        }
        if (!r3.isUnit())
          throw new Error(this.toString() + " and " + n2.toString() + " are not co-prime");
        if (t3.compare(0) === -1) {
          t3 = t3.add(n2);
        }
        if (this.isNegative()) {
          return t3.negate();
        }
        return t3;
      };
      NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
      BigInteger.prototype.next = function() {
        var value = this.value;
        if (this.sign) {
          return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
      };
      SmallInteger.prototype.next = function() {
        var value = this.value;
        if (value + 1 < MAX_INT)
          return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
      };
      NativeBigInt.prototype.next = function() {
        return new NativeBigInt(this.value + BigInt(1));
      };
      BigInteger.prototype.prev = function() {
        var value = this.value;
        if (this.sign) {
          return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
      };
      SmallInteger.prototype.prev = function() {
        var value = this.value;
        if (value - 1 > -MAX_INT)
          return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
      };
      NativeBigInt.prototype.prev = function() {
        return new NativeBigInt(this.value - BigInt(1));
      };
      var powersOfTwo = [1];
      while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE)
        powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
      var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
      function shift_isSmall(n2) {
        return Math.abs(n2) <= BASE;
      }
      BigInteger.prototype.shiftLeft = function(v3) {
        var n2 = parseValue(v3).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftRight(-n2);
        var result = this;
        if (result.isZero())
          return result;
        while (n2 >= powers2Length) {
          result = result.multiply(highestPower2);
          n2 -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n2]);
      };
      NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
      BigInteger.prototype.shiftRight = function(v3) {
        var remQuo;
        var n2 = parseValue(v3).toJSNumber();
        if (!shift_isSmall(n2)) {
          throw new Error(String(n2) + " is too large for shifting.");
        }
        if (n2 < 0)
          return this.shiftLeft(-n2);
        var result = this;
        while (n2 >= powers2Length) {
          if (result.isZero() || result.isNegative() && result.isUnit())
            return result;
          remQuo = divModAny(result, highestPower2);
          result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
          n2 -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n2]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      };
      NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
      function bitwise(x5, y3, fn) {
        y3 = parseValue(y3);
        var xSign = x5.isNegative(), ySign = y3.isNegative();
        var xRem = xSign ? x5.not() : x5, yRem = ySign ? y3.not() : y3;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
          xDivMod = divModAny(xRem, highestPower2);
          xDigit = xDivMod[1].toJSNumber();
          if (xSign) {
            xDigit = highestPower2 - 1 - xDigit;
          }
          yDivMod = divModAny(yRem, highestPower2);
          yDigit = yDivMod[1].toJSNumber();
          if (ySign) {
            yDigit = highestPower2 - 1 - yDigit;
          }
          xRem = xDivMod[0];
          yRem = yDivMod[0];
          result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i4 = result.length - 1; i4 >= 0; i4 -= 1) {
          sum = sum.multiply(highestPower2).add(bigInt(result[i4]));
        }
        return sum;
      }
      BigInteger.prototype.not = function() {
        return this.negate().prev();
      };
      NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
      BigInteger.prototype.and = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 & b3;
        });
      };
      NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
      BigInteger.prototype.or = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 | b3;
        });
      };
      NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
      BigInteger.prototype.xor = function(n2) {
        return bitwise(this, n2, function(a3, b3) {
          return a3 ^ b3;
        });
      };
      NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
      var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
      function roughLOB(n2) {
        var v3 = n2.value, x5 = typeof v3 === "number" ? v3 | LOBMASK_I : typeof v3 === "bigint" ? v3 | BigInt(LOBMASK_I) : v3[0] + v3[1] * BASE | LOBMASK_BI;
        return x5 & -x5;
      }
      function integerLogarithm(value, base2) {
        if (base2.compareTo(value) <= 0) {
          var tmp = integerLogarithm(value, base2.square(base2));
          var p4 = tmp.p;
          var e3 = tmp.e;
          var t3 = p4.multiply(base2);
          return t3.compareTo(value) <= 0 ? { p: t3, e: e3 * 2 + 1 } : { p: p4, e: e3 * 2 };
        }
        return { p: bigInt(1), e: 0 };
      }
      BigInteger.prototype.bitLength = function() {
        var n2 = this;
        if (n2.compareTo(bigInt(0)) < 0) {
          n2 = n2.negate().subtract(bigInt(1));
        }
        if (n2.compareTo(bigInt(0)) === 0) {
          return bigInt(0);
        }
        return bigInt(integerLogarithm(n2, bigInt(2)).e).add(bigInt(1));
      };
      NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
      function max(a3, b3) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        return a3.greater(b3) ? a3 : b3;
      }
      function min(a3, b3) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        return a3.lesser(b3) ? a3 : b3;
      }
      function gcd(a3, b3) {
        a3 = parseValue(a3).abs();
        b3 = parseValue(b3).abs();
        if (a3.equals(b3))
          return a3;
        if (a3.isZero())
          return b3;
        if (b3.isZero())
          return a3;
        var c3 = Integer[1], d3, t3;
        while (a3.isEven() && b3.isEven()) {
          d3 = min(roughLOB(a3), roughLOB(b3));
          a3 = a3.divide(d3);
          b3 = b3.divide(d3);
          c3 = c3.multiply(d3);
        }
        while (a3.isEven()) {
          a3 = a3.divide(roughLOB(a3));
        }
        do {
          while (b3.isEven()) {
            b3 = b3.divide(roughLOB(b3));
          }
          if (a3.greater(b3)) {
            t3 = b3;
            b3 = a3;
            a3 = t3;
          }
          b3 = b3.subtract(a3);
        } while (!b3.isZero());
        return c3.isUnit() ? a3 : a3.multiply(c3);
      }
      function lcm(a3, b3) {
        a3 = parseValue(a3).abs();
        b3 = parseValue(b3).abs();
        return a3.divide(gcd(a3, b3)).multiply(b3);
      }
      function randBetween(a3, b3, rng) {
        a3 = parseValue(a3);
        b3 = parseValue(b3);
        var usedRNG = rng || Math.random;
        var low = min(a3, b3), high = max(a3, b3);
        var range = high.subtract(low).add(1);
        if (range.isSmall)
          return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i4 = 0; i4 < digits.length; i4++) {
          var top = restricted ? digits[i4] + (i4 + 1 < digits.length ? digits[i4 + 1] / BASE : 0) : BASE;
          var digit = truncate(usedRNG() * top);
          result.push(digit);
          if (digit < digits[i4])
            restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
      }
      var parseBase = function(text, base2, alphabet, caseSensitive) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
          text = text.toLowerCase();
          alphabet = alphabet.toLowerCase();
        }
        var length = text.length;
        var i4;
        var absBase = Math.abs(base2);
        var alphabetValues = {};
        for (i4 = 0; i4 < alphabet.length; i4++) {
          alphabetValues[alphabet[i4]] = i4;
        }
        for (i4 = 0; i4 < length; i4++) {
          var c3 = text[i4];
          if (c3 === "-")
            continue;
          if (c3 in alphabetValues) {
            if (alphabetValues[c3] >= absBase) {
              if (c3 === "1" && absBase === 1)
                continue;
              throw new Error(c3 + " is not a valid digit in base " + base2 + ".");
            }
          }
        }
        base2 = parseValue(base2);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i4 = isNegative ? 1 : 0; i4 < text.length; i4++) {
          var c3 = text[i4];
          if (c3 in alphabetValues)
            digits.push(parseValue(alphabetValues[c3]));
          else if (c3 === "<") {
            var start = i4;
            do {
              i4++;
            } while (text[i4] !== ">" && i4 < text.length);
            digits.push(parseValue(text.slice(start + 1, i4)));
          } else
            throw new Error(c3 + " is not a valid character");
        }
        return parseBaseFromArray(digits, base2, isNegative);
      };
      function parseBaseFromArray(digits, base2, isNegative) {
        var val = Integer[0], pow = Integer[1], i4;
        for (i4 = digits.length - 1; i4 >= 0; i4--) {
          val = val.add(digits[i4].times(pow));
          pow = pow.times(base2);
        }
        return isNegative ? val.negate() : val;
      }
      function stringify(digit, alphabet) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        if (digit < alphabet.length) {
          return alphabet[digit];
        }
        return "<" + digit + ">";
      }
      function toBase(n2, base2) {
        base2 = bigInt(base2);
        if (base2.isZero()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base2.equals(-1)) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          if (n2.isNegative())
            return {
              value: [].concat.apply(
                [],
                Array.apply(null, Array(-n2.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
              ),
              isNegative: false
            };
          var arr = Array.apply(null, Array(n2.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
          arr.unshift([1]);
          return {
            value: [].concat.apply([], arr),
            isNegative: false
          };
        }
        var neg = false;
        if (n2.isNegative() && base2.isPositive()) {
          neg = true;
          n2 = n2.abs();
        }
        if (base2.isUnit()) {
          if (n2.isZero())
            return { value: [0], isNegative: false };
          return {
            value: Array.apply(null, Array(n2.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: neg
          };
        }
        var out = [];
        var left = n2, divmod;
        while (left.isNegative() || left.compareAbs(base2) >= 0) {
          divmod = left.divmod(base2);
          left = divmod.quotient;
          var digit = divmod.remainder;
          if (digit.isNegative()) {
            digit = base2.minus(digit).abs();
            left = left.next();
          }
          out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
      }
      function toBaseString(n2, base2, alphabet) {
        var arr = toBase(n2, base2);
        return (arr.isNegative ? "-" : "") + arr.value.map(function(x5) {
          return stringify(x5, alphabet);
        }).join("");
      }
      BigInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      SmallInteger.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      NativeBigInt.prototype.toArray = function(radix) {
        return toBase(this, radix);
      };
      BigInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2)
          radix = 10;
        if (radix !== 10)
          return toBaseString(this, radix, alphabet);
        var v3 = this.value, l3 = v3.length, str = String(v3[--l3]), zeros = "0000000", digit;
        while (--l3 >= 0) {
          digit = String(v3[l3]);
          str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
      };
      SmallInteger.prototype.toString = function(radix, alphabet) {
        if (radix === undefined2)
          radix = 10;
        if (radix != 10)
          return toBaseString(this, radix, alphabet);
        return String(this.value);
      };
      NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
      NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
        return this.toString();
      };
      BigInteger.prototype.valueOf = function() {
        return parseInt(this.toString(), 10);
      };
      BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
      SmallInteger.prototype.valueOf = function() {
        return this.value;
      };
      SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
      NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
        return parseInt(this.toString(), 10);
      };
      function parseStringValue(v3) {
        if (isPrecise(+v3)) {
          var x5 = +v3;
          if (x5 === truncate(x5))
            return supportsNativeBigInt ? new NativeBigInt(BigInt(x5)) : new SmallInteger(x5);
          throw new Error("Invalid integer: " + v3);
        }
        var sign = v3[0] === "-";
        if (sign)
          v3 = v3.slice(1);
        var split = v3.split(/e/i);
        if (split.length > 2)
          throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
          var exp = split[1];
          if (exp[0] === "+")
            exp = exp.slice(1);
          exp = +exp;
          if (exp !== truncate(exp) || !isPrecise(exp))
            throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
          var text = split[0];
          var decimalPlace = text.indexOf(".");
          if (decimalPlace >= 0) {
            exp -= text.length - decimalPlace - 1;
            text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
          }
          if (exp < 0)
            throw new Error("Cannot include negative exponent part for integers");
          text += new Array(exp + 1).join("0");
          v3 = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v3);
        if (!isValid)
          throw new Error("Invalid integer: " + v3);
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(sign ? "-" + v3 : v3));
        }
        var r3 = [], max2 = v3.length, l3 = LOG_BASE, min2 = max2 - l3;
        while (max2 > 0) {
          r3.push(+v3.slice(min2, max2));
          min2 -= l3;
          if (min2 < 0)
            min2 = 0;
          max2 -= l3;
        }
        trim(r3);
        return new BigInteger(r3, sign);
      }
      function parseNumberValue(v3) {
        if (supportsNativeBigInt) {
          return new NativeBigInt(BigInt(v3));
        }
        if (isPrecise(v3)) {
          if (v3 !== truncate(v3))
            throw new Error(v3 + " is not an integer.");
          return new SmallInteger(v3);
        }
        return parseStringValue(v3.toString());
      }
      function parseValue(v3) {
        if (typeof v3 === "number") {
          return parseNumberValue(v3);
        }
        if (typeof v3 === "string") {
          return parseStringValue(v3);
        }
        if (typeof v3 === "bigint") {
          return new NativeBigInt(v3);
        }
        return v3;
      }
      for (var i3 = 0; i3 < 1e3; i3++) {
        Integer[i3] = parseValue(i3);
        if (i3 > 0)
          Integer[-i3] = parseValue(-i3);
      }
      Integer.one = Integer[1];
      Integer.zero = Integer[0];
      Integer.minusOne = Integer[-1];
      Integer.max = max;
      Integer.min = min;
      Integer.gcd = gcd;
      Integer.lcm = lcm;
      Integer.isInstance = function(x5) {
        return x5 instanceof BigInteger || x5 instanceof SmallInteger || x5 instanceof NativeBigInt;
      };
      Integer.randBetween = randBetween;
      Integer.fromArray = function(digits, base2, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base2 || 10), isNegative);
      };
      return Integer;
    }();
    if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
      module.exports = bigInt;
    }
    if (typeof define === "function" && define.amd) {
      define(function() {
        return bigInt;
      });
    }
  }
});

// ../../node_modules/.pnpm/jed@1.1.1/node_modules/jed/jed.js
var require_jed = __commonJS({
  "../../node_modules/.pnpm/jed@1.1.1/node_modules/jed/jed.js"(exports, module) {
    (function(root, undef) {
      var ArrayProto = Array.prototype, ObjProto = Object.prototype, slice = ArrayProto.slice, hasOwnProp = ObjProto.hasOwnProperty, nativeForEach = ArrayProto.forEach, breaker = {};
      var _3 = {
        forEach: function(obj, iterator, context) {
          var i3, l3, key;
          if (obj === null) {
            return;
          }
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (i3 = 0, l3 = obj.length; i3 < l3; i3++) {
              if (i3 in obj && iterator.call(context, obj[i3], i3, obj) === breaker) {
                return;
              }
            }
          } else {
            for (key in obj) {
              if (hasOwnProp.call(obj, key)) {
                if (iterator.call(context, obj[key], key, obj) === breaker) {
                  return;
                }
              }
            }
          }
        },
        extend: function(obj) {
          this.forEach(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
              obj[prop] = source[prop];
            }
          });
          return obj;
        }
      };
      var Jed2 = function(options) {
        this.defaults = {
          "locale_data": {
            "messages": {
              "": {
                "domain": "messages",
                "lang": "en",
                "plural_forms": "nplurals=2; plural=(n != 1);"
              }
            }
          },
          "domain": "messages",
          "debug": false
        };
        this.options = _3.extend({}, this.defaults, options);
        this.textdomain(this.options.domain);
        if (options.domain && !this.options.locale_data[this.options.domain]) {
          throw new Error("Text domain set to non-existent domain: `" + options.domain + "`");
        }
      };
      Jed2.context_delimiter = String.fromCharCode(4);
      function getPluralFormFunc(plural_form_string) {
        return Jed2.PF.compile(plural_form_string || "nplurals=2; plural=(n != 1);");
      }
      function Chain(key, i18n2) {
        this._key = key;
        this._i18n = i18n2;
      }
      _3.extend(Chain.prototype, {
        onDomain: function(domain) {
          this._domain = domain;
          return this;
        },
        withContext: function(context) {
          this._context = context;
          return this;
        },
        ifPlural: function(num, pkey) {
          this._val = num;
          this._pkey = pkey;
          return this;
        },
        fetch: function(sArr) {
          if ({}.toString.call(sArr) != "[object Array]") {
            sArr = [].slice.call(arguments, 0);
          }
          return (sArr && sArr.length ? Jed2.sprintf : function(x5) {
            return x5;
          })(
            this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val),
            sArr
          );
        }
      });
      _3.extend(Jed2.prototype, {
        translate: function(key) {
          return new Chain(key, this);
        },
        textdomain: function(domain) {
          if (!domain) {
            return this._textdomain;
          }
          this._textdomain = domain;
        },
        gettext: function(key) {
          return this.dcnpgettext.call(this, undef, undef, key);
        },
        dgettext: function(domain, key) {
          return this.dcnpgettext.call(this, domain, undef, key);
        },
        dcgettext: function(domain, key) {
          return this.dcnpgettext.call(this, domain, undef, key);
        },
        ngettext: function(skey, pkey, val) {
          return this.dcnpgettext.call(this, undef, undef, skey, pkey, val);
        },
        dngettext: function(domain, skey, pkey, val) {
          return this.dcnpgettext.call(this, domain, undef, skey, pkey, val);
        },
        dcngettext: function(domain, skey, pkey, val) {
          return this.dcnpgettext.call(this, domain, undef, skey, pkey, val);
        },
        pgettext: function(context, key) {
          return this.dcnpgettext.call(this, undef, context, key);
        },
        dpgettext: function(domain, context, key) {
          return this.dcnpgettext.call(this, domain, context, key);
        },
        dcpgettext: function(domain, context, key) {
          return this.dcnpgettext.call(this, domain, context, key);
        },
        npgettext: function(context, skey, pkey, val) {
          return this.dcnpgettext.call(this, undef, context, skey, pkey, val);
        },
        dnpgettext: function(domain, context, skey, pkey, val) {
          return this.dcnpgettext.call(this, domain, context, skey, pkey, val);
        },
        dcnpgettext: function(domain, context, singular_key, plural_key, val) {
          plural_key = plural_key || singular_key;
          domain = domain || this._textdomain;
          var fallback;
          if (!this.options) {
            fallback = new Jed2();
            return fallback.dcnpgettext.call(fallback, void 0, void 0, singular_key, plural_key, val);
          }
          if (!this.options.locale_data) {
            throw new Error("No locale data provided.");
          }
          if (!this.options.locale_data[domain]) {
            throw new Error("Domain `" + domain + "` was not found.");
          }
          if (!this.options.locale_data[domain][""]) {
            throw new Error("No locale meta information provided.");
          }
          if (!singular_key) {
            throw new Error("No translation key found.");
          }
          var key = context ? context + Jed2.context_delimiter + singular_key : singular_key, locale_data = this.options.locale_data, dict = locale_data[domain], defaultConf = (locale_data.messages || this.defaults.locale_data.messages)[""], pluralForms = dict[""].plural_forms || dict[""]["Plural-Forms"] || dict[""]["plural-forms"] || defaultConf.plural_forms || defaultConf["Plural-Forms"] || defaultConf["plural-forms"], val_list, res;
          var val_idx;
          if (val === void 0) {
            val_idx = 0;
          } else {
            if (typeof val != "number") {
              val = parseInt(val, 10);
              if (isNaN(val)) {
                throw new Error("The number that was passed in is not a number.");
              }
            }
            val_idx = getPluralFormFunc(pluralForms)(val);
          }
          if (!dict) {
            throw new Error("No domain named `" + domain + "` could be found.");
          }
          val_list = dict[key];
          if (!val_list || val_idx > val_list.length) {
            if (this.options.missing_key_callback) {
              this.options.missing_key_callback(key, domain);
            }
            res = [singular_key, plural_key];
            if (this.options.debug === true) {
              console.log(res[getPluralFormFunc(pluralForms)(val)]);
            }
            return res[getPluralFormFunc()(val)];
          }
          res = val_list[val_idx];
          if (!res) {
            res = [singular_key, plural_key];
            return res[getPluralFormFunc()(val)];
          }
          return res;
        }
      });
      var sprintf = function() {
        function get_type(variable) {
          return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
        }
        function str_repeat(input, multiplier) {
          for (var output = []; multiplier > 0; output[--multiplier] = input) {
          }
          return output.join("");
        }
        var str_format = function() {
          if (!str_format.cache.hasOwnProperty(arguments[0])) {
            str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
          }
          return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
        };
        str_format.format = function(parse_tree, argv) {
          var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i3, k3, match, pad, pad_character, pad_length;
          for (i3 = 0; i3 < tree_length; i3++) {
            node_type = get_type(parse_tree[i3]);
            if (node_type === "string") {
              output.push(parse_tree[i3]);
            } else if (node_type === "array") {
              match = parse_tree[i3];
              if (match[2]) {
                arg = argv[cursor];
                for (k3 = 0; k3 < match[2].length; k3++) {
                  if (!arg.hasOwnProperty(match[2][k3])) {
                    throw sprintf('[sprintf] property "%s" does not exist', match[2][k3]);
                  }
                  arg = arg[match[2][k3]];
                }
              } else if (match[1]) {
                arg = argv[match[1]];
              } else {
                arg = argv[cursor++];
              }
              if (/[^s]/.test(match[8]) && get_type(arg) != "number") {
                throw sprintf("[sprintf] expecting number but found %s", get_type(arg));
              }
              if (typeof arg == "undefined" || arg === null) {
                arg = "";
              }
              switch (match[8]) {
                case "b":
                  arg = arg.toString(2);
                  break;
                case "c":
                  arg = String.fromCharCode(arg);
                  break;
                case "d":
                  arg = parseInt(arg, 10);
                  break;
                case "e":
                  arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                  break;
                case "f":
                  arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                  break;
                case "o":
                  arg = arg.toString(8);
                  break;
                case "s":
                  arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                  break;
                case "u":
                  arg = Math.abs(arg);
                  break;
                case "x":
                  arg = arg.toString(16);
                  break;
                case "X":
                  arg = arg.toString(16).toUpperCase();
                  break;
              }
              arg = /[def]/.test(match[8]) && match[3] && arg >= 0 ? "+" + arg : arg;
              pad_character = match[4] ? match[4] == "0" ? "0" : match[4].charAt(1) : " ";
              pad_length = match[6] - String(arg).length;
              pad = match[6] ? str_repeat(pad_character, pad_length) : "";
              output.push(match[5] ? arg + pad : pad + arg);
            }
          }
          return output.join("");
        };
        str_format.cache = {};
        str_format.parse = function(fmt) {
          var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
          while (_fmt) {
            if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
              parse_tree.push(match[0]);
            } else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
              parse_tree.push("%");
            } else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
              if (match[2]) {
                arg_names |= 1;
                var field_list = [], replacement_field = match[2], field_match = [];
                if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                  field_list.push(field_match[1]);
                  while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
                    if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                      field_list.push(field_match[1]);
                    } else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                      field_list.push(field_match[1]);
                    } else {
                      throw "[sprintf] huh?";
                    }
                  }
                } else {
                  throw "[sprintf] huh?";
                }
                match[2] = field_list;
              } else {
                arg_names |= 2;
              }
              if (arg_names === 3) {
                throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
              }
              parse_tree.push(match);
            } else {
              throw "[sprintf] huh?";
            }
            _fmt = _fmt.substring(match[0].length);
          }
          return parse_tree;
        };
        return str_format;
      }();
      var vsprintf = function(fmt, argv) {
        argv.unshift(fmt);
        return sprintf.apply(null, argv);
      };
      Jed2.parse_plural = function(plural_forms, n2) {
        plural_forms = plural_forms.replace(/n/g, n2);
        return Jed2.parse_expression(plural_forms);
      };
      Jed2.sprintf = function(fmt, args) {
        if ({}.toString.call(args) == "[object Array]") {
          return vsprintf(fmt, [].slice.call(args));
        }
        return sprintf.apply(this, [].slice.call(arguments));
      };
      Jed2.prototype.sprintf = function() {
        return Jed2.sprintf.apply(this, arguments);
      };
      Jed2.PF = {};
      Jed2.PF.parse = function(p4) {
        var plural_str = Jed2.PF.extractPluralExpr(p4);
        return Jed2.PF.parser.parse.call(Jed2.PF.parser, plural_str);
      };
      Jed2.PF.compile = function(p4) {
        function imply(val) {
          return val === true ? 1 : val ? val : 0;
        }
        var ast = Jed2.PF.parse(p4);
        return function(n2) {
          return imply(Jed2.PF.interpreter(ast)(n2));
        };
      };
      Jed2.PF.interpreter = function(ast) {
        return function(n2) {
          var res;
          switch (ast.type) {
            case "GROUP":
              return Jed2.PF.interpreter(ast.expr)(n2);
            case "TERNARY":
              if (Jed2.PF.interpreter(ast.expr)(n2)) {
                return Jed2.PF.interpreter(ast.truthy)(n2);
              }
              return Jed2.PF.interpreter(ast.falsey)(n2);
            case "OR":
              return Jed2.PF.interpreter(ast.left)(n2) || Jed2.PF.interpreter(ast.right)(n2);
            case "AND":
              return Jed2.PF.interpreter(ast.left)(n2) && Jed2.PF.interpreter(ast.right)(n2);
            case "LT":
              return Jed2.PF.interpreter(ast.left)(n2) < Jed2.PF.interpreter(ast.right)(n2);
            case "GT":
              return Jed2.PF.interpreter(ast.left)(n2) > Jed2.PF.interpreter(ast.right)(n2);
            case "LTE":
              return Jed2.PF.interpreter(ast.left)(n2) <= Jed2.PF.interpreter(ast.right)(n2);
            case "GTE":
              return Jed2.PF.interpreter(ast.left)(n2) >= Jed2.PF.interpreter(ast.right)(n2);
            case "EQ":
              return Jed2.PF.interpreter(ast.left)(n2) == Jed2.PF.interpreter(ast.right)(n2);
            case "NEQ":
              return Jed2.PF.interpreter(ast.left)(n2) != Jed2.PF.interpreter(ast.right)(n2);
            case "MOD":
              return Jed2.PF.interpreter(ast.left)(n2) % Jed2.PF.interpreter(ast.right)(n2);
            case "VAR":
              return n2;
            case "NUM":
              return ast.val;
            default:
              throw new Error("Invalid Token found.");
          }
        };
      };
      Jed2.PF.extractPluralExpr = function(p4) {
        p4 = p4.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        if (!/;\s*$/.test(p4)) {
          p4 = p4.concat(";");
        }
        var nplurals_re = /nplurals\=(\d+);/, plural_re = /plural\=(.*);/, nplurals_matches = p4.match(nplurals_re), res = {}, plural_matches;
        if (nplurals_matches.length > 1) {
          res.nplurals = nplurals_matches[1];
        } else {
          throw new Error("nplurals not found in plural_forms string: " + p4);
        }
        p4 = p4.replace(nplurals_re, "");
        plural_matches = p4.match(plural_re);
        if (!(plural_matches && plural_matches.length > 1)) {
          throw new Error("`plural` expression not found: " + p4);
        }
        return plural_matches[1];
      };
      Jed2.PF.parser = function() {
        var parser = {
          trace: function trace() {
          },
          yy: {},
          symbols_: { "error": 2, "expressions": 3, "e": 4, "EOF": 5, "?": 6, ":": 7, "||": 8, "&&": 9, "<": 10, "<=": 11, ">": 12, ">=": 13, "!=": 14, "==": 15, "%": 16, "(": 17, ")": 18, "n": 19, "NUMBER": 20, "$accept": 0, "$end": 1 },
          terminals_: { 2: "error", 5: "EOF", 6: "?", 7: ":", 8: "||", 9: "&&", 10: "<", 11: "<=", 12: ">", 13: ">=", 14: "!=", 15: "==", 16: "%", 17: "(", 18: ")", 19: "n", 20: "NUMBER" },
          productions_: [0, [3, 2], [4, 5], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 1], [4, 1]],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch (yystate) {
              case 1:
                return { type: "GROUP", expr: $$[$0 - 1] };
                break;
              case 2:
                this.$ = { type: "TERNARY", expr: $$[$0 - 4], truthy: $$[$0 - 2], falsey: $$[$0] };
                break;
              case 3:
                this.$ = { type: "OR", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 4:
                this.$ = { type: "AND", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 5:
                this.$ = { type: "LT", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 6:
                this.$ = { type: "LTE", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 7:
                this.$ = { type: "GT", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 8:
                this.$ = { type: "GTE", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 9:
                this.$ = { type: "NEQ", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 10:
                this.$ = { type: "EQ", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 11:
                this.$ = { type: "MOD", left: $$[$0 - 2], right: $$[$0] };
                break;
              case 12:
                this.$ = { type: "GROUP", expr: $$[$0 - 1] };
                break;
              case 13:
                this.$ = { type: "VAR" };
                break;
              case 14:
                this.$ = { type: "NUM", val: Number(yytext) };
                break;
            }
          },
          table: [{ 3: 1, 4: 2, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 1: [3] }, { 5: [1, 6], 6: [1, 7], 8: [1, 8], 9: [1, 9], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16] }, { 4: 17, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 5: [2, 13], 6: [2, 13], 7: [2, 13], 8: [2, 13], 9: [2, 13], 10: [2, 13], 11: [2, 13], 12: [2, 13], 13: [2, 13], 14: [2, 13], 15: [2, 13], 16: [2, 13], 18: [2, 13] }, { 5: [2, 14], 6: [2, 14], 7: [2, 14], 8: [2, 14], 9: [2, 14], 10: [2, 14], 11: [2, 14], 12: [2, 14], 13: [2, 14], 14: [2, 14], 15: [2, 14], 16: [2, 14], 18: [2, 14] }, { 1: [2, 1] }, { 4: 18, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 19, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 20, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 21, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 22, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 23, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 24, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 25, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 26, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 4: 27, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 6: [1, 7], 8: [1, 8], 9: [1, 9], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16], 18: [1, 28] }, { 6: [1, 7], 7: [1, 29], 8: [1, 8], 9: [1, 9], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16] }, { 5: [2, 3], 6: [2, 3], 7: [2, 3], 8: [2, 3], 9: [1, 9], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16], 18: [2, 3] }, { 5: [2, 4], 6: [2, 4], 7: [2, 4], 8: [2, 4], 9: [2, 4], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16], 18: [2, 4] }, { 5: [2, 5], 6: [2, 5], 7: [2, 5], 8: [2, 5], 9: [2, 5], 10: [2, 5], 11: [2, 5], 12: [2, 5], 13: [2, 5], 14: [2, 5], 15: [2, 5], 16: [1, 16], 18: [2, 5] }, { 5: [2, 6], 6: [2, 6], 7: [2, 6], 8: [2, 6], 9: [2, 6], 10: [2, 6], 11: [2, 6], 12: [2, 6], 13: [2, 6], 14: [2, 6], 15: [2, 6], 16: [1, 16], 18: [2, 6] }, { 5: [2, 7], 6: [2, 7], 7: [2, 7], 8: [2, 7], 9: [2, 7], 10: [2, 7], 11: [2, 7], 12: [2, 7], 13: [2, 7], 14: [2, 7], 15: [2, 7], 16: [1, 16], 18: [2, 7] }, { 5: [2, 8], 6: [2, 8], 7: [2, 8], 8: [2, 8], 9: [2, 8], 10: [2, 8], 11: [2, 8], 12: [2, 8], 13: [2, 8], 14: [2, 8], 15: [2, 8], 16: [1, 16], 18: [2, 8] }, { 5: [2, 9], 6: [2, 9], 7: [2, 9], 8: [2, 9], 9: [2, 9], 10: [2, 9], 11: [2, 9], 12: [2, 9], 13: [2, 9], 14: [2, 9], 15: [2, 9], 16: [1, 16], 18: [2, 9] }, { 5: [2, 10], 6: [2, 10], 7: [2, 10], 8: [2, 10], 9: [2, 10], 10: [2, 10], 11: [2, 10], 12: [2, 10], 13: [2, 10], 14: [2, 10], 15: [2, 10], 16: [1, 16], 18: [2, 10] }, { 5: [2, 11], 6: [2, 11], 7: [2, 11], 8: [2, 11], 9: [2, 11], 10: [2, 11], 11: [2, 11], 12: [2, 11], 13: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 18: [2, 11] }, { 5: [2, 12], 6: [2, 12], 7: [2, 12], 8: [2, 12], 9: [2, 12], 10: [2, 12], 11: [2, 12], 12: [2, 12], 13: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 18: [2, 12] }, { 4: 30, 17: [1, 3], 19: [1, 4], 20: [1, 5] }, { 5: [2, 2], 6: [1, 7], 7: [2, 2], 8: [1, 8], 9: [1, 9], 10: [1, 10], 11: [1, 11], 12: [1, 12], 13: [1, 13], 14: [1, 14], 15: [1, 15], 16: [1, 16], 18: [2, 2] }],
          defaultActions: { 6: [2, 1] },
          parseError: function parseError(str, hash3) {
            throw new Error(str);
          },
          parse: function parse(input) {
            var self2 = this, stack = [0], vstack = [null], lstack = [], table2 = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            if (typeof this.lexer.yylloc == "undefined")
              this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            if (typeof this.yy.parseError === "function")
              this.parseError = this.yy.parseError;
            function popStack(n2) {
              stack.length = stack.length - 2 * n2;
              vstack.length = vstack.length - n2;
              lstack.length = lstack.length - n2;
            }
            function lex() {
              var token;
              token = self2.lexer.lex() || 1;
              if (typeof token !== "number") {
                token = self2.symbols_[token] || token;
              }
              return token;
            }
            var symbol, preErrorSymbol, state, action, a3, r3, yyval = {}, p4, len, newState, expected;
            while (true) {
              state = stack[stack.length - 1];
              if (this.defaultActions[state]) {
                action = this.defaultActions[state];
              } else {
                if (symbol == null)
                  symbol = lex();
                action = table2[state] && table2[state][symbol];
              }
              _handle_error:
                if (typeof action === "undefined" || !action.length || !action[0]) {
                  if (!recovering) {
                    expected = [];
                    for (p4 in table2[state])
                      if (this.terminals_[p4] && p4 > 2) {
                        expected.push("'" + this.terminals_[p4] + "'");
                      }
                    var errStr = "";
                    if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
                    } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                    }
                    this.parseError(
                      errStr,
                      { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected }
                    );
                  }
                  if (recovering == 3) {
                    if (symbol == EOF) {
                      throw new Error(errStr || "Parsing halted.");
                    }
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    symbol = lex();
                  }
                  while (1) {
                    if (TERROR.toString() in table2[state]) {
                      break;
                    }
                    if (state == 0) {
                      throw new Error(errStr || "Parsing halted.");
                    }
                    popStack(1);
                    state = stack[stack.length - 1];
                  }
                  preErrorSymbol = symbol;
                  symbol = TERROR;
                  state = stack[stack.length - 1];
                  action = table2[state] && table2[state][TERROR];
                  recovering = 3;
                }
              if (action[0] instanceof Array && action.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
              }
              switch (action[0]) {
                case 1:
                  stack.push(symbol);
                  vstack.push(this.lexer.yytext);
                  lstack.push(this.lexer.yylloc);
                  stack.push(action[1]);
                  symbol = null;
                  if (!preErrorSymbol) {
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                      recovering--;
                  } else {
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                  }
                  break;
                case 2:
                  len = this.productions_[action[1]][1];
                  yyval.$ = vstack[vstack.length - len];
                  yyval._$ = {
                    first_line: lstack[lstack.length - (len || 1)].first_line,
                    last_line: lstack[lstack.length - 1].last_line,
                    first_column: lstack[lstack.length - (len || 1)].first_column,
                    last_column: lstack[lstack.length - 1].last_column
                  };
                  r3 = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                  if (typeof r3 !== "undefined") {
                    return r3;
                  }
                  if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                  }
                  stack.push(this.productions_[action[1]][0]);
                  vstack.push(yyval.$);
                  lstack.push(yyval._$);
                  newState = table2[stack[stack.length - 2]][stack[stack.length - 1]];
                  stack.push(newState);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }
        };
        var lexer = function() {
          var lexer2 = {
            EOF: 1,
            parseError: function parseError(str, hash3) {
              if (this.yy.parseError) {
                this.yy.parseError(str, hash3);
              } else {
                throw new Error(str);
              }
            },
            setInput: function(input) {
              this._input = input;
              this._more = this._less = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              return this;
            },
            input: function() {
              var ch = this._input[0];
              this.yytext += ch;
              this.yyleng++;
              this.match += ch;
              this.matched += ch;
              var lines = ch.match(/\n/);
              if (lines)
                this.yylineno++;
              this._input = this._input.slice(1);
              return ch;
            },
            unput: function(ch) {
              this._input = ch + this._input;
              return this;
            },
            more: function() {
              this._more = true;
              return this;
            },
            pastInput: function() {
              var past = this.matched.substr(0, this.matched.length - this.match.length);
              return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function() {
              var next = this.match;
              if (next.length < 20) {
                next += this._input.substr(0, 20 - next.length);
              }
              return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function() {
              var pre = this.pastInput();
              var c3 = new Array(pre.length + 1).join("-");
              return pre + this.upcomingInput() + "\n" + c3 + "^";
            },
            next: function() {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input)
                this.done = true;
              var token, match, col, lines;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var rules = this._currentRules();
              for (var i3 = 0; i3 < rules.length; i3++) {
                match = this._input.match(this.rules[rules[i3]]);
                if (match) {
                  lines = match[0].match(/\n.*/g);
                  if (lines)
                    this.yylineno += lines.length;
                  this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length
                  };
                  this.yytext += match[0];
                  this.match += match[0];
                  this.matches = match;
                  this.yyleng = this.yytext.length;
                  this._more = false;
                  this._input = this._input.slice(match[0].length);
                  this.matched += match[0];
                  token = this.performAction.call(this, this.yy, this, rules[i3], this.conditionStack[this.conditionStack.length - 1]);
                  if (token)
                    return token;
                  else
                    return;
                }
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                this.parseError(
                  "Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(),
                  { text: "", token: null, line: this.yylineno }
                );
              }
            },
            lex: function lex() {
              var r3 = this.next();
              if (typeof r3 !== "undefined") {
                return r3;
              } else {
                return this.lex();
              }
            },
            begin: function begin(condition) {
              this.conditionStack.push(condition);
            },
            popState: function popState() {
              return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function() {
              return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
              this.begin(condition);
            }
          };
          lexer2.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            var YYSTATE = YY_START;
            switch ($avoiding_name_collisions) {
              case 0:
                break;
              case 1:
                return 20;
                break;
              case 2:
                return 19;
                break;
              case 3:
                return 8;
                break;
              case 4:
                return 9;
                break;
              case 5:
                return 6;
                break;
              case 6:
                return 7;
                break;
              case 7:
                return 11;
                break;
              case 8:
                return 13;
                break;
              case 9:
                return 10;
                break;
              case 10:
                return 12;
                break;
              case 11:
                return 14;
                break;
              case 12:
                return 15;
                break;
              case 13:
                return 16;
                break;
              case 14:
                return 17;
                break;
              case 15:
                return 18;
                break;
              case 16:
                return 5;
                break;
              case 17:
                return "INVALID";
                break;
            }
          };
          lexer2.rules = [/^\s+/, /^[0-9]+(\.[0-9]+)?\b/, /^n\b/, /^\|\|/, /^&&/, /^\?/, /^:/, /^<=/, /^>=/, /^</, /^>/, /^!=/, /^==/, /^%/, /^\(/, /^\)/, /^$/, /^./];
          lexer2.conditions = { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "inclusive": true } };
          return lexer2;
        }();
        parser.lexer = lexer;
        return parser;
      }();
      if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
          exports = module.exports = Jed2;
        }
        exports.Jed = Jed2;
      } else {
        if (typeof define === "function" && define.amd) {
          define(function() {
            return Jed2;
          });
        }
        root["Jed"] = Jed2;
      }
    })(exports);
  }
});

// ../../node_modules/.pnpm/qrcode-generator@1.4.4/node_modules/qrcode-generator/qrcode.js
var require_qrcode = __commonJS({
  "../../node_modules/.pnpm/qrcode-generator@1.4.4/node_modules/qrcode-generator/qrcode.js"(exports, module) {
    var qrcode2 = function() {
      var qrcode3 = function(typeNumber, errorCorrectionLevel) {
        var PAD0 = 236;
        var PAD1 = 17;
        var _typeNumber = typeNumber;
        var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
        var _modules = null;
        var _moduleCount = 0;
        var _dataCache = null;
        var _dataList = [];
        var _this = {};
        var makeImpl = function(test, maskPattern) {
          _moduleCount = _typeNumber * 4 + 17;
          _modules = function(moduleCount) {
            var modules = new Array(moduleCount);
            for (var row = 0; row < moduleCount; row += 1) {
              modules[row] = new Array(moduleCount);
              for (var col = 0; col < moduleCount; col += 1) {
                modules[row][col] = null;
              }
            }
            return modules;
          }(_moduleCount);
          setupPositionProbePattern(0, 0);
          setupPositionProbePattern(_moduleCount - 7, 0);
          setupPositionProbePattern(0, _moduleCount - 7);
          setupPositionAdjustPattern();
          setupTimingPattern();
          setupTypeInfo(test, maskPattern);
          if (_typeNumber >= 7) {
            setupTypeNumber(test);
          }
          if (_dataCache == null) {
            _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
          }
          mapData(_dataCache, maskPattern);
        };
        var setupPositionProbePattern = function(row, col) {
          for (var r3 = -1; r3 <= 7; r3 += 1) {
            if (row + r3 <= -1 || _moduleCount <= row + r3)
              continue;
            for (var c3 = -1; c3 <= 7; c3 += 1) {
              if (col + c3 <= -1 || _moduleCount <= col + c3)
                continue;
              if (0 <= r3 && r3 <= 6 && (c3 == 0 || c3 == 6) || 0 <= c3 && c3 <= 6 && (r3 == 0 || r3 == 6) || 2 <= r3 && r3 <= 4 && 2 <= c3 && c3 <= 4) {
                _modules[row + r3][col + c3] = true;
              } else {
                _modules[row + r3][col + c3] = false;
              }
            }
          }
        };
        var getBestMaskPattern = function() {
          var minLostPoint = 0;
          var pattern = 0;
          for (var i3 = 0; i3 < 8; i3 += 1) {
            makeImpl(true, i3);
            var lostPoint = QRUtil.getLostPoint(_this);
            if (i3 == 0 || minLostPoint > lostPoint) {
              minLostPoint = lostPoint;
              pattern = i3;
            }
          }
          return pattern;
        };
        var setupTimingPattern = function() {
          for (var r3 = 8; r3 < _moduleCount - 8; r3 += 1) {
            if (_modules[r3][6] != null) {
              continue;
            }
            _modules[r3][6] = r3 % 2 == 0;
          }
          for (var c3 = 8; c3 < _moduleCount - 8; c3 += 1) {
            if (_modules[6][c3] != null) {
              continue;
            }
            _modules[6][c3] = c3 % 2 == 0;
          }
        };
        var setupPositionAdjustPattern = function() {
          var pos = QRUtil.getPatternPosition(_typeNumber);
          for (var i3 = 0; i3 < pos.length; i3 += 1) {
            for (var j3 = 0; j3 < pos.length; j3 += 1) {
              var row = pos[i3];
              var col = pos[j3];
              if (_modules[row][col] != null) {
                continue;
              }
              for (var r3 = -2; r3 <= 2; r3 += 1) {
                for (var c3 = -2; c3 <= 2; c3 += 1) {
                  if (r3 == -2 || r3 == 2 || c3 == -2 || c3 == 2 || r3 == 0 && c3 == 0) {
                    _modules[row + r3][col + c3] = true;
                  } else {
                    _modules[row + r3][col + c3] = false;
                  }
                }
              }
            }
          }
        };
        var setupTypeNumber = function(test) {
          var bits = QRUtil.getBCHTypeNumber(_typeNumber);
          for (var i3 = 0; i3 < 18; i3 += 1) {
            var mod = !test && (bits >> i3 & 1) == 1;
            _modules[Math.floor(i3 / 3)][i3 % 3 + _moduleCount - 8 - 3] = mod;
          }
          for (var i3 = 0; i3 < 18; i3 += 1) {
            var mod = !test && (bits >> i3 & 1) == 1;
            _modules[i3 % 3 + _moduleCount - 8 - 3][Math.floor(i3 / 3)] = mod;
          }
        };
        var setupTypeInfo = function(test, maskPattern) {
          var data = _errorCorrectionLevel << 3 | maskPattern;
          var bits = QRUtil.getBCHTypeInfo(data);
          for (var i3 = 0; i3 < 15; i3 += 1) {
            var mod = !test && (bits >> i3 & 1) == 1;
            if (i3 < 6) {
              _modules[i3][8] = mod;
            } else if (i3 < 8) {
              _modules[i3 + 1][8] = mod;
            } else {
              _modules[_moduleCount - 15 + i3][8] = mod;
            }
          }
          for (var i3 = 0; i3 < 15; i3 += 1) {
            var mod = !test && (bits >> i3 & 1) == 1;
            if (i3 < 8) {
              _modules[8][_moduleCount - i3 - 1] = mod;
            } else if (i3 < 9) {
              _modules[8][15 - i3 - 1 + 1] = mod;
            } else {
              _modules[8][15 - i3 - 1] = mod;
            }
          }
          _modules[_moduleCount - 8][8] = !test;
        };
        var mapData = function(data, maskPattern) {
          var inc = -1;
          var row = _moduleCount - 1;
          var bitIndex = 7;
          var byteIndex = 0;
          var maskFunc = QRUtil.getMaskFunction(maskPattern);
          for (var col = _moduleCount - 1; col > 0; col -= 2) {
            if (col == 6)
              col -= 1;
            while (true) {
              for (var c3 = 0; c3 < 2; c3 += 1) {
                if (_modules[row][col - c3] == null) {
                  var dark = false;
                  if (byteIndex < data.length) {
                    dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                  }
                  var mask = maskFunc(row, col - c3);
                  if (mask) {
                    dark = !dark;
                  }
                  _modules[row][col - c3] = dark;
                  bitIndex -= 1;
                  if (bitIndex == -1) {
                    byteIndex += 1;
                    bitIndex = 7;
                  }
                }
              }
              row += inc;
              if (row < 0 || _moduleCount <= row) {
                row -= inc;
                inc = -inc;
                break;
              }
            }
          }
        };
        var createBytes = function(buffer, rsBlocks) {
          var offset = 0;
          var maxDcCount = 0;
          var maxEcCount = 0;
          var dcdata = new Array(rsBlocks.length);
          var ecdata = new Array(rsBlocks.length);
          for (var r3 = 0; r3 < rsBlocks.length; r3 += 1) {
            var dcCount = rsBlocks[r3].dataCount;
            var ecCount = rsBlocks[r3].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r3] = new Array(dcCount);
            for (var i3 = 0; i3 < dcdata[r3].length; i3 += 1) {
              dcdata[r3][i3] = 255 & buffer.getBuffer()[i3 + offset];
            }
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = qrPolynomial(dcdata[r3], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r3] = new Array(rsPoly.getLength() - 1);
            for (var i3 = 0; i3 < ecdata[r3].length; i3 += 1) {
              var modIndex = i3 + modPoly.getLength() - ecdata[r3].length;
              ecdata[r3][i3] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
            }
          }
          var totalCodeCount = 0;
          for (var i3 = 0; i3 < rsBlocks.length; i3 += 1) {
            totalCodeCount += rsBlocks[i3].totalCount;
          }
          var data = new Array(totalCodeCount);
          var index = 0;
          for (var i3 = 0; i3 < maxDcCount; i3 += 1) {
            for (var r3 = 0; r3 < rsBlocks.length; r3 += 1) {
              if (i3 < dcdata[r3].length) {
                data[index] = dcdata[r3][i3];
                index += 1;
              }
            }
          }
          for (var i3 = 0; i3 < maxEcCount; i3 += 1) {
            for (var r3 = 0; r3 < rsBlocks.length; r3 += 1) {
              if (i3 < ecdata[r3].length) {
                data[index] = ecdata[r3][i3];
                index += 1;
              }
            }
          }
          return data;
        };
        var createData = function(typeNumber2, errorCorrectionLevel2, dataList) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, errorCorrectionLevel2);
          var buffer = qrBitBuffer();
          for (var i3 = 0; i3 < dataList.length; i3 += 1) {
            var data = dataList[i3];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
            data.write(buffer);
          }
          var totalDataCount = 0;
          for (var i3 = 0; i3 < rsBlocks.length; i3 += 1) {
            totalDataCount += rsBlocks[i3].dataCount;
          }
          if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw "code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")";
          }
          if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
          }
          while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
          }
          while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
              break;
            }
            buffer.put(PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
              break;
            }
            buffer.put(PAD1, 8);
          }
          return createBytes(buffer, rsBlocks);
        };
        _this.addData = function(data, mode) {
          mode = mode || "Byte";
          var newData = null;
          switch (mode) {
            case "Numeric":
              newData = qrNumber(data);
              break;
            case "Alphanumeric":
              newData = qrAlphaNum(data);
              break;
            case "Byte":
              newData = qr8BitByte(data);
              break;
            case "Kanji":
              newData = qrKanji(data);
              break;
            default:
              throw "mode:" + mode;
          }
          _dataList.push(newData);
          _dataCache = null;
        };
        _this.isDark = function(row, col) {
          if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
            throw row + "," + col;
          }
          return _modules[row][col];
        };
        _this.getModuleCount = function() {
          return _moduleCount;
        };
        _this.make = function() {
          if (_typeNumber < 1) {
            var typeNumber2 = 1;
            for (; typeNumber2 < 40; typeNumber2++) {
              var rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, _errorCorrectionLevel);
              var buffer = qrBitBuffer();
              for (var i3 = 0; i3 < _dataList.length; i3++) {
                var data = _dataList[i3];
                buffer.put(data.getMode(), 4);
                buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
                data.write(buffer);
              }
              var totalDataCount = 0;
              for (var i3 = 0; i3 < rsBlocks.length; i3++) {
                totalDataCount += rsBlocks[i3].dataCount;
              }
              if (buffer.getLengthInBits() <= totalDataCount * 8) {
                break;
              }
            }
            _typeNumber = typeNumber2;
          }
          makeImpl(false, getBestMaskPattern());
        };
        _this.createTableTag = function(cellSize, margin) {
          cellSize = cellSize || 2;
          margin = typeof margin == "undefined" ? cellSize * 4 : margin;
          var qrHtml = "";
          qrHtml += '<table style="';
          qrHtml += " border-width: 0px; border-style: none;";
          qrHtml += " border-collapse: collapse;";
          qrHtml += " padding: 0px; margin: " + margin + "px;";
          qrHtml += '">';
          qrHtml += "<tbody>";
          for (var r3 = 0; r3 < _this.getModuleCount(); r3 += 1) {
            qrHtml += "<tr>";
            for (var c3 = 0; c3 < _this.getModuleCount(); c3 += 1) {
              qrHtml += '<td style="';
              qrHtml += " border-width: 0px; border-style: none;";
              qrHtml += " border-collapse: collapse;";
              qrHtml += " padding: 0px; margin: 0px;";
              qrHtml += " width: " + cellSize + "px;";
              qrHtml += " height: " + cellSize + "px;";
              qrHtml += " background-color: ";
              qrHtml += _this.isDark(r3, c3) ? "#000000" : "#ffffff";
              qrHtml += ";";
              qrHtml += '"/>';
            }
            qrHtml += "</tr>";
          }
          qrHtml += "</tbody>";
          qrHtml += "</table>";
          return qrHtml;
        };
        _this.createSvgTag = function(cellSize, margin, alt, title) {
          var opts = {};
          if (typeof arguments[0] == "object") {
            opts = arguments[0];
            cellSize = opts.cellSize;
            margin = opts.margin;
            alt = opts.alt;
            title = opts.title;
          }
          cellSize = cellSize || 2;
          margin = typeof margin == "undefined" ? cellSize * 4 : margin;
          alt = typeof alt === "string" ? { text: alt } : alt || {};
          alt.text = alt.text || null;
          alt.id = alt.text ? alt.id || "qrcode-description" : null;
          title = typeof title === "string" ? { text: title } : title || {};
          title.text = title.text || null;
          title.id = title.text ? title.id || "qrcode-title" : null;
          var size = _this.getModuleCount() * cellSize + margin * 2;
          var c3, mc, r3, mr, qrSvg = "", rect;
          rect = "l" + cellSize + ",0 0," + cellSize + " -" + cellSize + ",0 0,-" + cellSize + "z ";
          qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
          qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : "";
          qrSvg += ' viewBox="0 0 ' + size + " " + size + '" ';
          qrSvg += ' preserveAspectRatio="xMinYMin meet"';
          qrSvg += title.text || alt.text ? ' role="img" aria-labelledby="' + escapeXml([title.id, alt.id].join(" ").trim()) + '"' : "";
          qrSvg += ">";
          qrSvg += title.text ? '<title id="' + escapeXml(title.id) + '">' + escapeXml(title.text) + "</title>" : "";
          qrSvg += alt.text ? '<description id="' + escapeXml(alt.id) + '">' + escapeXml(alt.text) + "</description>" : "";
          qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
          qrSvg += '<path d="';
          for (r3 = 0; r3 < _this.getModuleCount(); r3 += 1) {
            mr = r3 * cellSize + margin;
            for (c3 = 0; c3 < _this.getModuleCount(); c3 += 1) {
              if (_this.isDark(r3, c3)) {
                mc = c3 * cellSize + margin;
                qrSvg += "M" + mc + "," + mr + rect;
              }
            }
          }
          qrSvg += '" stroke="transparent" fill="black"/>';
          qrSvg += "</svg>";
          return qrSvg;
        };
        _this.createDataURL = function(cellSize, margin) {
          cellSize = cellSize || 2;
          margin = typeof margin == "undefined" ? cellSize * 4 : margin;
          var size = _this.getModuleCount() * cellSize + margin * 2;
          var min = margin;
          var max = size - margin;
          return createDataURL(size, size, function(x5, y3) {
            if (min <= x5 && x5 < max && min <= y3 && y3 < max) {
              var c3 = Math.floor((x5 - min) / cellSize);
              var r3 = Math.floor((y3 - min) / cellSize);
              return _this.isDark(r3, c3) ? 0 : 1;
            } else {
              return 1;
            }
          });
        };
        _this.createImgTag = function(cellSize, margin, alt) {
          cellSize = cellSize || 2;
          margin = typeof margin == "undefined" ? cellSize * 4 : margin;
          var size = _this.getModuleCount() * cellSize + margin * 2;
          var img = "";
          img += "<img";
          img += ' src="';
          img += _this.createDataURL(cellSize, margin);
          img += '"';
          img += ' width="';
          img += size;
          img += '"';
          img += ' height="';
          img += size;
          img += '"';
          if (alt) {
            img += ' alt="';
            img += escapeXml(alt);
            img += '"';
          }
          img += "/>";
          return img;
        };
        var escapeXml = function(s3) {
          var escaped = "";
          for (var i3 = 0; i3 < s3.length; i3 += 1) {
            var c3 = s3.charAt(i3);
            switch (c3) {
              case "<":
                escaped += "&lt;";
                break;
              case ">":
                escaped += "&gt;";
                break;
              case "&":
                escaped += "&amp;";
                break;
              case '"':
                escaped += "&quot;";
                break;
              default:
                escaped += c3;
                break;
            }
          }
          return escaped;
        };
        var _createHalfASCII = function(margin) {
          var cellSize = 1;
          margin = typeof margin == "undefined" ? cellSize * 2 : margin;
          var size = _this.getModuleCount() * cellSize + margin * 2;
          var min = margin;
          var max = size - margin;
          var y3, x5, r1, r22, p4;
          var blocks = {
            "\u2588\u2588": "\u2588",
            "\u2588 ": "\u2580",
            " \u2588": "\u2584",
            "  ": " "
          };
          var blocksLastLineNoMargin = {
            "\u2588\u2588": "\u2580",
            "\u2588 ": "\u2580",
            " \u2588": " ",
            "  ": " "
          };
          var ascii = "";
          for (y3 = 0; y3 < size; y3 += 2) {
            r1 = Math.floor((y3 - min) / cellSize);
            r22 = Math.floor((y3 + 1 - min) / cellSize);
            for (x5 = 0; x5 < size; x5 += 1) {
              p4 = "\u2588";
              if (min <= x5 && x5 < max && min <= y3 && y3 < max && _this.isDark(r1, Math.floor((x5 - min) / cellSize))) {
                p4 = " ";
              }
              if (min <= x5 && x5 < max && min <= y3 + 1 && y3 + 1 < max && _this.isDark(r22, Math.floor((x5 - min) / cellSize))) {
                p4 += " ";
              } else {
                p4 += "\u2588";
              }
              ascii += margin < 1 && y3 + 1 >= max ? blocksLastLineNoMargin[p4] : blocks[p4];
            }
            ascii += "\n";
          }
          if (size % 2 && margin > 0) {
            return ascii.substring(0, ascii.length - size - 1) + Array(size + 1).join("\u2580");
          }
          return ascii.substring(0, ascii.length - 1);
        };
        _this.createASCII = function(cellSize, margin) {
          cellSize = cellSize || 1;
          if (cellSize < 2) {
            return _createHalfASCII(margin);
          }
          cellSize -= 1;
          margin = typeof margin == "undefined" ? cellSize * 2 : margin;
          var size = _this.getModuleCount() * cellSize + margin * 2;
          var min = margin;
          var max = size - margin;
          var y3, x5, r3, p4;
          var white = Array(cellSize + 1).join("\u2588\u2588");
          var black = Array(cellSize + 1).join("  ");
          var ascii = "";
          var line = "";
          for (y3 = 0; y3 < size; y3 += 1) {
            r3 = Math.floor((y3 - min) / cellSize);
            line = "";
            for (x5 = 0; x5 < size; x5 += 1) {
              p4 = 1;
              if (min <= x5 && x5 < max && min <= y3 && y3 < max && _this.isDark(r3, Math.floor((x5 - min) / cellSize))) {
                p4 = 0;
              }
              line += p4 ? white : black;
            }
            for (r3 = 0; r3 < cellSize; r3 += 1) {
              ascii += line + "\n";
            }
          }
          return ascii.substring(0, ascii.length - 1);
        };
        _this.renderTo2dContext = function(context, cellSize) {
          cellSize = cellSize || 2;
          var length = _this.getModuleCount();
          for (var row = 0; row < length; row++) {
            for (var col = 0; col < length; col++) {
              context.fillStyle = _this.isDark(row, col) ? "black" : "white";
              context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
            }
          }
        };
        return _this;
      };
      qrcode3.stringToBytesFuncs = {
        "default": function(s3) {
          var bytes = [];
          for (var i3 = 0; i3 < s3.length; i3 += 1) {
            var c3 = s3.charCodeAt(i3);
            bytes.push(c3 & 255);
          }
          return bytes;
        }
      };
      qrcode3.stringToBytes = qrcode3.stringToBytesFuncs["default"];
      qrcode3.createStringToBytes = function(unicodeData, numChars) {
        var unicodeMap = function() {
          var bin = base64DecodeInputStream(unicodeData);
          var read = function() {
            var b4 = bin.read();
            if (b4 == -1)
              throw "eof";
            return b4;
          };
          var count = 0;
          var unicodeMap2 = {};
          while (true) {
            var b0 = bin.read();
            if (b0 == -1)
              break;
            var b1 = read();
            var b22 = read();
            var b3 = read();
            var k3 = String.fromCharCode(b0 << 8 | b1);
            var v3 = b22 << 8 | b3;
            unicodeMap2[k3] = v3;
            count += 1;
          }
          if (count != numChars) {
            throw count + " != " + numChars;
          }
          return unicodeMap2;
        }();
        var unknownChar = "?".charCodeAt(0);
        return function(s3) {
          var bytes = [];
          for (var i3 = 0; i3 < s3.length; i3 += 1) {
            var c3 = s3.charCodeAt(i3);
            if (c3 < 128) {
              bytes.push(c3);
            } else {
              var b3 = unicodeMap[s3.charAt(i3)];
              if (typeof b3 == "number") {
                if ((b3 & 255) == b3) {
                  bytes.push(b3);
                } else {
                  bytes.push(b3 >>> 8);
                  bytes.push(b3 & 255);
                }
              } else {
                bytes.push(unknownChar);
              }
            }
          }
          return bytes;
        };
      };
      var QRMode = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
      };
      var QRErrorCorrectionLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      };
      var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      };
      var QRUtil = function() {
        var PATTERN_POSITION_TABLE = [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170]
        ];
        var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
        var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
        var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
        var _this = {};
        var getBCHDigit = function(data) {
          var digit = 0;
          while (data != 0) {
            digit += 1;
            data >>>= 1;
          }
          return digit;
        };
        _this.getBCHTypeInfo = function(data) {
          var d3 = data << 10;
          while (getBCHDigit(d3) - getBCHDigit(G15) >= 0) {
            d3 ^= G15 << getBCHDigit(d3) - getBCHDigit(G15);
          }
          return (data << 10 | d3) ^ G15_MASK;
        };
        _this.getBCHTypeNumber = function(data) {
          var d3 = data << 12;
          while (getBCHDigit(d3) - getBCHDigit(G18) >= 0) {
            d3 ^= G18 << getBCHDigit(d3) - getBCHDigit(G18);
          }
          return data << 12 | d3;
        };
        _this.getPatternPosition = function(typeNumber) {
          return PATTERN_POSITION_TABLE[typeNumber - 1];
        };
        _this.getMaskFunction = function(maskPattern) {
          switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
              return function(i3, j3) {
                return (i3 + j3) % 2 == 0;
              };
            case QRMaskPattern.PATTERN001:
              return function(i3, j3) {
                return i3 % 2 == 0;
              };
            case QRMaskPattern.PATTERN010:
              return function(i3, j3) {
                return j3 % 3 == 0;
              };
            case QRMaskPattern.PATTERN011:
              return function(i3, j3) {
                return (i3 + j3) % 3 == 0;
              };
            case QRMaskPattern.PATTERN100:
              return function(i3, j3) {
                return (Math.floor(i3 / 2) + Math.floor(j3 / 3)) % 2 == 0;
              };
            case QRMaskPattern.PATTERN101:
              return function(i3, j3) {
                return i3 * j3 % 2 + i3 * j3 % 3 == 0;
              };
            case QRMaskPattern.PATTERN110:
              return function(i3, j3) {
                return (i3 * j3 % 2 + i3 * j3 % 3) % 2 == 0;
              };
            case QRMaskPattern.PATTERN111:
              return function(i3, j3) {
                return (i3 * j3 % 3 + (i3 + j3) % 2) % 2 == 0;
              };
            default:
              throw "bad maskPattern:" + maskPattern;
          }
        };
        _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
          var a3 = qrPolynomial([1], 0);
          for (var i3 = 0; i3 < errorCorrectLength; i3 += 1) {
            a3 = a3.multiply(qrPolynomial([1, QRMath.gexp(i3)], 0));
          }
          return a3;
        };
        _this.getLengthInBits = function(mode, type) {
          if (1 <= type && type < 10) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 10;
              case QRMode.MODE_ALPHA_NUM:
                return 9;
              case QRMode.MODE_8BIT_BYTE:
                return 8;
              case QRMode.MODE_KANJI:
                return 8;
              default:
                throw "mode:" + mode;
            }
          } else if (type < 27) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 12;
              case QRMode.MODE_ALPHA_NUM:
                return 11;
              case QRMode.MODE_8BIT_BYTE:
                return 16;
              case QRMode.MODE_KANJI:
                return 10;
              default:
                throw "mode:" + mode;
            }
          } else if (type < 41) {
            switch (mode) {
              case QRMode.MODE_NUMBER:
                return 14;
              case QRMode.MODE_ALPHA_NUM:
                return 13;
              case QRMode.MODE_8BIT_BYTE:
                return 16;
              case QRMode.MODE_KANJI:
                return 12;
              default:
                throw "mode:" + mode;
            }
          } else {
            throw "type:" + type;
          }
        };
        _this.getLostPoint = function(qrcode4) {
          var moduleCount = qrcode4.getModuleCount();
          var lostPoint = 0;
          for (var row = 0; row < moduleCount; row += 1) {
            for (var col = 0; col < moduleCount; col += 1) {
              var sameCount = 0;
              var dark = qrcode4.isDark(row, col);
              for (var r3 = -1; r3 <= 1; r3 += 1) {
                if (row + r3 < 0 || moduleCount <= row + r3) {
                  continue;
                }
                for (var c3 = -1; c3 <= 1; c3 += 1) {
                  if (col + c3 < 0 || moduleCount <= col + c3) {
                    continue;
                  }
                  if (r3 == 0 && c3 == 0) {
                    continue;
                  }
                  if (dark == qrcode4.isDark(row + r3, col + c3)) {
                    sameCount += 1;
                  }
                }
              }
              if (sameCount > 5) {
                lostPoint += 3 + sameCount - 5;
              }
            }
          }
          ;
          for (var row = 0; row < moduleCount - 1; row += 1) {
            for (var col = 0; col < moduleCount - 1; col += 1) {
              var count = 0;
              if (qrcode4.isDark(row, col))
                count += 1;
              if (qrcode4.isDark(row + 1, col))
                count += 1;
              if (qrcode4.isDark(row, col + 1))
                count += 1;
              if (qrcode4.isDark(row + 1, col + 1))
                count += 1;
              if (count == 0 || count == 4) {
                lostPoint += 3;
              }
            }
          }
          for (var row = 0; row < moduleCount; row += 1) {
            for (var col = 0; col < moduleCount - 6; col += 1) {
              if (qrcode4.isDark(row, col) && !qrcode4.isDark(row, col + 1) && qrcode4.isDark(row, col + 2) && qrcode4.isDark(row, col + 3) && qrcode4.isDark(row, col + 4) && !qrcode4.isDark(row, col + 5) && qrcode4.isDark(row, col + 6)) {
                lostPoint += 40;
              }
            }
          }
          for (var col = 0; col < moduleCount; col += 1) {
            for (var row = 0; row < moduleCount - 6; row += 1) {
              if (qrcode4.isDark(row, col) && !qrcode4.isDark(row + 1, col) && qrcode4.isDark(row + 2, col) && qrcode4.isDark(row + 3, col) && qrcode4.isDark(row + 4, col) && !qrcode4.isDark(row + 5, col) && qrcode4.isDark(row + 6, col)) {
                lostPoint += 40;
              }
            }
          }
          var darkCount = 0;
          for (var col = 0; col < moduleCount; col += 1) {
            for (var row = 0; row < moduleCount; row += 1) {
              if (qrcode4.isDark(row, col)) {
                darkCount += 1;
              }
            }
          }
          var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
          lostPoint += ratio * 10;
          return lostPoint;
        };
        return _this;
      }();
      var QRMath = function() {
        var EXP_TABLE = new Array(256);
        var LOG_TABLE = new Array(256);
        for (var i3 = 0; i3 < 8; i3 += 1) {
          EXP_TABLE[i3] = 1 << i3;
        }
        for (var i3 = 8; i3 < 256; i3 += 1) {
          EXP_TABLE[i3] = EXP_TABLE[i3 - 4] ^ EXP_TABLE[i3 - 5] ^ EXP_TABLE[i3 - 6] ^ EXP_TABLE[i3 - 8];
        }
        for (var i3 = 0; i3 < 255; i3 += 1) {
          LOG_TABLE[EXP_TABLE[i3]] = i3;
        }
        var _this = {};
        _this.glog = function(n2) {
          if (n2 < 1) {
            throw "glog(" + n2 + ")";
          }
          return LOG_TABLE[n2];
        };
        _this.gexp = function(n2) {
          while (n2 < 0) {
            n2 += 255;
          }
          while (n2 >= 256) {
            n2 -= 255;
          }
          return EXP_TABLE[n2];
        };
        return _this;
      }();
      function qrPolynomial(num, shift) {
        if (typeof num.length == "undefined") {
          throw num.length + "/" + shift;
        }
        var _num = function() {
          var offset = 0;
          while (offset < num.length && num[offset] == 0) {
            offset += 1;
          }
          var _num2 = new Array(num.length - offset + shift);
          for (var i3 = 0; i3 < num.length - offset; i3 += 1) {
            _num2[i3] = num[i3 + offset];
          }
          return _num2;
        }();
        var _this = {};
        _this.getAt = function(index) {
          return _num[index];
        };
        _this.getLength = function() {
          return _num.length;
        };
        _this.multiply = function(e3) {
          var num2 = new Array(_this.getLength() + e3.getLength() - 1);
          for (var i3 = 0; i3 < _this.getLength(); i3 += 1) {
            for (var j3 = 0; j3 < e3.getLength(); j3 += 1) {
              num2[i3 + j3] ^= QRMath.gexp(QRMath.glog(_this.getAt(i3)) + QRMath.glog(e3.getAt(j3)));
            }
          }
          return qrPolynomial(num2, 0);
        };
        _this.mod = function(e3) {
          if (_this.getLength() - e3.getLength() < 0) {
            return _this;
          }
          var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e3.getAt(0));
          var num2 = new Array(_this.getLength());
          for (var i3 = 0; i3 < _this.getLength(); i3 += 1) {
            num2[i3] = _this.getAt(i3);
          }
          for (var i3 = 0; i3 < e3.getLength(); i3 += 1) {
            num2[i3] ^= QRMath.gexp(QRMath.glog(e3.getAt(i3)) + ratio);
          }
          return qrPolynomial(num2, 0).mod(e3);
        };
        return _this;
      }
      ;
      var QRRSBlock = function() {
        var RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12, 7, 37, 13],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16]
        ];
        var qrRSBlock = function(totalCount, dataCount) {
          var _this2 = {};
          _this2.totalCount = totalCount;
          _this2.dataCount = dataCount;
          return _this2;
        };
        var _this = {};
        var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {
          switch (errorCorrectionLevel) {
            case QRErrorCorrectionLevel.L:
              return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectionLevel.M:
              return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectionLevel.Q:
              return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectionLevel.H:
              return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
              return void 0;
          }
        };
        _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {
          var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);
          if (typeof rsBlock == "undefined") {
            throw "bad rs block @ typeNumber:" + typeNumber + "/errorCorrectionLevel:" + errorCorrectionLevel;
          }
          var length = rsBlock.length / 3;
          var list = [];
          for (var i3 = 0; i3 < length; i3 += 1) {
            var count = rsBlock[i3 * 3 + 0];
            var totalCount = rsBlock[i3 * 3 + 1];
            var dataCount = rsBlock[i3 * 3 + 2];
            for (var j3 = 0; j3 < count; j3 += 1) {
              list.push(qrRSBlock(totalCount, dataCount));
            }
          }
          return list;
        };
        return _this;
      }();
      var qrBitBuffer = function() {
        var _buffer = [];
        var _length = 0;
        var _this = {};
        _this.getBuffer = function() {
          return _buffer;
        };
        _this.getAt = function(index) {
          var bufIndex = Math.floor(index / 8);
          return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        };
        _this.put = function(num, length) {
          for (var i3 = 0; i3 < length; i3 += 1) {
            _this.putBit((num >>> length - i3 - 1 & 1) == 1);
          }
        };
        _this.getLengthInBits = function() {
          return _length;
        };
        _this.putBit = function(bit) {
          var bufIndex = Math.floor(_length / 8);
          if (_buffer.length <= bufIndex) {
            _buffer.push(0);
          }
          if (bit) {
            _buffer[bufIndex] |= 128 >>> _length % 8;
          }
          _length += 1;
        };
        return _this;
      };
      var qrNumber = function(data) {
        var _mode = QRMode.MODE_NUMBER;
        var _data = data;
        var _this = {};
        _this.getMode = function() {
          return _mode;
        };
        _this.getLength = function(buffer) {
          return _data.length;
        };
        _this.write = function(buffer) {
          var data2 = _data;
          var i3 = 0;
          while (i3 + 2 < data2.length) {
            buffer.put(strToNum(data2.substring(i3, i3 + 3)), 10);
            i3 += 3;
          }
          if (i3 < data2.length) {
            if (data2.length - i3 == 1) {
              buffer.put(strToNum(data2.substring(i3, i3 + 1)), 4);
            } else if (data2.length - i3 == 2) {
              buffer.put(strToNum(data2.substring(i3, i3 + 2)), 7);
            }
          }
        };
        var strToNum = function(s3) {
          var num = 0;
          for (var i3 = 0; i3 < s3.length; i3 += 1) {
            num = num * 10 + chatToNum(s3.charAt(i3));
          }
          return num;
        };
        var chatToNum = function(c3) {
          if ("0" <= c3 && c3 <= "9") {
            return c3.charCodeAt(0) - "0".charCodeAt(0);
          }
          throw "illegal char :" + c3;
        };
        return _this;
      };
      var qrAlphaNum = function(data) {
        var _mode = QRMode.MODE_ALPHA_NUM;
        var _data = data;
        var _this = {};
        _this.getMode = function() {
          return _mode;
        };
        _this.getLength = function(buffer) {
          return _data.length;
        };
        _this.write = function(buffer) {
          var s3 = _data;
          var i3 = 0;
          while (i3 + 1 < s3.length) {
            buffer.put(
              getCode(s3.charAt(i3)) * 45 + getCode(s3.charAt(i3 + 1)),
              11
            );
            i3 += 2;
          }
          if (i3 < s3.length) {
            buffer.put(getCode(s3.charAt(i3)), 6);
          }
        };
        var getCode = function(c3) {
          if ("0" <= c3 && c3 <= "9") {
            return c3.charCodeAt(0) - "0".charCodeAt(0);
          } else if ("A" <= c3 && c3 <= "Z") {
            return c3.charCodeAt(0) - "A".charCodeAt(0) + 10;
          } else {
            switch (c3) {
              case " ":
                return 36;
              case "$":
                return 37;
              case "%":
                return 38;
              case "*":
                return 39;
              case "+":
                return 40;
              case "-":
                return 41;
              case ".":
                return 42;
              case "/":
                return 43;
              case ":":
                return 44;
              default:
                throw "illegal char :" + c3;
            }
          }
        };
        return _this;
      };
      var qr8BitByte = function(data) {
        var _mode = QRMode.MODE_8BIT_BYTE;
        var _data = data;
        var _bytes = qrcode3.stringToBytes(data);
        var _this = {};
        _this.getMode = function() {
          return _mode;
        };
        _this.getLength = function(buffer) {
          return _bytes.length;
        };
        _this.write = function(buffer) {
          for (var i3 = 0; i3 < _bytes.length; i3 += 1) {
            buffer.put(_bytes[i3], 8);
          }
        };
        return _this;
      };
      var qrKanji = function(data) {
        var _mode = QRMode.MODE_KANJI;
        var _data = data;
        var stringToBytes2 = qrcode3.stringToBytesFuncs["SJIS"];
        if (!stringToBytes2) {
          throw "sjis not supported.";
        }
        !function(c3, code) {
          var test = stringToBytes2(c3);
          if (test.length != 2 || (test[0] << 8 | test[1]) != code) {
            throw "sjis not supported.";
          }
        }("\u53CB", 38726);
        var _bytes = stringToBytes2(data);
        var _this = {};
        _this.getMode = function() {
          return _mode;
        };
        _this.getLength = function(buffer) {
          return ~~(_bytes.length / 2);
        };
        _this.write = function(buffer) {
          var data2 = _bytes;
          var i3 = 0;
          while (i3 + 1 < data2.length) {
            var c3 = (255 & data2[i3]) << 8 | 255 & data2[i3 + 1];
            if (33088 <= c3 && c3 <= 40956) {
              c3 -= 33088;
            } else if (57408 <= c3 && c3 <= 60351) {
              c3 -= 49472;
            } else {
              throw "illegal char at " + (i3 + 1) + "/" + c3;
            }
            c3 = (c3 >>> 8 & 255) * 192 + (c3 & 255);
            buffer.put(c3, 13);
            i3 += 2;
          }
          if (i3 < data2.length) {
            throw "illegal char at " + (i3 + 1);
          }
        };
        return _this;
      };
      var byteArrayOutputStream = function() {
        var _bytes = [];
        var _this = {};
        _this.writeByte = function(b3) {
          _bytes.push(b3 & 255);
        };
        _this.writeShort = function(i3) {
          _this.writeByte(i3);
          _this.writeByte(i3 >>> 8);
        };
        _this.writeBytes = function(b3, off, len) {
          off = off || 0;
          len = len || b3.length;
          for (var i3 = 0; i3 < len; i3 += 1) {
            _this.writeByte(b3[i3 + off]);
          }
        };
        _this.writeString = function(s3) {
          for (var i3 = 0; i3 < s3.length; i3 += 1) {
            _this.writeByte(s3.charCodeAt(i3));
          }
        };
        _this.toByteArray = function() {
          return _bytes;
        };
        _this.toString = function() {
          var s3 = "";
          s3 += "[";
          for (var i3 = 0; i3 < _bytes.length; i3 += 1) {
            if (i3 > 0) {
              s3 += ",";
            }
            s3 += _bytes[i3];
          }
          s3 += "]";
          return s3;
        };
        return _this;
      };
      var base64EncodeOutputStream = function() {
        var _buffer = 0;
        var _buflen = 0;
        var _length = 0;
        var _base64 = "";
        var _this = {};
        var writeEncoded = function(b3) {
          _base64 += String.fromCharCode(encode4(b3 & 63));
        };
        var encode4 = function(n2) {
          if (n2 < 0) {
          } else if (n2 < 26) {
            return 65 + n2;
          } else if (n2 < 52) {
            return 97 + (n2 - 26);
          } else if (n2 < 62) {
            return 48 + (n2 - 52);
          } else if (n2 == 62) {
            return 43;
          } else if (n2 == 63) {
            return 47;
          }
          throw "n:" + n2;
        };
        _this.writeByte = function(n2) {
          _buffer = _buffer << 8 | n2 & 255;
          _buflen += 8;
          _length += 1;
          while (_buflen >= 6) {
            writeEncoded(_buffer >>> _buflen - 6);
            _buflen -= 6;
          }
        };
        _this.flush = function() {
          if (_buflen > 0) {
            writeEncoded(_buffer << 6 - _buflen);
            _buffer = 0;
            _buflen = 0;
          }
          if (_length % 3 != 0) {
            var padlen = 3 - _length % 3;
            for (var i3 = 0; i3 < padlen; i3 += 1) {
              _base64 += "=";
            }
          }
        };
        _this.toString = function() {
          return _base64;
        };
        return _this;
      };
      var base64DecodeInputStream = function(str) {
        var _str = str;
        var _pos = 0;
        var _buffer = 0;
        var _buflen = 0;
        var _this = {};
        _this.read = function() {
          while (_buflen < 8) {
            if (_pos >= _str.length) {
              if (_buflen == 0) {
                return -1;
              }
              throw "unexpected end of file./" + _buflen;
            }
            var c3 = _str.charAt(_pos);
            _pos += 1;
            if (c3 == "=") {
              _buflen = 0;
              return -1;
            } else if (c3.match(/^\s$/)) {
              continue;
            }
            _buffer = _buffer << 6 | decode4(c3.charCodeAt(0));
            _buflen += 6;
          }
          var n2 = _buffer >>> _buflen - 8 & 255;
          _buflen -= 8;
          return n2;
        };
        var decode4 = function(c3) {
          if (65 <= c3 && c3 <= 90) {
            return c3 - 65;
          } else if (97 <= c3 && c3 <= 122) {
            return c3 - 97 + 26;
          } else if (48 <= c3 && c3 <= 57) {
            return c3 - 48 + 52;
          } else if (c3 == 43) {
            return 62;
          } else if (c3 == 47) {
            return 63;
          } else {
            throw "c:" + c3;
          }
        };
        return _this;
      };
      var gifImage = function(width, height) {
        var _width = width;
        var _height = height;
        var _data = new Array(width * height);
        var _this = {};
        _this.setPixel = function(x5, y3, pixel) {
          _data[y3 * _width + x5] = pixel;
        };
        _this.write = function(out) {
          out.writeString("GIF87a");
          out.writeShort(_width);
          out.writeShort(_height);
          out.writeByte(128);
          out.writeByte(0);
          out.writeByte(0);
          out.writeByte(0);
          out.writeByte(0);
          out.writeByte(0);
          out.writeByte(255);
          out.writeByte(255);
          out.writeByte(255);
          out.writeString(",");
          out.writeShort(0);
          out.writeShort(0);
          out.writeShort(_width);
          out.writeShort(_height);
          out.writeByte(0);
          var lzwMinCodeSize = 2;
          var raster = getLZWRaster(lzwMinCodeSize);
          out.writeByte(lzwMinCodeSize);
          var offset = 0;
          while (raster.length - offset > 255) {
            out.writeByte(255);
            out.writeBytes(raster, offset, 255);
            offset += 255;
          }
          out.writeByte(raster.length - offset);
          out.writeBytes(raster, offset, raster.length - offset);
          out.writeByte(0);
          out.writeString(";");
        };
        var bitOutputStream = function(out) {
          var _out = out;
          var _bitLength = 0;
          var _bitBuffer = 0;
          var _this2 = {};
          _this2.write = function(data, length) {
            if (data >>> length != 0) {
              throw "length over";
            }
            while (_bitLength + length >= 8) {
              _out.writeByte(255 & (data << _bitLength | _bitBuffer));
              length -= 8 - _bitLength;
              data >>>= 8 - _bitLength;
              _bitBuffer = 0;
              _bitLength = 0;
            }
            _bitBuffer = data << _bitLength | _bitBuffer;
            _bitLength = _bitLength + length;
          };
          _this2.flush = function() {
            if (_bitLength > 0) {
              _out.writeByte(_bitBuffer);
            }
          };
          return _this2;
        };
        var getLZWRaster = function(lzwMinCodeSize) {
          var clearCode = 1 << lzwMinCodeSize;
          var endCode = (1 << lzwMinCodeSize) + 1;
          var bitLength = lzwMinCodeSize + 1;
          var table2 = lzwTable();
          for (var i3 = 0; i3 < clearCode; i3 += 1) {
            table2.add(String.fromCharCode(i3));
          }
          table2.add(String.fromCharCode(clearCode));
          table2.add(String.fromCharCode(endCode));
          var byteOut = byteArrayOutputStream();
          var bitOut = bitOutputStream(byteOut);
          bitOut.write(clearCode, bitLength);
          var dataIndex = 0;
          var s3 = String.fromCharCode(_data[dataIndex]);
          dataIndex += 1;
          while (dataIndex < _data.length) {
            var c3 = String.fromCharCode(_data[dataIndex]);
            dataIndex += 1;
            if (table2.contains(s3 + c3)) {
              s3 = s3 + c3;
            } else {
              bitOut.write(table2.indexOf(s3), bitLength);
              if (table2.size() < 4095) {
                if (table2.size() == 1 << bitLength) {
                  bitLength += 1;
                }
                table2.add(s3 + c3);
              }
              s3 = c3;
            }
          }
          bitOut.write(table2.indexOf(s3), bitLength);
          bitOut.write(endCode, bitLength);
          bitOut.flush();
          return byteOut.toByteArray();
        };
        var lzwTable = function() {
          var _map = {};
          var _size = 0;
          var _this2 = {};
          _this2.add = function(key) {
            if (_this2.contains(key)) {
              throw "dup key:" + key;
            }
            _map[key] = _size;
            _size += 1;
          };
          _this2.size = function() {
            return _size;
          };
          _this2.indexOf = function(key) {
            return _map[key];
          };
          _this2.contains = function(key) {
            return typeof _map[key] != "undefined";
          };
          return _this2;
        };
        return _this;
      };
      var createDataURL = function(width, height, getPixel) {
        var gif = gifImage(width, height);
        for (var y3 = 0; y3 < height; y3 += 1) {
          for (var x5 = 0; x5 < width; x5 += 1) {
            gif.setPixel(x5, y3, getPixel(x5, y3));
          }
        }
        var b3 = byteArrayOutputStream();
        gif.write(b3);
        var base64 = base64EncodeOutputStream();
        var bytes = b3.toByteArray();
        for (var i3 = 0; i3 < bytes.length; i3 += 1) {
          base64.writeByte(bytes[i3]);
        }
        base64.flush();
        return "data:image/gif;base64," + base64;
      };
      return qrcode3;
    }();
    !function() {
      qrcode2.stringToBytesFuncs["UTF-8"] = function(s3) {
        function toUTF8Array(str) {
          var utf8 = [];
          for (var i3 = 0; i3 < str.length; i3++) {
            var charcode = str.charCodeAt(i3);
            if (charcode < 128)
              utf8.push(charcode);
            else if (charcode < 2048) {
              utf8.push(
                192 | charcode >> 6,
                128 | charcode & 63
              );
            } else if (charcode < 55296 || charcode >= 57344) {
              utf8.push(
                224 | charcode >> 12,
                128 | charcode >> 6 & 63,
                128 | charcode & 63
              );
            } else {
              i3++;
              charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i3) & 1023);
              utf8.push(
                240 | charcode >> 18,
                128 | charcode >> 12 & 63,
                128 | charcode >> 6 & 63,
                128 | charcode & 63
              );
            }
          }
          return utf8;
        }
        return toUTF8Array(s3);
      };
    }();
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      }
    })(function() {
      return qrcode2;
    });
  }
});

// ../taler-util/lib/nacl-fast.js
var gf = function(init = []) {
  const r3 = new Float64Array(16);
  if (init)
    for (let i3 = 0; i3 < init.length; i3++)
      r3[i3] = init[i3];
  return r3;
};
var randombytes = function(x5, n2) {
  throw new Error("no PRNG");
};
var _9 = new Uint8Array(32);
_9[0] = 9;
var gf0 = gf();
var gf1 = gf([1]);
var _121665 = gf([56129, 1]);
var D = gf([
  30883,
  4953,
  19914,
  30187,
  55467,
  16705,
  2637,
  112,
  59544,
  30585,
  16505,
  36039,
  65139,
  11119,
  27886,
  20995
]);
var D2 = gf([
  61785,
  9906,
  39828,
  60374,
  45398,
  33411,
  5274,
  224,
  53552,
  61171,
  33010,
  6542,
  64743,
  22239,
  55772,
  9222
]);
var X = gf([
  54554,
  36645,
  11616,
  51542,
  42930,
  38181,
  51040,
  26924,
  56412,
  64982,
  57905,
  49316,
  21502,
  52590,
  14035,
  8553
]);
var Y = gf([
  26200,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214,
  26214
]);
var I = gf([
  41136,
  18958,
  6951,
  50414,
  58488,
  44335,
  6150,
  12099,
  55207,
  15867,
  153,
  11085,
  57099,
  20417,
  9344,
  11139
]);
function ts64(x5, i3, h3, l3) {
  x5[i3] = h3 >> 24 & 255;
  x5[i3 + 1] = h3 >> 16 & 255;
  x5[i3 + 2] = h3 >> 8 & 255;
  x5[i3 + 3] = h3 & 255;
  x5[i3 + 4] = l3 >> 24 & 255;
  x5[i3 + 5] = l3 >> 16 & 255;
  x5[i3 + 6] = l3 >> 8 & 255;
  x5[i3 + 7] = l3 & 255;
}
function vn(x5, xi, y3, yi, n2) {
  let i3, d3 = 0;
  for (i3 = 0; i3 < n2; i3++)
    d3 |= x5[xi + i3] ^ y3[yi + i3];
  return (1 & d3 - 1 >>> 8) - 1;
}
function crypto_verify_32(x5, xi, y3, yi) {
  return vn(x5, xi, y3, yi, 32);
}
var sigma = new Uint8Array([
  101,
  120,
  112,
  97,
  110,
  100,
  32,
  51,
  50,
  45,
  98,
  121,
  116,
  101,
  32,
  107
]);
function set25519(r3, a3) {
  let i3;
  for (i3 = 0; i3 < 16; i3++)
    r3[i3] = a3[i3] | 0;
}
function car25519(o3) {
  let i3, v3, c3 = 1;
  for (i3 = 0; i3 < 16; i3++) {
    v3 = o3[i3] + c3 + 65535;
    c3 = Math.floor(v3 / 65536);
    o3[i3] = v3 - c3 * 65536;
  }
  o3[0] += c3 - 1 + 37 * (c3 - 1);
}
function sel25519(p4, q3, b3) {
  let t3;
  const c3 = ~(b3 - 1);
  for (let i3 = 0; i3 < 16; i3++) {
    t3 = c3 & (p4[i3] ^ q3[i3]);
    p4[i3] ^= t3;
    q3[i3] ^= t3;
  }
}
function pack25519(o3, n2) {
  let i3, j3, b3;
  const m3 = gf(), t3 = gf();
  for (i3 = 0; i3 < 16; i3++)
    t3[i3] = n2[i3];
  car25519(t3);
  car25519(t3);
  car25519(t3);
  for (j3 = 0; j3 < 2; j3++) {
    m3[0] = t3[0] - 65517;
    for (i3 = 1; i3 < 15; i3++) {
      m3[i3] = t3[i3] - 65535 - (m3[i3 - 1] >> 16 & 1);
      m3[i3 - 1] &= 65535;
    }
    m3[15] = t3[15] - 32767 - (m3[14] >> 16 & 1);
    b3 = m3[15] >> 16 & 1;
    m3[14] &= 65535;
    sel25519(t3, m3, 1 - b3);
  }
  for (i3 = 0; i3 < 16; i3++) {
    o3[2 * i3] = t3[i3] & 255;
    o3[2 * i3 + 1] = t3[i3] >> 8;
  }
}
function neq25519(a3, b3) {
  const c3 = new Uint8Array(32), d3 = new Uint8Array(32);
  pack25519(c3, a3);
  pack25519(d3, b3);
  return crypto_verify_32(c3, 0, d3, 0);
}
function par25519(a3) {
  const d3 = new Uint8Array(32);
  pack25519(d3, a3);
  return d3[0] & 1;
}
function unpack25519(o3, n2) {
  let i3;
  for (i3 = 0; i3 < 16; i3++)
    o3[i3] = n2[2 * i3] + (n2[2 * i3 + 1] << 8);
  o3[15] &= 32767;
}
function A(o3, a3, b3) {
  for (let i3 = 0; i3 < 16; i3++)
    o3[i3] = a3[i3] + b3[i3];
}
function Z(o3, a3, b3) {
  for (let i3 = 0; i3 < 16; i3++)
    o3[i3] = a3[i3] - b3[i3];
}
function M(o3, a3, b3) {
  let v3, c3, t0 = 0, t1 = 0, t22 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t222 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0;
  const b0 = b3[0], b1 = b3[1], b22 = b3[2], b32 = b3[3], b4 = b3[4], b5 = b3[5], b6 = b3[6], b7 = b3[7], b8 = b3[8], b9 = b3[9], b10 = b3[10], b11 = b3[11], b12 = b3[12], b13 = b3[13], b14 = b3[14], b15 = b3[15];
  v3 = a3[0];
  t0 += v3 * b0;
  t1 += v3 * b1;
  t22 += v3 * b22;
  t3 += v3 * b32;
  t4 += v3 * b4;
  t5 += v3 * b5;
  t6 += v3 * b6;
  t7 += v3 * b7;
  t8 += v3 * b8;
  t9 += v3 * b9;
  t10 += v3 * b10;
  t11 += v3 * b11;
  t12 += v3 * b12;
  t13 += v3 * b13;
  t14 += v3 * b14;
  t15 += v3 * b15;
  v3 = a3[1];
  t1 += v3 * b0;
  t22 += v3 * b1;
  t3 += v3 * b22;
  t4 += v3 * b32;
  t5 += v3 * b4;
  t6 += v3 * b5;
  t7 += v3 * b6;
  t8 += v3 * b7;
  t9 += v3 * b8;
  t10 += v3 * b9;
  t11 += v3 * b10;
  t12 += v3 * b11;
  t13 += v3 * b12;
  t14 += v3 * b13;
  t15 += v3 * b14;
  t16 += v3 * b15;
  v3 = a3[2];
  t22 += v3 * b0;
  t3 += v3 * b1;
  t4 += v3 * b22;
  t5 += v3 * b32;
  t6 += v3 * b4;
  t7 += v3 * b5;
  t8 += v3 * b6;
  t9 += v3 * b7;
  t10 += v3 * b8;
  t11 += v3 * b9;
  t12 += v3 * b10;
  t13 += v3 * b11;
  t14 += v3 * b12;
  t15 += v3 * b13;
  t16 += v3 * b14;
  t17 += v3 * b15;
  v3 = a3[3];
  t3 += v3 * b0;
  t4 += v3 * b1;
  t5 += v3 * b22;
  t6 += v3 * b32;
  t7 += v3 * b4;
  t8 += v3 * b5;
  t9 += v3 * b6;
  t10 += v3 * b7;
  t11 += v3 * b8;
  t12 += v3 * b9;
  t13 += v3 * b10;
  t14 += v3 * b11;
  t15 += v3 * b12;
  t16 += v3 * b13;
  t17 += v3 * b14;
  t18 += v3 * b15;
  v3 = a3[4];
  t4 += v3 * b0;
  t5 += v3 * b1;
  t6 += v3 * b22;
  t7 += v3 * b32;
  t8 += v3 * b4;
  t9 += v3 * b5;
  t10 += v3 * b6;
  t11 += v3 * b7;
  t12 += v3 * b8;
  t13 += v3 * b9;
  t14 += v3 * b10;
  t15 += v3 * b11;
  t16 += v3 * b12;
  t17 += v3 * b13;
  t18 += v3 * b14;
  t19 += v3 * b15;
  v3 = a3[5];
  t5 += v3 * b0;
  t6 += v3 * b1;
  t7 += v3 * b22;
  t8 += v3 * b32;
  t9 += v3 * b4;
  t10 += v3 * b5;
  t11 += v3 * b6;
  t12 += v3 * b7;
  t13 += v3 * b8;
  t14 += v3 * b9;
  t15 += v3 * b10;
  t16 += v3 * b11;
  t17 += v3 * b12;
  t18 += v3 * b13;
  t19 += v3 * b14;
  t20 += v3 * b15;
  v3 = a3[6];
  t6 += v3 * b0;
  t7 += v3 * b1;
  t8 += v3 * b22;
  t9 += v3 * b32;
  t10 += v3 * b4;
  t11 += v3 * b5;
  t12 += v3 * b6;
  t13 += v3 * b7;
  t14 += v3 * b8;
  t15 += v3 * b9;
  t16 += v3 * b10;
  t17 += v3 * b11;
  t18 += v3 * b12;
  t19 += v3 * b13;
  t20 += v3 * b14;
  t21 += v3 * b15;
  v3 = a3[7];
  t7 += v3 * b0;
  t8 += v3 * b1;
  t9 += v3 * b22;
  t10 += v3 * b32;
  t11 += v3 * b4;
  t12 += v3 * b5;
  t13 += v3 * b6;
  t14 += v3 * b7;
  t15 += v3 * b8;
  t16 += v3 * b9;
  t17 += v3 * b10;
  t18 += v3 * b11;
  t19 += v3 * b12;
  t20 += v3 * b13;
  t21 += v3 * b14;
  t222 += v3 * b15;
  v3 = a3[8];
  t8 += v3 * b0;
  t9 += v3 * b1;
  t10 += v3 * b22;
  t11 += v3 * b32;
  t12 += v3 * b4;
  t13 += v3 * b5;
  t14 += v3 * b6;
  t15 += v3 * b7;
  t16 += v3 * b8;
  t17 += v3 * b9;
  t18 += v3 * b10;
  t19 += v3 * b11;
  t20 += v3 * b12;
  t21 += v3 * b13;
  t222 += v3 * b14;
  t23 += v3 * b15;
  v3 = a3[9];
  t9 += v3 * b0;
  t10 += v3 * b1;
  t11 += v3 * b22;
  t12 += v3 * b32;
  t13 += v3 * b4;
  t14 += v3 * b5;
  t15 += v3 * b6;
  t16 += v3 * b7;
  t17 += v3 * b8;
  t18 += v3 * b9;
  t19 += v3 * b10;
  t20 += v3 * b11;
  t21 += v3 * b12;
  t222 += v3 * b13;
  t23 += v3 * b14;
  t24 += v3 * b15;
  v3 = a3[10];
  t10 += v3 * b0;
  t11 += v3 * b1;
  t12 += v3 * b22;
  t13 += v3 * b32;
  t14 += v3 * b4;
  t15 += v3 * b5;
  t16 += v3 * b6;
  t17 += v3 * b7;
  t18 += v3 * b8;
  t19 += v3 * b9;
  t20 += v3 * b10;
  t21 += v3 * b11;
  t222 += v3 * b12;
  t23 += v3 * b13;
  t24 += v3 * b14;
  t25 += v3 * b15;
  v3 = a3[11];
  t11 += v3 * b0;
  t12 += v3 * b1;
  t13 += v3 * b22;
  t14 += v3 * b32;
  t15 += v3 * b4;
  t16 += v3 * b5;
  t17 += v3 * b6;
  t18 += v3 * b7;
  t19 += v3 * b8;
  t20 += v3 * b9;
  t21 += v3 * b10;
  t222 += v3 * b11;
  t23 += v3 * b12;
  t24 += v3 * b13;
  t25 += v3 * b14;
  t26 += v3 * b15;
  v3 = a3[12];
  t12 += v3 * b0;
  t13 += v3 * b1;
  t14 += v3 * b22;
  t15 += v3 * b32;
  t16 += v3 * b4;
  t17 += v3 * b5;
  t18 += v3 * b6;
  t19 += v3 * b7;
  t20 += v3 * b8;
  t21 += v3 * b9;
  t222 += v3 * b10;
  t23 += v3 * b11;
  t24 += v3 * b12;
  t25 += v3 * b13;
  t26 += v3 * b14;
  t27 += v3 * b15;
  v3 = a3[13];
  t13 += v3 * b0;
  t14 += v3 * b1;
  t15 += v3 * b22;
  t16 += v3 * b32;
  t17 += v3 * b4;
  t18 += v3 * b5;
  t19 += v3 * b6;
  t20 += v3 * b7;
  t21 += v3 * b8;
  t222 += v3 * b9;
  t23 += v3 * b10;
  t24 += v3 * b11;
  t25 += v3 * b12;
  t26 += v3 * b13;
  t27 += v3 * b14;
  t28 += v3 * b15;
  v3 = a3[14];
  t14 += v3 * b0;
  t15 += v3 * b1;
  t16 += v3 * b22;
  t17 += v3 * b32;
  t18 += v3 * b4;
  t19 += v3 * b5;
  t20 += v3 * b6;
  t21 += v3 * b7;
  t222 += v3 * b8;
  t23 += v3 * b9;
  t24 += v3 * b10;
  t25 += v3 * b11;
  t26 += v3 * b12;
  t27 += v3 * b13;
  t28 += v3 * b14;
  t29 += v3 * b15;
  v3 = a3[15];
  t15 += v3 * b0;
  t16 += v3 * b1;
  t17 += v3 * b22;
  t18 += v3 * b32;
  t19 += v3 * b4;
  t20 += v3 * b5;
  t21 += v3 * b6;
  t222 += v3 * b7;
  t23 += v3 * b8;
  t24 += v3 * b9;
  t25 += v3 * b10;
  t26 += v3 * b11;
  t27 += v3 * b12;
  t28 += v3 * b13;
  t29 += v3 * b14;
  t30 += v3 * b15;
  t0 += 38 * t16;
  t1 += 38 * t17;
  t22 += 38 * t18;
  t3 += 38 * t19;
  t4 += 38 * t20;
  t5 += 38 * t21;
  t6 += 38 * t222;
  t7 += 38 * t23;
  t8 += 38 * t24;
  t9 += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  c3 = 1;
  v3 = t0 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t0 = v3 - c3 * 65536;
  v3 = t1 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t1 = v3 - c3 * 65536;
  v3 = t22 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t22 = v3 - c3 * 65536;
  v3 = t3 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t3 = v3 - c3 * 65536;
  v3 = t4 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t4 = v3 - c3 * 65536;
  v3 = t5 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t5 = v3 - c3 * 65536;
  v3 = t6 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t6 = v3 - c3 * 65536;
  v3 = t7 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t7 = v3 - c3 * 65536;
  v3 = t8 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t8 = v3 - c3 * 65536;
  v3 = t9 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t9 = v3 - c3 * 65536;
  v3 = t10 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t10 = v3 - c3 * 65536;
  v3 = t11 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t11 = v3 - c3 * 65536;
  v3 = t12 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t12 = v3 - c3 * 65536;
  v3 = t13 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t13 = v3 - c3 * 65536;
  v3 = t14 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t14 = v3 - c3 * 65536;
  v3 = t15 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t15 = v3 - c3 * 65536;
  t0 += c3 - 1 + 37 * (c3 - 1);
  c3 = 1;
  v3 = t0 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t0 = v3 - c3 * 65536;
  v3 = t1 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t1 = v3 - c3 * 65536;
  v3 = t22 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t22 = v3 - c3 * 65536;
  v3 = t3 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t3 = v3 - c3 * 65536;
  v3 = t4 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t4 = v3 - c3 * 65536;
  v3 = t5 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t5 = v3 - c3 * 65536;
  v3 = t6 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t6 = v3 - c3 * 65536;
  v3 = t7 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t7 = v3 - c3 * 65536;
  v3 = t8 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t8 = v3 - c3 * 65536;
  v3 = t9 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t9 = v3 - c3 * 65536;
  v3 = t10 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t10 = v3 - c3 * 65536;
  v3 = t11 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t11 = v3 - c3 * 65536;
  v3 = t12 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t12 = v3 - c3 * 65536;
  v3 = t13 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t13 = v3 - c3 * 65536;
  v3 = t14 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t14 = v3 - c3 * 65536;
  v3 = t15 + c3 + 65535;
  c3 = Math.floor(v3 / 65536);
  t15 = v3 - c3 * 65536;
  t0 += c3 - 1 + 37 * (c3 - 1);
  o3[0] = t0;
  o3[1] = t1;
  o3[2] = t22;
  o3[3] = t3;
  o3[4] = t4;
  o3[5] = t5;
  o3[6] = t6;
  o3[7] = t7;
  o3[8] = t8;
  o3[9] = t9;
  o3[10] = t10;
  o3[11] = t11;
  o3[12] = t12;
  o3[13] = t13;
  o3[14] = t14;
  o3[15] = t15;
}
function S(o3, a3) {
  M(o3, a3, a3);
}
function inv25519(o3, i3) {
  const c3 = gf();
  let a3;
  for (a3 = 0; a3 < 16; a3++)
    c3[a3] = i3[a3];
  for (a3 = 253; a3 >= 0; a3--) {
    S(c3, c3);
    if (a3 !== 2 && a3 !== 4)
      M(c3, c3, i3);
  }
  for (a3 = 0; a3 < 16; a3++)
    o3[a3] = c3[a3];
}
function pow2523(o3, i3) {
  const c3 = gf();
  let a3;
  for (a3 = 0; a3 < 16; a3++)
    c3[a3] = i3[a3];
  for (a3 = 250; a3 >= 0; a3--) {
    S(c3, c3);
    if (a3 !== 1)
      M(c3, c3, i3);
  }
  for (a3 = 0; a3 < 16; a3++)
    o3[a3] = c3[a3];
}
var K = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function crypto_hashblocks_hl(hh, hl, m3, n2) {
  const wh = new Int32Array(16), wl = new Int32Array(16);
  let bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i3, j3, h3, l3, a3, b3, c3, d3;
  let ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
  let pos = 0;
  while (n2 >= 128) {
    for (i3 = 0; i3 < 16; i3++) {
      j3 = 8 * i3 + pos;
      wh[i3] = m3[j3 + 0] << 24 | m3[j3 + 1] << 16 | m3[j3 + 2] << 8 | m3[j3 + 3];
      wl[i3] = m3[j3 + 4] << 24 | m3[j3 + 5] << 16 | m3[j3 + 6] << 8 | m3[j3 + 7];
    }
    for (i3 = 0; i3 < 80; i3++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;
      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;
      h3 = ah7;
      l3 = al7;
      a3 = l3 & 65535;
      b3 = l3 >>> 16;
      c3 = h3 & 65535;
      d3 = h3 >>> 16;
      h3 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
      l3 = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      h3 = ah4 & ah5 ^ ~ah4 & ah6;
      l3 = al4 & al5 ^ ~al4 & al6;
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      h3 = K[i3 * 2];
      l3 = K[i3 * 2 + 1];
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      h3 = wh[i3 % 16];
      l3 = wl[i3 % 16];
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      b3 += a3 >>> 16;
      c3 += b3 >>> 16;
      d3 += c3 >>> 16;
      th = c3 & 65535 | d3 << 16;
      tl = a3 & 65535 | b3 << 16;
      h3 = th;
      l3 = tl;
      a3 = l3 & 65535;
      b3 = l3 >>> 16;
      c3 = h3 & 65535;
      d3 = h3 >>> 16;
      h3 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
      l3 = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      h3 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
      l3 = al0 & al1 ^ al0 & al2 ^ al1 & al2;
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      b3 += a3 >>> 16;
      c3 += b3 >>> 16;
      d3 += c3 >>> 16;
      bh7 = c3 & 65535 | d3 << 16;
      bl7 = a3 & 65535 | b3 << 16;
      h3 = bh3;
      l3 = bl3;
      a3 = l3 & 65535;
      b3 = l3 >>> 16;
      c3 = h3 & 65535;
      d3 = h3 >>> 16;
      h3 = th;
      l3 = tl;
      a3 += l3 & 65535;
      b3 += l3 >>> 16;
      c3 += h3 & 65535;
      d3 += h3 >>> 16;
      b3 += a3 >>> 16;
      c3 += b3 >>> 16;
      d3 += c3 >>> 16;
      bh3 = c3 & 65535 | d3 << 16;
      bl3 = a3 & 65535 | b3 << 16;
      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;
      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;
      if (i3 % 16 === 15) {
        for (j3 = 0; j3 < 16; j3++) {
          h3 = wh[j3];
          l3 = wl[j3];
          a3 = l3 & 65535;
          b3 = l3 >>> 16;
          c3 = h3 & 65535;
          d3 = h3 >>> 16;
          h3 = wh[(j3 + 9) % 16];
          l3 = wl[(j3 + 9) % 16];
          a3 += l3 & 65535;
          b3 += l3 >>> 16;
          c3 += h3 & 65535;
          d3 += h3 >>> 16;
          th = wh[(j3 + 1) % 16];
          tl = wl[(j3 + 1) % 16];
          h3 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
          l3 = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
          a3 += l3 & 65535;
          b3 += l3 >>> 16;
          c3 += h3 & 65535;
          d3 += h3 >>> 16;
          th = wh[(j3 + 14) % 16];
          tl = wl[(j3 + 14) % 16];
          h3 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
          l3 = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
          a3 += l3 & 65535;
          b3 += l3 >>> 16;
          c3 += h3 & 65535;
          d3 += h3 >>> 16;
          b3 += a3 >>> 16;
          c3 += b3 >>> 16;
          d3 += c3 >>> 16;
          wh[j3] = c3 & 65535 | d3 << 16;
          wl[j3] = a3 & 65535 | b3 << 16;
        }
      }
    }
    h3 = ah0;
    l3 = al0;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[0];
    l3 = hl[0];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[0] = ah0 = c3 & 65535 | d3 << 16;
    hl[0] = al0 = a3 & 65535 | b3 << 16;
    h3 = ah1;
    l3 = al1;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[1];
    l3 = hl[1];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[1] = ah1 = c3 & 65535 | d3 << 16;
    hl[1] = al1 = a3 & 65535 | b3 << 16;
    h3 = ah2;
    l3 = al2;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[2];
    l3 = hl[2];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[2] = ah2 = c3 & 65535 | d3 << 16;
    hl[2] = al2 = a3 & 65535 | b3 << 16;
    h3 = ah3;
    l3 = al3;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[3];
    l3 = hl[3];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[3] = ah3 = c3 & 65535 | d3 << 16;
    hl[3] = al3 = a3 & 65535 | b3 << 16;
    h3 = ah4;
    l3 = al4;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[4];
    l3 = hl[4];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[4] = ah4 = c3 & 65535 | d3 << 16;
    hl[4] = al4 = a3 & 65535 | b3 << 16;
    h3 = ah5;
    l3 = al5;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[5];
    l3 = hl[5];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[5] = ah5 = c3 & 65535 | d3 << 16;
    hl[5] = al5 = a3 & 65535 | b3 << 16;
    h3 = ah6;
    l3 = al6;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[6];
    l3 = hl[6];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[6] = ah6 = c3 & 65535 | d3 << 16;
    hl[6] = al6 = a3 & 65535 | b3 << 16;
    h3 = ah7;
    l3 = al7;
    a3 = l3 & 65535;
    b3 = l3 >>> 16;
    c3 = h3 & 65535;
    d3 = h3 >>> 16;
    h3 = hh[7];
    l3 = hl[7];
    a3 += l3 & 65535;
    b3 += l3 >>> 16;
    c3 += h3 & 65535;
    d3 += h3 >>> 16;
    b3 += a3 >>> 16;
    c3 += b3 >>> 16;
    d3 += c3 >>> 16;
    hh[7] = ah7 = c3 & 65535 | d3 << 16;
    hl[7] = al7 = a3 & 65535 | b3 << 16;
    pos += 128;
    n2 -= 128;
  }
  return n2;
}
function crypto_hash(out, m3, n2) {
  const hh = new Int32Array(8);
  const hl = new Int32Array(8);
  const x5 = new Uint8Array(256);
  const b3 = n2;
  hh[0] = 1779033703;
  hh[1] = 3144134277;
  hh[2] = 1013904242;
  hh[3] = 2773480762;
  hh[4] = 1359893119;
  hh[5] = 2600822924;
  hh[6] = 528734635;
  hh[7] = 1541459225;
  hl[0] = 4089235720;
  hl[1] = 2227873595;
  hl[2] = 4271175723;
  hl[3] = 1595750129;
  hl[4] = 2917565137;
  hl[5] = 725511199;
  hl[6] = 4215389547;
  hl[7] = 327033209;
  crypto_hashblocks_hl(hh, hl, m3, n2);
  n2 %= 128;
  for (let i3 = 0; i3 < n2; i3++)
    x5[i3] = m3[b3 - n2 + i3];
  x5[n2] = 128;
  n2 = 256 - 128 * (n2 < 112 ? 1 : 0);
  x5[n2 - 9] = 0;
  ts64(x5, n2 - 8, b3 / 536870912 | 0, b3 << 3);
  crypto_hashblocks_hl(hh, hl, x5, n2);
  for (let i3 = 0; i3 < 8; i3++)
    ts64(out, 8 * i3, hh[i3], hl[i3]);
  return 0;
}
var HashState = class {
  constructor() {
    this.hh = new Int32Array(8);
    this.hl = new Int32Array(8);
    this.next = new Uint8Array(128);
    this.p = 0;
    this.total = 0;
    this.hh[0] = 1779033703;
    this.hh[1] = 3144134277;
    this.hh[2] = 1013904242;
    this.hh[3] = 2773480762;
    this.hh[4] = 1359893119;
    this.hh[5] = 2600822924;
    this.hh[6] = 528734635;
    this.hh[7] = 1541459225;
    this.hl[0] = 4089235720;
    this.hl[1] = 2227873595;
    this.hl[2] = 4271175723;
    this.hl[3] = 1595750129;
    this.hl[4] = 2917565137;
    this.hl[5] = 725511199;
    this.hl[6] = 4215389547;
    this.hl[7] = 327033209;
  }
  update(data) {
    this.total += data.length;
    let i3 = 0;
    while (i3 < data.length) {
      const r3 = 128 - this.p;
      if (r3 > data.length - i3) {
        for (let j3 = 0; i3 + j3 < data.length; j3++) {
          this.next[this.p + j3] = data[i3 + j3];
        }
        this.p += data.length - i3;
        break;
      } else {
        for (let j3 = 0; this.p + j3 < 128; j3++) {
          this.next[this.p + j3] = data[i3 + j3];
        }
        crypto_hashblocks_hl(this.hh, this.hl, this.next, 128);
        i3 += 128 - this.p;
        this.p = 0;
      }
    }
    return this;
  }
  finish() {
    const out = new Uint8Array(64);
    let n2 = this.p;
    const x5 = new Uint8Array(256);
    const b3 = this.total;
    for (let i3 = 0; i3 < n2; i3++)
      x5[i3] = this.next[i3];
    x5[n2] = 128;
    n2 = 256 - 128 * (n2 < 112 ? 1 : 0);
    x5[n2 - 9] = 0;
    ts64(x5, n2 - 8, b3 / 536870912 | 0, b3 << 3);
    crypto_hashblocks_hl(this.hh, this.hl, x5, n2);
    for (let i3 = 0; i3 < 8; i3++)
      ts64(out, 8 * i3, this.hh[i3], this.hl[i3]);
    return out;
  }
};
function add(p4, q3) {
  const a3 = gf(), b3 = gf(), c3 = gf(), d3 = gf(), e3 = gf(), f3 = gf(), g4 = gf(), h3 = gf(), t3 = gf();
  Z(a3, p4[1], p4[0]);
  Z(t3, q3[1], q3[0]);
  M(a3, a3, t3);
  A(b3, p4[0], p4[1]);
  A(t3, q3[0], q3[1]);
  M(b3, b3, t3);
  M(c3, p4[3], q3[3]);
  M(c3, c3, D2);
  M(d3, p4[2], q3[2]);
  A(d3, d3, d3);
  Z(e3, b3, a3);
  Z(f3, d3, c3);
  A(g4, d3, c3);
  A(h3, b3, a3);
  M(p4[0], e3, f3);
  M(p4[1], h3, g4);
  M(p4[2], g4, f3);
  M(p4[3], e3, h3);
}
function cswap(p4, q3, b3) {
  let i3;
  for (i3 = 0; i3 < 4; i3++) {
    sel25519(p4[i3], q3[i3], b3);
  }
}
function pack(r3, p4) {
  const tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p4[2]);
  M(tx, p4[0], zi);
  M(ty, p4[1], zi);
  pack25519(r3, ty);
  r3[31] ^= par25519(tx) << 7;
}
function scalarmult(p4, q3, s3) {
  let b3, i3;
  set25519(p4[0], gf0);
  set25519(p4[1], gf1);
  set25519(p4[2], gf1);
  set25519(p4[3], gf0);
  for (i3 = 255; i3 >= 0; --i3) {
    b3 = s3[i3 / 8 | 0] >> (i3 & 7) & 1;
    cswap(p4, q3, b3);
    add(q3, p4);
    add(p4, p4);
    cswap(p4, q3, b3);
  }
}
function scalarbase(p4, s3) {
  const q3 = [gf(), gf(), gf(), gf()];
  set25519(q3[0], X);
  set25519(q3[1], Y);
  set25519(q3[2], gf1);
  M(q3[3], X, Y);
  scalarmult(p4, q3, s3);
}
var L = new Float64Array([
  237,
  211,
  245,
  92,
  26,
  99,
  18,
  88,
  214,
  156,
  247,
  162,
  222,
  249,
  222,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  16
]);
function modL(r3, x5) {
  let carry, i3, j3, k3;
  for (i3 = 63; i3 >= 32; --i3) {
    carry = 0;
    for (j3 = i3 - 32, k3 = i3 - 12; j3 < k3; ++j3) {
      x5[j3] += carry - 16 * x5[i3] * L[j3 - (i3 - 32)];
      carry = Math.floor((x5[j3] + 128) / 256);
      x5[j3] -= carry * 256;
    }
    x5[j3] += carry;
    x5[i3] = 0;
  }
  carry = 0;
  for (j3 = 0; j3 < 32; j3++) {
    x5[j3] += carry - (x5[31] >> 4) * L[j3];
    carry = x5[j3] >> 8;
    x5[j3] &= 255;
  }
  for (j3 = 0; j3 < 32; j3++)
    x5[j3] -= carry * L[j3];
  for (i3 = 0; i3 < 32; i3++) {
    x5[i3 + 1] += x5[i3] >> 8;
    r3[i3] = x5[i3] & 255;
  }
}
function reduce(r3) {
  const x5 = new Float64Array(64);
  for (let i3 = 0; i3 < 64; i3++)
    x5[i3] = r3[i3];
  for (let i3 = 0; i3 < 64; i3++)
    r3[i3] = 0;
  modL(r3, x5);
}
function unpackpos(r3, p4) {
  const q3 = [gf(), gf(), gf(), gf()];
  if (unpackneg(q3, p4))
    return -1;
  const scalar0 = new Uint8Array(32);
  const scalar1 = new Uint8Array(32);
  scalar1[0] = 1;
  const scalarNeg1 = crypto_core_ed25519_scalar_sub(scalar0, scalar1);
  scalarmult(r3, q3, scalarNeg1);
  return 0;
}
function unpackneg(r3, p4) {
  const t3 = gf();
  const chk = gf();
  const num = gf();
  const den = gf();
  const den2 = gf();
  const den4 = gf();
  const den6 = gf();
  set25519(r3[2], gf1);
  unpack25519(r3[1], p4);
  S(num, r3[1]);
  M(den, num, D);
  Z(num, num, r3[2]);
  A(den, r3[2], den);
  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t3, den6, num);
  M(t3, t3, den);
  pow2523(t3, t3);
  M(t3, t3, num);
  M(t3, t3, den);
  M(t3, t3, den);
  M(r3[0], t3, den);
  S(chk, r3[0]);
  M(chk, chk, den);
  if (neq25519(chk, num))
    M(r3[0], r3[0], I);
  S(chk, r3[0]);
  M(chk, chk, den);
  if (neq25519(chk, num))
    return -1;
  if (par25519(r3[0]) === p4[31] >> 7)
    Z(r3[0], gf0, r3[0]);
  M(r3[3], r3[0], r3[1]);
  return 0;
}
function crypto_scalarmult_ed25519_base_noclamp(s3) {
  const r3 = new Uint8Array(32);
  const p4 = [gf(), gf(), gf(), gf()];
  scalarbase(p4, s3);
  pack(r3, p4);
  return r3;
}
function crypto_scalarmult_ed25519_noclamp(s3, q3) {
  const r3 = new Uint8Array(32);
  const p4 = [gf(), gf(), gf(), gf()];
  const ql = [gf(), gf(), gf(), gf()];
  if (unpackpos(ql, q3))
    throw new Error();
  scalarmult(p4, ql, s3);
  pack(r3, p4);
  return r3;
}
function crypto_sign_open(m3, sm, n2, pk) {
  let i3, mlen;
  const t3 = new Uint8Array(32), h3 = new Uint8Array(64);
  const p4 = [gf(), gf(), gf(), gf()], q3 = [gf(), gf(), gf(), gf()];
  mlen = -1;
  if (n2 < 64)
    return -1;
  if (unpackneg(q3, pk))
    return -1;
  for (i3 = 0; i3 < n2; i3++)
    m3[i3] = sm[i3];
  for (i3 = 0; i3 < 32; i3++)
    m3[i3 + 32] = pk[i3];
  crypto_hash(h3, m3, n2);
  reduce(h3);
  scalarmult(p4, q3, h3);
  scalarbase(q3, sm.subarray(32));
  add(p4, q3);
  pack(t3, p4);
  n2 -= 64;
  if (crypto_verify_32(sm, 0, t3, 0)) {
    for (i3 = 0; i3 < n2; i3++)
      m3[i3] = 0;
    return -1;
  }
  for (i3 = 0; i3 < n2; i3++)
    m3[i3] = sm[i3 + 64];
  mlen = n2;
  return mlen;
}
var crypto_sign_BYTES = 64;
var crypto_sign_PUBLICKEYBYTES = 32;
var crypto_hash_BYTES = 64;
function checkArrayTypes(...args) {
  for (let i3 = 0; i3 < args.length; i3++) {
    if (!(args[i3] instanceof Uint8Array))
      throw new TypeError("unexpected type, use Uint8Array");
  }
}
function randomBytes(n2) {
  const b3 = new Uint8Array(n2);
  randombytes(b3, n2);
  return b3;
}
function hash(msg) {
  checkArrayTypes(msg);
  const h3 = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h3, msg, msg.length);
  return h3;
}
function setPRNG(fn) {
  randombytes = fn;
}
function crypto_core_ed25519_scalar_reduce(x5) {
  const len = x5.length;
  const z4 = new Float64Array(64);
  for (let i3 = 0; i3 < len; i3++)
    z4[i3] = x5[i3];
  const o3 = new Uint8Array(32);
  modL(o3, z4);
  return o3;
}
function crypto_core_ed25519_scalar_sub(x5, y3) {
  const z4 = new Float64Array(64);
  for (let i3 = 0; i3 < 32; i3++) {
    z4[i3] = x5[i3] - y3[i3];
  }
  const o3 = new Uint8Array(32);
  modL(o3, z4);
  return o3;
}
function crypto_edx25519_private_key_create() {
  const seed = new Uint8Array(32);
  randombytes(seed, 32);
  return crypto_edx25519_private_key_create_from_seed(seed);
}
function crypto_edx25519_private_key_create_from_seed(seed) {
  const pk = hash(seed);
  pk[0] &= 248;
  pk[31] &= 127;
  pk[31] |= 64;
  return pk;
}
function crypto_edx25519_get_public(priv) {
  return crypto_scalarmult_ed25519_base_noclamp(priv.subarray(0, 32));
}
function crypto_edx25519_sign_detached(m3, skx, pkx) {
  const n2 = m3.length;
  const h3 = new Uint8Array(64);
  const r3 = new Uint8Array(64);
  let i3, j3;
  const x5 = new Float64Array(64);
  const p4 = [gf(), gf(), gf(), gf()];
  const sm = new Uint8Array(n2 + 64);
  for (i3 = 0; i3 < n2; i3++)
    sm[64 + i3] = m3[i3];
  for (i3 = 0; i3 < 32; i3++)
    sm[32 + i3] = skx[32 + i3];
  crypto_hash(r3, sm.subarray(32), n2 + 32);
  reduce(r3);
  scalarbase(p4, r3);
  pack(sm, p4);
  for (i3 = 32; i3 < 64; i3++)
    sm[i3] = pkx[i3 - 32];
  crypto_hash(h3, sm, n2 + 64);
  reduce(h3);
  for (i3 = 0; i3 < 64; i3++)
    x5[i3] = 0;
  for (i3 = 0; i3 < 32; i3++)
    x5[i3] = r3[i3];
  for (i3 = 0; i3 < 32; i3++) {
    for (j3 = 0; j3 < 32; j3++) {
      x5[i3 + j3] += h3[i3] * skx[j3];
    }
  }
  modL(sm.subarray(32), x5);
  return sm.subarray(0, 64);
}
function crypto_edx25519_sign_detached_verify(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error("bad signature size");
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error("bad public key size");
  const sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  const m3 = new Uint8Array(crypto_sign_BYTES + msg.length);
  let i3;
  for (i3 = 0; i3 < crypto_sign_BYTES; i3++)
    sm[i3] = sig[i3];
  for (i3 = 0; i3 < msg.length; i3++)
    sm[i3 + crypto_sign_BYTES] = msg[i3];
  return crypto_sign_open(m3, sm, sm.length, publicKey) >= 0;
}

// ../taler-util/lib/prng-browser.js
function loadBrowserPrng() {
  const cr = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
  const QUOTA = 65536;
  setPRNG(function(x5, n2) {
    let i3;
    const v3 = new Uint8Array(n2);
    for (i3 = 0; i3 < n2; i3 += QUOTA) {
      cr.getRandomValues(v3.subarray(i3, i3 + Math.min(n2 - i3, QUOTA)));
    }
    for (i3 = 0; i3 < n2; i3++)
      x5[i3] = v3[i3];
    for (i3 = 0; i3 < v3.length; i3++)
      v3[i3] = 0;
  });
}

// ../taler-util/lib/taler-error-codes.js
var TalerErrorCode;
(function(TalerErrorCode2) {
  TalerErrorCode2[TalerErrorCode2["NONE"] = 0] = "NONE";
  TalerErrorCode2[TalerErrorCode2["INVALID"] = 1] = "INVALID";
  TalerErrorCode2[TalerErrorCode2["GENERIC_CLIENT_INTERNAL_ERROR"] = 2] = "GENERIC_CLIENT_INTERNAL_ERROR";
  TalerErrorCode2[TalerErrorCode2["GENERIC_INVALID_RESPONSE"] = 10] = "GENERIC_INVALID_RESPONSE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_TIMEOUT"] = 11] = "GENERIC_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["GENERIC_VERSION_MALFORMED"] = 12] = "GENERIC_VERSION_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_REPLY_MALFORMED"] = 13] = "GENERIC_REPLY_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_CONFIGURATION_INVALID"] = 14] = "GENERIC_CONFIGURATION_INVALID";
  TalerErrorCode2[TalerErrorCode2["GENERIC_UNEXPECTED_REQUEST_ERROR"] = 15] = "GENERIC_UNEXPECTED_REQUEST_ERROR";
  TalerErrorCode2[TalerErrorCode2["GENERIC_METHOD_INVALID"] = 20] = "GENERIC_METHOD_INVALID";
  TalerErrorCode2[TalerErrorCode2["GENERIC_ENDPOINT_UNKNOWN"] = 21] = "GENERIC_ENDPOINT_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["GENERIC_JSON_INVALID"] = 22] = "GENERIC_JSON_INVALID";
  TalerErrorCode2[TalerErrorCode2["GENERIC_HTTP_HEADERS_MALFORMED"] = 23] = "GENERIC_HTTP_HEADERS_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_PAYTO_URI_MALFORMED"] = 24] = "GENERIC_PAYTO_URI_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_PARAMETER_MISSING"] = 25] = "GENERIC_PARAMETER_MISSING";
  TalerErrorCode2[TalerErrorCode2["GENERIC_PARAMETER_MALFORMED"] = 26] = "GENERIC_PARAMETER_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_RESERVE_PUB_MALFORMED"] = 27] = "GENERIC_RESERVE_PUB_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_CURRENCY_MISMATCH"] = 30] = "GENERIC_CURRENCY_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["GENERIC_URI_TOO_LONG"] = 31] = "GENERIC_URI_TOO_LONG";
  TalerErrorCode2[TalerErrorCode2["GENERIC_UPLOAD_EXCEEDS_LIMIT"] = 32] = "GENERIC_UPLOAD_EXCEEDS_LIMIT";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_SETUP_FAILED"] = 50] = "GENERIC_DB_SETUP_FAILED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_START_FAILED"] = 51] = "GENERIC_DB_START_FAILED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_STORE_FAILED"] = 52] = "GENERIC_DB_STORE_FAILED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_FETCH_FAILED"] = 53] = "GENERIC_DB_FETCH_FAILED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_COMMIT_FAILED"] = 54] = "GENERIC_DB_COMMIT_FAILED";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_SOFT_FAILURE"] = 55] = "GENERIC_DB_SOFT_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_DB_INVARIANT_FAILURE"] = 56] = "GENERIC_DB_INVARIANT_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_INTERNAL_INVARIANT_FAILURE"] = 60] = "GENERIC_INTERNAL_INVARIANT_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_FAILED_COMPUTE_JSON_HASH"] = 61] = "GENERIC_FAILED_COMPUTE_JSON_HASH";
  TalerErrorCode2[TalerErrorCode2["GENERIC_FAILED_COMPUTE_AMOUNT"] = 62] = "GENERIC_FAILED_COMPUTE_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["GENERIC_PARSER_OUT_OF_MEMORY"] = 70] = "GENERIC_PARSER_OUT_OF_MEMORY";
  TalerErrorCode2[TalerErrorCode2["GENERIC_ALLOCATION_FAILURE"] = 71] = "GENERIC_ALLOCATION_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_JSON_ALLOCATION_FAILURE"] = 72] = "GENERIC_JSON_ALLOCATION_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_CURL_ALLOCATION_FAILURE"] = 73] = "GENERIC_CURL_ALLOCATION_FAILURE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_FAILED_TO_LOAD_TEMPLATE"] = 74] = "GENERIC_FAILED_TO_LOAD_TEMPLATE";
  TalerErrorCode2[TalerErrorCode2["GENERIC_FAILED_TO_EXPAND_TEMPLATE"] = 75] = "GENERIC_FAILED_TO_EXPAND_TEMPLATE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_BAD_CONFIGURATION"] = 1e3] = "EXCHANGE_GENERIC_BAD_CONFIGURATION";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_OPERATION_UNKNOWN"] = 1001] = "EXCHANGE_GENERIC_OPERATION_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_WRONG_NUMBER_OF_SEGMENTS"] = 1002] = "EXCHANGE_GENERIC_WRONG_NUMBER_OF_SEGMENTS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_COIN_CONFLICTING_DENOMINATION_KEY"] = 1003] = "EXCHANGE_GENERIC_COIN_CONFLICTING_DENOMINATION_KEY";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_COINS_INVALID_COIN_PUB"] = 1004] = "EXCHANGE_GENERIC_COINS_INVALID_COIN_PUB";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_DENOMINATION_KEY_UNKNOWN"] = 1005] = "EXCHANGE_GENERIC_DENOMINATION_KEY_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DENOMINATION_SIGNATURE_INVALID"] = 1006] = "EXCHANGE_DENOMINATION_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_KEYS_MISSING"] = 1007] = "EXCHANGE_GENERIC_KEYS_MISSING";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_DENOMINATION_VALIDITY_IN_FUTURE"] = 1008] = "EXCHANGE_GENERIC_DENOMINATION_VALIDITY_IN_FUTURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_DENOMINATION_EXPIRED"] = 1009] = "EXCHANGE_GENERIC_DENOMINATION_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_DENOMINATION_REVOKED"] = 1010] = "EXCHANGE_GENERIC_DENOMINATION_REVOKED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_SECMOD_TIMEOUT"] = 1011] = "EXCHANGE_GENERIC_SECMOD_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_INSUFFICIENT_FUNDS"] = 1012] = "EXCHANGE_GENERIC_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_COIN_HISTORY_COMPUTATION_FAILED"] = 1013] = "EXCHANGE_GENERIC_COIN_HISTORY_COMPUTATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_HISTORY_DB_ERROR_INSUFFICIENT_FUNDS"] = 1014] = "EXCHANGE_GENERIC_HISTORY_DB_ERROR_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_COIN_CONFLICTING_AGE_HASH"] = 1015] = "EXCHANGE_GENERIC_COIN_CONFLICTING_AGE_HASH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_INVALID_DENOMINATION_CIPHER_FOR_OPERATION"] = 1016] = "EXCHANGE_GENERIC_INVALID_DENOMINATION_CIPHER_FOR_OPERATION";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_CIPHER_MISMATCH"] = 1017] = "EXCHANGE_GENERIC_CIPHER_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_NEW_DENOMS_ARRAY_SIZE_EXCESSIVE"] = 1018] = "EXCHANGE_GENERIC_NEW_DENOMS_ARRAY_SIZE_EXCESSIVE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_CLOCK_SKEW"] = 1020] = "EXCHANGE_GENERIC_CLOCK_SKEW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_AMOUNT_EXCEEDS_DENOMINATION_VALUE"] = 1021] = "EXCHANGE_GENERIC_AMOUNT_EXCEEDS_DENOMINATION_VALUE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_GLOBAL_FEES_MISSING"] = 1022] = "EXCHANGE_GENERIC_GLOBAL_FEES_MISSING";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_WIRE_FEES_MISSING"] = 1023] = "EXCHANGE_GENERIC_WIRE_FEES_MISSING";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_PURSE_PUB_MALFORMED"] = 1024] = "EXCHANGE_GENERIC_PURSE_PUB_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_PURSE_UNKNOWN"] = 1025] = "EXCHANGE_GENERIC_PURSE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_PURSE_EXPIRED"] = 1026] = "EXCHANGE_GENERIC_PURSE_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_RESERVE_UNKNOWN"] = 1027] = "EXCHANGE_GENERIC_RESERVE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_GENERIC_KYC_REQUIRED"] = 1028] = "EXCHANGE_GENERIC_KYC_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_DEPOSIT_COIN_CONFLICTING_ATTEST_VS_AGE_COMMITMENT"] = 1029] = "EXCHANGE_PURSE_DEPOSIT_COIN_CONFLICTING_ATTEST_VS_AGE_COMMITMENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_DEPOSIT_COIN_AGE_ATTESTATION_FAILURE"] = 1030] = "EXCHANGE_PURSE_DEPOSIT_COIN_AGE_ATTESTATION_FAILURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_NOT_FOUND"] = 1100] = "EXCHANGE_DEPOSITS_GET_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_INVALID_H_WIRE"] = 1101] = "EXCHANGE_DEPOSITS_GET_INVALID_H_WIRE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_INVALID_MERCHANT_PUB"] = 1102] = "EXCHANGE_DEPOSITS_GET_INVALID_MERCHANT_PUB";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_INVALID_H_CONTRACT_TERMS"] = 1103] = "EXCHANGE_DEPOSITS_GET_INVALID_H_CONTRACT_TERMS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_INVALID_COIN_PUB"] = 1104] = "EXCHANGE_DEPOSITS_GET_INVALID_COIN_PUB";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_INVALID_SIGNATURE_BY_EXCHANGE"] = 1105] = "EXCHANGE_DEPOSITS_GET_INVALID_SIGNATURE_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_GET_MERCHANT_SIGNATURE_INVALID"] = 1106] = "EXCHANGE_DEPOSITS_GET_MERCHANT_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSITS_POLICY_NOT_ACCEPTED"] = 1107] = "EXCHANGE_DEPOSITS_POLICY_NOT_ACCEPTED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_INSUFFICIENT_FUNDS"] = 1150] = "EXCHANGE_WITHDRAW_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_AMOUNT_FEE_OVERFLOW"] = 1152] = "EXCHANGE_WITHDRAW_AMOUNT_FEE_OVERFLOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_SIGNATURE_FAILED"] = 1153] = "EXCHANGE_WITHDRAW_SIGNATURE_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_RESERVE_SIGNATURE_INVALID"] = 1154] = "EXCHANGE_WITHDRAW_RESERVE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_HISTORY_ERROR_INSUFFICIENT_FUNDS"] = 1155] = "EXCHANGE_WITHDRAW_HISTORY_ERROR_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_DENOMINATION_KEY_LOST"] = 1158] = "EXCHANGE_WITHDRAW_DENOMINATION_KEY_LOST";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_UNBLIND_FAILURE"] = 1159] = "EXCHANGE_WITHDRAW_UNBLIND_FAILURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_NONCE_REUSE"] = 1160] = "EXCHANGE_WITHDRAW_NONCE_REUSE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WITHDRAW_BATCH_IDEMPOTENT_PLANCHET"] = 1175] = "EXCHANGE_WITHDRAW_BATCH_IDEMPOTENT_PLANCHET";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_COIN_SIGNATURE_INVALID"] = 1205] = "EXCHANGE_DEPOSIT_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_CONFLICTING_CONTRACT"] = 1206] = "EXCHANGE_DEPOSIT_CONFLICTING_CONTRACT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_NEGATIVE_VALUE_AFTER_FEE"] = 1207] = "EXCHANGE_DEPOSIT_NEGATIVE_VALUE_AFTER_FEE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_REFUND_DEADLINE_AFTER_WIRE_DEADLINE"] = 1208] = "EXCHANGE_DEPOSIT_REFUND_DEADLINE_AFTER_WIRE_DEADLINE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_WIRE_DEADLINE_IS_NEVER"] = 1209] = "EXCHANGE_DEPOSIT_WIRE_DEADLINE_IS_NEVER";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_INVALID_WIRE_FORMAT_JSON"] = 1210] = "EXCHANGE_DEPOSIT_INVALID_WIRE_FORMAT_JSON";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_INVALID_WIRE_FORMAT_CONTRACT_HASH_CONFLICT"] = 1211] = "EXCHANGE_DEPOSIT_INVALID_WIRE_FORMAT_CONTRACT_HASH_CONFLICT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_INVALID_SIGNATURE_BY_EXCHANGE"] = 1221] = "EXCHANGE_DEPOSIT_INVALID_SIGNATURE_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DEPOSIT_FEE_ABOVE_AMOUNT"] = 1222] = "EXCHANGE_DEPOSIT_FEE_ABOVE_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_EXTENSIONS_INVALID_FULFILLMENT"] = 1240] = "EXCHANGE_EXTENSIONS_INVALID_FULFILLMENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_STATUS_UNKNOWN"] = 1250] = "EXCHANGE_RESERVES_STATUS_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_STATUS_BAD_SIGNATURE"] = 1251] = "EXCHANGE_RESERVES_STATUS_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_HISTORY_BAD_SIGNATURE"] = 1252] = "EXCHANGE_RESERVES_HISTORY_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MELT_FEES_EXCEED_CONTRIBUTION"] = 1302] = "EXCHANGE_MELT_FEES_EXCEED_CONTRIBUTION";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MELT_COIN_SIGNATURE_INVALID"] = 1303] = "EXCHANGE_MELT_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MELT_COIN_EXPIRED_NO_ZOMBIE"] = 1305] = "EXCHANGE_MELT_COIN_EXPIRED_NO_ZOMBIE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MELT_INVALID_SIGNATURE_BY_EXCHANGE"] = 1306] = "EXCHANGE_MELT_INVALID_SIGNATURE_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_COMMITMENT_VIOLATION"] = 1353] = "EXCHANGE_REFRESHES_REVEAL_COMMITMENT_VIOLATION";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_SIGNING_ERROR"] = 1354] = "EXCHANGE_REFRESHES_REVEAL_SIGNING_ERROR";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_SESSION_UNKNOWN"] = 1355] = "EXCHANGE_REFRESHES_REVEAL_SESSION_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_CNC_TRANSFER_ARRAY_SIZE_INVALID"] = 1356] = "EXCHANGE_REFRESHES_REVEAL_CNC_TRANSFER_ARRAY_SIZE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_NEW_DENOMS_ARRAY_SIZE_MISMATCH"] = 1358] = "EXCHANGE_REFRESHES_REVEAL_NEW_DENOMS_ARRAY_SIZE_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_COST_CALCULATION_OVERFLOW"] = 1359] = "EXCHANGE_REFRESHES_REVEAL_COST_CALCULATION_OVERFLOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_AMOUNT_INSUFFICIENT"] = 1360] = "EXCHANGE_REFRESHES_REVEAL_AMOUNT_INSUFFICIENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_LINK_SIGNATURE_INVALID"] = 1361] = "EXCHANGE_REFRESHES_REVEAL_LINK_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_INVALID_RCH"] = 1362] = "EXCHANGE_REFRESHES_REVEAL_INVALID_RCH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_OPERATION_INVALID"] = 1363] = "EXCHANGE_REFRESHES_REVEAL_OPERATION_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_AGE_RESTRICTION_NOT_SUPPORTED"] = 1364] = "EXCHANGE_REFRESHES_REVEAL_AGE_RESTRICTION_NOT_SUPPORTED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFRESHES_REVEAL_AGE_RESTRICTION_COMMITMENT_INVALID"] = 1365] = "EXCHANGE_REFRESHES_REVEAL_AGE_RESTRICTION_COMMITMENT_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_LINK_COIN_UNKNOWN"] = 1400] = "EXCHANGE_LINK_COIN_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_TRANSFERS_GET_WTID_MALFORMED"] = 1450] = "EXCHANGE_TRANSFERS_GET_WTID_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_TRANSFERS_GET_WTID_NOT_FOUND"] = 1451] = "EXCHANGE_TRANSFERS_GET_WTID_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_TRANSFERS_GET_WIRE_FEE_NOT_FOUND"] = 1452] = "EXCHANGE_TRANSFERS_GET_WIRE_FEE_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_TRANSFERS_GET_WIRE_FEE_INCONSISTENT"] = 1453] = "EXCHANGE_TRANSFERS_GET_WIRE_FEE_INCONSISTENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSES_INVALID_WAIT_TARGET"] = 1475] = "EXCHANGE_PURSES_INVALID_WAIT_TARGET";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSES_GET_INVALID_SIGNATURE_BY_EXCHANGE"] = 1476] = "EXCHANGE_PURSES_GET_INVALID_SIGNATURE_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_COIN_NOT_FOUND"] = 1500] = "EXCHANGE_REFUND_COIN_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_CONFLICT_DEPOSIT_INSUFFICIENT"] = 1501] = "EXCHANGE_REFUND_CONFLICT_DEPOSIT_INSUFFICIENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_DEPOSIT_NOT_FOUND"] = 1502] = "EXCHANGE_REFUND_DEPOSIT_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_MERCHANT_ALREADY_PAID"] = 1503] = "EXCHANGE_REFUND_MERCHANT_ALREADY_PAID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_FEE_TOO_LOW"] = 1504] = "EXCHANGE_REFUND_FEE_TOO_LOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_FEE_ABOVE_AMOUNT"] = 1505] = "EXCHANGE_REFUND_FEE_ABOVE_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_MERCHANT_SIGNATURE_INVALID"] = 1506] = "EXCHANGE_REFUND_MERCHANT_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_MERCHANT_SIGNING_FAILED"] = 1507] = "EXCHANGE_REFUND_MERCHANT_SIGNING_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_INVALID_SIGNATURE_BY_EXCHANGE"] = 1508] = "EXCHANGE_REFUND_INVALID_SIGNATURE_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_INVALID_FAILURE_PROOF_BY_EXCHANGE"] = 1509] = "EXCHANGE_REFUND_INVALID_FAILURE_PROOF_BY_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_REFUND_INCONSISTENT_AMOUNT"] = 1510] = "EXCHANGE_REFUND_INCONSISTENT_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_SIGNATURE_INVALID"] = 1550] = "EXCHANGE_RECOUP_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_WITHDRAW_NOT_FOUND"] = 1551] = "EXCHANGE_RECOUP_WITHDRAW_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_COIN_BALANCE_ZERO"] = 1552] = "EXCHANGE_RECOUP_COIN_BALANCE_ZERO";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_BLINDING_FAILED"] = 1553] = "EXCHANGE_RECOUP_BLINDING_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_COIN_BALANCE_NEGATIVE"] = 1554] = "EXCHANGE_RECOUP_COIN_BALANCE_NEGATIVE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_NOT_ELIGIBLE"] = 1555] = "EXCHANGE_RECOUP_NOT_ELIGIBLE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_REFRESH_SIGNATURE_INVALID"] = 1575] = "EXCHANGE_RECOUP_REFRESH_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_REFRESH_MELT_NOT_FOUND"] = 1576] = "EXCHANGE_RECOUP_REFRESH_MELT_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_REFRESH_BLINDING_FAILED"] = 1578] = "EXCHANGE_RECOUP_REFRESH_BLINDING_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RECOUP_REFRESH_NOT_ELIGIBLE"] = 1580] = "EXCHANGE_RECOUP_REFRESH_NOT_ELIGIBLE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KEYS_TIMETRAVEL_FORBIDDEN"] = 1600] = "EXCHANGE_KEYS_TIMETRAVEL_FORBIDDEN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WIRE_SIGNATURE_INVALID"] = 1650] = "EXCHANGE_WIRE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WIRE_NO_ACCOUNTS_CONFIGURED"] = 1651] = "EXCHANGE_WIRE_NO_ACCOUNTS_CONFIGURED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WIRE_INVALID_PAYTO_CONFIGURED"] = 1652] = "EXCHANGE_WIRE_INVALID_PAYTO_CONFIGURED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_WIRE_FEES_NOT_CONFIGURED"] = 1653] = "EXCHANGE_WIRE_FEES_NOT_CONFIGURED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_CREATE_CONFLICTING_META_DATA"] = 1675] = "EXCHANGE_RESERVES_PURSE_CREATE_CONFLICTING_META_DATA";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_MERGE_CONFLICTING_META_DATA"] = 1676] = "EXCHANGE_RESERVES_PURSE_MERGE_CONFLICTING_META_DATA";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_CREATE_INSUFFICIENT_FUNDS"] = 1677] = "EXCHANGE_RESERVES_PURSE_CREATE_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_FEE_TOO_LOW"] = 1678] = "EXCHANGE_RESERVES_PURSE_FEE_TOO_LOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DENOMINATION_HELPER_UNAVAILABLE"] = 1700] = "EXCHANGE_DENOMINATION_HELPER_UNAVAILABLE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DENOMINATION_HELPER_BUG"] = 1701] = "EXCHANGE_DENOMINATION_HELPER_BUG";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_DENOMINATION_HELPER_TOO_EARLY"] = 1702] = "EXCHANGE_DENOMINATION_HELPER_TOO_EARLY";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_DEPOSIT_EXCHANGE_SIGNATURE_INVALID"] = 1725] = "EXCHANGE_PURSE_DEPOSIT_EXCHANGE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_SIGNKEY_HELPER_UNAVAILABLE"] = 1750] = "EXCHANGE_SIGNKEY_HELPER_UNAVAILABLE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_SIGNKEY_HELPER_BUG"] = 1751] = "EXCHANGE_SIGNKEY_HELPER_BUG";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_SIGNKEY_HELPER_TOO_EARLY"] = 1752] = "EXCHANGE_SIGNKEY_HELPER_TOO_EARLY";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_EXPIRATION_BEFORE_NOW"] = 1775] = "EXCHANGE_RESERVES_PURSE_EXPIRATION_BEFORE_NOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_EXPIRATION_IS_NEVER"] = 1776] = "EXCHANGE_RESERVES_PURSE_EXPIRATION_IS_NEVER";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_PURSE_MERGE_SIGNATURE_INVALID"] = 1777] = "EXCHANGE_RESERVES_PURSE_MERGE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_RESERVE_MERGE_SIGNATURE_INVALID"] = 1778] = "EXCHANGE_RESERVES_RESERVE_MERGE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_OPEN_BAD_SIGNATURE"] = 1785] = "EXCHANGE_RESERVES_OPEN_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_CLOSE_BAD_SIGNATURE"] = 1786] = "EXCHANGE_RESERVES_CLOSE_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_ATTEST_BAD_SIGNATURE"] = 1787] = "EXCHANGE_RESERVES_ATTEST_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_RESERVES_CLOSE_NO_TARGET_ACCOUNT"] = 1788] = "EXCHANGE_RESERVES_CLOSE_NO_TARGET_ACCOUNT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_AUDITOR_NOT_FOUND"] = 1800] = "EXCHANGE_MANAGEMENT_AUDITOR_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_AUDITOR_MORE_RECENT_PRESENT"] = 1801] = "EXCHANGE_MANAGEMENT_AUDITOR_MORE_RECENT_PRESENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_AUDITOR_ADD_SIGNATURE_INVALID"] = 1802] = "EXCHANGE_MANAGEMENT_AUDITOR_ADD_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_AUDITOR_DEL_SIGNATURE_INVALID"] = 1803] = "EXCHANGE_MANAGEMENT_AUDITOR_DEL_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_DENOMINATION_REVOKE_SIGNATURE_INVALID"] = 1804] = "EXCHANGE_MANAGEMENT_DENOMINATION_REVOKE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_SIGNKEY_REVOKE_SIGNATURE_INVALID"] = 1805] = "EXCHANGE_MANAGEMENT_SIGNKEY_REVOKE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_MORE_RECENT_PRESENT"] = 1806] = "EXCHANGE_MANAGEMENT_WIRE_MORE_RECENT_PRESENT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_KEYS_SIGNKEY_UNKNOWN"] = 1807] = "EXCHANGE_MANAGEMENT_KEYS_SIGNKEY_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_DETAILS_SIGNATURE_INVALID"] = 1808] = "EXCHANGE_MANAGEMENT_WIRE_DETAILS_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_ADD_SIGNATURE_INVALID"] = 1809] = "EXCHANGE_MANAGEMENT_WIRE_ADD_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_DEL_SIGNATURE_INVALID"] = 1810] = "EXCHANGE_MANAGEMENT_WIRE_DEL_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_NOT_FOUND"] = 1811] = "EXCHANGE_MANAGEMENT_WIRE_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_FEE_SIGNATURE_INVALID"] = 1812] = "EXCHANGE_MANAGEMENT_WIRE_FEE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_WIRE_FEE_MISMATCH"] = 1813] = "EXCHANGE_MANAGEMENT_WIRE_FEE_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_KEYS_DENOMKEY_ADD_SIGNATURE_INVALID"] = 1814] = "EXCHANGE_MANAGEMENT_KEYS_DENOMKEY_ADD_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_KEYS_SIGNKEY_ADD_SIGNATURE_INVALID"] = 1815] = "EXCHANGE_MANAGEMENT_KEYS_SIGNKEY_ADD_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_GLOBAL_FEE_MISMATCH"] = 1816] = "EXCHANGE_MANAGEMENT_GLOBAL_FEE_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_GLOBAL_FEE_SIGNATURE_INVALID"] = 1817] = "EXCHANGE_MANAGEMENT_GLOBAL_FEE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MANAGEMENT_DRAIN_PROFITS_SIGNATURE_INVALID"] = 1818] = "EXCHANGE_MANAGEMENT_DRAIN_PROFITS_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_CONFLICTING_META_DATA"] = 1850] = "EXCHANGE_PURSE_CREATE_CONFLICTING_META_DATA";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_CONFLICTING_CONTRACT_STORED"] = 1851] = "EXCHANGE_PURSE_CREATE_CONFLICTING_CONTRACT_STORED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_COIN_SIGNATURE_INVALID"] = 1852] = "EXCHANGE_PURSE_CREATE_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_EXPIRATION_BEFORE_NOW"] = 1853] = "EXCHANGE_PURSE_CREATE_EXPIRATION_BEFORE_NOW";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_EXPIRATION_IS_NEVER"] = 1854] = "EXCHANGE_PURSE_CREATE_EXPIRATION_IS_NEVER";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_SIGNATURE_INVALID"] = 1855] = "EXCHANGE_PURSE_CREATE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_ECONTRACT_SIGNATURE_INVALID"] = 1856] = "EXCHANGE_PURSE_ECONTRACT_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_CREATE_EXCHANGE_SIGNATURE_INVALID"] = 1857] = "EXCHANGE_PURSE_CREATE_EXCHANGE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_DEPOSIT_CONFLICTING_META_DATA"] = 1858] = "EXCHANGE_PURSE_DEPOSIT_CONFLICTING_META_DATA";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_ECONTRACT_CONFLICTING_META_DATA"] = 1859] = "EXCHANGE_PURSE_ECONTRACT_CONFLICTING_META_DATA";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CREATE_PURSE_NEGATIVE_VALUE_AFTER_FEE"] = 1860] = "EXCHANGE_CREATE_PURSE_NEGATIVE_VALUE_AFTER_FEE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_MERGE_INVALID_MERGE_SIGNATURE"] = 1876] = "EXCHANGE_PURSE_MERGE_INVALID_MERGE_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_MERGE_INVALID_RESERVE_SIGNATURE"] = 1877] = "EXCHANGE_PURSE_MERGE_INVALID_RESERVE_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_NOT_FULL"] = 1878] = "EXCHANGE_PURSE_NOT_FULL";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_MERGE_EXCHANGE_SIGNATURE_INVALID"] = 1879] = "EXCHANGE_PURSE_MERGE_EXCHANGE_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_MERGE_PURSE_PARTNER_UNKNOWN"] = 1880] = "EXCHANGE_MERGE_PURSE_PARTNER_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_AUDITORS_AUDITOR_SIGNATURE_INVALID"] = 1900] = "EXCHANGE_AUDITORS_AUDITOR_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_AUDITORS_AUDITOR_UNKNOWN"] = 1901] = "EXCHANGE_AUDITORS_AUDITOR_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_AUDITORS_AUDITOR_INACTIVE"] = 1902] = "EXCHANGE_AUDITORS_AUDITOR_INACTIVE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_WALLET_SIGNATURE_INVALID"] = 1925] = "EXCHANGE_KYC_WALLET_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_PROOF_BACKEND_INVALID_RESPONSE"] = 1926] = "EXCHANGE_KYC_PROOF_BACKEND_INVALID_RESPONSE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_PROOF_BACKEND_ERROR"] = 1927] = "EXCHANGE_KYC_PROOF_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_PROOF_BACKEND_AUTHORIZATION_FAILED"] = 1928] = "EXCHANGE_KYC_PROOF_BACKEND_AUTHORIZATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_PROOF_REQUEST_UNKNOWN"] = 1929] = "EXCHANGE_KYC_PROOF_REQUEST_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_CHECK_AUTHORIZATION_FAILED"] = 1930] = "EXCHANGE_KYC_CHECK_AUTHORIZATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_LOGIC_UNKNOWN"] = 1931] = "EXCHANGE_KYC_GENERIC_LOGIC_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_LOGIC_GONE"] = 1932] = "EXCHANGE_KYC_GENERIC_LOGIC_GONE";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_LOGIC_BUG"] = 1933] = "EXCHANGE_KYC_GENERIC_LOGIC_BUG";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_PROVIDER_ACCESS_REFUSED"] = 1934] = "EXCHANGE_KYC_GENERIC_PROVIDER_ACCESS_REFUSED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_PROVIDER_TIMEOUT"] = 1935] = "EXCHANGE_KYC_GENERIC_PROVIDER_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_PROVIDER_UNEXPECTED_REPLY"] = 1936] = "EXCHANGE_KYC_GENERIC_PROVIDER_UNEXPECTED_REPLY";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_GENERIC_PROVIDER_RATE_LIMIT_EXCEEDED"] = 1937] = "EXCHANGE_KYC_GENERIC_PROVIDER_RATE_LIMIT_EXCEEDED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_KYC_WEBHOOK_UNAUTHORIZED"] = 1938] = "EXCHANGE_KYC_WEBHOOK_UNAUTHORIZED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CONTRACTS_UNKNOWN"] = 1950] = "EXCHANGE_CONTRACTS_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CONTRACTS_INVALID_CONTRACT_PUB"] = 1951] = "EXCHANGE_CONTRACTS_INVALID_CONTRACT_PUB";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CONTRACTS_DECRYPTION_FAILED"] = 1952] = "EXCHANGE_CONTRACTS_DECRYPTION_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CONTRACTS_SIGNATURE_INVALID"] = 1953] = "EXCHANGE_CONTRACTS_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_CONTRACTS_DECODING_FAILED"] = 1954] = "EXCHANGE_CONTRACTS_DECODING_FAILED";
  TalerErrorCode2[TalerErrorCode2["EXCHANGE_PURSE_DEPOSIT_COIN_SIGNATURE_INVALID"] = 1975] = "EXCHANGE_PURSE_DEPOSIT_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_INSTANCE_UNKNOWN"] = 2e3] = "MERCHANT_GENERIC_INSTANCE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_HOLE_IN_WIRE_FEE_STRUCTURE"] = 2001] = "MERCHANT_GENERIC_HOLE_IN_WIRE_FEE_STRUCTURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_ORDER_UNKNOWN"] = 2005] = "MERCHANT_GENERIC_ORDER_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_PRODUCT_UNKNOWN"] = 2006] = "MERCHANT_GENERIC_PRODUCT_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_TIP_ID_UNKNOWN"] = 2007] = "MERCHANT_GENERIC_TIP_ID_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_DB_CONTRACT_CONTENT_INVALID"] = 2008] = "MERCHANT_GENERIC_DB_CONTRACT_CONTENT_INVALID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_CONTRACT_HASH_DOES_NOT_MATCH_ORDER"] = 2009] = "MERCHANT_GENERIC_CONTRACT_HASH_DOES_NOT_MATCH_ORDER";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_EXCHANGE_KEYS_FAILURE"] = 2010] = "MERCHANT_GENERIC_EXCHANGE_KEYS_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_EXCHANGE_TIMEOUT"] = 2011] = "MERCHANT_GENERIC_EXCHANGE_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_EXCHANGE_CONNECT_FAILURE"] = 2012] = "MERCHANT_GENERIC_EXCHANGE_CONNECT_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_EXCHANGE_REPLY_MALFORMED"] = 2013] = "MERCHANT_GENERIC_EXCHANGE_REPLY_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_EXCHANGE_UNEXPECTED_STATUS"] = 2014] = "MERCHANT_GENERIC_EXCHANGE_UNEXPECTED_STATUS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_UNAUTHORIZED"] = 2015] = "MERCHANT_GENERIC_UNAUTHORIZED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_INSTANCE_DELETED"] = 2016] = "MERCHANT_GENERIC_INSTANCE_DELETED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GENERIC_TRANSFER_UNKNOWN"] = 2017] = "MERCHANT_GENERIC_TRANSFER_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GET_ORDERS_EXCHANGE_TRACKING_FAILURE"] = 2100] = "MERCHANT_GET_ORDERS_EXCHANGE_TRACKING_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GET_ORDERS_ID_EXCHANGE_REQUEST_FAILURE"] = 2103] = "MERCHANT_GET_ORDERS_ID_EXCHANGE_REQUEST_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GET_ORDERS_ID_EXCHANGE_LOOKUP_START_FAILURE"] = 2104] = "MERCHANT_GET_ORDERS_ID_EXCHANGE_LOOKUP_START_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GET_ORDERS_ID_INVALID_TOKEN"] = 2105] = "MERCHANT_GET_ORDERS_ID_INVALID_TOKEN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_GET_ORDERS_ID_INVALID_CONTRACT_HASH"] = 2106] = "MERCHANT_GET_ORDERS_ID_INVALID_CONTRACT_HASH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_INSUFFICIENT_FUNDS"] = 2150] = "MERCHANT_POST_ORDERS_ID_PAY_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_KEY_NOT_FOUND"] = 2151] = "MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_KEY_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_KEY_AUDITOR_FAILURE"] = 2152] = "MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_KEY_AUDITOR_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_AMOUNT_OVERFLOW"] = 2153] = "MERCHANT_POST_ORDERS_ID_PAY_AMOUNT_OVERFLOW";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_FEES_EXCEED_PAYMENT"] = 2154] = "MERCHANT_POST_ORDERS_ID_PAY_FEES_EXCEED_PAYMENT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_INSUFFICIENT_DUE_TO_FEES"] = 2155] = "MERCHANT_POST_ORDERS_ID_PAY_INSUFFICIENT_DUE_TO_FEES";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_PAYMENT_INSUFFICIENT"] = 2156] = "MERCHANT_POST_ORDERS_ID_PAY_PAYMENT_INSUFFICIENT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_COIN_SIGNATURE_INVALID"] = 2157] = "MERCHANT_POST_ORDERS_ID_PAY_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_LOOKUP_FAILED"] = 2158] = "MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_LOOKUP_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_REFUND_DEADLINE_PAST_WIRE_TRANSFER_DEADLINE"] = 2159] = "MERCHANT_POST_ORDERS_ID_PAY_REFUND_DEADLINE_PAST_WIRE_TRANSFER_DEADLINE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_ALREADY_PAID"] = 2160] = "MERCHANT_POST_ORDERS_ID_PAY_ALREADY_PAID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_OFFER_EXPIRED"] = 2161] = "MERCHANT_POST_ORDERS_ID_PAY_OFFER_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_MERCHANT_FIELD_MISSING"] = 2162] = "MERCHANT_POST_ORDERS_ID_PAY_MERCHANT_FIELD_MISSING";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_WIRE_HASH_UNKNOWN"] = 2163] = "MERCHANT_POST_ORDERS_ID_PAY_WIRE_HASH_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_DEPOSIT_EXPIRED"] = 2165] = "MERCHANT_POST_ORDERS_ID_PAY_DENOMINATION_DEPOSIT_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_WIRE_FEE_ADDITION_FAILED"] = 2166] = "MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_WIRE_FEE_ADDITION_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_REFUNDED"] = 2167] = "MERCHANT_POST_ORDERS_ID_PAY_REFUNDED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_REFUNDS_EXCEED_PAYMENTS"] = 2168] = "MERCHANT_POST_ORDERS_ID_PAY_REFUNDS_EXCEED_PAYMENTS";
  TalerErrorCode2[TalerErrorCode2["DEAD_QQQ_PAY_MERCHANT_POST_ORDERS_ID_ABORT_REFUND_REFUSED_PAYMENT_COMPLETE"] = 2169] = "DEAD_QQQ_PAY_MERCHANT_POST_ORDERS_ID_ABORT_REFUND_REFUSED_PAYMENT_COMPLETE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_FAILED"] = 2170] = "MERCHANT_POST_ORDERS_ID_PAY_EXCHANGE_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_MISSING"] = 2171] = "MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_MISSING";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_SIZE_MISMATCH"] = 2172] = "MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_SIZE_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_AGE_VERIFICATION_FAILED"] = 2173] = "MERCHANT_POST_ORDERS_ID_PAY_AGE_VERIFICATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_HASH_MISSING"] = 2174] = "MERCHANT_POST_ORDERS_ID_PAY_AGE_COMMITMENT_HASH_MISSING";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAID_CONTRACT_HASH_MISMATCH"] = 2200] = "MERCHANT_POST_ORDERS_ID_PAID_CONTRACT_HASH_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_PAID_COIN_SIGNATURE_INVALID"] = 2201] = "MERCHANT_POST_ORDERS_ID_PAID_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_EXCHANGE_REFUND_FAILED"] = 2251] = "MERCHANT_POST_ORDERS_ID_ABORT_EXCHANGE_REFUND_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_EXCHANGE_LOOKUP_FAILED"] = 2252] = "MERCHANT_POST_ORDERS_ID_ABORT_EXCHANGE_LOOKUP_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_CONTRACT_NOT_FOUND"] = 2253] = "MERCHANT_POST_ORDERS_ID_ABORT_CONTRACT_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_REFUND_REFUSED_PAYMENT_COMPLETE"] = 2254] = "MERCHANT_POST_ORDERS_ID_ABORT_REFUND_REFUSED_PAYMENT_COMPLETE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_CONTRACT_HASH_MISSMATCH"] = 2255] = "MERCHANT_POST_ORDERS_ID_ABORT_CONTRACT_HASH_MISSMATCH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_ABORT_COINS_ARRAY_EMPTY"] = 2256] = "MERCHANT_POST_ORDERS_ID_ABORT_COINS_ARRAY_EMPTY";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_CLAIM_NOT_FOUND"] = 2300] = "MERCHANT_POST_ORDERS_ID_CLAIM_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_CLAIM_ALREADY_CLAIMED"] = 2301] = "MERCHANT_POST_ORDERS_ID_CLAIM_ALREADY_CLAIMED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_CLAIM_CLIENT_INTERNAL_FAILURE"] = 2302] = "MERCHANT_POST_ORDERS_ID_CLAIM_CLIENT_INTERNAL_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_POST_ORDERS_ID_REFUND_SIGNATURE_FAILED"] = 2350] = "MERCHANT_POST_ORDERS_ID_REFUND_SIGNATURE_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_UNBLIND_FAILURE"] = 2400] = "MERCHANT_TIP_PICKUP_UNBLIND_FAILURE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_EXCHANGE_ERROR"] = 2403] = "MERCHANT_TIP_PICKUP_EXCHANGE_ERROR";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_SUMMATION_FAILED"] = 2404] = "MERCHANT_TIP_PICKUP_SUMMATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_HAS_EXPIRED"] = 2405] = "MERCHANT_TIP_PICKUP_HAS_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_AMOUNT_EXCEEDS_TIP_REMAINING"] = 2406] = "MERCHANT_TIP_PICKUP_AMOUNT_EXCEEDS_TIP_REMAINING";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_TIP_PICKUP_DENOMINATION_UNKNOWN"] = 2407] = "MERCHANT_TIP_PICKUP_DENOMINATION_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_INSTANCE_CONFIGURATION_LACKS_WIRE"] = 2500] = "MERCHANT_PRIVATE_POST_ORDERS_INSTANCE_CONFIGURATION_LACKS_WIRE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_NO_LOCALTIME"] = 2501] = "MERCHANT_PRIVATE_POST_ORDERS_NO_LOCALTIME";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_PROPOSAL_PARSE_ERROR"] = 2502] = "MERCHANT_PRIVATE_POST_ORDERS_PROPOSAL_PARSE_ERROR";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_ALREADY_EXISTS"] = 2503] = "MERCHANT_PRIVATE_POST_ORDERS_ALREADY_EXISTS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_REFUND_AFTER_WIRE_DEADLINE"] = 2504] = "MERCHANT_PRIVATE_POST_ORDERS_REFUND_AFTER_WIRE_DEADLINE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_DELIVERY_DATE_IN_PAST"] = 2505] = "MERCHANT_PRIVATE_POST_ORDERS_DELIVERY_DATE_IN_PAST";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_WIRE_DEADLINE_IS_NEVER"] = 2506] = "MERCHANT_PRIVATE_POST_ORDERS_WIRE_DEADLINE_IS_NEVER";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_ORDERS_ID_FORGET_PATH_SYNTAX_INCORRECT"] = 2510] = "MERCHANT_PRIVATE_PATCH_ORDERS_ID_FORGET_PATH_SYNTAX_INCORRECT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_ORDERS_ID_FORGET_PATH_NOT_FORGETTABLE"] = 2511] = "MERCHANT_PRIVATE_PATCH_ORDERS_ID_FORGET_PATH_NOT_FORGETTABLE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_DELETE_ORDERS_AWAITING_PAYMENT"] = 2520] = "MERCHANT_PRIVATE_DELETE_ORDERS_AWAITING_PAYMENT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_DELETE_ORDERS_ALREADY_PAID"] = 2521] = "MERCHANT_PRIVATE_DELETE_ORDERS_ALREADY_PAID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_INCONSISTENT_AMOUNT"] = 2530] = "MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_INCONSISTENT_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_ORDER_UNPAID"] = 2531] = "MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_ORDER_UNPAID";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_NOT_ALLOWED_BY_CONTRACT"] = 2532] = "MERCHANT_PRIVATE_POST_ORDERS_ID_REFUND_NOT_ALLOWED_BY_CONTRACT";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_EXCHANGE_UNKNOWN"] = 2550] = "MERCHANT_PRIVATE_POST_TRANSFERS_EXCHANGE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_REQUEST_ERROR"] = 2551] = "MERCHANT_PRIVATE_POST_TRANSFERS_REQUEST_ERROR";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_TRANSFERS"] = 2552] = "MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_TRANSFERS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_REPORTS"] = 2553] = "MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_REPORTS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_BAD_WIRE_FEE"] = 2554] = "MERCHANT_PRIVATE_POST_TRANSFERS_BAD_WIRE_FEE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_ACCOUNT_NOT_FOUND"] = 2555] = "MERCHANT_PRIVATE_POST_TRANSFERS_ACCOUNT_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_DELETE_TRANSFERS_ALREADY_CONFIRMED"] = 2556] = "MERCHANT_PRIVATE_DELETE_TRANSFERS_ALREADY_CONFIRMED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_SUBMISSION"] = 2557] = "MERCHANT_PRIVATE_POST_TRANSFERS_CONFLICTING_SUBMISSION";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_INSTANCES_ALREADY_EXISTS"] = 2600] = "MERCHANT_PRIVATE_POST_INSTANCES_ALREADY_EXISTS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_INSTANCES_BAD_AUTH"] = 2601] = "MERCHANT_PRIVATE_POST_INSTANCES_BAD_AUTH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_INSTANCE_AUTH_BAD_AUTH"] = 2602] = "MERCHANT_PRIVATE_POST_INSTANCE_AUTH_BAD_AUTH";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_INSTANCES_PURGE_REQUIRED"] = 2603] = "MERCHANT_PRIVATE_POST_INSTANCES_PURGE_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_INSTANCES_PURGE_REQUIRED"] = 2625] = "MERCHANT_PRIVATE_PATCH_INSTANCES_PURGE_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_PRODUCTS_CONFLICT_PRODUCT_EXISTS"] = 2650] = "MERCHANT_PRIVATE_POST_PRODUCTS_CONFLICT_PRODUCT_EXISTS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_LOST_REDUCED"] = 2660] = "MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_LOST_REDUCED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_LOST_EXCEEDS_STOCKS"] = 2661] = "MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_LOST_EXCEEDS_STOCKS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_STOCKED_REDUCED"] = 2662] = "MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_STOCKED_REDUCED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_SOLD_REDUCED"] = 2663] = "MERCHANT_PRIVATE_PATCH_PRODUCTS_TOTAL_SOLD_REDUCED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_PRODUCTS_LOCK_INSUFFICIENT_STOCKS"] = 2670] = "MERCHANT_PRIVATE_POST_PRODUCTS_LOCK_INSUFFICIENT_STOCKS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_DELETE_PRODUCTS_CONFLICTING_LOCK"] = 2680] = "MERCHANT_PRIVATE_DELETE_PRODUCTS_CONFLICTING_LOCK";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_RESERVES_UNSUPPORTED_WIRE_METHOD"] = 2700] = "MERCHANT_PRIVATE_POST_RESERVES_UNSUPPORTED_WIRE_METHOD";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_DELETE_RESERVES_NO_SUCH_RESERVE"] = 2710] = "MERCHANT_PRIVATE_DELETE_RESERVES_NO_SUCH_RESERVE";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_EXPIRED"] = 2750] = "MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_EXPIRED";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_UNKNOWN"] = 2751] = "MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_INSUFFICIENT_FUNDS"] = 2752] = "MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_INSUFFICIENT_FUNDS";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_NOT_FOUND"] = 2753] = "MERCHANT_PRIVATE_POST_TIP_AUTHORIZE_RESERVE_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["MERCHANT_PRIVATE_GET_ORDERS_ID_AMOUNT_ARITHMETIC_FAILURE"] = 2800] = "MERCHANT_PRIVATE_GET_ORDERS_ID_AMOUNT_ARITHMETIC_FAILURE";
  TalerErrorCode2[TalerErrorCode2["AUDITOR_DEPOSIT_CONFIRMATION_SIGNATURE_INVALID"] = 3100] = "AUDITOR_DEPOSIT_CONFIRMATION_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["AUDITOR_EXCHANGE_SIGNING_KEY_REVOKED"] = 3101] = "AUDITOR_EXCHANGE_SIGNING_KEY_REVOKED";
  TalerErrorCode2[TalerErrorCode2["BANK_SAME_ACCOUNT"] = 5101] = "BANK_SAME_ACCOUNT";
  TalerErrorCode2[TalerErrorCode2["BANK_UNALLOWED_DEBIT"] = 5102] = "BANK_UNALLOWED_DEBIT";
  TalerErrorCode2[TalerErrorCode2["BANK_NEGATIVE_NUMBER_AMOUNT"] = 5103] = "BANK_NEGATIVE_NUMBER_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["BANK_NUMBER_TOO_BIG"] = 5104] = "BANK_NUMBER_TOO_BIG";
  TalerErrorCode2[TalerErrorCode2["BANK_LOGIN_FAILED"] = 5105] = "BANK_LOGIN_FAILED";
  TalerErrorCode2[TalerErrorCode2["BANK_UNKNOWN_ACCOUNT"] = 5106] = "BANK_UNKNOWN_ACCOUNT";
  TalerErrorCode2[TalerErrorCode2["BANK_TRANSACTION_NOT_FOUND"] = 5107] = "BANK_TRANSACTION_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["BANK_BAD_FORMAT_AMOUNT"] = 5108] = "BANK_BAD_FORMAT_AMOUNT";
  TalerErrorCode2[TalerErrorCode2["BANK_REJECT_NO_RIGHTS"] = 5109] = "BANK_REJECT_NO_RIGHTS";
  TalerErrorCode2[TalerErrorCode2["BANK_UNMANAGED_EXCEPTION"] = 5110] = "BANK_UNMANAGED_EXCEPTION";
  TalerErrorCode2[TalerErrorCode2["BANK_SOFT_EXCEPTION"] = 5111] = "BANK_SOFT_EXCEPTION";
  TalerErrorCode2[TalerErrorCode2["BANK_TRANSFER_REQUEST_UID_REUSED"] = 5112] = "BANK_TRANSFER_REQUEST_UID_REUSED";
  TalerErrorCode2[TalerErrorCode2["BANK_WITHDRAWAL_OPERATION_RESERVE_SELECTION_CONFLICT"] = 5113] = "BANK_WITHDRAWAL_OPERATION_RESERVE_SELECTION_CONFLICT";
  TalerErrorCode2[TalerErrorCode2["BANK_DUPLICATE_RESERVE_PUB_SUBJECT"] = 5114] = "BANK_DUPLICATE_RESERVE_PUB_SUBJECT";
  TalerErrorCode2[TalerErrorCode2["BANK_ANCIENT_TRANSACTION_GONE"] = 5115] = "BANK_ANCIENT_TRANSACTION_GONE";
  TalerErrorCode2[TalerErrorCode2["BANK_ABORT_CONFIRM_CONFLICT"] = 5116] = "BANK_ABORT_CONFIRM_CONFLICT";
  TalerErrorCode2[TalerErrorCode2["BANK_CONFIRM_ABORT_CONFLICT"] = 5117] = "BANK_CONFIRM_ABORT_CONFLICT";
  TalerErrorCode2[TalerErrorCode2["BANK_REGISTER_CONFLICT"] = 5118] = "BANK_REGISTER_CONFLICT";
  TalerErrorCode2[TalerErrorCode2["BANK_POST_WITHDRAWAL_OPERATION_REQUIRED"] = 5119] = "BANK_POST_WITHDRAWAL_OPERATION_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["SYNC_ACCOUNT_UNKNOWN"] = 6100] = "SYNC_ACCOUNT_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["SYNC_BAD_IF_NONE_MATCH"] = 6101] = "SYNC_BAD_IF_NONE_MATCH";
  TalerErrorCode2[TalerErrorCode2["SYNC_BAD_IF_MATCH"] = 6102] = "SYNC_BAD_IF_MATCH";
  TalerErrorCode2[TalerErrorCode2["SYNC_BAD_SYNC_SIGNATURE"] = 6103] = "SYNC_BAD_SYNC_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["SYNC_INVALID_SIGNATURE"] = 6104] = "SYNC_INVALID_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["SYNC_MALFORMED_CONTENT_LENGTH"] = 6105] = "SYNC_MALFORMED_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["SYNC_EXCESSIVE_CONTENT_LENGTH"] = 6106] = "SYNC_EXCESSIVE_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["SYNC_OUT_OF_MEMORY_ON_CONTENT_LENGTH"] = 6107] = "SYNC_OUT_OF_MEMORY_ON_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["SYNC_INVALID_UPLOAD"] = 6108] = "SYNC_INVALID_UPLOAD";
  TalerErrorCode2[TalerErrorCode2["SYNC_PAYMENT_GENERIC_TIMEOUT"] = 6109] = "SYNC_PAYMENT_GENERIC_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["SYNC_PAYMENT_CREATE_BACKEND_ERROR"] = 6110] = "SYNC_PAYMENT_CREATE_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["SYNC_PREVIOUS_BACKUP_UNKNOWN"] = 6111] = "SYNC_PREVIOUS_BACKUP_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["SYNC_MISSING_CONTENT_LENGTH"] = 6112] = "SYNC_MISSING_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["SYNC_GENERIC_BACKEND_ERROR"] = 6113] = "SYNC_GENERIC_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["SYNC_GENERIC_BACKEND_TIMEOUT"] = 6114] = "SYNC_GENERIC_BACKEND_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["WALLET_EXCHANGE_PROTOCOL_VERSION_INCOMPATIBLE"] = 7e3] = "WALLET_EXCHANGE_PROTOCOL_VERSION_INCOMPATIBLE";
  TalerErrorCode2[TalerErrorCode2["WALLET_UNEXPECTED_EXCEPTION"] = 7001] = "WALLET_UNEXPECTED_EXCEPTION";
  TalerErrorCode2[TalerErrorCode2["WALLET_RECEIVED_MALFORMED_RESPONSE"] = 7002] = "WALLET_RECEIVED_MALFORMED_RESPONSE";
  TalerErrorCode2[TalerErrorCode2["WALLET_NETWORK_ERROR"] = 7003] = "WALLET_NETWORK_ERROR";
  TalerErrorCode2[TalerErrorCode2["WALLET_HTTP_REQUEST_THROTTLED"] = 7004] = "WALLET_HTTP_REQUEST_THROTTLED";
  TalerErrorCode2[TalerErrorCode2["WALLET_UNEXPECTED_REQUEST_ERROR"] = 7005] = "WALLET_UNEXPECTED_REQUEST_ERROR";
  TalerErrorCode2[TalerErrorCode2["WALLET_EXCHANGE_DENOMINATIONS_INSUFFICIENT"] = 7006] = "WALLET_EXCHANGE_DENOMINATIONS_INSUFFICIENT";
  TalerErrorCode2[TalerErrorCode2["WALLET_CORE_API_OPERATION_UNKNOWN"] = 7007] = "WALLET_CORE_API_OPERATION_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["WALLET_INVALID_TALER_PAY_URI"] = 7008] = "WALLET_INVALID_TALER_PAY_URI";
  TalerErrorCode2[TalerErrorCode2["WALLET_EXCHANGE_COIN_SIGNATURE_INVALID"] = 7009] = "WALLET_EXCHANGE_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["WALLET_EXCHANGE_WITHDRAW_RESERVE_UNKNOWN_AT_EXCHANGE"] = 7010] = "WALLET_EXCHANGE_WITHDRAW_RESERVE_UNKNOWN_AT_EXCHANGE";
  TalerErrorCode2[TalerErrorCode2["WALLET_CORE_NOT_AVAILABLE"] = 7011] = "WALLET_CORE_NOT_AVAILABLE";
  TalerErrorCode2[TalerErrorCode2["WALLET_WITHDRAWAL_OPERATION_ABORTED_BY_BANK"] = 7012] = "WALLET_WITHDRAWAL_OPERATION_ABORTED_BY_BANK";
  TalerErrorCode2[TalerErrorCode2["WALLET_HTTP_REQUEST_GENERIC_TIMEOUT"] = 7013] = "WALLET_HTTP_REQUEST_GENERIC_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["WALLET_ORDER_ALREADY_CLAIMED"] = 7014] = "WALLET_ORDER_ALREADY_CLAIMED";
  TalerErrorCode2[TalerErrorCode2["WALLET_WITHDRAWAL_GROUP_INCOMPLETE"] = 7015] = "WALLET_WITHDRAWAL_GROUP_INCOMPLETE";
  TalerErrorCode2[TalerErrorCode2["WALLET_TIPPING_COIN_SIGNATURE_INVALID"] = 7016] = "WALLET_TIPPING_COIN_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["WALLET_BANK_INTEGRATION_PROTOCOL_VERSION_INCOMPATIBLE"] = 7017] = "WALLET_BANK_INTEGRATION_PROTOCOL_VERSION_INCOMPATIBLE";
  TalerErrorCode2[TalerErrorCode2["WALLET_CONTRACT_TERMS_BASE_URL_MISMATCH"] = 7018] = "WALLET_CONTRACT_TERMS_BASE_URL_MISMATCH";
  TalerErrorCode2[TalerErrorCode2["WALLET_CONTRACT_TERMS_SIGNATURE_INVALID"] = 7019] = "WALLET_CONTRACT_TERMS_SIGNATURE_INVALID";
  TalerErrorCode2[TalerErrorCode2["WALLET_CONTRACT_TERMS_MALFORMED"] = 7020] = "WALLET_CONTRACT_TERMS_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["WALLET_PENDING_OPERATION_FAILED"] = 7021] = "WALLET_PENDING_OPERATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["WALLET_PAY_MERCHANT_SERVER_ERROR"] = 7022] = "WALLET_PAY_MERCHANT_SERVER_ERROR";
  TalerErrorCode2[TalerErrorCode2["WALLET_CRYPTO_WORKER_ERROR"] = 7023] = "WALLET_CRYPTO_WORKER_ERROR";
  TalerErrorCode2[TalerErrorCode2["WALLET_CRYPTO_WORKER_BAD_REQUEST"] = 7024] = "WALLET_CRYPTO_WORKER_BAD_REQUEST";
  TalerErrorCode2[TalerErrorCode2["WALLET_WITHDRAWAL_KYC_REQUIRED"] = 7025] = "WALLET_WITHDRAWAL_KYC_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_BACKEND_TIMEOUT"] = 8e3] = "ANASTASIS_GENERIC_BACKEND_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_INVALID_PAYMENT_REQUEST"] = 8001] = "ANASTASIS_GENERIC_INVALID_PAYMENT_REQUEST";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_BACKEND_ERROR"] = 8002] = "ANASTASIS_GENERIC_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_MISSING_CONTENT_LENGTH"] = 8003] = "ANASTASIS_GENERIC_MISSING_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_MALFORMED_CONTENT_LENGTH"] = 8004] = "ANASTASIS_GENERIC_MALFORMED_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_ORDER_CREATE_BACKEND_ERROR"] = 8005] = "ANASTASIS_GENERIC_ORDER_CREATE_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_PAYMENT_CHECK_UNAUTHORIZED"] = 8006] = "ANASTASIS_GENERIC_PAYMENT_CHECK_UNAUTHORIZED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_PAYMENT_CHECK_START_FAILED"] = 8007] = "ANASTASIS_GENERIC_PAYMENT_CHECK_START_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_GENERIC_PROVIDER_UNREACHABLE"] = 8008] = "ANASTASIS_GENERIC_PROVIDER_UNREACHABLE";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_PAYMENT_GENERIC_TIMEOUT"] = 8009] = "ANASTASIS_PAYMENT_GENERIC_TIMEOUT";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_UNKNOWN"] = 8108] = "ANASTASIS_TRUTH_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_AUTHORIZATION_METHOD_NO_LONGER_SUPPORTED"] = 8109] = "ANASTASIS_TRUTH_AUTHORIZATION_METHOD_NO_LONGER_SUPPORTED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_CHALLENGE_RESPONSE_REQUIRED"] = 8110] = "ANASTASIS_TRUTH_CHALLENGE_RESPONSE_REQUIRED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_CHALLENGE_FAILED"] = 8111] = "ANASTASIS_TRUTH_CHALLENGE_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_CHALLENGE_UNKNOWN"] = 8112] = "ANASTASIS_TRUTH_CHALLENGE_UNKNOWN";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_AUTHORIZATION_START_FAILED"] = 8114] = "ANASTASIS_TRUTH_AUTHORIZATION_START_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_KEY_SHARE_GONE"] = 8115] = "ANASTASIS_TRUTH_KEY_SHARE_GONE";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_ORDER_DISAPPEARED"] = 8116] = "ANASTASIS_TRUTH_ORDER_DISAPPEARED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_BACKEND_EXCHANGE_BAD"] = 8117] = "ANASTASIS_TRUTH_BACKEND_EXCHANGE_BAD";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_UNEXPECTED_PAYMENT_STATUS"] = 8118] = "ANASTASIS_TRUTH_UNEXPECTED_PAYMENT_STATUS";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_PAYMENT_CREATE_BACKEND_ERROR"] = 8119] = "ANASTASIS_TRUTH_PAYMENT_CREATE_BACKEND_ERROR";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_DECRYPTION_FAILED"] = 8120] = "ANASTASIS_TRUTH_DECRYPTION_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_RATE_LIMITED"] = 8121] = "ANASTASIS_TRUTH_RATE_LIMITED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_CHALLENGE_WRONG_METHOD"] = 8123] = "ANASTASIS_TRUTH_CHALLENGE_WRONG_METHOD";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_UPLOAD_UUID_EXISTS"] = 8150] = "ANASTASIS_TRUTH_UPLOAD_UUID_EXISTS";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TRUTH_UPLOAD_METHOD_NOT_SUPPORTED"] = 8151] = "ANASTASIS_TRUTH_UPLOAD_METHOD_NOT_SUPPORTED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_SMS_PHONE_INVALID"] = 8200] = "ANASTASIS_SMS_PHONE_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_SMS_HELPER_EXEC_FAILED"] = 8201] = "ANASTASIS_SMS_HELPER_EXEC_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_SMS_HELPER_COMMAND_FAILED"] = 8202] = "ANASTASIS_SMS_HELPER_COMMAND_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_EMAIL_INVALID"] = 8210] = "ANASTASIS_EMAIL_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_EMAIL_HELPER_EXEC_FAILED"] = 8211] = "ANASTASIS_EMAIL_HELPER_EXEC_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_EMAIL_HELPER_COMMAND_FAILED"] = 8212] = "ANASTASIS_EMAIL_HELPER_COMMAND_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POST_INVALID"] = 8220] = "ANASTASIS_POST_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POST_HELPER_EXEC_FAILED"] = 8221] = "ANASTASIS_POST_HELPER_EXEC_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POST_HELPER_COMMAND_FAILED"] = 8222] = "ANASTASIS_POST_HELPER_COMMAND_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_IBAN_INVALID"] = 8230] = "ANASTASIS_IBAN_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_IBAN_MISSING_TRANSFER"] = 8231] = "ANASTASIS_IBAN_MISSING_TRANSFER";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TOTP_KEY_MISSING"] = 8240] = "ANASTASIS_TOTP_KEY_MISSING";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_TOTP_KEY_INVALID"] = 8241] = "ANASTASIS_TOTP_KEY_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_BAD_IF_NONE_MATCH"] = 8301] = "ANASTASIS_POLICY_BAD_IF_NONE_MATCH";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_OUT_OF_MEMORY_ON_CONTENT_LENGTH"] = 8304] = "ANASTASIS_POLICY_OUT_OF_MEMORY_ON_CONTENT_LENGTH";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_BAD_SIGNATURE"] = 8305] = "ANASTASIS_POLICY_BAD_SIGNATURE";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_BAD_IF_MATCH"] = 8306] = "ANASTASIS_POLICY_BAD_IF_MATCH";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_INVALID_UPLOAD"] = 8307] = "ANASTASIS_POLICY_INVALID_UPLOAD";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_POLICY_NOT_FOUND"] = 8350] = "ANASTASIS_POLICY_NOT_FOUND";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_ACTION_INVALID"] = 8400] = "ANASTASIS_REDUCER_ACTION_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_STATE_INVALID"] = 8401] = "ANASTASIS_REDUCER_STATE_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_INPUT_INVALID"] = 8402] = "ANASTASIS_REDUCER_INPUT_INVALID";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_AUTHENTICATION_METHOD_NOT_SUPPORTED"] = 8403] = "ANASTASIS_REDUCER_AUTHENTICATION_METHOD_NOT_SUPPORTED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_INPUT_INVALID_FOR_STATE"] = 8404] = "ANASTASIS_REDUCER_INPUT_INVALID_FOR_STATE";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_BACKEND_FAILURE"] = 8405] = "ANASTASIS_REDUCER_BACKEND_FAILURE";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_RESOURCE_MALFORMED"] = 8406] = "ANASTASIS_REDUCER_RESOURCE_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_RESOURCE_MISSING"] = 8407] = "ANASTASIS_REDUCER_RESOURCE_MISSING";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_INPUT_REGEX_FAILED"] = 8408] = "ANASTASIS_REDUCER_INPUT_REGEX_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_INPUT_VALIDATION_FAILED"] = 8409] = "ANASTASIS_REDUCER_INPUT_VALIDATION_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_POLICY_LOOKUP_FAILED"] = 8410] = "ANASTASIS_REDUCER_POLICY_LOOKUP_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_BACKUP_PROVIDER_FAILED"] = 8411] = "ANASTASIS_REDUCER_BACKUP_PROVIDER_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_PROVIDER_CONFIG_FAILED"] = 8412] = "ANASTASIS_REDUCER_PROVIDER_CONFIG_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_POLICY_MALFORMED"] = 8413] = "ANASTASIS_REDUCER_POLICY_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_NETWORK_FAILED"] = 8414] = "ANASTASIS_REDUCER_NETWORK_FAILED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_SECRET_MALFORMED"] = 8415] = "ANASTASIS_REDUCER_SECRET_MALFORMED";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_CHALLENGE_DATA_TOO_BIG"] = 8416] = "ANASTASIS_REDUCER_CHALLENGE_DATA_TOO_BIG";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_SECRET_TOO_BIG"] = 8417] = "ANASTASIS_REDUCER_SECRET_TOO_BIG";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_PROVIDER_INVALID_CONFIG"] = 8418] = "ANASTASIS_REDUCER_PROVIDER_INVALID_CONFIG";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_INTERNAL_ERROR"] = 8419] = "ANASTASIS_REDUCER_INTERNAL_ERROR";
  TalerErrorCode2[TalerErrorCode2["ANASTASIS_REDUCER_PROVIDERS_ALREADY_SYNCED"] = 8420] = "ANASTASIS_REDUCER_PROVIDERS_ALREADY_SYNCED";
  TalerErrorCode2[TalerErrorCode2["LIBEUFIN_NEXUS_GENERIC_ERROR"] = 9e3] = "LIBEUFIN_NEXUS_GENERIC_ERROR";
  TalerErrorCode2[TalerErrorCode2["LIBEUFIN_NEXUS_UNCAUGHT_EXCEPTION"] = 9001] = "LIBEUFIN_NEXUS_UNCAUGHT_EXCEPTION";
  TalerErrorCode2[TalerErrorCode2["LIBEUFIN_SANDBOX_GENERIC_ERROR"] = 9500] = "LIBEUFIN_SANDBOX_GENERIC_ERROR";
  TalerErrorCode2[TalerErrorCode2["LIBEUFIN_SANDBOX_UNCAUGHT_EXCEPTION"] = 9501] = "LIBEUFIN_SANDBOX_UNCAUGHT_EXCEPTION";
  TalerErrorCode2[TalerErrorCode2["TALDIR_METHOD_NOT_SUPPORTED"] = 9600] = "TALDIR_METHOD_NOT_SUPPORTED";
  TalerErrorCode2[TalerErrorCode2["TALDIR_REGISTER_RATE_LIMITED"] = 9601] = "TALDIR_REGISTER_RATE_LIMITED";
  TalerErrorCode2[TalerErrorCode2["END"] = 9999] = "END";
})(TalerErrorCode || (TalerErrorCode = {}));

// ../taler-util/lib/codec.js
var DecodingError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, DecodingError.prototype);
    this.name = "DecodingError";
  }
};
function renderContext(c3) {
  const p4 = c3 === null || c3 === void 0 ? void 0 : c3.path;
  if (p4) {
    return p4.join(".");
  } else {
    return "(unknown)";
  }
}
function codecForNumber() {
  return {
    decode(x5, c3) {
      if (typeof x5 === "number") {
        return x5;
      }
      throw new DecodingError(`expected number at ${renderContext(c3)} but got ${typeof x5}`);
    }
  };
}
function codecForString() {
  return {
    decode(x5, c3) {
      if (typeof x5 === "string") {
        return x5;
      }
      throw new DecodingError(`expected string at ${renderContext(c3)} but got ${typeof x5}`);
    }
  };
}
function codecForEither(...alts) {
  return {
    decode(x5, c3) {
      for (const alt of alts) {
        try {
          return alt.decode(x5, c3);
        } catch (e3) {
          continue;
        }
      }
      throw new DecodingError(`No alternative matched at at ${renderContext(c3)}`);
    }
  };
}
var x = codecForEither(codecForString(), codecForNumber());

// ../taler-util/lib/amounts.js
var amountFractionalBase = 1e8;
var amountFractionalLength = 8;
var amountMaxValue = Math.pow(2, 52);
var Amounts = class {
  constructor() {
    throw Error("not instantiable");
  }
  static currencyOf(amount) {
    const amt = Amounts.parseOrThrow(amount);
    return amt.currency;
  }
  static zeroOfAmount(amount) {
    const amt = Amounts.parseOrThrow(amount);
    return {
      currency: amt.currency,
      fraction: 0,
      value: 0
    };
  }
  static zeroOfCurrency(currency) {
    return {
      currency,
      fraction: 0,
      value: 0
    };
  }
  static jsonifyAmount(amt) {
    if (typeof amt === "string") {
      return Amounts.parseOrThrow(amt);
    }
    return amt;
  }
  static sum(amounts) {
    if (amounts.length <= 0) {
      throw Error("can't sum zero amounts");
    }
    const jsonAmounts = amounts.map((x5) => Amounts.jsonifyAmount(x5));
    return Amounts.add(jsonAmounts[0], ...jsonAmounts.slice(1));
  }
  static sumOrZero(currency, amounts) {
    if (amounts.length <= 0) {
      return {
        amount: Amounts.zeroOfCurrency(currency),
        saturated: false
      };
    }
    const jsonAmounts = amounts.map((x5) => Amounts.jsonifyAmount(x5));
    return Amounts.add(jsonAmounts[0], ...jsonAmounts.slice(1));
  }
  static add(first, ...rest) {
    const firstJ = Amounts.jsonifyAmount(first);
    const currency = firstJ.currency;
    let value = firstJ.value + Math.floor(firstJ.fraction / amountFractionalBase);
    if (value > amountMaxValue) {
      return {
        amount: {
          currency,
          value: amountMaxValue,
          fraction: amountFractionalBase - 1
        },
        saturated: true
      };
    }
    let fraction = firstJ.fraction % amountFractionalBase;
    for (const x5 of rest) {
      const xJ = Amounts.jsonifyAmount(x5);
      if (xJ.currency.toUpperCase() !== currency.toUpperCase()) {
        throw Error(`Mismatched currency: ${xJ.currency} and ${currency}`);
      }
      value = value + xJ.value + Math.floor((fraction + xJ.fraction) / amountFractionalBase);
      fraction = Math.floor((fraction + xJ.fraction) % amountFractionalBase);
      if (value > amountMaxValue) {
        return {
          amount: {
            currency,
            value: amountMaxValue,
            fraction: amountFractionalBase - 1
          },
          saturated: true
        };
      }
    }
    return { amount: { currency, value, fraction }, saturated: false };
  }
  static sub(a3, ...rest) {
    const aJ = Amounts.jsonifyAmount(a3);
    const currency = aJ.currency;
    let value = aJ.value;
    let fraction = aJ.fraction;
    for (const b3 of rest) {
      const bJ = Amounts.jsonifyAmount(b3);
      if (bJ.currency.toUpperCase() !== aJ.currency.toUpperCase()) {
        throw Error(`Mismatched currency: ${bJ.currency} and ${currency}`);
      }
      if (fraction < bJ.fraction) {
        if (value < 1) {
          return {
            amount: { currency, value: 0, fraction: 0 },
            saturated: true
          };
        }
        value--;
        fraction += amountFractionalBase;
      }
      console.assert(fraction >= bJ.fraction);
      fraction -= bJ.fraction;
      if (value < bJ.value) {
        return { amount: { currency, value: 0, fraction: 0 }, saturated: true };
      }
      value -= bJ.value;
    }
    return { amount: { currency, value, fraction }, saturated: false };
  }
  static cmp(a3, b3) {
    a3 = Amounts.jsonifyAmount(a3);
    b3 = Amounts.jsonifyAmount(b3);
    if (a3.currency !== b3.currency) {
      throw Error(`Mismatched currency: ${a3.currency} and ${b3.currency}`);
    }
    const av = a3.value + Math.floor(a3.fraction / amountFractionalBase);
    const af = a3.fraction % amountFractionalBase;
    const bv = b3.value + Math.floor(b3.fraction / amountFractionalBase);
    const bf = b3.fraction % amountFractionalBase;
    switch (true) {
      case av < bv:
        return -1;
      case av > bv:
        return 1;
      case af < bf:
        return -1;
      case af > bf:
        return 1;
      case af === bf:
        return 0;
      default:
        throw Error("assertion failed");
    }
  }
  static copy(a3) {
    return {
      currency: a3.currency,
      fraction: a3.fraction,
      value: a3.value
    };
  }
  static divide(a3, n2) {
    if (n2 === 0) {
      throw Error(`Division by 0`);
    }
    if (n2 === 1) {
      return { value: a3.value, fraction: a3.fraction, currency: a3.currency };
    }
    const r3 = a3.value % n2;
    return {
      currency: a3.currency,
      fraction: Math.floor((r3 * amountFractionalBase + a3.fraction) / n2),
      value: Math.floor(a3.value / n2)
    };
  }
  static isNonZero(a3) {
    return a3.value > 0 || a3.fraction > 0;
  }
  static isZero(a3) {
    a3 = Amounts.jsonifyAmount(a3);
    return a3.value === 0 && a3.fraction === 0;
  }
  static parse(s3) {
    const res = s3.match(/^([a-zA-Z0-9_*-]+):([0-9]+)([.][0-9]+)?$/);
    if (!res) {
      return void 0;
    }
    const tail = res[3] || ".0";
    if (tail.length > amountFractionalLength + 1) {
      return void 0;
    }
    const value = Number.parseInt(res[2]);
    if (value > amountMaxValue) {
      return void 0;
    }
    return {
      currency: res[1].toUpperCase(),
      fraction: Math.round(amountFractionalBase * Number.parseFloat(tail)),
      value
    };
  }
  static parseOrThrow(s3) {
    if (typeof s3 === "object") {
      if (typeof s3.currency !== "string") {
        throw Error("invalid amount object");
      }
      if (typeof s3.value !== "number") {
        throw Error("invalid amount object");
      }
      if (typeof s3.fraction !== "number") {
        throw Error("invalid amount object");
      }
      return { currency: s3.currency, value: s3.value, fraction: s3.fraction };
    } else if (typeof s3 === "string") {
      const res = Amounts.parse(s3);
      if (!res) {
        throw Error(`Can't parse amount: "${s3}"`);
      }
      return res;
    } else {
      throw Error("invalid amount (illegal type)");
    }
  }
  static fromFloat(floatVal, currency) {
    return {
      currency,
      fraction: Math.floor((floatVal - Math.floor(floatVal)) * amountFractionalBase),
      value: Math.floor(floatVal)
    };
  }
  static min(a3, b3) {
    const cr = Amounts.cmp(a3, b3);
    if (cr >= 0) {
      return Amounts.jsonifyAmount(b3);
    } else {
      return Amounts.jsonifyAmount(a3);
    }
  }
  static max(a3, b3) {
    const cr = Amounts.cmp(a3, b3);
    if (cr >= 0) {
      return Amounts.jsonifyAmount(a3);
    } else {
      return Amounts.jsonifyAmount(b3);
    }
  }
  static mult(a3, n2) {
    a3 = this.jsonifyAmount(a3);
    if (!Number.isInteger(n2)) {
      throw Error("amount can only be multipied by an integer");
    }
    if (n2 < 0) {
      throw Error("amount can only be multiplied by a positive integer");
    }
    if (n2 == 0) {
      return {
        amount: Amounts.zeroOfCurrency(a3.currency),
        saturated: false
      };
    }
    let x5 = a3;
    let acc = Amounts.zeroOfCurrency(a3.currency);
    while (n2 > 1) {
      if (n2 % 2 == 0) {
        n2 = n2 / 2;
      } else {
        n2 = (n2 - 1) / 2;
        const r23 = Amounts.add(acc, x5);
        if (r23.saturated) {
          return r23;
        }
        acc = r23.amount;
      }
      const r22 = Amounts.add(x5, x5);
      if (r22.saturated) {
        return r22;
      }
      x5 = r22.amount;
    }
    return Amounts.add(acc, x5);
  }
  static check(a3) {
    if (typeof a3 !== "string") {
      return false;
    }
    try {
      const parsedAmount = Amounts.parse(a3);
      return !!parsedAmount;
    } catch (_a2) {
      return false;
    }
  }
  static stringify(a3) {
    a3 = Amounts.jsonifyAmount(a3);
    const s3 = this.stringifyValue(a3);
    return `${a3.currency}:${s3}`;
  }
  static isSameCurrency(a1, a22) {
    const x1 = this.jsonifyAmount(a1);
    const x22 = this.jsonifyAmount(a22);
    return x1.currency.toUpperCase() === x22.currency.toUpperCase();
  }
  static stringifyValue(a3, minFractional = 0) {
    const aJ = Amounts.jsonifyAmount(a3);
    const av = aJ.value + Math.floor(aJ.fraction / amountFractionalBase);
    const af = aJ.fraction % amountFractionalBase;
    let s3 = av.toString();
    if (af || minFractional) {
      s3 = s3 + ".";
      let n2 = af;
      for (let i3 = 0; i3 < amountFractionalLength; i3++) {
        if (!n2 && i3 >= minFractional) {
          break;
        }
        s3 = s3 + Math.floor(n2 / amountFractionalBase * 10).toString();
        n2 = n2 * 10 % amountFractionalBase;
      }
    }
    return s3;
  }
  static maxFractionalDigits(a3) {
    if (a3.fraction === 0)
      return 0;
    if (a3.fraction < 0) {
      console.error("amount fraction can not be negative", a3);
      return 0;
    }
    let i3 = 0;
    let check = true;
    let rest = a3.fraction;
    while (rest > 0 && check) {
      check = rest % 10 === 0;
      rest = rest / 10;
      i3++;
    }
    return amountFractionalLength - i3 + 1;
  }
};

// ../taler-util/lib/backup-types.js
var BackupOperationStatus;
(function(BackupOperationStatus2) {
  BackupOperationStatus2["Cancelled"] = "cancelled";
  BackupOperationStatus2["Finished"] = "finished";
  BackupOperationStatus2["Pending"] = "pending";
})(BackupOperationStatus || (BackupOperationStatus = {}));
var BackupWgType;
(function(BackupWgType2) {
  BackupWgType2["BankManual"] = "bank-manual";
  BackupWgType2["BankIntegrated"] = "bank-integrated";
  BackupWgType2["PeerPullCredit"] = "peer-pull-credit";
  BackupWgType2["PeerPushCredit"] = "peer-push-credit";
  BackupWgType2["Recoup"] = "recoup";
})(BackupWgType || (BackupWgType = {}));
var BackupCoinSourceType;
(function(BackupCoinSourceType2) {
  BackupCoinSourceType2["Withdraw"] = "withdraw";
  BackupCoinSourceType2["Refresh"] = "refresh";
  BackupCoinSourceType2["Tip"] = "tip";
})(BackupCoinSourceType || (BackupCoinSourceType = {}));
var BackupRefreshReason;
(function(BackupRefreshReason2) {
  BackupRefreshReason2["Manual"] = "manual";
  BackupRefreshReason2["Pay"] = "pay";
  BackupRefreshReason2["Refund"] = "refund";
  BackupRefreshReason2["AbortPay"] = "abort-pay";
  BackupRefreshReason2["Recoup"] = "recoup";
  BackupRefreshReason2["BackupRestored"] = "backup-restored";
  BackupRefreshReason2["Scheduled"] = "scheduled";
})(BackupRefreshReason || (BackupRefreshReason = {}));
var BackupRefundState;
(function(BackupRefundState2) {
  BackupRefundState2["Failed"] = "failed";
  BackupRefundState2["Applied"] = "applied";
  BackupRefundState2["Pending"] = "pending";
})(BackupRefundState || (BackupRefundState = {}));
var BackupProposalStatus;
(function(BackupProposalStatus2) {
  BackupProposalStatus2["Proposed"] = "proposed";
  BackupProposalStatus2["Refused"] = "refused";
  BackupProposalStatus2["PermanentlyFailed"] = "permanently-failed";
  BackupProposalStatus2["Repurchase"] = "repurchase";
  BackupProposalStatus2["Paid"] = "paid";
})(BackupProposalStatus || (BackupProposalStatus = {}));

// ../taler-util/lib/punycode.js
var maxInt = 2147483647;
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128;
var delimiter = "-";
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\0-\x7E]/;
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
var errors = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
};
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, fn) {
  const result = [];
  let length = array.length;
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  const parts = string.split("@");
  let result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  const labels = string.split(".");
  const encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  const output = [];
  let counter2 = 0;
  const length = string.length;
  while (counter2 < length) {
    const value = string.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      const extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
var ucs2encode = (array) => String.fromCodePoint(...array);
var basicToDigit = function(codePoint) {
  if (codePoint - 48 < 10) {
    return codePoint - 22;
  }
  if (codePoint - 65 < 26) {
    return codePoint - 65;
  }
  if (codePoint - 97 < 26) {
    return codePoint - 97;
  }
  return base;
};
var digitToBasic = function(digit, flag) {
  return digit + 22 + 75 * Number(digit < 26) - (Number(flag != 0) << 5);
};
var adapt = function(delta, numPoints, firstTime) {
  let k3 = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k3 += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k3 + (baseMinusTMin + 1) * delta / (delta + skew));
};
var decode = function(input) {
  const output = [];
  const inputLength = input.length;
  let i3 = 0;
  let n2 = initialN;
  let bias = initialBias;
  let basic = input.lastIndexOf(delimiter);
  if (basic < 0) {
    basic = 0;
  }
  for (let j3 = 0; j3 < basic; ++j3) {
    if (input.charCodeAt(j3) >= 128) {
      error("not-basic");
    }
    output.push(input.charCodeAt(j3));
  }
  for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
    let oldi = i3;
    for (let w4 = 1, k3 = base; ; k3 += base) {
      if (index >= inputLength) {
        error("invalid-input");
      }
      const digit = basicToDigit(input.charCodeAt(index++));
      if (digit >= base || digit > floor((maxInt - i3) / w4)) {
        error("overflow");
      }
      i3 += digit * w4;
      const t3 = k3 <= bias ? tMin : k3 >= bias + tMax ? tMax : k3 - bias;
      if (digit < t3) {
        break;
      }
      const baseMinusT = base - t3;
      if (w4 > floor(maxInt / baseMinusT)) {
        error("overflow");
      }
      w4 *= baseMinusT;
    }
    const out = output.length + 1;
    bias = adapt(i3 - oldi, out, oldi == 0);
    if (floor(i3 / out) > maxInt - n2) {
      error("overflow");
    }
    n2 += floor(i3 / out);
    i3 %= out;
    output.splice(i3++, 0, n2);
  }
  return String.fromCodePoint(...output);
};
var encode = function(inputArg) {
  const output = [];
  let input = ucs2decode(inputArg);
  let inputLength = input.length;
  let n2 = initialN;
  let delta = 0;
  let bias = initialBias;
  for (const currentValue of input) {
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  let basicLength = output.length;
  let handledCPCount = basicLength;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    let m3 = maxInt;
    for (const currentValue of input) {
      if (currentValue >= n2 && currentValue < m3) {
        m3 = currentValue;
      }
    }
    const handledCPCountPlusOne = handledCPCount + 1;
    if (m3 - n2 > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m3 - n2) * handledCPCountPlusOne;
    n2 = m3;
    for (const currentValue of input) {
      if (currentValue < n2 && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue == n2) {
        let q3 = delta;
        for (let k3 = base; ; k3 += base) {
          const t3 = k3 <= bias ? tMin : k3 >= bias + tMax ? tMax : k3 - bias;
          if (q3 < t3) {
            break;
          }
          const qMinusT = q3 - t3;
          const baseMinusT = base - t3;
          output.push(stringFromCharCode(digitToBasic(t3 + qMinusT % baseMinusT, 0)));
          q3 = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q3, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n2;
  }
  return output.join("");
};
var toUnicode = function(input) {
  return mapDomain(input, function(string) {
    return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  });
};
var toASCII = function(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
};
var punycode = {
  version: "2.1.0",
  ucs2: {
    decode: ucs2decode,
    encode: ucs2encode
  },
  decode,
  encode,
  toASCII,
  toUnicode
};

// ../taler-util/lib/whatwg-url.js
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder("utf-8", { ignoreBOM: true });
function utf8Encode(string) {
  return utf8Encoder.encode(string);
}
function utf8DecodeWithoutBOM(bytes) {
  return utf8Decoder.decode(bytes);
}
function parseUrlencoded(input) {
  const sequences = strictlySplitByteSequence(input, p("&"));
  const output = [];
  for (const bytes of sequences) {
    if (bytes.length === 0) {
      continue;
    }
    let name, value;
    const indexOfEqual = bytes.indexOf(p("="));
    if (indexOfEqual >= 0) {
      name = bytes.slice(0, indexOfEqual);
      value = bytes.slice(indexOfEqual + 1);
    } else {
      name = bytes;
      value = new Uint8Array(0);
    }
    name = replaceByteInByteSequence(name, 43, 32);
    value = replaceByteInByteSequence(value, 43, 32);
    const nameString = utf8DecodeWithoutBOM(percentDecodeBytes(name));
    const valueString = utf8DecodeWithoutBOM(percentDecodeBytes(value));
    output.push([nameString, valueString]);
  }
  return output;
}
function parseUrlencodedString(input) {
  return parseUrlencoded(utf8Encode(input));
}
function serializeUrlencoded(tuples, encodingOverride = void 0) {
  let encoding = "utf-8";
  if (encodingOverride !== void 0) {
    encoding = encodingOverride;
  }
  let output = "";
  for (const [i3, tuple] of tuples.entries()) {
    const name = utf8PercentEncodeString(tuple[0], isURLEncodedPercentEncode, true);
    let value = tuple[1];
    if (tuple.length > 2 && tuple[2] !== void 0) {
      if (tuple[2] === "hidden" && name === "_charset_") {
        value = encoding;
      } else if (tuple[2] === "file") {
        value = value.name;
      }
    }
    value = utf8PercentEncodeString(value, isURLEncodedPercentEncode, true);
    if (i3 !== 0) {
      output += "&";
    }
    output += `${name}=${value}`;
  }
  return output;
}
function strictlySplitByteSequence(buf, cp) {
  const list = [];
  let last = 0;
  let i3 = buf.indexOf(cp);
  while (i3 >= 0) {
    list.push(buf.slice(last, i3));
    last = i3 + 1;
    i3 = buf.indexOf(cp, last);
  }
  if (last !== buf.length) {
    list.push(buf.slice(last));
  }
  return list;
}
function replaceByteInByteSequence(buf, from, to) {
  let i3 = buf.indexOf(from);
  while (i3 >= 0) {
    buf[i3] = to;
    i3 = buf.indexOf(from, i3 + 1);
  }
  return buf;
}
function p(char) {
  return char.codePointAt(0);
}
function percentEncode(c3) {
  let hex = c3.toString(16).toUpperCase();
  if (hex.length === 1) {
    hex = `0${hex}`;
  }
  return `%${hex}`;
}
function percentDecodeBytes(input) {
  const output = new Uint8Array(input.byteLength);
  let outputIndex = 0;
  for (let i3 = 0; i3 < input.byteLength; ++i3) {
    const byte = input[i3];
    if (byte !== 37) {
      output[outputIndex++] = byte;
    } else if (byte === 37 && (!isASCIIHex(input[i3 + 1]) || !isASCIIHex(input[i3 + 2]))) {
      output[outputIndex++] = byte;
    } else {
      const bytePoint = parseInt(String.fromCodePoint(input[i3 + 1], input[i3 + 2]), 16);
      output[outputIndex++] = bytePoint;
      i3 += 2;
    }
  }
  return output.slice(0, outputIndex);
}
function percentDecodeString(input) {
  const bytes = utf8Encode(input);
  return percentDecodeBytes(bytes);
}
function isC0ControlPercentEncode(c3) {
  return c3 <= 31 || c3 > 126;
}
var extraFragmentPercentEncodeSet = /* @__PURE__ */ new Set([
  p(" "),
  p('"'),
  p("<"),
  p(">"),
  p("`")
]);
function isFragmentPercentEncode(c3) {
  return isC0ControlPercentEncode(c3) || extraFragmentPercentEncodeSet.has(c3);
}
var extraQueryPercentEncodeSet = /* @__PURE__ */ new Set([
  p(" "),
  p('"'),
  p("#"),
  p("<"),
  p(">")
]);
function isQueryPercentEncode(c3) {
  return isC0ControlPercentEncode(c3) || extraQueryPercentEncodeSet.has(c3);
}
function isSpecialQueryPercentEncode(c3) {
  return isQueryPercentEncode(c3) || c3 === p("'");
}
var extraPathPercentEncodeSet = /* @__PURE__ */ new Set([p("?"), p("`"), p("{"), p("}")]);
function isPathPercentEncode(c3) {
  return isQueryPercentEncode(c3) || extraPathPercentEncodeSet.has(c3);
}
var extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([
  p("/"),
  p(":"),
  p(";"),
  p("="),
  p("@"),
  p("["),
  p("\\"),
  p("]"),
  p("^"),
  p("|")
]);
function isUserinfoPercentEncode(c3) {
  return isPathPercentEncode(c3) || extraUserinfoPercentEncodeSet.has(c3);
}
var extraComponentPercentEncodeSet = /* @__PURE__ */ new Set([
  p("$"),
  p("%"),
  p("&"),
  p("+"),
  p(",")
]);
function isComponentPercentEncode(c3) {
  return isUserinfoPercentEncode(c3) || extraComponentPercentEncodeSet.has(c3);
}
var extraURLEncodedPercentEncodeSet = /* @__PURE__ */ new Set([
  p("!"),
  p("'"),
  p("("),
  p(")"),
  p("~")
]);
function isURLEncodedPercentEncode(c3) {
  return isComponentPercentEncode(c3) || extraURLEncodedPercentEncodeSet.has(c3);
}
function utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate) {
  const bytes = utf8Encode(codePoint);
  let output = "";
  for (const byte of bytes) {
    if (!percentEncodePredicate(byte)) {
      output += String.fromCharCode(byte);
    } else {
      output += percentEncode(byte);
    }
  }
  return output;
}
function utf8PercentEncodeCodePoint(codePoint, percentEncodePredicate) {
  return utf8PercentEncodeCodePointInternal(String.fromCodePoint(codePoint), percentEncodePredicate);
}
function utf8PercentEncodeString(input, percentEncodePredicate, spaceAsPlus = false) {
  let output = "";
  for (const codePoint of input) {
    if (spaceAsPlus && codePoint === " ") {
      output += "+";
    } else {
      output += utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate);
    }
  }
  return output;
}
function isASCIIDigit(c3) {
  return c3 >= 48 && c3 <= 57;
}
function isASCIIAlpha(c3) {
  return c3 >= 65 && c3 <= 90 || c3 >= 97 && c3 <= 122;
}
function isASCIIAlphanumeric(c3) {
  return isASCIIAlpha(c3) || isASCIIDigit(c3);
}
function isASCIIHex(c3) {
  return isASCIIDigit(c3) || c3 >= 65 && c3 <= 70 || c3 >= 97 && c3 <= 102;
}
var URLSearchParamsImpl = class {
  constructor(init, { doNotStripQMark = false } = {}) {
    this._list = [];
    this._url = null;
    if (!doNotStripQMark && typeof init === "string" && init[0] === "?") {
      init = init.slice(1);
    }
    if (Array.isArray(init)) {
      for (const pair of init) {
        if (pair.length !== 2) {
          throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
        }
        this._list.push([pair[0], pair[1]]);
      }
    } else if (typeof init === "object" && Object.getPrototypeOf(init) === null) {
      for (const name of Object.keys(init)) {
        const value = init[name];
        this._list.push([name, value]);
      }
    } else {
      this._list = parseUrlencodedString(init);
    }
  }
  _updateSteps() {
    if (this._url !== null) {
      let query = serializeUrlencoded(this._list);
      if (query === "") {
        query = null;
      }
      this._url._url.query = query;
    }
  }
  append(name, value) {
    this._list.push([name, value]);
    this._updateSteps();
  }
  delete(name) {
    let i3 = 0;
    while (i3 < this._list.length) {
      if (this._list[i3][0] === name) {
        this._list.splice(i3, 1);
      } else {
        i3++;
      }
    }
    this._updateSteps();
  }
  get(name) {
    for (const tuple of this._list) {
      if (tuple[0] === name) {
        return tuple[1];
      }
    }
    return null;
  }
  getAll(name) {
    const output = [];
    for (const tuple of this._list) {
      if (tuple[0] === name) {
        output.push(tuple[1]);
      }
    }
    return output;
  }
  forEach(callbackfn, thisArg) {
    for (const tuple of this._list) {
      callbackfn.call(thisArg, tuple[1], tuple[0], this);
    }
  }
  has(name) {
    for (const tuple of this._list) {
      if (tuple[0] === name) {
        return true;
      }
    }
    return false;
  }
  set(name, value) {
    let found = false;
    let i3 = 0;
    while (i3 < this._list.length) {
      if (this._list[i3][0] === name) {
        if (found) {
          this._list.splice(i3, 1);
        } else {
          found = true;
          this._list[i3][1] = value;
          i3++;
        }
      } else {
        i3++;
      }
    }
    if (!found) {
      this._list.push([name, value]);
    }
    this._updateSteps();
  }
  sort() {
    this._list.sort((a3, b3) => {
      if (a3[0] < b3[0]) {
        return -1;
      }
      if (a3[0] > b3[0]) {
        return 1;
      }
      return 0;
    });
    this._updateSteps();
  }
  [Symbol.iterator]() {
    return this._list[Symbol.iterator]();
  }
  toString() {
    return serializeUrlencoded(this._list);
  }
};
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
var failure = Symbol("failure");
function countSymbols(str) {
  return [...str].length;
}
function at(input, idx) {
  const c3 = input[idx];
  return isNaN(c3) ? void 0 : String.fromCodePoint(c3);
}
function isSingleDot(buffer) {
  return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
  buffer = buffer.toLowerCase();
  return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
  return isASCIIAlpha(cp1) && (cp2 === p(":") || cp2 === p("|"));
}
function isWindowsDriveLetterString(string) {
  return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
  return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|<|>|\?|@|\[|\\|\]|\^|\|/u) !== -1;
}
function containsForbiddenDomainCodePoint(string) {
  return containsForbiddenHostCodePoint(string) || string.search(/[\u0000-\u001F]|%|\u007F/u) !== -1;
}
function isSpecialScheme(scheme) {
  return specialSchemes[scheme] !== void 0;
}
function isSpecial(url) {
  return isSpecialScheme(url.scheme);
}
function isNotSpecial(url) {
  return !isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
  return specialSchemes[scheme];
}
function parseIPv4Number(input) {
  if (input === "") {
    return failure;
  }
  let R = 10;
  if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
    input = input.substring(2);
    R = 16;
  } else if (input.length >= 2 && input.charAt(0) === "0") {
    input = input.substring(1);
    R = 8;
  }
  if (input === "") {
    return 0;
  }
  let regex = /[^0-7]/u;
  if (R === 10) {
    regex = /[^0-9]/u;
  }
  if (R === 16) {
    regex = /[^0-9A-Fa-f]/u;
  }
  if (regex.test(input)) {
    return failure;
  }
  return parseInt(input, R);
}
function parseIPv4(input) {
  const parts = input.split(".");
  if (parts[parts.length - 1] === "") {
    if (parts.length > 1) {
      parts.pop();
    }
  }
  if (parts.length > 4) {
    return failure;
  }
  const numbers = [];
  for (const part of parts) {
    const n2 = parseIPv4Number(part);
    if (n2 === failure) {
      return failure;
    }
    numbers.push(n2);
  }
  for (let i3 = 0; i3 < numbers.length - 1; ++i3) {
    if (numbers[i3] > 255) {
      return failure;
    }
  }
  if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
    return failure;
  }
  let ipv4 = numbers.pop();
  let counter2 = 0;
  for (const n2 of numbers) {
    ipv4 += n2 * Math.pow(256, 3 - counter2);
    ++counter2;
  }
  return ipv4;
}
function serializeIPv4(address) {
  let output = "";
  let n2 = address;
  for (let i3 = 1; i3 <= 4; ++i3) {
    output = String(n2 % 256) + output;
    if (i3 !== 4) {
      output = `.${output}`;
    }
    n2 = Math.floor(n2 / 256);
  }
  return output;
}
function parseIPv6(inputArg) {
  const address = [0, 0, 0, 0, 0, 0, 0, 0];
  let pieceIndex = 0;
  let compress = null;
  let pointer = 0;
  const input = Array.from(inputArg, (c3) => c3.codePointAt(0));
  if (input[pointer] === p(":")) {
    if (input[pointer + 1] !== p(":")) {
      return failure;
    }
    pointer += 2;
    ++pieceIndex;
    compress = pieceIndex;
  }
  while (pointer < input.length) {
    if (pieceIndex === 8) {
      return failure;
    }
    if (input[pointer] === p(":")) {
      if (compress !== null) {
        return failure;
      }
      ++pointer;
      ++pieceIndex;
      compress = pieceIndex;
      continue;
    }
    let value = 0;
    let length = 0;
    while (length < 4 && isASCIIHex(input[pointer])) {
      value = value * 16 + parseInt(at(input, pointer), 16);
      ++pointer;
      ++length;
    }
    if (input[pointer] === p(".")) {
      if (length === 0) {
        return failure;
      }
      pointer -= length;
      if (pieceIndex > 6) {
        return failure;
      }
      let numbersSeen = 0;
      while (input[pointer] !== void 0) {
        let ipv4Piece = null;
        if (numbersSeen > 0) {
          if (input[pointer] === p(".") && numbersSeen < 4) {
            ++pointer;
          } else {
            return failure;
          }
        }
        if (!isASCIIDigit(input[pointer])) {
          return failure;
        }
        while (isASCIIDigit(input[pointer])) {
          const number = parseInt(at(input, pointer));
          if (ipv4Piece === null) {
            ipv4Piece = number;
          } else if (ipv4Piece === 0) {
            return failure;
          } else {
            ipv4Piece = ipv4Piece * 10 + number;
          }
          if (ipv4Piece > 255) {
            return failure;
          }
          ++pointer;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        ++numbersSeen;
        if (numbersSeen === 2 || numbersSeen === 4) {
          ++pieceIndex;
        }
      }
      if (numbersSeen !== 4) {
        return failure;
      }
      break;
    } else if (input[pointer] === p(":")) {
      ++pointer;
      if (input[pointer] === void 0) {
        return failure;
      }
    } else if (input[pointer] !== void 0) {
      return failure;
    }
    address[pieceIndex] = value;
    ++pieceIndex;
  }
  if (compress !== null) {
    let swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      const temp = address[compress + swaps - 1];
      address[compress + swaps - 1] = address[pieceIndex];
      address[pieceIndex] = temp;
      --pieceIndex;
      --swaps;
    }
  } else if (compress === null && pieceIndex !== 8) {
    return failure;
  }
  return address;
}
function serializeIPv6(address) {
  let output = "";
  const compress = findLongestZeroSequence(address);
  let ignore0 = false;
  for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
    if (ignore0 && address[pieceIndex] === 0) {
      continue;
    } else if (ignore0) {
      ignore0 = false;
    }
    if (compress === pieceIndex) {
      const separator = pieceIndex === 0 ? "::" : ":";
      output += separator;
      ignore0 = true;
      continue;
    }
    output += address[pieceIndex].toString(16);
    if (pieceIndex !== 7) {
      output += ":";
    }
  }
  return output;
}
function parseHost(input, isNotSpecialArg = false) {
  if (input[0] === "[") {
    if (input[input.length - 1] !== "]") {
      return failure;
    }
    return parseIPv6(input.substring(1, input.length - 1));
  }
  if (isNotSpecialArg) {
    return parseOpaqueHost(input);
  }
  const domain = utf8DecodeWithoutBOM(percentDecodeString(input));
  const asciiDomain = domainToASCII(domain);
  if (asciiDomain === failure) {
    return failure;
  }
  if (containsForbiddenDomainCodePoint(asciiDomain)) {
    return failure;
  }
  if (endsInANumber(asciiDomain)) {
    return parseIPv4(asciiDomain);
  }
  return asciiDomain;
}
function endsInANumber(input) {
  const parts = input.split(".");
  if (parts[parts.length - 1] === "") {
    if (parts.length === 1) {
      return false;
    }
    parts.pop();
  }
  const last = parts[parts.length - 1];
  if (parseIPv4Number(last) !== failure) {
    return true;
  }
  if (/^[0-9]+$/u.test(last)) {
    return true;
  }
  return false;
}
function parseOpaqueHost(input) {
  if (containsForbiddenHostCodePoint(input)) {
    return failure;
  }
  return utf8PercentEncodeString(input, isC0ControlPercentEncode);
}
function findLongestZeroSequence(arr) {
  let maxIdx = null;
  let maxLen = 1;
  let currStart = null;
  let currLen = 0;
  for (let i3 = 0; i3 < arr.length; ++i3) {
    if (arr[i3] !== 0) {
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }
      currStart = null;
      currLen = 0;
    } else {
      if (currStart === null) {
        currStart = i3;
      }
      ++currLen;
    }
  }
  if (currLen > maxLen) {
    return currStart;
  }
  return maxIdx;
}
function serializeHost(host) {
  if (typeof host === "number") {
    return serializeIPv4(host);
  }
  if (host instanceof Array) {
    return `[${serializeIPv6(host)}]`;
  }
  return host;
}
function domainToASCII(domain, beStrict = false) {
  let result;
  try {
    result = punycode.toASCII(domain);
  } catch (e3) {
    return failure;
  }
  if (result === null || result === "") {
    return failure;
  }
  return result;
}
function trimControlChars(url) {
  return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/gu, "");
}
function trimTabAndNewline(url) {
  return url.replace(/\u0009|\u000A|\u000D/gu, "");
}
function shortenPath(url) {
  const { path } = url;
  if (path.length === 0) {
    return;
  }
  if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
    return;
  }
  path.pop();
}
function includesCredentials(url) {
  return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
  return url.host === null || url.host === "" || url.scheme === "file";
}
function hasAnOpaquePath(url) {
  return typeof url.path === "string";
}
function isNormalizedWindowsDriveLetter(string) {
  return /^[A-Za-z]:$/u.test(string);
}
var URLStateMachine = class {
  constructor(input, base2, encodingOverride, url, stateOverride) {
    this.table = {
      "parse scheme start": this.parseSchemeStart,
      "parse scheme": this.parseScheme,
      "parse no scheme": this.parseNoScheme,
      "parse special relative or authority": this.parseSpecialRelativeOrAuthority,
      "parse path or authority": this.parsePathOrAuthority,
      "parse relative": this.parseRelative,
      "parse relative slash": this.parseRelativeSlash,
      "parse special authority slashes": this.parseSpecialAuthoritySlashes,
      "parse special authority ignore slashes": this.parseSpecialAuthorityIgnoreSlashes,
      "parse authority": this.parseAuthority,
      "parse host": this.parseHostName,
      "parse hostname": this.parseHostName,
      "parse port": this.parsePort,
      "parse file": this.parseFile,
      "parse file slash": this.parseFileSlash,
      "parse file host": this.parseFileHost,
      "parse path start": this.parsePathStart,
      "parse path": this.parsePath,
      "parse opaque path": this.parseOpaquePath,
      "parse query": this.parseQuery,
      "parse fragment": this.parseFragment
    };
    this.pointer = 0;
    this.base = base2 || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
      this.url = {
        scheme: "",
        username: "",
        password: "",
        host: null,
        port: null,
        path: [],
        query: null,
        fragment: null
      };
      const res2 = trimControlChars(input);
      if (res2 !== input) {
        this.parseError = true;
      }
      input = res2;
    }
    const res = trimTabAndNewline(input);
    if (res !== input) {
      this.parseError = true;
    }
    input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = Array.from(input, (c3) => c3.codePointAt(0));
    for (; this.pointer <= this.input.length; ++this.pointer) {
      const c3 = this.input[this.pointer];
      const cStr = isNaN(c3) ? void 0 : String.fromCodePoint(c3);
      const ret = this.table[`parse ${this.state}`].call(this, c3, cStr);
      if (!ret) {
        break;
      } else if (ret === failure) {
        this.failure = true;
        break;
      }
    }
  }
  parseSchemeStart(c3, cStr) {
    if (isASCIIAlpha(c3)) {
      this.buffer += cStr.toLowerCase();
      this.state = "scheme";
    } else if (!this.stateOverride) {
      this.state = "no scheme";
      --this.pointer;
    } else {
      this.parseError = true;
      return failure;
    }
    return true;
  }
  parseScheme(c3, cStr) {
    if (isASCIIAlphanumeric(c3) || c3 === p("+") || c3 === p("-") || c3 === p(".")) {
      this.buffer += cStr.toLowerCase();
    } else if (c3 === p(":")) {
      if (this.stateOverride) {
        if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
          return false;
        }
        if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
          return false;
        }
        if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
          return false;
        }
        if (this.url.scheme === "file" && this.url.host === "") {
          return false;
        }
      }
      this.url.scheme = this.buffer;
      if (this.stateOverride) {
        if (this.url.port === defaultPort(this.url.scheme)) {
          this.url.port = null;
        }
        return false;
      }
      this.buffer = "";
      if (this.url.scheme === "file") {
        if (this.input[this.pointer + 1] !== p("/") || this.input[this.pointer + 2] !== p("/")) {
          this.parseError = true;
        }
        this.state = "file";
      } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
        this.state = "special relative or authority";
      } else if (isSpecial(this.url)) {
        this.state = "special authority slashes";
      } else if (this.input[this.pointer + 1] === p("/")) {
        this.state = "path or authority";
        ++this.pointer;
      } else {
        this.url.path = [""];
        this.state = "opaque path";
      }
    } else if (!this.stateOverride) {
      this.buffer = "";
      this.state = "no scheme";
      this.pointer = -1;
    } else {
      this.parseError = true;
      return failure;
    }
    return true;
  }
  parseNoScheme(c3) {
    if (this.base === null || hasAnOpaquePath(this.base) && c3 !== p("#")) {
      return failure;
    } else if (hasAnOpaquePath(this.base) && c3 === p("#")) {
      this.url.scheme = this.base.scheme;
      this.url.path = this.base.path;
      this.url.query = this.base.query;
      this.url.fragment = "";
      this.state = "fragment";
    } else if (this.base.scheme === "file") {
      this.state = "file";
      --this.pointer;
    } else {
      this.state = "relative";
      --this.pointer;
    }
    return true;
  }
  parseSpecialRelativeOrAuthority(c3) {
    if (c3 === p("/") && this.input[this.pointer + 1] === p("/")) {
      this.state = "special authority ignore slashes";
      ++this.pointer;
    } else {
      this.parseError = true;
      this.state = "relative";
      --this.pointer;
    }
    return true;
  }
  parsePathOrAuthority(c3) {
    if (c3 === p("/")) {
      this.state = "authority";
    } else {
      this.state = "path";
      --this.pointer;
    }
    return true;
  }
  parseRelative(c3) {
    this.url.scheme = this.base.scheme;
    if (c3 === p("/")) {
      this.state = "relative slash";
    } else if (isSpecial(this.url) && c3 === p("\\")) {
      this.parseError = true;
      this.state = "relative slash";
    } else {
      this.url.username = this.base.username;
      this.url.password = this.base.password;
      this.url.host = this.base.host;
      this.url.port = this.base.port;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
      if (c3 === p("?")) {
        this.url.query = "";
        this.state = "query";
      } else if (c3 === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (!isNaN(c3)) {
        this.url.query = null;
        this.url.path.pop();
        this.state = "path";
        --this.pointer;
      }
    }
    return true;
  }
  parseRelativeSlash(c3) {
    if (isSpecial(this.url) && (c3 === p("/") || c3 === p("\\"))) {
      if (c3 === p("\\")) {
        this.parseError = true;
      }
      this.state = "special authority ignore slashes";
    } else if (c3 === p("/")) {
      this.state = "authority";
    } else {
      this.url.username = this.base.username;
      this.url.password = this.base.password;
      this.url.host = this.base.host;
      this.url.port = this.base.port;
      this.state = "path";
      --this.pointer;
    }
    return true;
  }
  parseSpecialAuthoritySlashes(c3) {
    if (c3 === p("/") && this.input[this.pointer + 1] === p("/")) {
      this.state = "special authority ignore slashes";
      ++this.pointer;
    } else {
      this.parseError = true;
      this.state = "special authority ignore slashes";
      --this.pointer;
    }
    return true;
  }
  parseSpecialAuthorityIgnoreSlashes(c3) {
    if (c3 !== p("/") && c3 !== p("\\")) {
      this.state = "authority";
      --this.pointer;
    } else {
      this.parseError = true;
    }
    return true;
  }
  parseAuthority(c3, cStr) {
    if (c3 === p("@")) {
      this.parseError = true;
      if (this.atFlag) {
        this.buffer = `%40${this.buffer}`;
      }
      this.atFlag = true;
      const len = countSymbols(this.buffer);
      for (let pointer = 0; pointer < len; ++pointer) {
        const codePoint = this.buffer.codePointAt(pointer);
        if (codePoint === p(":") && !this.passwordTokenSeenFlag) {
          this.passwordTokenSeenFlag = true;
          continue;
        }
        const encodedCodePoints = utf8PercentEncodeCodePoint(codePoint, isUserinfoPercentEncode);
        if (this.passwordTokenSeenFlag) {
          this.url.password += encodedCodePoints;
        } else {
          this.url.username += encodedCodePoints;
        }
      }
      this.buffer = "";
    } else if (isNaN(c3) || c3 === p("/") || c3 === p("?") || c3 === p("#") || isSpecial(this.url) && c3 === p("\\")) {
      if (this.atFlag && this.buffer === "") {
        this.parseError = true;
        return failure;
      }
      this.pointer -= countSymbols(this.buffer) + 1;
      this.buffer = "";
      this.state = "host";
    } else {
      this.buffer += cStr;
    }
    return true;
  }
  parseHostName(c3, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
      --this.pointer;
      this.state = "file host";
    } else if (c3 === p(":") && !this.arrFlag) {
      if (this.buffer === "") {
        this.parseError = true;
        return failure;
      }
      if (this.stateOverride === "hostname") {
        return false;
      }
      const host = parseHost(this.buffer, isNotSpecial(this.url));
      if (host === failure) {
        return failure;
      }
      this.url.host = host;
      this.buffer = "";
      this.state = "port";
    } else if (isNaN(c3) || c3 === p("/") || c3 === p("?") || c3 === p("#") || isSpecial(this.url) && c3 === p("\\")) {
      --this.pointer;
      if (isSpecial(this.url) && this.buffer === "") {
        this.parseError = true;
        return failure;
      } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
        this.parseError = true;
        return false;
      }
      const host = parseHost(this.buffer, isNotSpecial(this.url));
      if (host === failure) {
        return failure;
      }
      this.url.host = host;
      this.buffer = "";
      this.state = "path start";
      if (this.stateOverride) {
        return false;
      }
    } else {
      if (c3 === p("[")) {
        this.arrFlag = true;
      } else if (c3 === p("]")) {
        this.arrFlag = false;
      }
      this.buffer += cStr;
    }
    return true;
  }
  parsePort(c3, cStr) {
    if (isASCIIDigit(c3)) {
      this.buffer += cStr;
    } else if (isNaN(c3) || c3 === p("/") || c3 === p("?") || c3 === p("#") || isSpecial(this.url) && c3 === p("\\") || this.stateOverride) {
      if (this.buffer !== "") {
        const port = parseInt(this.buffer);
        if (port > Math.pow(2, 16) - 1) {
          this.parseError = true;
          return failure;
        }
        this.url.port = port === defaultPort(this.url.scheme) ? null : port;
        this.buffer = "";
      }
      if (this.stateOverride) {
        return false;
      }
      this.state = "path start";
      --this.pointer;
    } else {
      this.parseError = true;
      return failure;
    }
    return true;
  }
  parseFile(c3) {
    this.url.scheme = "file";
    this.url.host = "";
    if (c3 === p("/") || c3 === p("\\")) {
      if (c3 === p("\\")) {
        this.parseError = true;
      }
      this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
      if (c3 === p("?")) {
        this.url.query = "";
        this.state = "query";
      } else if (c3 === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (!isNaN(c3)) {
        this.url.query = null;
        if (!startsWithWindowsDriveLetter(this.input, this.pointer)) {
          shortenPath(this.url);
        } else {
          this.parseError = true;
          this.url.path = [];
        }
        this.state = "path";
        --this.pointer;
      }
    } else {
      this.state = "path";
      --this.pointer;
    }
    return true;
  }
  parseFileSlash(c3) {
    if (c3 === p("/") || c3 === p("\\")) {
      if (c3 === p("\\")) {
        this.parseError = true;
      }
      this.state = "file host";
    } else {
      if (this.base !== null && this.base.scheme === "file") {
        if (!startsWithWindowsDriveLetter(this.input, this.pointer) && isNormalizedWindowsDriveLetterString(this.base.path[0])) {
          this.url.path.push(this.base.path[0]);
        }
        this.url.host = this.base.host;
      }
      this.state = "path";
      --this.pointer;
    }
    return true;
  }
  parseFileHost(c3, cStr) {
    if (isNaN(c3) || c3 === p("/") || c3 === p("\\") || c3 === p("?") || c3 === p("#")) {
      --this.pointer;
      if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
        this.parseError = true;
        this.state = "path";
      } else if (this.buffer === "") {
        this.url.host = "";
        if (this.stateOverride) {
          return false;
        }
        this.state = "path start";
      } else {
        let host = parseHost(this.buffer, isNotSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        if (host === "localhost") {
          host = "";
        }
        this.url.host = host;
        if (this.stateOverride) {
          return false;
        }
        this.buffer = "";
        this.state = "path start";
      }
    } else {
      this.buffer += cStr;
    }
    return true;
  }
  parsePathStart(c3) {
    if (isSpecial(this.url)) {
      if (c3 === p("\\")) {
        this.parseError = true;
      }
      this.state = "path";
      if (c3 !== p("/") && c3 !== p("\\")) {
        --this.pointer;
      }
    } else if (!this.stateOverride && c3 === p("?")) {
      this.url.query = "";
      this.state = "query";
    } else if (!this.stateOverride && c3 === p("#")) {
      this.url.fragment = "";
      this.state = "fragment";
    } else if (c3 !== void 0) {
      this.state = "path";
      if (c3 !== p("/")) {
        --this.pointer;
      }
    } else if (this.stateOverride && this.url.host === null) {
      this.url.path.push("");
    }
    return true;
  }
  parsePath(c3) {
    if (isNaN(c3) || c3 === p("/") || isSpecial(this.url) && c3 === p("\\") || !this.stateOverride && (c3 === p("?") || c3 === p("#"))) {
      if (isSpecial(this.url) && c3 === p("\\")) {
        this.parseError = true;
      }
      if (isDoubleDot(this.buffer)) {
        shortenPath(this.url);
        if (c3 !== p("/") && !(isSpecial(this.url) && c3 === p("\\"))) {
          this.url.path.push("");
        }
      } else if (isSingleDot(this.buffer) && c3 !== p("/") && !(isSpecial(this.url) && c3 === p("\\"))) {
        this.url.path.push("");
      } else if (!isSingleDot(this.buffer)) {
        if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
          this.buffer = `${this.buffer[0]}:`;
        }
        this.url.path.push(this.buffer);
      }
      this.buffer = "";
      if (c3 === p("?")) {
        this.url.query = "";
        this.state = "query";
      }
      if (c3 === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
      }
    } else {
      if (c3 === p("%") && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
        this.parseError = true;
      }
      this.buffer += utf8PercentEncodeCodePoint(c3, isPathPercentEncode);
    }
    return true;
  }
  parseOpaquePath(c3) {
    if (c3 === p("?")) {
      this.url.query = "";
      this.state = "query";
    } else if (c3 === p("#")) {
      this.url.fragment = "";
      this.state = "fragment";
    } else {
      if (!isNaN(c3) && c3 !== p("%")) {
        this.parseError = true;
      }
      if (c3 === p("%") && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
        this.parseError = true;
      }
      if (!isNaN(c3)) {
        this.url.path += utf8PercentEncodeCodePoint(c3, isC0ControlPercentEncode);
      }
    }
    return true;
  }
  parseQuery(c3, cStr) {
    if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
      this.encodingOverride = "utf-8";
    }
    if (!this.stateOverride && c3 === p("#") || isNaN(c3)) {
      const queryPercentEncodePredicate = isSpecial(this.url) ? isSpecialQueryPercentEncode : isQueryPercentEncode;
      this.url.query += utf8PercentEncodeString(this.buffer, queryPercentEncodePredicate);
      this.buffer = "";
      if (c3 === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
      }
    } else if (!isNaN(c3)) {
      if (c3 === p("%") && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
        this.parseError = true;
      }
      this.buffer += cStr;
    }
    return true;
  }
  parseFragment(c3) {
    if (!isNaN(c3)) {
      if (c3 === p("%") && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
        this.parseError = true;
      }
      this.url.fragment += utf8PercentEncodeCodePoint(c3, isFragmentPercentEncode);
    }
    return true;
  }
};
var fileOtherwiseCodePoints = /* @__PURE__ */ new Set([p("/"), p("\\"), p("?"), p("#")]);
function startsWithWindowsDriveLetter(input, pointer) {
  const length = input.length - pointer;
  return length >= 2 && isWindowsDriveLetterCodePoints(input[pointer], input[pointer + 1]) && (length === 2 || fileOtherwiseCodePoints.has(input[pointer + 2]));
}
function serializeURL(url, excludeFragment) {
  let output = `${url.scheme}:`;
  if (url.host !== null) {
    output += "//";
    if (url.username !== "" || url.password !== "") {
      output += url.username;
      if (url.password !== "") {
        output += `:${url.password}`;
      }
      output += "@";
    }
    output += serializeHost(url.host);
    if (url.port !== null) {
      output += `:${url.port}`;
    }
  }
  if (url.host === null && !hasAnOpaquePath(url) && url.path.length > 1 && url.path[0] === "") {
    output += "/.";
  }
  output += serializePath(url);
  if (url.query !== null) {
    output += `?${url.query}`;
  }
  if (!excludeFragment && url.fragment !== null) {
    output += `#${url.fragment}`;
  }
  return output;
}
function serializeOrigin(tuple) {
  let result = `${tuple.scheme}://`;
  result += serializeHost(tuple.host);
  if (tuple.port !== null) {
    result += `:${tuple.port}`;
  }
  return result;
}
function serializePath(url) {
  if (typeof url.path === "string") {
    return url.path;
  }
  let output = "";
  for (const segment of url.path) {
    output += `/${segment}`;
  }
  return output;
}
function serializeURLOrigin(url) {
  switch (url.scheme) {
    case "blob":
      try {
        return serializeURLOrigin(parseURL(serializePath(url)));
      } catch (e3) {
        return "null";
      }
    case "ftp":
    case "http":
    case "https":
    case "ws":
    case "wss":
      return serializeOrigin({
        scheme: url.scheme,
        host: url.host,
        port: url.port
      });
    case "file":
      return "null";
    default:
      return "null";
  }
}
function basicURLParse(input, options) {
  if (options === void 0) {
    options = {};
  }
  const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
  if (usm.failure) {
    return null;
  }
  return usm.url;
}
function setTheUsername(url, username) {
  url.username = utf8PercentEncodeString(username, isUserinfoPercentEncode);
}
function setThePassword(url, password) {
  url.password = utf8PercentEncodeString(password, isUserinfoPercentEncode);
}
function serializeInteger(integer) {
  return String(integer);
}
function parseURL(input, options) {
  if (options === void 0) {
    options = {};
  }
  return basicURLParse(input, {
    baseURL: options.baseURL,
    encodingOverride: options.encodingOverride
  });
}
var URLImpl = class {
  constructor(url, base2) {
    let parsedBase = null;
    if (base2 !== void 0) {
      parsedBase = basicURLParse(base2);
      if (parsedBase === null) {
        throw new TypeError(`Invalid base URL: ${base2}`);
      }
    }
    const parsedURL = basicURLParse(url, { baseURL: parsedBase });
    if (parsedURL === null) {
      throw new TypeError(`Invalid URL: ${url}`);
    }
    const query = parsedURL.query !== null ? parsedURL.query : "";
    this._url = parsedURL;
    this._query = new URLSearchParamsImpl(query, {
      doNotStripQMark: true
    });
    this._query._url = this;
  }
  get href() {
    return serializeURL(this._url);
  }
  set href(v3) {
    const parsedURL = basicURLParse(v3);
    if (parsedURL === null) {
      throw new TypeError(`Invalid URL: ${v3}`);
    }
    this._url = parsedURL;
    this._query._list.splice(0);
    const { query } = parsedURL;
    if (query !== null) {
      this._query._list = parseUrlencodedString(query);
    }
  }
  get origin() {
    return serializeURLOrigin(this._url);
  }
  get protocol() {
    return `${this._url.scheme}:`;
  }
  set protocol(v3) {
    basicURLParse(`${v3}:`, {
      url: this._url,
      stateOverride: "scheme start"
    });
  }
  get username() {
    return this._url.username;
  }
  set username(v3) {
    if (cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }
    setTheUsername(this._url, v3);
  }
  get password() {
    return this._url.password;
  }
  set password(v3) {
    if (cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }
    setThePassword(this._url, v3);
  }
  get host() {
    const url = this._url;
    if (url.host === null) {
      return "";
    }
    if (url.port === null) {
      return serializeHost(url.host);
    }
    return `${serializeHost(url.host)}:${serializeInteger(url.port)}`;
  }
  set host(v3) {
    if (hasAnOpaquePath(this._url)) {
      return;
    }
    basicURLParse(v3, { url: this._url, stateOverride: "host" });
  }
  get hostname() {
    if (this._url.host === null) {
      return "";
    }
    return serializeHost(this._url.host);
  }
  set hostname(v3) {
    if (hasAnOpaquePath(this._url)) {
      return;
    }
    basicURLParse(v3, { url: this._url, stateOverride: "hostname" });
  }
  get port() {
    if (this._url.port === null) {
      return "";
    }
    return serializeInteger(this._url.port);
  }
  set port(v3) {
    if (cannotHaveAUsernamePasswordPort(this._url)) {
      return;
    }
    if (v3 === "") {
      this._url.port = null;
    } else {
      basicURLParse(v3, { url: this._url, stateOverride: "port" });
    }
  }
  get pathname() {
    return serializePath(this._url);
  }
  set pathname(v3) {
    if (hasAnOpaquePath(this._url)) {
      return;
    }
    this._url.path = [];
    basicURLParse(v3, { url: this._url, stateOverride: "path start" });
  }
  get search() {
    if (this._url.query === null || this._url.query === "") {
      return "";
    }
    return `?${this._url.query}`;
  }
  set search(v3) {
    const url = this._url;
    if (v3 === "") {
      url.query = null;
      this._query._list = [];
      return;
    }
    const input = v3[0] === "?" ? v3.substring(1) : v3;
    url.query = "";
    basicURLParse(input, { url, stateOverride: "query" });
    this._query._list = parseUrlencodedString(input);
  }
  get searchParams() {
    return this._query;
  }
  get hash() {
    if (this._url.fragment === null || this._url.fragment === "") {
      return "";
    }
    return `#${this._url.fragment}`;
  }
  set hash(v3) {
    if (v3 === "") {
      this._url.fragment = null;
      return;
    }
    const input = v3[0] === "#" ? v3.substring(1) : v3;
    this._url.fragment = "";
    basicURLParse(input, { url: this._url, stateOverride: "fragment" });
  }
  toJSON() {
    return this.href;
  }
};

// ../taler-util/lib/url.js
(function() {
  if (typeof globalThis === "object")
    return;
  Object.defineProperty(Object.prototype, "__magic__", {
    get: function() {
      return this;
    },
    configurable: true
  });
  __magic__.globalThis = __magic__;
  delete Object.prototype.__magic__;
})();
var useOwnUrlImp = true;
var _URL = globalThis.URL;
if (useOwnUrlImp || !_URL) {
  globalThis.URL = _URL = URLImpl;
  _URL = URLImpl;
}
var URL2 = _URL;
var _URLSearchParams = globalThis.URLSearchParams;
if (useOwnUrlImp || !_URLSearchParams) {
  globalThis.URLSearchParams = URLSearchParamsImpl;
  _URLSearchParams = URLSearchParamsImpl;
}
var URLSearchParams = _URLSearchParams;

// ../taler-util/lib/helpers.js
function canonicalizeBaseUrl(url) {
  if (!url.startsWith("http") && !url.startsWith("https")) {
    url = "https://" + url;
  }
  const x5 = new URL2(url);
  if (!x5.pathname.endsWith("/")) {
    x5.pathname = x5.pathname + "/";
  }
  x5.search = "";
  x5.hash = "";
  return x5.href;
}
function canonicalJson(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  if (typeof obj === "string") {
    return JSON.stringify(obj);
  }
  if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return JSON.stringify(obj);
  }
  if (Array.isArray(obj)) {
    const objs = obj.map((e3) => canonicalJson(e3));
    return `[${objs.join(",")}]`;
  }
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  keys.sort();
  let s3 = "{";
  for (let i3 = 0; i3 < keys.length; i3++) {
    const key = keys[i3];
    s3 += JSON.stringify(key) + ":" + canonicalJson(obj[key]);
    if (i3 !== keys.length - 1) {
      s3 += ",";
    }
  }
  return s3 + "}";
}
function strcmp(s1, s22) {
  if (s1 < s22) {
    return -1;
  }
  if (s1 > s22) {
    return 1;
  }
  return 0;
}

// ../taler-util/lib/libtool-version.js
var LibtoolVersion;
(function(LibtoolVersion2) {
  function compare(me, other) {
    const meVer = parseVersion(me);
    const otherVer = parseVersion(other);
    if (!(meVer && otherVer)) {
      return void 0;
    }
    const compatible = meVer.current - meVer.age <= otherVer.current && meVer.current >= otherVer.current - otherVer.age;
    const currentCmp = Math.sign(meVer.current - otherVer.current);
    return { compatible, currentCmp };
  }
  LibtoolVersion2.compare = compare;
  function parseVersion(v3) {
    const [currentStr, revisionStr, ageStr, ...rest] = v3.split(":");
    if (rest.length !== 0) {
      return void 0;
    }
    const current = Number.parseInt(currentStr);
    const revision = Number.parseInt(revisionStr);
    const age = Number.parseInt(ageStr);
    if (Number.isNaN(current)) {
      return void 0;
    }
    if (Number.isNaN(revision)) {
      return void 0;
    }
    if (Number.isNaN(age)) {
      return void 0;
    }
    return { current, revision, age };
  }
  LibtoolVersion2.parseVersion = parseVersion;
})(LibtoolVersion || (LibtoolVersion = {}));

// ../taler-util/lib/notifications.js
var NotificationType;
(function(NotificationType2) {
  NotificationType2["CoinWithdrawn"] = "coin-withdrawn";
  NotificationType2["ProposalAccepted"] = "proposal-accepted";
  NotificationType2["ProposalDownloaded"] = "proposal-downloaded";
  NotificationType2["RefundsSubmitted"] = "refunds-submitted";
  NotificationType2["RecoupStarted"] = "recoup-started";
  NotificationType2["RecoupFinished"] = "recoup-finished";
  NotificationType2["RefreshRevealed"] = "refresh-revealed";
  NotificationType2["RefreshMelted"] = "refresh-melted";
  NotificationType2["RefreshStarted"] = "refresh-started";
  NotificationType2["RefreshUnwarranted"] = "refresh-unwarranted";
  NotificationType2["ReserveUpdated"] = "reserve-updated";
  NotificationType2["ReserveConfirmed"] = "reserve-confirmed";
  NotificationType2["ReserveCreated"] = "reserve-created";
  NotificationType2["WithdrawGroupCreated"] = "withdraw-group-created";
  NotificationType2["WithdrawGroupFinished"] = "withdraw-group-finished";
  NotificationType2["WaitingForRetry"] = "waiting-for-retry";
  NotificationType2["RefundStarted"] = "refund-started";
  NotificationType2["RefundQueried"] = "refund-queried";
  NotificationType2["RefundFinished"] = "refund-finished";
  NotificationType2["ExchangeOperationError"] = "exchange-operation-error";
  NotificationType2["ExchangeAdded"] = "exchange-added";
  NotificationType2["RefreshOperationError"] = "refresh-operation-error";
  NotificationType2["RecoupOperationError"] = "recoup-operation-error";
  NotificationType2["RefundApplyOperationError"] = "refund-apply-error";
  NotificationType2["RefundStatusOperationError"] = "refund-status-error";
  NotificationType2["ProposalOperationError"] = "proposal-error";
  NotificationType2["BackupOperationError"] = "backup-error";
  NotificationType2["TipOperationError"] = "tip-error";
  NotificationType2["PayOperationError"] = "pay-error";
  NotificationType2["PayOperationSuccess"] = "pay-operation-success";
  NotificationType2["WithdrawOperationError"] = "withdraw-error";
  NotificationType2["ReserveNotYetFound"] = "reserve-not-yet-found";
  NotificationType2["ReserveOperationError"] = "reserve-error";
  NotificationType2["InternalError"] = "internal-error";
  NotificationType2["PendingOperationProcessed"] = "pending-operation-processed";
  NotificationType2["ProposalRefused"] = "proposal-refused";
  NotificationType2["ReserveRegisteredWithBank"] = "reserve-registered-with-bank";
  NotificationType2["DepositOperationError"] = "deposit-operation-error";
})(NotificationType || (NotificationType = {}));

// ../../node_modules/.pnpm/tslib@2.4.0/node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// ../taler-util/lib/sha256.js
var digestLength = 32;
var blockSize = 64;
var K2 = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
function hashBlocks(w4, v3, p4, pos, len) {
  let a3, b3, c3, d3, e3, f3, g4, h3, u3, i3, j3, t1, t22;
  while (len >= 64) {
    a3 = v3[0];
    b3 = v3[1];
    c3 = v3[2];
    d3 = v3[3];
    e3 = v3[4];
    f3 = v3[5];
    g4 = v3[6];
    h3 = v3[7];
    for (i3 = 0; i3 < 16; i3++) {
      j3 = pos + i3 * 4;
      w4[i3] = (p4[j3] & 255) << 24 | (p4[j3 + 1] & 255) << 16 | (p4[j3 + 2] & 255) << 8 | p4[j3 + 3] & 255;
    }
    for (i3 = 16; i3 < 64; i3++) {
      u3 = w4[i3 - 2];
      t1 = (u3 >>> 17 | u3 << 32 - 17) ^ (u3 >>> 19 | u3 << 32 - 19) ^ u3 >>> 10;
      u3 = w4[i3 - 15];
      t22 = (u3 >>> 7 | u3 << 32 - 7) ^ (u3 >>> 18 | u3 << 32 - 18) ^ u3 >>> 3;
      w4[i3] = (t1 + w4[i3 - 7] | 0) + (t22 + w4[i3 - 16] | 0);
    }
    for (i3 = 0; i3 < 64; i3++) {
      t1 = (((e3 >>> 6 | e3 << 32 - 6) ^ (e3 >>> 11 | e3 << 32 - 11) ^ (e3 >>> 25 | e3 << 32 - 25)) + (e3 & f3 ^ ~e3 & g4) | 0) + (h3 + (K2[i3] + w4[i3] | 0) | 0) | 0;
      t22 = ((a3 >>> 2 | a3 << 32 - 2) ^ (a3 >>> 13 | a3 << 32 - 13) ^ (a3 >>> 22 | a3 << 32 - 22)) + (a3 & b3 ^ a3 & c3 ^ b3 & c3) | 0;
      h3 = g4;
      g4 = f3;
      f3 = e3;
      e3 = d3 + t1 | 0;
      d3 = c3;
      c3 = b3;
      b3 = a3;
      a3 = t1 + t22 | 0;
    }
    v3[0] += a3;
    v3[1] += b3;
    v3[2] += c3;
    v3[3] += d3;
    v3[4] += e3;
    v3[5] += f3;
    v3[6] += g4;
    v3[7] += h3;
    pos += 64;
    len -= 64;
  }
  return pos;
}
var HashSha256 = class {
  constructor() {
    this.digestLength = digestLength;
    this.blockSize = blockSize;
    this.state = new Int32Array(8);
    this.temp = new Int32Array(64);
    this.buffer = new Uint8Array(128);
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
    this.reset();
  }
  reset() {
    this.state[0] = 1779033703;
    this.state[1] = 3144134277;
    this.state[2] = 1013904242;
    this.state[3] = 2773480762;
    this.state[4] = 1359893119;
    this.state[5] = 2600822924;
    this.state[6] = 528734635;
    this.state[7] = 1541459225;
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
    return this;
  }
  clean() {
    for (let i3 = 0; i3 < this.buffer.length; i3++) {
      this.buffer[i3] = 0;
    }
    for (let i3 = 0; i3 < this.temp.length; i3++) {
      this.temp[i3] = 0;
    }
    this.reset();
  }
  update(data, dataLength = data.length) {
    if (this.finished) {
      throw new Error("SHA256: can't update because hash was finished.");
    }
    let dataPos = 0;
    this.bytesHashed += dataLength;
    if (this.bufferLength > 0) {
      while (this.bufferLength < 64 && dataLength > 0) {
        this.buffer[this.bufferLength++] = data[dataPos++];
        dataLength--;
      }
      if (this.bufferLength === 64) {
        hashBlocks(this.temp, this.state, this.buffer, 0, 64);
        this.bufferLength = 0;
      }
    }
    if (dataLength >= 64) {
      dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
      dataLength %= 64;
    }
    while (dataLength > 0) {
      this.buffer[this.bufferLength++] = data[dataPos++];
      dataLength--;
    }
    return this;
  }
  finish(out) {
    if (!this.finished) {
      const bytesHashed = this.bytesHashed;
      const left = this.bufferLength;
      const bitLenHi = bytesHashed / 536870912 | 0;
      const bitLenLo = bytesHashed << 3;
      const padLength = bytesHashed % 64 < 56 ? 64 : 128;
      this.buffer[left] = 128;
      for (let i3 = left + 1; i3 < padLength - 8; i3++) {
        this.buffer[i3] = 0;
      }
      this.buffer[padLength - 8] = bitLenHi >>> 24 & 255;
      this.buffer[padLength - 7] = bitLenHi >>> 16 & 255;
      this.buffer[padLength - 6] = bitLenHi >>> 8 & 255;
      this.buffer[padLength - 5] = bitLenHi >>> 0 & 255;
      this.buffer[padLength - 4] = bitLenLo >>> 24 & 255;
      this.buffer[padLength - 3] = bitLenLo >>> 16 & 255;
      this.buffer[padLength - 2] = bitLenLo >>> 8 & 255;
      this.buffer[padLength - 1] = bitLenLo >>> 0 & 255;
      hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
      this.finished = true;
    }
    for (let i3 = 0; i3 < 8; i3++) {
      out[i3 * 4 + 0] = this.state[i3] >>> 24 & 255;
      out[i3 * 4 + 1] = this.state[i3] >>> 16 & 255;
      out[i3 * 4 + 2] = this.state[i3] >>> 8 & 255;
      out[i3 * 4 + 3] = this.state[i3] >>> 0 & 255;
    }
    return this;
  }
  digest() {
    const out = new Uint8Array(this.digestLength);
    this.finish(out);
    return out;
  }
  _saveState(out) {
    for (let i3 = 0; i3 < this.state.length; i3++) {
      out[i3] = this.state[i3];
    }
  }
  _restoreState(from, bytesHashed) {
    for (let i3 = 0; i3 < this.state.length; i3++) {
      this.state[i3] = from[i3];
    }
    this.bytesHashed = bytesHashed;
    this.finished = false;
    this.bufferLength = 0;
  }
};
function sha256(data) {
  const h3 = new HashSha256().update(data);
  const digest = h3.digest();
  h3.clean();
  return digest;
}

// ../taler-util/lib/kdf.js
function sha512(data) {
  return hash(data);
}
function hmac(digest, blockSize2, key, message) {
  if (key.byteLength > blockSize2) {
    key = digest(key);
  }
  if (key.byteLength < blockSize2) {
    const k3 = key;
    key = new Uint8Array(blockSize2);
    key.set(k3, 0);
  }
  const okp = new Uint8Array(blockSize2);
  const ikp = new Uint8Array(blockSize2);
  for (let i3 = 0; i3 < blockSize2; i3++) {
    ikp[i3] = key[i3] ^ 54;
    okp[i3] = key[i3] ^ 92;
  }
  const b1 = new Uint8Array(blockSize2 + message.byteLength);
  b1.set(ikp, 0);
  b1.set(message, blockSize2);
  const h0 = digest(b1);
  const b22 = new Uint8Array(blockSize2 + h0.length);
  b22.set(okp, 0);
  b22.set(h0, blockSize2);
  return digest(b22);
}
function hmacSha512(key, message) {
  return hmac(sha512, 128, key, message);
}
function hmacSha256(key, message) {
  return hmac(sha256, 64, key, message);
}
function kdf(outputLength, ikm, salt, info) {
  salt = salt !== null && salt !== void 0 ? salt : new Uint8Array(64);
  const prk = hmacSha512(salt, ikm);
  info = info !== null && info !== void 0 ? info : new Uint8Array(0);
  const N3 = Math.ceil(outputLength / 32);
  const output = new Uint8Array(N3 * 32);
  for (let i3 = 0; i3 < N3; i3++) {
    let buf;
    if (i3 == 0) {
      buf = new Uint8Array(info.byteLength + 1);
      buf.set(info, 0);
    } else {
      buf = new Uint8Array(info.byteLength + 1 + 32);
      for (let j3 = 0; j3 < 32; j3++) {
        buf[j3] = output[(i3 - 1) * 32 + j3];
      }
      buf.set(info, 32);
    }
    buf[buf.length - 1] = i3 + 1;
    const chunk = hmacSha256(prk, buf);
    output.set(chunk, i3 * 32);
  }
  return output.slice(0, outputLength);
}

// ../taler-util/lib/taler-crypto.js
var import_big_integer = __toESM(require_BigInteger(), 1);

// ../taler-util/lib/time.js
var TalerProtocolTimestamp;
(function(TalerProtocolTimestamp2) {
  function now() {
    return AbsoluteTime.toTimestamp(AbsoluteTime.now());
  }
  TalerProtocolTimestamp2.now = now;
  function zero() {
    return {
      t_s: 0
    };
  }
  TalerProtocolTimestamp2.zero = zero;
  function never() {
    return {
      t_s: "never"
    };
  }
  TalerProtocolTimestamp2.never = never;
  function fromSeconds(s3) {
    return {
      t_s: s3
    };
  }
  TalerProtocolTimestamp2.fromSeconds = fromSeconds;
  function min(t1, t22) {
    if (t1.t_s === "never") {
      return { t_s: t22.t_s };
    }
    if (t22.t_s === "never") {
      return { t_s: t22.t_s };
    }
    return { t_s: Math.min(t1.t_s, t22.t_s) };
  }
  TalerProtocolTimestamp2.min = min;
})(TalerProtocolTimestamp || (TalerProtocolTimestamp = {}));
var timeshift = 0;
var Duration;
(function(Duration2) {
  function getRemaining(deadline, now = AbsoluteTime.now()) {
    if (deadline.t_ms === "never") {
      return { d_ms: "forever" };
    }
    if (now.t_ms === "never") {
      throw Error("invalid argument for 'now'");
    }
    if (deadline.t_ms < now.t_ms) {
      return { d_ms: 0 };
    }
    return { d_ms: deadline.t_ms - now.t_ms };
  }
  Duration2.getRemaining = getRemaining;
  function max(d1, d22) {
    return durationMax(d1, d22);
  }
  Duration2.max = max;
  function min(d1, d22) {
    return durationMin(d1, d22);
  }
  Duration2.min = min;
  function multiply(d1, n2) {
    return durationMul(d1, n2);
  }
  Duration2.multiply = multiply;
  function toIntegerYears(d3) {
    if (typeof d3.d_ms !== "number") {
      throw Error("infinite duration");
    }
    return Math.ceil(d3.d_ms / 1e3 / 60 / 60 / 24 / 365);
  }
  Duration2.toIntegerYears = toIntegerYears;
  Duration2.fromSpec = durationFromSpec;
  function getForever() {
    return { d_ms: "forever" };
  }
  Duration2.getForever = getForever;
  function getZero() {
    return { d_ms: 0 };
  }
  Duration2.getZero = getZero;
  function fromTalerProtocolDuration(d3) {
    if (d3.d_us === "forever") {
      return {
        d_ms: "forever"
      };
    }
    return {
      d_ms: d3.d_us / 1e3
    };
  }
  Duration2.fromTalerProtocolDuration = fromTalerProtocolDuration;
  function toTalerProtocolDuration(d3) {
    if (d3.d_ms === "forever") {
      return {
        d_us: "forever"
      };
    }
    return {
      d_us: d3.d_ms * 1e3
    };
  }
  Duration2.toTalerProtocolDuration = toTalerProtocolDuration;
  function clamp(args) {
    return durationMax(durationMin(args.value, args.upper), args.lower);
  }
  Duration2.clamp = clamp;
})(Duration || (Duration = {}));
var AbsoluteTime;
(function(AbsoluteTime2) {
  function now() {
    return {
      t_ms: new Date().getTime() + timeshift
    };
  }
  AbsoluteTime2.now = now;
  function never() {
    return {
      t_ms: "never"
    };
  }
  AbsoluteTime2.never = never;
  function cmp(t1, t22) {
    if (t1.t_ms === "never") {
      if (t22.t_ms === "never") {
        return 0;
      }
      return 1;
    }
    if (t22.t_ms === "never") {
      return -1;
    }
    if (t1.t_ms == t22.t_ms) {
      return 0;
    }
    if (t1.t_ms > t22.t_ms) {
      return 1;
    }
    return -1;
  }
  AbsoluteTime2.cmp = cmp;
  function min(t1, t22) {
    if (t1.t_ms === "never") {
      return { t_ms: t22.t_ms };
    }
    if (t22.t_ms === "never") {
      return { t_ms: t22.t_ms };
    }
    return { t_ms: Math.min(t1.t_ms, t22.t_ms) };
  }
  AbsoluteTime2.min = min;
  function max(t1, t22) {
    if (t1.t_ms === "never") {
      return { t_ms: "never" };
    }
    if (t22.t_ms === "never") {
      return { t_ms: "never" };
    }
    return { t_ms: Math.max(t1.t_ms, t22.t_ms) };
  }
  AbsoluteTime2.max = max;
  function difference(t1, t22) {
    if (t1.t_ms === "never") {
      return { d_ms: "forever" };
    }
    if (t22.t_ms === "never") {
      return { d_ms: "forever" };
    }
    return { d_ms: Math.abs(t1.t_ms - t22.t_ms) };
  }
  AbsoluteTime2.difference = difference;
  function isExpired(t3) {
    return cmp(t3, now()) <= 0;
  }
  AbsoluteTime2.isExpired = isExpired;
  function fromTimestamp(t3) {
    if (t3.t_s === "never") {
      return { t_ms: "never" };
    }
    return {
      t_ms: t3.t_s * 1e3
    };
  }
  AbsoluteTime2.fromTimestamp = fromTimestamp;
  function toTimestamp(at2) {
    if (at2.t_ms === "never") {
      return { t_s: "never" };
    }
    return {
      t_s: Math.floor(at2.t_ms / 1e3)
    };
  }
  AbsoluteTime2.toTimestamp = toTimestamp;
  function isBetween(t3, start, end) {
    if (cmp(t3, start) < 0) {
      return false;
    }
    if (cmp(t3, end) > 0) {
      return false;
    }
    return true;
  }
  AbsoluteTime2.isBetween = isBetween;
  function toIsoString(t3) {
    if (t3.t_ms === "never") {
      return "<never>";
    } else {
      return new Date(t3.t_ms).toISOString();
    }
  }
  AbsoluteTime2.toIsoString = toIsoString;
  function addDuration(t1, d3) {
    if (t1.t_ms === "never" || d3.d_ms === "forever") {
      return { t_ms: "never" };
    }
    return { t_ms: t1.t_ms + d3.d_ms };
  }
  AbsoluteTime2.addDuration = addDuration;
  function subtractDuraction(t1, d3) {
    if (t1.t_ms === "never") {
      return { t_ms: "never" };
    }
    if (d3.d_ms === "forever") {
      return { t_ms: 0 };
    }
    return { t_ms: Math.max(0, t1.t_ms - d3.d_ms) };
  }
  AbsoluteTime2.subtractDuraction = subtractDuraction;
  function stringify(t3) {
    if (t3.t_ms === "never") {
      return "never";
    }
    return new Date(t3.t_ms).toISOString();
  }
  AbsoluteTime2.stringify = stringify;
})(AbsoluteTime || (AbsoluteTime = {}));
var SECONDS = 1e3;
var MINUTES = SECONDS * 60;
var HOURS = MINUTES * 60;
var DAYS = HOURS * 24;
var MONTHS = DAYS * 30;
var YEARS = DAYS * 365;
function durationFromSpec(spec) {
  var _a2, _b, _c, _d, _e, _f;
  let d_ms = 0;
  d_ms += ((_a2 = spec.seconds) !== null && _a2 !== void 0 ? _a2 : 0) * SECONDS;
  d_ms += ((_b = spec.minutes) !== null && _b !== void 0 ? _b : 0) * MINUTES;
  d_ms += ((_c = spec.hours) !== null && _c !== void 0 ? _c : 0) * HOURS;
  d_ms += ((_d = spec.days) !== null && _d !== void 0 ? _d : 0) * DAYS;
  d_ms += ((_e = spec.months) !== null && _e !== void 0 ? _e : 0) * MONTHS;
  d_ms += ((_f = spec.years) !== null && _f !== void 0 ? _f : 0) * YEARS;
  return { d_ms };
}
function durationMin(d1, d22) {
  if (d1.d_ms === "forever") {
    return { d_ms: d22.d_ms };
  }
  if (d22.d_ms === "forever") {
    return { d_ms: d1.d_ms };
  }
  return { d_ms: Math.min(d1.d_ms, d22.d_ms) };
}
function durationMax(d1, d22) {
  if (d1.d_ms === "forever") {
    return { d_ms: "forever" };
  }
  if (d22.d_ms === "forever") {
    return { d_ms: "forever" };
  }
  return { d_ms: Math.max(d1.d_ms, d22.d_ms) };
}
function durationMul(d3, n2) {
  if (d3.d_ms === "forever") {
    return { d_ms: "forever" };
  }
  return { d_ms: Math.round(d3.d_ms * n2) };
}

// ../taler-util/lib/taler-types.js
var DenomKeyType;
(function(DenomKeyType2) {
  DenomKeyType2["Rsa"] = "RSA";
  DenomKeyType2["ClauseSchnorr"] = "CS";
})(DenomKeyType || (DenomKeyType = {}));
(function(DenomKeyType2) {
  function toIntTag(t3) {
    switch (t3) {
      case DenomKeyType2.Rsa:
        return 1;
      case DenomKeyType2.ClauseSchnorr:
        return 2;
    }
  }
  DenomKeyType2.toIntTag = toIntTag;
})(DenomKeyType || (DenomKeyType = {}));
var DenominationPubKey;
(function(DenominationPubKey2) {
  function cmp(p1, p22) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (p1.cipher < p22.cipher) {
      return -1;
    } else if (p1.cipher > p22.cipher) {
      return 1;
    } else if (p1.cipher === DenomKeyType.Rsa && p22.cipher === DenomKeyType.Rsa) {
      if (((_a2 = p1.age_mask) !== null && _a2 !== void 0 ? _a2 : 0) < ((_b = p22.age_mask) !== null && _b !== void 0 ? _b : 0)) {
        return -1;
      } else if (((_c = p1.age_mask) !== null && _c !== void 0 ? _c : 0) > ((_d = p22.age_mask) !== null && _d !== void 0 ? _d : 0)) {
        return 1;
      }
      return strcmp(p1.rsa_public_key, p22.rsa_public_key);
    } else if (p1.cipher === DenomKeyType.ClauseSchnorr && p22.cipher === DenomKeyType.ClauseSchnorr) {
      if (((_e = p1.age_mask) !== null && _e !== void 0 ? _e : 0) < ((_f = p22.age_mask) !== null && _f !== void 0 ? _f : 0)) {
        return -1;
      } else if (((_g = p1.age_mask) !== null && _g !== void 0 ? _g : 0) > ((_h = p22.age_mask) !== null && _h !== void 0 ? _h : 0)) {
        return 1;
      }
      return strcmp(p1.cs_public_key, p22.cs_public_key);
    } else {
      throw Error("unsupported cipher");
    }
  }
  DenominationPubKey2.cmp = cmp;
})(DenominationPubKey || (DenominationPubKey = {}));
var ExchangeProtocolVersion;
(function(ExchangeProtocolVersion2) {
  ExchangeProtocolVersion2[ExchangeProtocolVersion2["V12"] = 12] = "V12";
})(ExchangeProtocolVersion || (ExchangeProtocolVersion = {}));
var MerchantProtocolVersion;
(function(MerchantProtocolVersion2) {
  MerchantProtocolVersion2[MerchantProtocolVersion2["V3"] = 3] = "V3";
})(MerchantProtocolVersion || (MerchantProtocolVersion = {}));

// ../taler-util/lib/logging.js
var isNode = typeof process !== "undefined" && typeof process.release !== "undefined" && process.release.name === "node";
var LogLevel;
(function(LogLevel2) {
  LogLevel2["Trace"] = "trace";
  LogLevel2["Message"] = "message";
  LogLevel2["Info"] = "info";
  LogLevel2["Warn"] = "warn";
  LogLevel2["Error"] = "error";
  LogLevel2["None"] = "none";
})(LogLevel || (LogLevel = {}));
var globalLogLevel = LogLevel.Info;
function setGlobalLogLevelFromString(logLevelStr) {
  let level;
  switch (logLevelStr.toLowerCase()) {
    case "trace":
      level = LogLevel.Trace;
      break;
    case "info":
      level = LogLevel.Info;
      break;
    case "warn":
    case "warning":
      level = LogLevel.Warn;
      break;
    case "error":
      level = LogLevel.Error;
      break;
    case "none":
      level = LogLevel.None;
      break;
    default:
      if (isNode) {
        process.stderr.write(`Invalid log level, defaulting to WARNING
`);
      } else {
        console.warn(`Invalid log level, defaulting to WARNING`);
      }
      level = LogLevel.Warn;
  }
  globalLogLevel = level;
}
function writeNodeLog(message, tag, level, args) {
  try {
    let msg = `${new Date().toISOString()} ${tag} ${level} ${message}`;
    if (args.length != 0) {
      msg += ` ${JSON.stringify(args, void 0, 2)}
`;
    } else {
      msg += `
`;
    }
    process.stderr.write(msg);
  } catch (e3) {
    let msg = `${new Date().toISOString()} (logger) FATAL `;
    if (e3 instanceof Error) {
      msg += `failed to write log: ${e3.message}
`;
    } else {
      msg += "failed to write log\n";
    }
    process.stderr.write(msg);
  }
}
var Logger = class {
  constructor(tag) {
    this.tag = tag;
  }
  shouldLogTrace() {
    switch (globalLogLevel) {
      case LogLevel.Trace:
        return true;
      case LogLevel.Message:
      case LogLevel.Info:
      case LogLevel.Warn:
      case LogLevel.Error:
      case LogLevel.None:
        return false;
    }
  }
  shouldLogInfo() {
    switch (globalLogLevel) {
      case LogLevel.Trace:
      case LogLevel.Message:
      case LogLevel.Info:
        return true;
      case LogLevel.Warn:
      case LogLevel.Error:
      case LogLevel.None:
        return false;
    }
  }
  shouldLogWarn() {
    switch (globalLogLevel) {
      case LogLevel.Trace:
      case LogLevel.Message:
      case LogLevel.Info:
      case LogLevel.Warn:
        return true;
      case LogLevel.Error:
      case LogLevel.None:
        return false;
    }
  }
  shouldLogError() {
    switch (globalLogLevel) {
      case LogLevel.Trace:
      case LogLevel.Message:
      case LogLevel.Info:
      case LogLevel.Warn:
      case LogLevel.Error:
        return true;
      case LogLevel.None:
        return false;
    }
  }
  info(message, ...args) {
    if (!this.shouldLogInfo()) {
      return;
    }
    if (isNode) {
      writeNodeLog(message, this.tag, "INFO", args);
    } else {
      console.info(`${new Date().toISOString()} ${this.tag} INFO ` + message, ...args);
    }
  }
  warn(message, ...args) {
    if (!this.shouldLogWarn()) {
      return;
    }
    if (isNode) {
      writeNodeLog(message, this.tag, "WARN", args);
    } else {
      console.warn(`${new Date().toISOString()} ${this.tag} INFO ` + message, ...args);
    }
  }
  error(message, ...args) {
    if (!this.shouldLogError()) {
      return;
    }
    if (isNode) {
      writeNodeLog(message, this.tag, "ERROR", args);
    } else {
      console.info(`${new Date().toISOString()} ${this.tag} ERROR ` + message, ...args);
    }
  }
  trace(message, ...args) {
    if (!this.shouldLogTrace()) {
      return;
    }
    if (isNode) {
      writeNodeLog(message, this.tag, "TRACE", args);
    } else {
      console.info(`${new Date().toISOString()} ${this.tag} TRACE ` + message, ...args);
    }
  }
  reportBreak() {
    if (!this.shouldLogError()) {
      return;
    }
    const location2 = new Error("programming error");
    this.error(`assertion failed: ${location2.stack}`);
  }
};

// ../taler-util/lib/taler-crypto.js
function getRandomBytes(n2) {
  return randomBytes(n2);
}
var useNative = true;
var encTable = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
var EncodingError = class extends Error {
  constructor() {
    super("Encoding error");
    Object.setPrototypeOf(this, EncodingError.prototype);
  }
};
function getValue(chr) {
  let a3 = chr;
  switch (chr) {
    case "O":
    case "o":
      a3 = "0;";
      break;
    case "i":
    case "I":
    case "l":
    case "L":
      a3 = "1";
      break;
    case "u":
    case "U":
      a3 = "V";
  }
  if (a3 >= "0" && a3 <= "9") {
    return a3.charCodeAt(0) - "0".charCodeAt(0);
  }
  if (a3 >= "a" && a3 <= "z")
    a3 = a3.toUpperCase();
  let dec = 0;
  if (a3 >= "A" && a3 <= "Z") {
    if ("I" < a3)
      dec++;
    if ("L" < a3)
      dec++;
    if ("O" < a3)
      dec++;
    if ("U" < a3)
      dec++;
    return a3.charCodeAt(0) - "A".charCodeAt(0) + 10 - dec;
  }
  throw new EncodingError();
}
function encodeCrock(data) {
  if (useNative && "_encodeCrock" in globalThis) {
    return globalThis._encodeCrock(data);
  }
  const dataBytes = new Uint8Array(data);
  let sb = "";
  const size = data.byteLength;
  let bitBuf = 0;
  let numBits = 0;
  let pos = 0;
  while (pos < size || numBits > 0) {
    if (pos < size && numBits < 5) {
      const d3 = dataBytes[pos++];
      bitBuf = bitBuf << 8 | d3;
      numBits += 8;
    }
    if (numBits < 5) {
      bitBuf = bitBuf << 5 - numBits;
      numBits = 5;
    }
    const v3 = bitBuf >>> numBits - 5 & 31;
    sb += encTable[v3];
    numBits -= 5;
  }
  return sb;
}
function kdfKw(args) {
  return kdf(args.outputLength, args.ikm, args.salt, args.info);
}
function decodeCrock(encoded) {
  if (useNative && "_decodeCrock" in globalThis) {
    return globalThis._decodeCrock(encoded);
  }
  const size = encoded.length;
  let bitpos = 0;
  let bitbuf = 0;
  let readPosition = 0;
  const outLen = Math.floor(size * 5 / 8);
  const out = new Uint8Array(outLen);
  let outPos = 0;
  while (readPosition < size || bitpos > 0) {
    if (readPosition < size) {
      const v3 = getValue(encoded[readPosition++]);
      bitbuf = bitbuf << 5 | v3;
      bitpos += 5;
    }
    while (bitpos >= 8) {
      const d3 = bitbuf >>> bitpos - 8 & 255;
      out[outPos++] = d3;
      bitpos -= 8;
    }
    if (readPosition == size && bitpos > 0) {
      bitbuf = bitbuf << 8 - bitpos & 255;
      bitpos = bitbuf == 0 ? 0 : 8;
    }
  }
  return out;
}
var encoder;
function stringToBytes(s3) {
  if (!encoder) {
    encoder = new TextEncoder();
  }
  return encoder.encode(s3);
}
function typedArrayConcat(chunks) {
  let payloadLen = 0;
  for (const c3 of chunks) {
    payloadLen += c3.byteLength;
  }
  const buf = new ArrayBuffer(payloadLen);
  const u8buf = new Uint8Array(buf);
  let p4 = 0;
  for (const c3 of chunks) {
    u8buf.set(c3, p4);
    p4 += c3.byteLength;
  }
  return u8buf;
}
function hash2(d3) {
  if (useNative && "_hash" in globalThis) {
    return globalThis._hash(d3);
  }
  return hash(d3);
}
var logger = new Logger("talerCrypto.ts");
function bufferForUint32(n2) {
  const arrBuf = new ArrayBuffer(4);
  const buf = new Uint8Array(arrBuf);
  const dv = new DataView(arrBuf);
  dv.setUint32(0, n2);
  return buf;
}
var TalerSignaturePurpose;
(function(TalerSignaturePurpose2) {
  TalerSignaturePurpose2[TalerSignaturePurpose2["MERCHANT_TRACK_TRANSACTION"] = 1103] = "MERCHANT_TRACK_TRANSACTION";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_RESERVE_WITHDRAW"] = 1200] = "WALLET_RESERVE_WITHDRAW";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_COIN_DEPOSIT"] = 1201] = "WALLET_COIN_DEPOSIT";
  TalerSignaturePurpose2[TalerSignaturePurpose2["GLOBAL_FEES"] = 1022] = "GLOBAL_FEES";
  TalerSignaturePurpose2[TalerSignaturePurpose2["MASTER_DENOMINATION_KEY_VALIDITY"] = 1025] = "MASTER_DENOMINATION_KEY_VALIDITY";
  TalerSignaturePurpose2[TalerSignaturePurpose2["MASTER_WIRE_FEES"] = 1028] = "MASTER_WIRE_FEES";
  TalerSignaturePurpose2[TalerSignaturePurpose2["MASTER_WIRE_DETAILS"] = 1030] = "MASTER_WIRE_DETAILS";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_COIN_MELT"] = 1202] = "WALLET_COIN_MELT";
  TalerSignaturePurpose2[TalerSignaturePurpose2["TEST"] = 4242] = "TEST";
  TalerSignaturePurpose2[TalerSignaturePurpose2["MERCHANT_PAYMENT_OK"] = 1104] = "MERCHANT_PAYMENT_OK";
  TalerSignaturePurpose2[TalerSignaturePurpose2["MERCHANT_CONTRACT"] = 1101] = "MERCHANT_CONTRACT";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_COIN_RECOUP"] = 1203] = "WALLET_COIN_RECOUP";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_COIN_LINK"] = 1204] = "WALLET_COIN_LINK";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_COIN_RECOUP_REFRESH"] = 1206] = "WALLET_COIN_RECOUP_REFRESH";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_AGE_ATTESTATION"] = 1207] = "WALLET_AGE_ATTESTATION";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_PURSE_CREATE"] = 1210] = "WALLET_PURSE_CREATE";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_PURSE_DEPOSIT"] = 1211] = "WALLET_PURSE_DEPOSIT";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_PURSE_MERGE"] = 1213] = "WALLET_PURSE_MERGE";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_ACCOUNT_MERGE"] = 1214] = "WALLET_ACCOUNT_MERGE";
  TalerSignaturePurpose2[TalerSignaturePurpose2["WALLET_PURSE_ECONTRACT"] = 1216] = "WALLET_PURSE_ECONTRACT";
  TalerSignaturePurpose2[TalerSignaturePurpose2["EXCHANGE_CONFIRM_RECOUP"] = 1039] = "EXCHANGE_CONFIRM_RECOUP";
  TalerSignaturePurpose2[TalerSignaturePurpose2["EXCHANGE_CONFIRM_RECOUP_REFRESH"] = 1041] = "EXCHANGE_CONFIRM_RECOUP_REFRESH";
  TalerSignaturePurpose2[TalerSignaturePurpose2["ANASTASIS_POLICY_UPLOAD"] = 1400] = "ANASTASIS_POLICY_UPLOAD";
  TalerSignaturePurpose2[TalerSignaturePurpose2["ANASTASIS_POLICY_DOWNLOAD"] = 1401] = "ANASTASIS_POLICY_DOWNLOAD";
  TalerSignaturePurpose2[TalerSignaturePurpose2["SYNC_BACKUP_UPLOAD"] = 1450] = "SYNC_BACKUP_UPLOAD";
})(TalerSignaturePurpose || (TalerSignaturePurpose = {}));
var SignaturePurposeBuilder = class {
  constructor(purposeNum) {
    this.purposeNum = purposeNum;
    this.chunks = [];
  }
  put(bytes) {
    this.chunks.push(Uint8Array.from(bytes));
    return this;
  }
  build() {
    let payloadLen = 0;
    for (const c3 of this.chunks) {
      payloadLen += c3.byteLength;
    }
    const buf = new ArrayBuffer(4 + 4 + payloadLen);
    const u8buf = new Uint8Array(buf);
    let p4 = 8;
    for (const c3 of this.chunks) {
      u8buf.set(c3, p4);
      p4 += c3.byteLength;
    }
    const dvbuf = new DataView(buf);
    dvbuf.setUint32(0, payloadLen + 4 + 4);
    dvbuf.setUint32(4, this.purposeNum);
    return u8buf;
  }
};
function buildSigPS(purposeNum) {
  return new SignaturePurposeBuilder(purposeNum);
}
function bigintToNaclArr(x5, size) {
  const byteArr = new Uint8Array(size);
  const arr = x5.toArray(256).value.reverse();
  byteArr.set(arr, 0);
  return byteArr;
}
function bigintFromNaclArr(arr) {
  let rev = new Uint8Array(arr);
  rev = rev.reverse();
  return import_big_integer.default.fromArray(Array.from(rev), 256, false);
}
var Edx25519;
(function(Edx255192) {
  const revL = [
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ];
  const L4 = import_big_integer.default.fromArray(revL.reverse(), 256, false);
  function keyCreateFromSeed(seed) {
    return __awaiter(this, void 0, void 0, function* () {
      return crypto_edx25519_private_key_create_from_seed(seed);
    });
  }
  Edx255192.keyCreateFromSeed = keyCreateFromSeed;
  function keyCreate() {
    return __awaiter(this, void 0, void 0, function* () {
      return crypto_edx25519_private_key_create();
    });
  }
  Edx255192.keyCreate = keyCreate;
  function getPublic(priv) {
    return __awaiter(this, void 0, void 0, function* () {
      return crypto_edx25519_get_public(priv);
    });
  }
  Edx255192.getPublic = getPublic;
  function sign(msg, key) {
    throw Error("not implemented");
  }
  Edx255192.sign = sign;
  function deriveFactor(pub, seed) {
    return __awaiter(this, void 0, void 0, function* () {
      const res = kdfKw({
        outputLength: 64,
        salt: seed,
        ikm: pub,
        info: stringToBytes("edx25519-derivation")
      });
      return res;
    });
  }
  function privateKeyDerive(priv, seed) {
    return __awaiter(this, void 0, void 0, function* () {
      const pub = yield getPublic(priv);
      const privDec = priv;
      const a3 = bigintFromNaclArr(privDec.subarray(0, 32));
      const factorEnc = yield deriveFactor(pub, seed);
      const factorModL = bigintFromNaclArr(factorEnc).mod(L4);
      const aPrime = a3.divide(8).multiply(factorModL).mod(L4).multiply(8).mod(L4);
      const bPrime = hash(typedArrayConcat([privDec.subarray(32, 64), factorEnc])).subarray(0, 32);
      const newPriv = typedArrayConcat([bigintToNaclArr(aPrime, 32), bPrime]);
      return newPriv;
    });
  }
  Edx255192.privateKeyDerive = privateKeyDerive;
  function publicKeyDerive(pub, seed) {
    return __awaiter(this, void 0, void 0, function* () {
      const factorEnc = yield deriveFactor(pub, seed);
      const factorReduced = crypto_core_ed25519_scalar_reduce(factorEnc);
      const res = crypto_scalarmult_ed25519_noclamp(factorReduced, pub);
      return res;
    });
  }
  Edx255192.publicKeyDerive = publicKeyDerive;
})(Edx25519 || (Edx25519 = {}));
function invariant(cond) {
  if (!cond) {
    throw Error("invariant failed");
  }
}
var AgeRestriction;
(function(AgeRestriction2) {
  AgeRestriction2.AGE_UNRESTRICTED = 32;
  function hashCommitment(ac) {
    const hc = new HashState();
    for (const pub of ac.publicKeys) {
      hc.update(decodeCrock(pub));
    }
    return encodeCrock(hc.finish().subarray(0, 32));
  }
  AgeRestriction2.hashCommitment = hashCommitment;
  function countAgeGroups(mask) {
    let count = 0;
    let m3 = mask;
    while (m3 > 0) {
      count += m3 & 1;
      m3 = m3 >> 1;
    }
    return count;
  }
  AgeRestriction2.countAgeGroups = countAgeGroups;
  function getAgeGroupsFromMask(mask) {
    const groups = [];
    let age = 1;
    let m3 = mask >> 1;
    while (m3 > 0) {
      if (m3 & 1) {
        groups.push(age);
      }
      m3 = m3 >> 1;
      age++;
    }
    return groups;
  }
  AgeRestriction2.getAgeGroupsFromMask = getAgeGroupsFromMask;
  function getAgeGroupIndex(mask, age) {
    invariant((mask & 1) === 1);
    let i3 = 0;
    let m3 = mask;
    let a3 = age;
    while (m3 > 0) {
      if (a3 <= 0) {
        break;
      }
      m3 = m3 >> 1;
      i3 += m3 & 1;
      a3--;
    }
    return i3;
  }
  AgeRestriction2.getAgeGroupIndex = getAgeGroupIndex;
  function ageGroupSpecToMask(ageGroupSpec) {
    throw Error("not implemented");
  }
  AgeRestriction2.ageGroupSpecToMask = ageGroupSpecToMask;
  function restrictionCommit(ageMask, age) {
    return __awaiter(this, void 0, void 0, function* () {
      invariant((ageMask & 1) === 1);
      const numPubs = countAgeGroups(ageMask) - 1;
      const numPrivs = getAgeGroupIndex(ageMask, age);
      const pubs = [];
      const privs = [];
      for (let i3 = 0; i3 < numPubs; i3++) {
        const priv = yield Edx25519.keyCreate();
        const pub = yield Edx25519.getPublic(priv);
        pubs.push(pub);
        if (i3 < numPrivs) {
          privs.push(priv);
        }
      }
      return {
        commitment: {
          mask: ageMask,
          publicKeys: pubs.map((x5) => encodeCrock(x5))
        },
        proof: {
          privateKeys: privs.map((x5) => encodeCrock(x5))
        }
      };
    });
  }
  AgeRestriction2.restrictionCommit = restrictionCommit;
  function restrictionCommitSeeded(ageMask, age, seed) {
    return __awaiter(this, void 0, void 0, function* () {
      invariant((ageMask & 1) === 1);
      const numPubs = countAgeGroups(ageMask) - 1;
      const numPrivs = getAgeGroupIndex(ageMask, age);
      const pubs = [];
      const privs = [];
      for (let i3 = 0; i3 < numPubs; i3++) {
        const privSeed = yield kdfKw({
          outputLength: 32,
          ikm: seed,
          info: stringToBytes("age-restriction-commit"),
          salt: bufferForUint32(i3)
        });
        const priv = yield Edx25519.keyCreateFromSeed(privSeed);
        const pub = yield Edx25519.getPublic(priv);
        pubs.push(pub);
        if (i3 < numPrivs) {
          privs.push(priv);
        }
      }
      return {
        commitment: {
          mask: ageMask,
          publicKeys: pubs.map((x5) => encodeCrock(x5))
        },
        proof: {
          privateKeys: privs.map((x5) => encodeCrock(x5))
        }
      };
    });
  }
  AgeRestriction2.restrictionCommitSeeded = restrictionCommitSeeded;
  function commitCompare(c1, c22, salt) {
    return __awaiter(this, void 0, void 0, function* () {
      if (c1.publicKeys.length != c22.publicKeys.length) {
        return false;
      }
      for (let i3 = 0; i3 < c1.publicKeys.length; i3++) {
        const k1 = decodeCrock(c1.publicKeys[i3]);
        const k22 = yield Edx25519.publicKeyDerive(decodeCrock(c22.publicKeys[i3]), salt);
        if (k1 != k22) {
          return false;
        }
      }
      return true;
    });
  }
  AgeRestriction2.commitCompare = commitCompare;
  function commitmentDerive(commitmentProof, salt) {
    return __awaiter(this, void 0, void 0, function* () {
      const newPrivs = [];
      const newPubs = [];
      for (const oldPub of commitmentProof.commitment.publicKeys) {
        newPubs.push(yield Edx25519.publicKeyDerive(decodeCrock(oldPub), salt));
      }
      for (const oldPriv of commitmentProof.proof.privateKeys) {
        newPrivs.push(yield Edx25519.privateKeyDerive(decodeCrock(oldPriv), salt));
      }
      return {
        commitment: {
          mask: commitmentProof.commitment.mask,
          publicKeys: newPubs.map((x5) => encodeCrock(x5))
        },
        proof: {
          privateKeys: newPrivs.map((x5) => encodeCrock(x5))
        }
      };
    });
  }
  AgeRestriction2.commitmentDerive = commitmentDerive;
  function commitmentAttest(commitmentProof, age) {
    const d3 = buildSigPS(TalerSignaturePurpose.WALLET_AGE_ATTESTATION).put(bufferForUint32(commitmentProof.commitment.mask)).put(bufferForUint32(age)).build();
    const group = getAgeGroupIndex(commitmentProof.commitment.mask, age);
    if (group === 0) {
      return new Uint8Array(64);
    }
    const priv = commitmentProof.proof.privateKeys[group - 1];
    const pub = commitmentProof.commitment.publicKeys[group - 1];
    const sig = crypto_edx25519_sign_detached(d3, decodeCrock(priv), decodeCrock(pub));
    return sig;
  }
  AgeRestriction2.commitmentAttest = commitmentAttest;
  function commitmentVerify(commitment, sig, age) {
    const d3 = buildSigPS(TalerSignaturePurpose.WALLET_AGE_ATTESTATION).put(bufferForUint32(commitment.mask)).put(bufferForUint32(age)).build();
    const group = getAgeGroupIndex(commitment.mask, age);
    if (group === 0) {
      return true;
    }
    const pub = commitment.publicKeys[group - 1];
    return crypto_edx25519_sign_detached_verify(d3, decodeCrock(sig), decodeCrock(pub));
  }
  AgeRestriction2.commitmentVerify = commitmentVerify;
})(AgeRestriction || (AgeRestriction = {}));
var ContractFormatTag;
(function(ContractFormatTag2) {
  ContractFormatTag2[ContractFormatTag2["PaymentOffer"] = 0] = "PaymentOffer";
  ContractFormatTag2[ContractFormatTag2["PaymentRequest"] = 1] = "PaymentRequest";
})(ContractFormatTag || (ContractFormatTag = {}));

// ../taler-util/lib/bech32.js
var CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
var GENERATOR = [996825010, 642813549, 513874426, 1027748829, 705979059];
var encodings = {
  BECH32: "bech32",
  BECH32M: "bech32m"
};
var bech32_default = {
  decode: decode2,
  encode: encode2,
  encodings
};
function getEncodingConst(enc) {
  if (enc == encodings.BECH32) {
    return 1;
  } else if (enc == encodings.BECH32M) {
    return 734539939;
  } else {
    throw new Error("unknown encoding");
  }
}
function polymod(values) {
  var chk = 1;
  for (var p4 = 0; p4 < values.length; ++p4) {
    var top = chk >> 25;
    chk = (chk & 33554431) << 5 ^ values[p4];
    for (var i3 = 0; i3 < 5; ++i3) {
      if (top >> i3 & 1) {
        chk ^= GENERATOR[i3];
      }
    }
  }
  return chk;
}
function hrpExpand(hrp) {
  var ret = [];
  var p4;
  for (p4 = 0; p4 < hrp.length; ++p4) {
    ret.push(hrp.charCodeAt(p4) >> 5);
  }
  ret.push(0);
  for (p4 = 0; p4 < hrp.length; ++p4) {
    ret.push(hrp.charCodeAt(p4) & 31);
  }
  return ret;
}
function verifyChecksum(hrp, data, enc) {
  return polymod(hrpExpand(hrp).concat(data)) === getEncodingConst(enc);
}
function createChecksum(hrp, data, enc) {
  var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
  var mod = polymod(values) ^ getEncodingConst(enc);
  var ret = [];
  for (var p4 = 0; p4 < 6; ++p4) {
    ret.push(mod >> 5 * (5 - p4) & 31);
  }
  return ret;
}
function encode2(hrp, data, enc) {
  var combined = data.concat(createChecksum(hrp, data, enc));
  var ret = hrp + "1";
  for (var p4 = 0; p4 < combined.length; ++p4) {
    ret += CHARSET.charAt(combined[p4]);
  }
  return ret;
}
function decode2(bechString, enc) {
  var p4;
  var has_lower = false;
  var has_upper = false;
  for (p4 = 0; p4 < bechString.length; ++p4) {
    if (bechString.charCodeAt(p4) < 33 || bechString.charCodeAt(p4) > 126) {
      return null;
    }
    if (bechString.charCodeAt(p4) >= 97 && bechString.charCodeAt(p4) <= 122) {
      has_lower = true;
    }
    if (bechString.charCodeAt(p4) >= 65 && bechString.charCodeAt(p4) <= 90) {
      has_upper = true;
    }
  }
  if (has_lower && has_upper) {
    return null;
  }
  bechString = bechString.toLowerCase();
  var pos = bechString.lastIndexOf("1");
  if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
    return null;
  }
  var hrp = bechString.substring(0, pos);
  var data = [];
  for (p4 = pos + 1; p4 < bechString.length; ++p4) {
    var d3 = CHARSET.indexOf(bechString.charAt(p4));
    if (d3 === -1) {
      return null;
    }
    data.push(d3);
  }
  if (!verifyChecksum(hrp, data, enc)) {
    return null;
  }
  return { hrp, data: data.slice(0, data.length - 6) };
}

// ../taler-util/lib/segwit_addr.js
var segwit_addr_default = {
  encode: encode3,
  decode: decode3
};
function convertbits(data, frombits, tobits, pad) {
  var acc = 0;
  var bits = 0;
  var ret = [];
  var maxv = (1 << tobits) - 1;
  for (var p4 = 0; p4 < data.length; ++p4) {
    var value = data[p4];
    if (value < 0 || value >> frombits !== 0) {
      return [];
    }
    acc = acc << frombits | value;
    bits += frombits;
    while (bits >= tobits) {
      bits -= tobits;
      ret.push(acc >> bits & maxv);
    }
  }
  if (pad) {
    if (bits > 0) {
      ret.push(acc << tobits - bits & maxv);
    }
  } else if (bits >= frombits || acc << tobits - bits & maxv) {
    return [];
  }
  return ret;
}
function decode3(hrp, addr) {
  var bech32m = false;
  var dec = bech32_default.decode(addr, bech32_default.encodings.BECH32);
  if (dec === null) {
    dec = bech32_default.decode(addr, bech32_default.encodings.BECH32M);
    bech32m = true;
  }
  if (dec === null || dec.hrp !== hrp || dec.data.length < 1 || dec.data[0] > 16) {
    return null;
  }
  var res = convertbits(dec.data.slice(1), 5, 8, false);
  if (res === null || res.length < 2 || res.length > 40) {
    return null;
  }
  if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
    return null;
  }
  if (dec.data[0] === 0 && bech32m) {
    return null;
  }
  if (dec.data[0] !== 0 && !bech32m) {
    return null;
  }
  return { version: dec.data[0], program: res };
}
function encode3(hrp, version, program) {
  var enc = bech32_default.encodings.BECH32;
  if (version > 0) {
    enc = bech32_default.encodings.BECH32M;
  }
  var ret = bech32_default.encode(hrp, [version].concat(convertbits(program, 8, 5, true)), enc);
  if (decode3(hrp, ret) === null) {
    return "";
  }
  return ret;
}

// ../taler-util/lib/bitcoin.js
function generateFakeSegwitAddress(reservePub, addr) {
  if (!reservePub)
    return [];
  let pub;
  try {
    pub = decodeCrock(reservePub);
  } catch (_a2) {
  }
  if (!pub || pub.length !== 32)
    return [];
  const first_rnd = new Uint8Array(4);
  first_rnd.set(pub.subarray(0, 4));
  const second_rnd = new Uint8Array(4);
  second_rnd.set(pub.subarray(0, 4));
  first_rnd[0] = first_rnd[0] & 127;
  second_rnd[0] = second_rnd[0] | 128;
  const first_part = new Uint8Array(first_rnd.length + pub.length / 2);
  first_part.set(first_rnd, 0);
  first_part.set(pub.subarray(0, 16), 4);
  const second_part = new Uint8Array(first_rnd.length + pub.length / 2);
  second_part.set(second_rnd, 0);
  second_part.set(pub.subarray(16, 32), 4);
  const prefix2 = addr[0] === "t" && addr[1] == "b" ? "tb" : addr[0] === "b" && addr[1] == "c" && addr[2] === "r" && addr[3] == "t" ? "bcrt" : addr[0] === "b" && addr[1] == "c" ? "bc" : void 0;
  if (prefix2 === void 0)
    throw new Error("unknown bitcoin net");
  const addr1 = segwit_addr_default.encode(prefix2, 0, first_part);
  const addr2 = segwit_addr_default.encode(prefix2, 0, second_part);
  return [addr1, addr2];
}

// ../taler-util/lib/payto.js
var paytoPfx = "payto://";
function parsePaytoUri(s3) {
  if (!s3.startsWith(paytoPfx)) {
    return void 0;
  }
  const [acct, search] = s3.slice(paytoPfx.length).split("?");
  const firstSlashPos = acct.indexOf("/");
  if (firstSlashPos === -1) {
    return void 0;
  }
  const targetType = acct.slice(0, firstSlashPos);
  const targetPath = acct.slice(firstSlashPos + 1);
  const params = {};
  const searchParams = new URLSearchParams(search || "");
  searchParams.forEach((v3, k3) => {
    params[k3] = v3;
  });
  if (targetType === "x-taler-bank") {
    const parts = targetPath.split("/");
    const host = parts[0];
    const account = parts[1];
    return {
      targetPath,
      targetType,
      params,
      isKnown: true,
      host,
      account
    };
  }
  if (targetType === "iban") {
    const parts = targetPath.split("/");
    let iban = void 0;
    let bic = void 0;
    if (parts.length === 1) {
      iban = parts[0];
    }
    if (parts.length === 2) {
      bic = parts[0];
      iban = parts[1];
    } else {
      iban = targetPath;
    }
    return {
      isKnown: true,
      targetPath,
      targetType,
      params,
      iban,
      bic
    };
  }
  if (targetType === "bitcoin") {
    const msg = /\b([A-Z0-9]{52})\b/.exec(params["message"]);
    const reserve = !msg ? params["subject"] : msg[0];
    const segwitAddrs = !reserve ? [] : generateFakeSegwitAddress(reserve, targetPath);
    const result = {
      isKnown: true,
      targetPath,
      targetType,
      params,
      segwitAddrs
    };
    return result;
  }
  return {
    targetPath,
    targetType,
    params,
    isKnown: false
  };
}

// ../taler-util/lib/ReserveTransaction.js
var ReserveTransactionType;
(function(ReserveTransactionType2) {
  ReserveTransactionType2["Withdraw"] = "WITHDRAW";
  ReserveTransactionType2["Credit"] = "CREDIT";
  ReserveTransactionType2["Recoup"] = "RECOUP";
  ReserveTransactionType2["Closing"] = "CLOSING";
})(ReserveTransactionType || (ReserveTransactionType = {}));

// ../taler-util/lib/taleruri.js
var TalerUriType;
(function(TalerUriType2) {
  TalerUriType2["TalerPay"] = "taler-pay";
  TalerUriType2["TalerWithdraw"] = "taler-withdraw";
  TalerUriType2["TalerTip"] = "taler-tip";
  TalerUriType2["TalerRefund"] = "taler-refund";
  TalerUriType2["TalerPayPush"] = "taler-pay-push";
  TalerUriType2["TalerPayPull"] = "taler-pay-pull";
  TalerUriType2["TalerRecovery"] = "taler-recovery";
  TalerUriType2["TalerDevExperiment"] = "taler-dev-experiment";
  TalerUriType2["Unknown"] = "unknown";
})(TalerUriType || (TalerUriType = {}));

// ../taler-util/lib/transactions-types.js
var TransactionType;
(function(TransactionType2) {
  TransactionType2["Withdrawal"] = "withdrawal";
  TransactionType2["Payment"] = "payment";
  TransactionType2["Refund"] = "refund";
  TransactionType2["Refresh"] = "refresh";
  TransactionType2["Tip"] = "tip";
  TransactionType2["Deposit"] = "deposit";
  TransactionType2["PeerPushDebit"] = "peer-push-debit";
  TransactionType2["PeerPushCredit"] = "peer-push-credit";
  TransactionType2["PeerPullDebit"] = "peer-pull-debit";
  TransactionType2["PeerPullCredit"] = "peer-pull-credit";
})(TransactionType || (TransactionType = {}));
var WithdrawalType;
(function(WithdrawalType2) {
  WithdrawalType2["TalerBankIntegrationApi"] = "taler-bank-integration-api";
  WithdrawalType2["ManualTransfer"] = "manual-transfer";
})(WithdrawalType || (WithdrawalType = {}));
var PaymentStatus;
(function(PaymentStatus2) {
  PaymentStatus2["Aborted"] = "aborted";
  PaymentStatus2["Failed"] = "failed";
  PaymentStatus2["Paid"] = "paid";
  PaymentStatus2["Accepted"] = "accepted";
})(PaymentStatus || (PaymentStatus = {}));

// ../taler-util/lib/wallet-types.js
var CoinStatus;
(function(CoinStatus2) {
  CoinStatus2["Fresh"] = "fresh";
  CoinStatus2["FreshSuspended"] = "fresh-suspended";
  CoinStatus2["Dormant"] = "dormant";
})(CoinStatus || (CoinStatus = {}));
var ConfirmPayResultType;
(function(ConfirmPayResultType2) {
  ConfirmPayResultType2["Done"] = "done";
  ConfirmPayResultType2["Pending"] = "pending";
})(ConfirmPayResultType || (ConfirmPayResultType = {}));
var PreparePayResultType;
(function(PreparePayResultType2) {
  PreparePayResultType2["PaymentPossible"] = "payment-possible";
  PreparePayResultType2["InsufficientBalance"] = "insufficient-balance";
  PreparePayResultType2["AlreadyConfirmed"] = "already-confirmed";
})(PreparePayResultType || (PreparePayResultType = {}));
var RefreshReason;
(function(RefreshReason2) {
  RefreshReason2["Manual"] = "manual";
  RefreshReason2["PayMerchant"] = "pay-merchant";
  RefreshReason2["PayDeposit"] = "pay-deposit";
  RefreshReason2["PayPeerPush"] = "pay-peer-push";
  RefreshReason2["PayPeerPull"] = "pay-peer-pull";
  RefreshReason2["Refund"] = "refund";
  RefreshReason2["AbortPay"] = "abort-pay";
  RefreshReason2["Recoup"] = "recoup";
  RefreshReason2["BackupRestored"] = "backup-restored";
  RefreshReason2["Scheduled"] = "scheduled";
})(RefreshReason || (RefreshReason = {}));
var ExchangeTosStatus;
(function(ExchangeTosStatus2) {
  ExchangeTosStatus2["New"] = "new";
  ExchangeTosStatus2["Accepted"] = "accepted";
  ExchangeTosStatus2["Changed"] = "changed";
  ExchangeTosStatus2["NotFound"] = "not-found";
  ExchangeTosStatus2["Unknown"] = "unknown";
})(ExchangeTosStatus || (ExchangeTosStatus = {}));
var ExchangeEntryStatus;
(function(ExchangeEntryStatus2) {
  ExchangeEntryStatus2["Unknown"] = "unknown";
  ExchangeEntryStatus2["Outdated"] = "outdated";
  ExchangeEntryStatus2["Ok"] = "ok";
})(ExchangeEntryStatus || (ExchangeEntryStatus = {}));
var RecoveryMergeStrategy;
(function(RecoveryMergeStrategy2) {
  RecoveryMergeStrategy2["Ours"] = "ours";
  RecoveryMergeStrategy2["Theirs"] = "theirs";
})(RecoveryMergeStrategy || (RecoveryMergeStrategy = {}));
var AttentionPriority;
(function(AttentionPriority2) {
  AttentionPriority2["High"] = "high";
  AttentionPriority2["Medium"] = "medium";
  AttentionPriority2["Low"] = "low";
})(AttentionPriority || (AttentionPriority = {}));
var AttentionType;
(function(AttentionType2) {
  AttentionType2["KycWithdrawal"] = "kyc-withdrawal";
  AttentionType2["BackupUnpaid"] = "backup-unpaid";
  AttentionType2["BackupExpiresSoon"] = "backup-expires-soon";
  AttentionType2["MerchantRefund"] = "merchant-refund";
  AttentionType2["ExchangeTosChanged"] = "exchange-tos-changed";
  AttentionType2["ExchangeKeyExpired"] = "exchange-key-expired";
  AttentionType2["ExchangeKeyExpiresSoon"] = "exchange-key-expires-soon";
  AttentionType2["ExchangeDenominationsExpired"] = "exchange-denominations-expired";
  AttentionType2["ExchangeDenominationsExpiresSoon"] = "exchange-denominations-expires-soon";
  AttentionType2["AuditorTosChanged"] = "auditor-tos-changed";
  AttentionType2["AuditorKeyExpires"] = "auditor-key-expires";
  AttentionType2["AuditorDenominationsExpires"] = "auditor-denominations-expires";
  AttentionType2["PullPaymentPaid"] = "pull-payment-paid";
  AttentionType2["PushPaymentReceived"] = "push-payment-withdrawn";
})(AttentionType || (AttentionType = {}));
var UserAttentionPriority = {
  "kyc-withdrawal": AttentionPriority.Medium,
  "backup-unpaid": AttentionPriority.High,
  "backup-expires-soon": AttentionPriority.Medium,
  "merchant-refund": AttentionPriority.Medium,
  "exchange-tos-changed": AttentionPriority.Medium,
  "exchange-key-expired": AttentionPriority.High,
  "exchange-key-expires-soon": AttentionPriority.Medium,
  "exchange-denominations-expired": AttentionPriority.High,
  "exchange-denominations-expires-soon": AttentionPriority.Medium,
  "auditor-tos-changed": AttentionPriority.Medium,
  "auditor-key-expires": AttentionPriority.Medium,
  "auditor-denominations-expires": AttentionPriority.Medium,
  "pull-payment-paid": AttentionPriority.High,
  "push-payment-withdrawn": AttentionPriority.High
};

// ../taler-util/lib/i18n.js
var jedLib = __toESM(require_jed(), 1);
var logger2 = new Logger("i18n/index.ts");
var jed = void 0;
function setupI18n(lang, strings2) {
  lang = lang.replace("_", "-");
  if (!strings2[lang]) {
    strings2[lang] = {};
  }
  jed = new jedLib.Jed(strings2[lang]);
}
function toI18nString(stringSeq) {
  let s3 = "";
  for (let i3 = 0; i3 < stringSeq.length; i3++) {
    s3 += stringSeq[i3];
    if (i3 < stringSeq.length - 1) {
      s3 += `%${i3 + 1}$s`;
    }
  }
  return s3;
}
function singular(stringSeq, ...values) {
  const s3 = toI18nString(stringSeq);
  const tr = jed.translate(s3).ifPlural(1, s3).fetch(...values);
  return tr;
}
function translate(stringSeq, ...values) {
  const s3 = toI18nString(stringSeq);
  if (!s3)
    return [];
  const translation = jed.ngettext(s3, s3, 1);
  return replacePlaceholderWithValues(translation, values);
}
function Translate({ children, debug }) {
  const c3 = [].concat(children);
  const s3 = stringifyArray(c3);
  if (!s3)
    return [];
  const translation = jed.ngettext(s3, s3, 1);
  if (debug) {
    console.log("looking for ", s3, "got", translation);
  }
  return replacePlaceholderWithValues(translation, c3);
}
function replacePlaceholderWithValues(translation, childArray) {
  const tr = translation.split(/%(\d+)\$s/);
  const placeholderChildren = [];
  for (let i3 = 0; i3 < childArray.length; i3++) {
    const x5 = childArray[i3];
    if (x5 === void 0) {
      continue;
    } else if (typeof x5 === "string") {
      continue;
    } else {
      placeholderChildren.push(x5);
    }
  }
  const result = [];
  for (let i3 = 0; i3 < tr.length; i3++) {
    if (i3 % 2 == 0) {
      result.push(tr[i3]);
    } else {
      const childIdx = Number.parseInt(tr[i3]) - 1;
      result.push(placeholderChildren[childIdx]);
    }
  }
  return result;
}
function stringifyArray(children) {
  let n2 = 1;
  const ss = children.map((c3) => {
    if (typeof c3 === "string") {
      return c3;
    }
    return `%${n2++}$s`;
  });
  const s3 = ss.join("").replace(/ +/g, " ").trim();
  return s3;
}
var i18n = {
  str: singular,
  singular,
  Translate,
  translate
};

// ../taler-util/lib/fnutils.js
var fnutil;
(function(fnutil2) {
  function all(arr, f3) {
    for (const x5 of arr) {
      if (!f3(x5)) {
        return false;
      }
    }
    return true;
  }
  fnutil2.all = all;
  function any(arr, f3) {
    for (const x5 of arr) {
      if (f3(x5)) {
        return true;
      }
    }
    return false;
  }
  fnutil2.any = any;
})(fnutil || (fnutil = {}));

// ../taler-util/lib/http-status-codes.js
var HttpStatusCode;
(function(HttpStatusCode2) {
  HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
  HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
  HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
  HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
  HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
  HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
  HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
  HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
  HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
  HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
  HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
  HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
  HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
  HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
  HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
  HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
  HttpStatusCode2[HttpStatusCode2["SwitchProxy"] = 306] = "SwitchProxy";
  HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
  HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
  HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
  HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
  HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
  HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
  HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
  HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
  HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
  HttpStatusCode2[HttpStatusCode2["IAmATeapot"] = 418] = "IAmATeapot";
  HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
  HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
  HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
  HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
  HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
  HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
  HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
  HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
  HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
  HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
  HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
  HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
  HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));

// ../taler-util/lib/RequestThrottler.js
var logger3 = new Logger("RequestThrottler.ts");

// ../taler-util/lib/CancellationToken.js
var NOOP = () => {
};
var CancellationToken = class {
  constructor(_isCancelled, _canBeCancelled) {
    this._isCancelled = _isCancelled;
    this._canBeCancelled = _canBeCancelled;
    this._callbacks = /* @__PURE__ */ new Set();
  }
  get isCancelled() {
    return this._isCancelled;
  }
  get canBeCancelled() {
    return this._canBeCancelled;
  }
  get reason() {
    if (this.isCancelled) {
      return this._reason;
    } else {
      throw new Error("This token is not cancelled.");
    }
  }
  racePromise(asyncOperation) {
    if (!this.canBeCancelled) {
      return asyncOperation;
    }
    return new Promise((resolve, reject) => {
      const unregister = this.onCancelled((reason) => reject(new CancellationToken.CancellationError(reason)));
      asyncOperation.then((value) => {
        resolve(value);
        unregister();
      }, (err) => {
        reject(err);
        unregister();
      });
    });
  }
  throwIfCancelled() {
    if (this._isCancelled) {
      throw new CancellationToken.CancellationError(this._reason);
    }
  }
  onCancelled(cb) {
    var _a2;
    if (!this.canBeCancelled) {
      return NOOP;
    }
    if (this.isCancelled) {
      cb(this.reason);
      return NOOP;
    }
    (_a2 = this._callbacks) === null || _a2 === void 0 ? void 0 : _a2.add(cb);
    return () => {
      var _a3;
      return (_a3 = this._callbacks) === null || _a3 === void 0 ? void 0 : _a3.delete(cb);
    };
  }
  static create() {
    const token = new CancellationToken(false, true);
    const cancel = (reason) => {
      var _a2;
      if (token._isCancelled)
        return;
      token._isCancelled = true;
      token._reason = reason;
      (_a2 = token._callbacks) === null || _a2 === void 0 ? void 0 : _a2.forEach((cb) => cb(reason));
      dispose();
    };
    const dispose = () => {
      token._canBeCancelled = token.isCancelled;
      delete token._callbacks;
    };
    return { token, cancel, dispose };
  }
  static timeout(ms) {
    const { token, cancel: originalCancel, dispose: originalDispose } = CancellationToken.create();
    let timer;
    timer = setTimeout(() => originalCancel(CancellationToken.timeout), ms);
    const disposeTimer = () => {
      if (timer == null)
        return;
      clearTimeout(timer);
      timer = null;
    };
    const cancel = (reason) => {
      disposeTimer();
      originalCancel(reason);
    };
    const dispose = () => {
      disposeTimer();
      originalDispose();
    };
    return { token, cancel, dispose };
  }
  static all(...tokens) {
    if (tokens.some((token) => !token.canBeCancelled)) {
      return CancellationToken.CONTINUE;
    }
    const combined = CancellationToken.create();
    let countdown = tokens.length;
    const handleNextTokenCancelled = () => {
      if (--countdown === 0) {
        const reasons = tokens.map((token) => token._reason);
        combined.cancel(reasons);
      }
    };
    tokens.forEach((token) => token.onCancelled(handleNextTokenCancelled));
    return combined.token;
  }
  static race(...tokens) {
    for (const token of tokens) {
      if (token._isCancelled) {
        return token;
      }
    }
    const combined = CancellationToken.create();
    let unregistrations;
    const handleAnyTokenCancelled = (reason) => {
      unregistrations.forEach((unregister) => unregister());
      combined.cancel(reason);
    };
    unregistrations = tokens.map((token) => token.onCancelled(handleAnyTokenCancelled));
    return combined.token;
  }
};
CancellationToken.CANCELLED = new CancellationToken(true, true);
CancellationToken.CONTINUE = new CancellationToken(false, false);
(function(CancellationToken2) {
  class CancellationError extends Error {
    constructor(reason) {
      super("Operation cancelled");
      this.reason = reason;
      Object.setPrototypeOf(this, CancellationError.prototype);
    }
  }
  CancellationToken2.CancellationError = CancellationError;
})(CancellationToken || (CancellationToken = {}));

// ../taler-util/lib/contract-terms.js
var logger4 = new Logger("contractTerms.ts");
var ContractTermsUtil;
(function(ContractTermsUtil2) {
  function forgetAllImpl(anyJson, path, pred) {
    const dup = JSON.parse(JSON.stringify(anyJson));
    if (Array.isArray(dup)) {
      for (let i3 = 0; i3 < dup.length; i3++) {
        dup[i3] = forgetAllImpl(dup[i3], [...path, `${i3}`], pred);
      }
    } else if (typeof dup === "object" && dup != null) {
      if (typeof dup.$forgettable === "object") {
        for (const x5 of Object.keys(dup.$forgettable)) {
          if (!pred([...path, x5])) {
            continue;
          }
          if (!dup.$forgotten) {
            dup.$forgotten = {};
          }
          if (!dup.$forgotten[x5]) {
            const membValCanon = stringToBytes(canonicalJson(scrub(dup[x5])) + "\0");
            const membSalt = stringToBytes(dup.$forgettable[x5] + "\0");
            const h3 = kdf(64, membValCanon, membSalt, new Uint8Array([]));
            dup.$forgotten[x5] = encodeCrock(h3);
          }
          delete dup[x5];
          delete dup.$forgettable[x5];
        }
        if (Object.keys(dup.$forgettable).length === 0) {
          delete dup.$forgettable;
        }
      }
      for (const x5 of Object.keys(dup)) {
        if (x5.startsWith("$")) {
          continue;
        }
        dup[x5] = forgetAllImpl(dup[x5], [...path, x5], pred);
      }
    }
    return dup;
  }
  ContractTermsUtil2.forgetAllImpl = forgetAllImpl;
  function scrub(anyJson) {
    return forgetAllImpl(anyJson, [], () => true);
  }
  ContractTermsUtil2.scrub = scrub;
  function forgetAll(anyJson, pred) {
    return forgetAllImpl(anyJson, [], pred);
  }
  ContractTermsUtil2.forgetAll = forgetAll;
  function saltForgettable(anyJson) {
    const dup = JSON.parse(JSON.stringify(anyJson));
    if (Array.isArray(dup)) {
      for (let i3 = 0; i3 < dup.length; i3++) {
        dup[i3] = saltForgettable(dup[i3]);
      }
    } else if (typeof dup === "object" && dup !== null) {
      if (typeof dup.$forgettable === "object") {
        for (const k3 of Object.keys(dup.$forgettable)) {
          if (dup.$forgettable[k3] === true) {
            dup.$forgettable[k3] = encodeCrock(getRandomBytes(32));
          }
        }
      }
      for (const x5 of Object.keys(dup)) {
        if (x5.startsWith("$")) {
          continue;
        }
        dup[x5] = saltForgettable(dup[x5]);
      }
    }
    return dup;
  }
  ContractTermsUtil2.saltForgettable = saltForgettable;
  const nameRegex = /^[0-9A-Za-z_]+$/;
  function validateForgettable(anyJson) {
    var _a2;
    if (typeof anyJson === "string") {
      return true;
    }
    if (typeof anyJson === "number") {
      return Number.isInteger(anyJson) && anyJson >= Number.MIN_SAFE_INTEGER && anyJson <= Number.MAX_SAFE_INTEGER;
    }
    if (typeof anyJson === "boolean") {
      return true;
    }
    if (anyJson === null) {
      return true;
    }
    if (Array.isArray(anyJson)) {
      return anyJson.every((x5) => validateForgettable(x5));
    }
    if (typeof anyJson === "object") {
      for (const k3 of Object.keys(anyJson)) {
        if (k3.match(nameRegex)) {
          if (validateForgettable(anyJson[k3])) {
            continue;
          } else {
            return false;
          }
        }
        if (k3 === "$forgettable") {
          const fga = anyJson.$forgettable;
          if (!fga || typeof fga !== "object") {
            return false;
          }
          for (const fk of Object.keys(fga)) {
            if (!fk.match(nameRegex)) {
              return false;
            }
            if (!(fk in anyJson)) {
              return false;
            }
            const fv = anyJson.$forgettable[fk];
            if (typeof fv !== "string") {
              return false;
            }
          }
        } else if (k3 === "$forgotten") {
          const fgo = anyJson.$forgotten;
          if (!fgo || typeof fgo !== "object") {
            return false;
          }
          for (const fk of Object.keys(fgo)) {
            if (!fk.match(nameRegex)) {
              return false;
            }
            if (fk in anyJson) {
              return false;
            }
            const fv = anyJson.$forgotten[fk];
            if (typeof fv !== "string") {
              return false;
            }
            try {
              const decFv = decodeCrock(fv);
              if (decFv.length != 64) {
                return false;
              }
            } catch (e3) {
              return false;
            }
            if (((_a2 = anyJson.$forgettable) === null || _a2 === void 0 ? void 0 : _a2[k3]) !== void 0) {
              return false;
            }
          }
        } else {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  ContractTermsUtil2.validateForgettable = validateForgettable;
  function validateNothingForgotten(contractTerms) {
    throw Error("not implemented yet");
  }
  ContractTermsUtil2.validateNothingForgotten = validateNothingForgotten;
  function hashContractTerms(contractTerms) {
    const cleaned = scrub(contractTerms);
    const canon = canonicalJson(cleaned) + "\0";
    const bytes = stringToBytes(canon);
    return encodeCrock(hash2(bytes));
  }
  ContractTermsUtil2.hashContractTerms = hashContractTerms;
})(ContractTermsUtil || (ContractTermsUtil = {}));

// ../taler-util/lib/index.browser.js
loadBrowserPrng();

// ../../node_modules/.pnpm/preact@10.11.3/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function a(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function h(l3, u3, i3) {
  var t3, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
  return v(l3, f3, t3, o3, null);
}
function v(n2, i3, t3, o3, r3) {
  var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function p2(n2) {
  return n2.children;
}
function d(n2, l3) {
  this.props = n2, this.context = l3;
}
function _(n2, l3) {
  if (null == l3)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t3, o3, r3;
      n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
    });
}
function w(n2, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
  var h3, y3, d3, k3, b3, g4, w4, x5 = i3 && i3.__k || e, C3 = x5.length;
  for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
    if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p2, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x5[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x5[h3] = void 0;
      else
        for (y3 = 0; y3 < C3; y3++) {
          if ((d3 = x5[y3]) && k3.key == d3.key && k3.type === d3.type) {
            x5[y3] = void 0;
            break;
          }
          d3 = null;
        }
      j(n2, k3, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b3 = k3.__e, (y3 = k3.ref) && d3.ref != y3 && (w4 || (w4 = []), d3.ref && w4.push(d3.ref, null, k3), w4.push(y3, k3.__c || b3, k3)), null != b3 ? (null == g4 && (g4 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s3 = m(k3, s3, n2) : s3 = A2(n2, k3, d3, x5, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
    }
  for (u3.__e = g4, h3 = C3; h3--; )
    null != x5[h3] && N(x5[h3], x5[h3]);
  if (w4)
    for (h3 = 0; h3 < w4.length; h3++)
      M2(w4[h3], w4[++h3], w4[++h3]);
}
function m(n2, l3, u3) {
  for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
    (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A2(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
function x2(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    x2(n3, l3);
  }) : l3.push(n2)), l3;
}
function A2(n2, l3, u3, i3, t3, o3) {
  var r3, f3, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o3 || null == t3.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n2)
        n2.appendChild(t3), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t3.nextSibling;
}
function C(n2, l3, u3, i3, t3) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l3)
    t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
}
function $(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t3) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I2, o3) : n2.removeEventListener(l3, o3 ? T : I2, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
    }
}
function I2(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
  var a3, h3, v3, y3, _3, k3, b3, g4, m3, x5, A4, C3, $2, H3, I4, T4 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof T4) {
        if (g4 = u3.props, m3 = (a3 = T4.contextType) && t3[a3.__c], x5 = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in T4 && T4.prototype.render ? u3.__c = h3 = new T4(g4, x5) : (u3.__c = h3 = new d(g4, x5), h3.constructor = T4, h3.render = O), m3 && m3.sub(h3), h3.props = g4, h3.state || (h3.state = {}), h3.context = x5, h3.__n = t3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != T4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, T4.getDerivedStateFromProps(g4, h3.__s))), y3 = h3.props, _3 = h3.state, v3)
          null == T4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (null == T4.getDerivedStateFromProps && g4 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g4, x5), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g4, h3.__s, x5) || u3.__v === i3.__v) {
            for (h3.props = g4, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), A4 = 0; A4 < h3._sb.length; A4++)
              h3.__h.push(h3._sb[A4]);
            h3._sb = [], h3.__h.length && f3.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(g4, h3.__s, x5), null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(y3, _3, k3);
          });
        }
        if (h3.context = x5, h3.props = g4, h3.__v = u3, h3.__P = n2, C3 = l.__r, $2 = 0, "prototype" in T4 && T4.prototype.render) {
          for (h3.state = h3.__s, h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++)
            h3.__h.push(h3._sb[H3]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++$2 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y3, _3)), I4 = null != a3 && a3.type === p2 && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I4) ? I4 : [I4], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L2(i3.__e, u3, i3, t3, o3, r3, f3, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L2(l3, u3, i3, t3, o3, r3, e3, c3) {
  var s3, h3, v3, y3 = i3.props, p4 = u3.props, d3 = u3.type, k3 = 0;
  if ("svg" === d3 && (o3 = true), null != r3) {
    for (; k3 < r3.length; k3++)
      if ((s3 = r3[k3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l3 = s3, r3[k3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p4);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p4.is && p4), r3 = null, c3 = false;
  }
  if (null === d3)
    y3 === p4 || c3 && l3.data === p4 || (l3.data = p4);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h3 = (y3 = i3.props || f).dangerouslySetInnerHTML, v3 = p4.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y3 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
          y3[l3.attributes[k3].name] = l3.attributes[k3].value;
      (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p4, y3, o3, c3), v3)
      u3.__k = [];
    else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k3 = r3.length; k3--; )
        null != r3[k3] && a(r3[k3]);
    c3 || ("value" in p4 && void 0 !== (k3 = p4.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y3.value) && H(l3, "value", k3, y3.value, false), "checked" in p4 && void 0 !== (k3 = p4.checked) && k3 !== l3.checked && H(l3, "checked", k3, y3.checked, false));
  }
  return l3;
}
function M2(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t3, o3;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M2(t3, null, u3)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t3.base = t3.__P = null, n2.__c = void 0;
  }
  if (t3 = n2.__k)
    for (o3 = 0; o3 < t3.length; o3++)
      t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n2.type);
  i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function P(u3, i3, t3) {
  var o3, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p2, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
}
function q(l3, u3, i3) {
  var t3, o3, r3, f3 = s({}, l3.props);
  for (r3 in u3)
    "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), v(l3.type, f3, t3 || l3.key, o3 || l3.ref, null);
}
function B(n2, l3) {
  var u3 = { __c: l3 = "__cC" + r++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(b);
    }, this.sub = function(n4) {
      u4.push(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = e.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t3, o3, r3; l3 = l3.__; )
    if ((t3 = l3.__c) && !t3.__)
      try {
        if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
          return t3.__E = t3;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p2, t = [], g.__r = 0, r = 0;

// ../../node_modules/.pnpm/preact@10.11.3/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function d2(t3, u3) {
  l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
  var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
}
function p3(n2) {
  return o2 = 1, y(B2, n2);
}
function y(n2, u3, i3) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.u)) {
    r2.u = true;
    var f3 = r2.shouldComponentUpdate;
    r2.shouldComponentUpdate = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      }))
        return !f3 || f3.call(this, n3, t3, r3);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
    };
  }
  return o3.__N || o3.__;
}
function h2(u3, i3) {
  var o3 = d2(t2++, 3);
  !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
}
function s2(u3, i3) {
  var o3 = d2(t2++, 4);
  !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
}
function _2(n2) {
  return o2 = 5, F(function() {
    return { current: n2 };
  }, []);
}
function F(n2, r3) {
  var u3 = d2(t2++, 7);
  return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
}
function T2(n2, t3) {
  return o2 = 8, F(function() {
    return n2;
  }, t3);
}
function q2(n2) {
  var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
}
function x3(t3, r3) {
  l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
}
function b2() {
  for (var t3; t3 = f2.shift(); )
    if (t3.__P && t3.__H)
      try {
        t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
      } catch (r3) {
        t3.__H.__h = [], l.__e(r3, t3.__v);
      }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var o3 = t3.__c;
  o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t3, r3) {
  r3.some(function(t4) {
    try {
      t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t4.__v);
    }
  }), l2 && l2(t3, r3);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var r3, u3 = t3.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  g2 && (t3 = requestAnimationFrame(r3));
}
function k2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function w2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function z2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function B2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// ../web-util/lib/index.browser.mjs
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = p3(
    () => {
      return typeof window !== "undefined" ? window.localStorage.getItem(key) || initialValue : initialValue;
    }
  );
  h2(() => {
    const listener = buildListenerForKey(key, (newValue) => {
      setStoredValue(newValue != null ? newValue : initialValue);
    });
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);
  const setValue = (value) => {
    setStoredValue((p4) => {
      const toStore = value instanceof Function ? value(p4) : value;
      if (typeof window !== "undefined") {
        if (!toStore) {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, toStore);
        }
      }
      return toStore;
    });
  };
  return [storedValue, setValue];
}
function buildListenerForKey(key, onUpdate) {
  return function listenKeyChange() {
    const value = window.localStorage.getItem(key);
    onUpdate(value != null ? value : void 0);
  };
}
function useNotNullLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = p3(() => {
    return typeof window !== "undefined" ? window.localStorage.getItem(key) || initialValue : initialValue;
  });
  h2(() => {
    const listener = buildListenerForKey(key, (newValue) => {
      setStoredValue(newValue != null ? newValue : initialValue);
    });
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  });
  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    if (typeof window !== "undefined") {
      if (!valueToStore) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, valueToStore);
      }
    }
  };
  const isSaved = window.localStorage.getItem(key) !== null;
  return [storedValue, setValue, isSaved];
}
function getBrowserLang() {
  if (window.navigator.languages)
    return window.navigator.languages[0];
  if (window.navigator.language)
    return window.navigator.language;
  return void 0;
}
function useLang(initial22) {
  const defaultLang = (getBrowserLang() || initial22 || "en").substring(0, 2);
  return useNotNullLocalStorage("lang-preference", defaultLang);
}
var supportedLang = {
  es: "Espanol [es]",
  en: "English [en]",
  fr: "Francais [fr]",
  de: "Deutsch [de]",
  sv: "Svenska [sv]",
  it: "Italiane [it]",
  navigator: "Defined by navigator"
};
var initial = {
  lang: "en",
  supportedLang,
  changeLanguage: () => {
  },
  i18n,
  isSaved: false
};
var Context = B(initial);
var TranslationProvider = ({
  initial: initial22,
  children,
  forceLang,
  source
}) => {
  const [lang, changeLanguage, isSaved] = useLang(initial22);
  h2(() => {
    if (forceLang) {
      changeLanguage(forceLang);
    }
  });
  h2(() => {
    setupI18n(lang, source);
  }, [lang]);
  if (forceLang) {
    setupI18n(forceLang, source);
  } else {
    setupI18n(lang, source);
  }
  return h(Context.Provider, {
    value: { lang, changeLanguage, supportedLang, i18n, isSaved },
    children
  });
};
var useTranslationContext = () => q2(Context);

// src/hooks/backend.ts
var defaultState = { status: "loggedOut" };
function useBackendState() {
  const [value, update] = useLocalStorage(
    "backend-state",
    JSON.stringify(defaultState)
  );
  let parsed;
  try {
    parsed = JSON.parse(value);
  } catch (e3) {
    parsed = void 0;
  }
  const state = !(parsed == null ? void 0 : parsed.status) ? defaultState : parsed;
  return {
    state,
    clear() {
      update(JSON.stringify(defaultState));
    },
    save(info) {
      const nextState = __spreadValues({ status: "loggedIn" }, info);
      update(JSON.stringify(nextState));
    }
  };
}

// src/context/backend.ts
var initial2 = {
  state: defaultState,
  clear() {
    null;
  },
  save(info) {
    null;
  }
};
var Context2 = B(initial2);
var useBackendContext = () => q2(Context2);
var BackendStateProvider = ({
  children
}) => {
  const value = useBackendState();
  return h(Context2.Provider, {
    value,
    children
  });
};

// src/context/pageState.ts
var initial3 = {
  pageState: {
    isRawPayto: false,
    withdrawalInProgress: false
  },
  pageStateSetter: () => {
    null;
  }
};
var Context3 = B(initial3);
var usePageContext = () => q2(Context3);
var PageStateProvider = ({
  children
}) => {
  const [pageState, pageStateSetter] = usePageState();
  return h(Context3.Provider, {
    value: { pageState, pageStateSetter },
    children
  });
};
function usePageState(state = {
  isRawPayto: false,
  withdrawalInProgress: false
}) {
  const ret = useNotNullLocalStorage("page-state", JSON.stringify(state));
  const retObj = JSON.parse(ret[0]);
  const retSetter = function(val) {
    const newVal = val instanceof Function ? JSON.stringify(val(retObj)) : JSON.stringify(val);
    ret[1](newVal);
  };
  function removeLatestInfo(val) {
    const updater = typeof val === "function" ? val : (c3) => val;
    return retSetter((current) => {
      const cleanedCurrent = __spreadProps(__spreadValues({}, current), {
        info: void 0,
        errors: void 0,
        timestamp: new Date().getTime()
      });
      return updater(cleanedCurrent);
    });
  }
  return [retObj, removeLatestInfo];
}

// ../../node_modules/.pnpm/@babel+runtime@7.19.4/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// ../../node_modules/.pnpm/resolve-pathname@3.0.0/node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === "/";
}
function spliceOne(list, index) {
  for (var i3 = index, k3 = i3 + 1, n2 = list.length; k3 < n2; i3 += 1, k3 += 1) {
    list[i3] = list[k3];
  }
  list.pop();
}
function resolvePathname(to, from) {
  if (from === void 0)
    from = "";
  var toParts = to && to.split("/") || [];
  var fromParts = from && from.split("/") || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;
  if (to && isAbsolute(to)) {
    fromParts = toParts;
  } else if (toParts.length) {
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }
  if (!fromParts.length)
    return "/";
  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === "." || last === ".." || last === "";
  } else {
    hasTrailingSlash = false;
  }
  var up = 0;
  for (var i3 = fromParts.length; i3 >= 0; i3--) {
    var part = fromParts[i3];
    if (part === ".") {
      spliceOne(fromParts, i3);
    } else if (part === "..") {
      spliceOne(fromParts, i3);
      up++;
    } else if (up) {
      spliceOne(fromParts, i3);
      up--;
    }
  }
  if (!mustEndAbs)
    for (; up--; up)
      fromParts.unshift("..");
  if (mustEndAbs && fromParts[0] !== "" && (!fromParts[0] || !isAbsolute(fromParts[0])))
    fromParts.unshift("");
  var result = fromParts.join("/");
  if (hasTrailingSlash && result.substr(-1) !== "/")
    result += "/";
  return result;
}
var resolve_pathname_default = resolvePathname;

// ../../node_modules/.pnpm/tiny-warning@1.0.3/node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x5) {
    }
  }
}
var tiny_warning_esm_default = warning;

// ../../node_modules/.pnpm/tiny-invariant@1.3.1/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction2 = false;
var prefix = "Invariant failed";
function invariant2(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction2) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js
function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
function hasBasename(path, prefix2) {
  return path.toLowerCase().indexOf(prefix2.toLowerCase()) === 0 && "/?#".indexOf(path.charAt(prefix2.length)) !== -1;
}
function stripBasename(path, prefix2) {
  return hasBasename(path, prefix2) ? path.substr(prefix2.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash3 = "";
  var hashIndex = pathname.indexOf("#");
  if (hashIndex !== -1) {
    hash3 = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }
  var searchIndex = pathname.indexOf("?");
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }
  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash3 === "#" ? "" : hash3
  };
}
function createPath(location2) {
  var pathname = location2.pathname, search = location2.search, hash3 = location2.hash;
  var path = pathname || "/";
  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : "?" + search;
  if (hash3 && hash3 !== "#")
    path += hash3.charAt(0) === "#" ? hash3 : "#" + hash3;
  return path;
}
function createLocation(path, state, key, currentLocation) {
  var location2;
  if (typeof path === "string") {
    location2 = parsePath(path);
    location2.state = state;
  } else {
    location2 = _extends({}, path);
    if (location2.pathname === void 0)
      location2.pathname = "";
    if (location2.search) {
      if (location2.search.charAt(0) !== "?")
        location2.search = "?" + location2.search;
    } else {
      location2.search = "";
    }
    if (location2.hash) {
      if (location2.hash.charAt(0) !== "#")
        location2.hash = "#" + location2.hash;
    } else {
      location2.hash = "";
    }
    if (state !== void 0 && location2.state === void 0)
      location2.state = state;
  }
  try {
    location2.pathname = decodeURI(location2.pathname);
  } catch (e3) {
    if (e3 instanceof URIError) {
      throw new URIError('Pathname "' + location2.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.');
    } else {
      throw e3;
    }
  }
  if (key)
    location2.key = key;
  if (currentLocation) {
    if (!location2.pathname) {
      location2.pathname = currentLocation.pathname;
    } else if (location2.pathname.charAt(0) !== "/") {
      location2.pathname = resolve_pathname_default(location2.pathname, currentLocation.pathname);
    }
  } else {
    if (!location2.pathname) {
      location2.pathname = "/";
    }
  }
  return location2;
}
function createTransitionManager() {
  var prompt = null;
  function setPrompt(nextPrompt) {
    true ? tiny_warning_esm_default(prompt == null, "A history supports only one prompt at a time") : void 0;
    prompt = nextPrompt;
    return function() {
      if (prompt === nextPrompt)
        prompt = null;
    };
  }
  function confirmTransitionTo(location2, action, getUserConfirmation, callback) {
    if (prompt != null) {
      var result = typeof prompt === "function" ? prompt(location2, action) : prompt;
      if (typeof result === "string") {
        if (typeof getUserConfirmation === "function") {
          getUserConfirmation(result, callback);
        } else {
          true ? tiny_warning_esm_default(false, "A history needs a getUserConfirmation function in order to use a prompt message") : void 0;
          callback(true);
        }
      } else {
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }
  var listeners = [];
  function appendListener(fn) {
    var isActive = true;
    function listener() {
      if (isActive)
        fn.apply(void 0, arguments);
    }
    listeners.push(listener);
    return function() {
      isActive = false;
      listeners = listeners.filter(function(item) {
        return item !== listener;
      });
    };
  }
  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    listeners.forEach(function(listener) {
      return listener.apply(void 0, args);
    });
  }
  return {
    setPrompt,
    confirmTransitionTo,
    appendListener,
    notifyListeners
  };
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message));
}
function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
var HashChangeEvent$1 = "hashchange";
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === "!" ? path : "!/" + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === "!" ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};
function stripHash(url) {
  var hashIndex = url.indexOf("#");
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}
function getHashPath() {
  var href = window.location.href;
  var hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.substring(hashIndex + 1);
}
function pushHashPath(path) {
  window.location.hash = path;
}
function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + "#" + path);
}
function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }
  !canUseDOM ? true ? invariant2(false, "Hash history needs a DOM") : invariant2(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? "slash" : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : "";
  var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath2 = _HashPathCoders$hashT.encodePath, decodePath2 = _HashPathCoders$hashT.decodePath;
  function getDOMLocation() {
    var path2 = decodePath2(getHashPath());
    true ? tiny_warning_esm_default(!basename || hasBasename(path2, basename), 'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "' + path2 + '" to begin with "' + basename + '".') : void 0;
    if (basename)
      path2 = stripBasename(path2, basename);
    return createLocation(path2);
  }
  var transitionManager = createTransitionManager();
  function setState(nextState) {
    _extends(history2, nextState);
    history2.length = globalHistory.length;
    transitionManager.notifyListeners(history2.location, history2.action);
  }
  var forceNextPop = false;
  var ignorePath = null;
  function locationsAreEqual$$1(a3, b3) {
    return a3.pathname === b3.pathname && a3.search === b3.search && a3.hash === b3.hash;
  }
  function handleHashChange() {
    var path2 = getHashPath();
    var encodedPath2 = encodePath2(path2);
    if (path2 !== encodedPath2) {
      replaceHashPath(encodedPath2);
    } else {
      var location2 = getDOMLocation();
      var prevLocation = history2.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location2))
        return;
      if (ignorePath === createPath(location2))
        return;
      ignorePath = null;
      handlePop(location2);
    }
  }
  function handlePop(location2) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = "POP";
      transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
        if (ok) {
          setState({
            action,
            location: location2
          });
        } else {
          revertPop(location2);
        }
      });
    }
  }
  function revertPop(fromLocation) {
    var toLocation = history2.location;
    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1)
      toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1)
      fromIndex = 0;
    var delta = toIndex - fromIndex;
    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }
  var path = getHashPath();
  var encodedPath = encodePath2(path);
  if (path !== encodedPath)
    replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];
  function createHref(location2) {
    var baseTag = document.querySelector("base");
    var href = "";
    if (baseTag && baseTag.getAttribute("href")) {
      href = stripHash(window.location.href);
    }
    return href + "#" + encodePath2(basename + createPath(location2));
  }
  function push(path2, state) {
    true ? tiny_warning_esm_default(state === void 0, "Hash history cannot push state; it is ignored") : void 0;
    var action = "PUSH";
    var location2 = createLocation(path2, void 0, void 0, history2.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        pushHashPath(encodedPath2);
        var prevIndex = allPaths.lastIndexOf(createPath(history2.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path3);
        allPaths = nextPaths;
        setState({
          action,
          location: location2
        });
      } else {
        true ? tiny_warning_esm_default(false, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack") : void 0;
        setState();
      }
    });
  }
  function replace(path2, state) {
    true ? tiny_warning_esm_default(state === void 0, "Hash history cannot replace state; it is ignored") : void 0;
    var action = "REPLACE";
    var location2 = createLocation(path2, void 0, void 0, history2.location);
    transitionManager.confirmTransitionTo(location2, action, getUserConfirmation, function(ok) {
      if (!ok)
        return;
      var path3 = createPath(location2);
      var encodedPath2 = encodePath2(basename + path3);
      var hashChanged = getHashPath() !== encodedPath2;
      if (hashChanged) {
        ignorePath = path3;
        replaceHashPath(encodedPath2);
      }
      var prevIndex = allPaths.indexOf(createPath(history2.location));
      if (prevIndex !== -1)
        allPaths[prevIndex] = path3;
      setState({
        action,
        location: location2
      });
    });
  }
  function go(n2) {
    true ? tiny_warning_esm_default(canGoWithoutReload, "Hash history go(n) causes a full page reload in this browser") : void 0;
    globalHistory.go(n2);
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  var listenerCount = 0;
  function checkDOMListeners(delta) {
    listenerCount += delta;
    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }
  var isBlocked = false;
  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }
    var unblock = transitionManager.setPrompt(prompt);
    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }
    return function() {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }
      return unblock();
    };
  }
  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function() {
      checkDOMListeners(-1);
      unlisten();
    };
  }
  var history2 = {
    length: globalHistory.length,
    action: "POP",
    location: initialLocation,
    createHref,
    push,
    replace,
    go,
    goBack,
    goForward,
    block,
    listen
  };
  return history2;
}

// ../../node_modules/.pnpm/preact-router@3.2.1_preact@10.11.3/node_modules/preact-router/dist/preact-router.es.js
var EMPTY$1 = {};
function assign(obj, props) {
  for (var i3 in props) {
    obj[i3] = props[i3];
  }
  return obj;
}
function exec(url, route2, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/, c3 = url.match(reg), matches = {}, ret;
  if (c3 && c3[1]) {
    var p4 = c3[1].split("&");
    for (var i3 = 0; i3 < p4.length; i3++) {
      var r3 = p4[i3].split("=");
      matches[decodeURIComponent(r3[0])] = decodeURIComponent(r3.slice(1).join("="));
    }
  }
  url = segmentize(url.replace(reg, ""));
  route2 = segmentize(route2 || "");
  var max = Math.max(url.length, route2.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route2[i$1] && route2[i$1].charAt(0) === ":") {
      var param = route2[i$1].replace(/(^:|[+*?]+$)/g, ""), flags = (route2[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || "", plus = ~flags.indexOf("+"), star = ~flags.indexOf("*"), val = url[i$1] || "";
      if (!val && !star && (flags.indexOf("?") < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join("/");
        break;
      }
    } else if (route2[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a3, b3) {
  return a3.rank < b3.rank ? 1 : a3.rank > b3.rank ? -1 : a3.index - b3.index;
}
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, "").split("/");
}
function rankSegment(segment) {
  return segment.charAt(0) == ":" ? 1 + "*+?".indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join("");
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0)
    type = "push";
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== "undefined" && history[type + "State"]) {
    history[type + "State"](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== "undefined" ? location : EMPTY;
  }
  return "" + (url.pathname || "") + (url.search || "");
}
function route(url, replace) {
  if (replace === void 0)
    replace = false;
  if (typeof url !== "string" && url.url) {
    replace = url.replace;
    url = url.url;
  }
  if (canRoute(url)) {
    setUrl(url, replace ? "replace" : "push");
  }
  return routeTo(url);
}
function canRoute(url) {
  for (var i3 = ROUTERS.length; i3--; ) {
    if (ROUTERS[i3].canRoute(url)) {
      return true;
    }
  }
  return false;
}
function routeTo(url) {
  var didRoute = false;
  for (var i3 = 0; i3 < ROUTERS.length; i3++) {
    if (ROUTERS[i3].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--; ) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute("href"), target = node.getAttribute("target");
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }
  return route(href);
}
function handleLinkClick(e3) {
  if (e3.ctrlKey || e3.metaKey || e3.altKey || e3.shiftKey || e3.button !== 0) {
    return;
  }
  routeFromLink(e3.currentTarget || e3.target || this);
  return prevent(e3);
}
function prevent(e3) {
  if (e3) {
    if (e3.stopImmediatePropagation) {
      e3.stopImmediatePropagation();
    }
    if (e3.stopPropagation) {
      e3.stopPropagation();
    }
    e3.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e3) {
  if (e3.ctrlKey || e3.metaKey || e3.altKey || e3.shiftKey || e3.button !== 0) {
    return;
  }
  var t3 = e3.target;
  do {
    if (String(t3.nodeName).toUpperCase() === "A" && t3.getAttribute("href")) {
      if (t3.hasAttribute("native")) {
        return;
      }
      if (routeFromLink(t3)) {
        return prevent(e3);
      }
    }
  } while (t3 = t3.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === "function") {
    if (!customHistory) {
      addEventListener("popstate", function() {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener("click", delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function(Component$$1) {
  function Router2(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1)
    Router2.__proto__ = Component$$1;
  Router2.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router2.prototype.constructor = Router2;
  Router2.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  Router2.prototype.canRoute = function canRoute2(url) {
    var children = x2(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  Router2.prototype.routeTo = function routeTo2(url) {
    this.setState({ url });
    var didRoute = this.canRoute(url);
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router2.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router2.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function(location2) {
        this$1.routeTo("" + (location2.pathname || "") + (location2.search || ""));
      });
    }
    this.updating = false;
  };
  Router2.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === "function") {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router2.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router2.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function(vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = { url, matches };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return q(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router2.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(x2(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === "function") {
        onChange({
          router: this,
          url,
          previous,
          active,
          current
        });
      }
    }
    return current;
  };
  return Router2;
}(d);
var Link = function(props) {
  return h("a", assign({ onClick: handleLinkClick }, props));
};
var Route = function(props) {
  return h(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
var preact_router_es_default = Router;

// node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3)
    n2[e3] = t3[e3];
  return n2;
}
function C2(n2, t3) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t3))
      return true;
  for (var r3 in t3)
    if ("__source" !== r3 && n2[r3] !== t3[r3])
      return true;
  return false;
}
function w3(n2) {
  this.props = n2;
}
(w3.prototype = new d()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
  return C2(this.props, n2) || C2(this.state, t3);
};
var x4 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x4 && x4(n2);
};
var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var T3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t3; o3 = o3.__; )
      if ((u3 = o3.__c) && u3.__c)
        return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  T3(n2, t3, e3, r3);
};
var I3 = l.unmount;
function L3(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L3(n3, t3, e3);
  })), n2;
}
function U(n2, t3, e3) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function D3() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F2(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function V2() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I3 && I3(n2);
}, (D3.prototype = new d()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = F2(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
        t4.forceUpdate();
    }
  }, c3 = true === t3.__h;
  r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, D3.prototype.componentWillUnmount = function() {
  this.t = [];
}, D3.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = L3(this.__b, r3, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && h(p2, null, n2.fallback);
  return i3 && (i3.__h = null), [h(p2, null, e3.__a ? null : n2.children), i3];
};
var W = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
(V2.prototype = new d()).__a = function(n2) {
  var t3 = this, e3 = F2(t3.__v), r3 = t3.o.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, V2.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t3 = x2(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; )
    this.o.set(t3[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e3) {
    W(n2, e3, t3);
  });
};
var z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var H2 = "undefined" != typeof document;
var Z2 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(d.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var G = l.event;
function J() {
}
function K3() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return G && (n2 = G(n2)), n2.persist = J, n2.isPropagationStopped = K3, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
};
var X2;
var nn = { configurable: true, get: function() {
  return this.class;
} };
var tn = l.vnode;
l.vnode = function(n2) {
  var t3 = n2.type, e3 = n2.props, u3 = e3;
  if ("string" == typeof t3) {
    var o3 = -1 === t3.indexOf("-");
    for (var i3 in u3 = {}, e3) {
      var l3 = e3[i3];
      H2 && "children" === i3 && "noscript" === t3 || "value" === i3 && "defaultValue" in e3 && null == l3 || ("defaultValue" === i3 && "value" in e3 && null == e3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : /ondoubleclick/i.test(i3) ? i3 = "ondblclick" : /^onchange(textarea|input)/i.test(i3 + t3) && !Z2(e3.type) ? i3 = "oninput" : /^onfocus$/i.test(i3) ? i3 = "onfocusin" : /^onblur$/i.test(i3) ? i3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i3) ? i3 = i3.toLowerCase() : o3 && B3.test(i3) ? i3 = i3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l3 && (l3 = void 0), /^oninput$/i.test(i3) && (i3 = i3.toLowerCase(), u3[i3] && (i3 = "oninputCapture")), u3[i3] = l3);
    }
    "select" == t3 && u3.multiple && Array.isArray(u3.value) && (u3.value = x2(e3.children).forEach(function(n3) {
      n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
    })), "select" == t3 && null != u3.defaultValue && (u3.value = x2(e3.children).forEach(function(n3) {
      n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
    })), n2.props = u3, e3.class != e3.className && (nn.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", nn));
  }
  n2.$$typeof = z3, tn && tn(n2);
};
var en = l.__r;
l.__r = function(n2) {
  en && en(n2), X2 = n2.__c;
};

// ../../node_modules/.pnpm/swr@1.3.0/node_modules/swr/dist/index.mjs
function __awaiter2(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f3, y3, t3, g4;
  return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n2) {
    return function(v3) {
      return step([n2, v3]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f3 = 1, y3 && (t3 = op[0] & 2 ? y3["return"] : op[0] ? y3["throw"] || ((t3 = y3["return"]) && t3.call(y3), 0) : y3.next) && !(t3 = t3.call(y3, op[1])).done)
          return t3;
        if (y3 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y3 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t3 = _3.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t3[1]) {
              _3.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _3.label < t3[2]) {
              _3.label = t3[2];
              _3.ops.push(op);
              break;
            }
            if (t3[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e3) {
        op = [6, e3];
        y3 = 0;
      } finally {
        f3 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var noop = function() {
};
var UNDEFINED = noop();
var OBJECT = Object;
var isUndefined = function(v3) {
  return v3 === UNDEFINED;
};
var isFunction = function(v3) {
  return typeof v3 == "function";
};
var mergeObjects = function(a3, b3) {
  return OBJECT.assign({}, a3, b3);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f3) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f3) : setTimeout(f3, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? h2 : s2;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var infoKey = key ? "$swr$" + key : "";
  return [key, args, infoKey];
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data, error2, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key];
  if (broadcast && updaters) {
    for (var i3 = 0; i3 < updaters.length; ++i3) {
      updaters[i3](data, error2, isValidating);
    }
  }
  if (revalidate) {
    delete FETCH[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter2(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data, error2, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
    return __generator2(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          customOptimisticData = options.optimisticData;
          _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
          if (!key)
            return [2];
          _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }
          data = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasCustomOptimisticData = !isUndefined(customOptimisticData);
          rollbackData = cache2.get(key);
          if (hasCustomOptimisticData) {
            optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
            cache2.set(key, optimisticData);
            broadcastState(cache2, key, optimisticData);
          }
          if (isFunction(data)) {
            try {
              data = data(cache2.get(key));
            } catch (err) {
              error2 = err;
            }
          }
          if (!(data && isFunction(data.then)))
            return [3, 2];
          return [
            4,
            data.catch(function(err) {
              error2 = err;
            })
          ];
        case 1:
          data = _c.sent();
          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error2)
              throw error2;
            return [2, data];
          } else if (error2 && hasCustomOptimisticData && rollbackOnError) {
            populateCache = true;
            data = rollbackData;
            cache2.set(key, rollbackData);
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error2) {
              if (isFunction(populateCache)) {
                data = populateCache(data, rollbackData);
              }
              cache2.set(key, data);
            }
            cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error: error2 }));
          }
          MUTATION[key][1] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data, error2, UNDEFINED, revalidate, !!populateCache)
          ];
        case 3:
          res = _c.sent();
          if (error2)
            throw error2;
          return [2, populateCache ? res : data];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = function(_3, __, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(/* @__PURE__ */ new Map());
var cache = _a[0];
var mutate = _a[1];
var defaultConfig = mergeObjects(
  {
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    compare: function(currentData, newData) {
      return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function() {
      return false;
    },
    cache,
    mutate,
    fallback: {}
  },
  preset
);
var mergeConfigs = function(a3, b3) {
  var v3 = mergeObjects(a3, b3);
  if (b3) {
    var u1 = a3.use, f1 = a3.fallback;
    var u22 = b3.use, f22 = b3.fallback;
    if (u1 && u22) {
      v3.use = u1.concat(u22);
    }
    if (f1 && f22) {
      v3.fallback = mergeObjects(f1, f22);
    }
  }
  return v3;
};
var SWRConfigContext = B({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs(q2(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = p3(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return h(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = p3({})[1];
  var stateRef = _2(state);
  var stateDependenciesRef = _2({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = T2(
    function(payload) {
      var shouldRerender = false;
      var currentState = stateRef.current;
      for (var _3 in payload) {
        var k3 = _3;
        if (currentState[k3] !== payload[k3]) {
          currentState[k3] = payload[k3];
          if (stateDependenciesRef.current[k3]) {
            shouldRerender = true;
          }
        }
      }
      if (shouldRerender && !unmountedRef.current) {
        rerender({});
      }
    },
    []
  );
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, q2(SWRConfigContext));
};
var withArgs = function(hook) {
  return function useSWRArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use = config.use;
    if (use) {
      for (var i3 = use.length; i3-- > 0; ) {
        next = use[i3](next);
      }
    }
    return next(key, fn || config.fetcher, config);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function(_key, fetcher, config) {
  var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
  var initialMountedRef = _2(false);
  var unmountedRef = _2(false);
  var keyRef = _2(key);
  var fetcherRef = _2(fetcher);
  var configRef = _2(config);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var patchFetchInfo = function(info2) {
    return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var info = cache2.get(keyInfo) || {};
  var error2 = info.error;
  var isInitialMount = !initialMountedRef.current;
  var shouldRevalidate = function() {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : config.revalidateIfStale;
    return isUndefined(data) || config.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher)
      return false;
    if (info.isValidating)
      return true;
    return isInitialMount && shouldRevalidate();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data,
    error: error2,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = T2(
    function(revalidateOpts) {
      return __awaiter2(void 0, void 0, void 0, function() {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a3;
        return __generator2(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              currentFetcher = fetcherRef.current;
              if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return [2, false];
              }
              loading = true;
              opts = revalidateOpts || {};
              shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
              isCurrentKeyMounted = function() {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
              };
              cleanupState = function() {
                var requestInfo = FETCH[key];
                if (requestInfo && requestInfo[1] === startAt) {
                  delete FETCH[key];
                }
              };
              newState = { isValidating: false };
              finishRequestAndUpdateState = function() {
                patchFetchInfo({ isValidating: false });
                if (isCurrentKeyMounted()) {
                  setState(newState);
                }
              };
              patchFetchInfo({
                isValidating: true
              });
              setState({ isValidating: true });
              _b2.label = 1;
            case 1:
              _b2.trys.push([1, 3, , 4]);
              if (shouldStartNewRequest) {
                broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                if (config.loadingTimeout && !cache2.get(key)) {
                  setTimeout(function() {
                    if (loading && isCurrentKeyMounted()) {
                      getConfig().onLoadingSlow(key, config);
                    }
                  }, config.loadingTimeout);
                }
                FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
              }
              _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
              return [4, newData];
            case 2:
              newData = _b2.sent();
              if (shouldStartNewRequest) {
                setTimeout(cleanupState, config.dedupingInterval);
              }
              if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              patchFetchInfo({
                error: UNDEFINED
              });
              newState.error = UNDEFINED;
              mutationInfo = MUTATION[key];
              if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              if (!compare(stateRef.current.data, newData)) {
                newState.data = newData;
              } else {
                newState.data = stateRef.current.data;
              }
              if (!compare(cache2.get(key), newData)) {
                cache2.set(key, newData);
              }
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onSuccess(newData, key, config);
                }
              }
              return [3, 4];
            case 3:
              err_1 = _b2.sent();
              cleanupState();
              if (!getConfig().isPaused()) {
                patchFetchInfo({ error: err_1 });
                newState.error = err_1;
                if (shouldStartNewRequest && isCurrentKeyMounted()) {
                  getConfig().onError(err_1, key, config);
                  if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                    if (isActive()) {
                      getConfig().onErrorRetry(err_1, key, config, revalidate, {
                        retryCount: (opts.retryCount || 0) + 1,
                        dedupe: true
                      });
                    }
                  }
                }
              }
              return [3, 4];
            case 4:
              loading = false;
              finishRequestAndUpdateState();
              if (isCurrentKeyMounted() && shouldStartNewRequest) {
                broadcastState(cache2, key, newState.data, newState.error, false);
              }
              return [2, true];
          }
        });
      });
    },
    [key]
  );
  var boundMutate = T2(
    internalMutate.bind(UNDEFINED, cache2, function() {
      return keyRef.current;
    }),
    []
  );
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher;
    configRef.current = config;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects(
        {
          error: updatedError,
          isValidating: updatedIsValidating
        },
        compare(stateRef.current.data, updatedData) ? UNDEFINED : {
          data: updatedData
        }
      ));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data,
        error: error2,
        isValidating
      });
    }
    if (shouldRevalidate()) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  x3(data);
  if (suspense && isUndefined(data) && key) {
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error2) ? revalidate(WITH_DEDUPE) : error2;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data;
    },
    get error() {
      stateDependencies.error = true;
      return error2;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// src/settings.ts
var defaultSettings = {
  allowRegistrations: true,
  bankName: "Taler Bank",
  showDemoNav: true,
  demoSites: [
    ["Landing", "https://demo.taler.net/"],
    ["Bank", "https://bank.demo.taler.net/"],
    ["Essay Shop", "https://shop.demo.taler.net/"],
    ["Donations", "https://donations.demo.taler.net/"],
    ["Survey", "https://survey.demo.taler.net/"]
  ]
};
var bankUiSettings = "talerDemobankSettings" in globalThis ? globalThis.talerDemobankSettings : defaultSettings;

// src/utils.ts
var amountRegex = /^[0-9]+(.[0-9]+)?$/;
function validateAmount(maybeAmount) {
  if (!maybeAmount || !amountRegex.test(maybeAmount)) {
    return;
  }
  return maybeAmount;
}
function getIbanFromPayto(url) {
  const pathSplit = new URL(url).pathname.split("/");
  let lastIndex = pathSplit.length - 1;
  if (pathSplit[lastIndex] === "")
    lastIndex--;
  const iban = pathSplit[lastIndex];
  return iban;
}
var maybeRootPath = "https://bank.taler.example.org/demobanks/default/";
function getBankBackendBaseUrl() {
  const overrideUrl = localStorage.getItem("bank-base-url");
  return canonicalizeBaseUrl(overrideUrl ? overrideUrl : maybeRootPath);
}
function undefinedIfEmpty(obj) {
  return Object.keys(obj).some((k3) => obj[k3] !== void 0) ? obj : void 0;
}
function prepareHeaders(username, password) {
  const headers = new Headers();
  if (username && password) {
    headers.append(
      "Authorization",
      `Basic ${window.btoa(`${username}:${password}`)}`
    );
  }
  headers.append("Content-Type", "application/json");
  return headers;
}

// src/assets/logo-white.svg
var logo_white_default = "./logo-white-U55BSKA2.svg";

// src/i18n/strings.ts
var strings = {};
strings["de"] = {
  "domain": "messages",
  "locale_data": {
    "messages": {
      "": {
        "domain": "messages",
        "plural_forms": "nplurals=2; plural=(n != 1);",
        "lang": "de"
      },
      "Logout": [
        ""
      ],
      "Skip to main content": [
        ""
      ],
      "This part of the demo shows how a bank that supports Taler directly would work. In addition to using your own bank account, you can also see the transaction history of some %1$s.": [
        ""
      ],
      "Taler logo": [
        ""
      ],
      "Missing username": [
        ""
      ],
      "Missing password": [
        ""
      ],
      "Please login!": [
        ""
      ],
      "Username:": [
        ""
      ],
      "Password:": [
        ""
      ],
      "Login": [
        ""
      ],
      "Register": [
        ""
      ],
      "Missing IBAN": [
        ""
      ],
      "IBAN should have just uppercased letters and numbers": [
        ""
      ],
      "Missing subject": [
        ""
      ],
      "Missing amount": [
        ""
      ],
      "Amount is not valid": [
        ""
      ],
      "Should be greater than 0": [
        ""
      ],
      "Receiver IBAN:": [
        ""
      ],
      "Transfer subject:": [
        ""
      ],
      "Amount:": [
        ""
      ],
      "Field(s) missing.": [
        ""
      ],
      "Want to try the raw payto://-format?": [
        ""
      ],
      "Missing payto address": [
        ""
      ],
      "Payto does not follow the pattern": [
        ""
      ],
      "Transfer money to account identified by payto:// URI:": [
        ""
      ],
      "payto URI:": [
        ""
      ],
      "payto address": [
        ""
      ],
      "Send": [
        ""
      ],
      "Use wire-transfer form?": [
        ""
      ],
      "No credentials found.": [
        ""
      ],
      "Could not create the wire transfer": [
        ""
      ],
      "Transfer creation gave response error": [
        ""
      ],
      "Wire transfer created!": [
        ""
      ],
      "Amount to withdraw:": [
        ""
      ],
      "Withdraw": [
        ""
      ],
      "No credentials given.": [
        ""
      ],
      "Could not create withdrawal operation": [
        ""
      ],
      "Withdrawal creation gave response error": [
        ""
      ],
      "Obtain digital cash": [
        ""
      ],
      "Transfer to bank account": [
        ""
      ],
      "Date": [
        ""
      ],
      "Amount": [
        ""
      ],
      "Counterpart": [
        ""
      ],
      "Subject": [
        ""
      ],
      "Transfer to Taler Wallet": [
        ""
      ],
      "Use this QR code to withdraw to your mobile wallet:": [
        ""
      ],
      "Click %1$s to open your Taler wallet!": [
        ""
      ],
      "Confirm Withdrawal": [
        ""
      ],
      "Authorize withdrawal by solving challenge": [
        ""
      ],
      "What is": [
        ""
      ],
      "Answer is wrong.": [
        ""
      ],
      "Confirm": [
        ""
      ],
      "Cancel": [
        ""
      ],
      "A this point, a %1$s bank would ask for an additional authentication proof (PIN/TAN, one time password, ..), instead of a simple calculation.": [
        ""
      ],
      "No withdrawal ID found.": [
        ""
      ],
      "Could not confirm the withdrawal": [
        ""
      ],
      "Withdrawal confirmation gave response error": [
        ""
      ],
      "Withdrawal confirmed!": [
        ""
      ],
      "Could not abort the withdrawal.": [
        ""
      ],
      "Withdrawal abortion failed.": [
        ""
      ],
      "Withdrawal aborted!": [
        ""
      ],
      "Abort": [
        ""
      ],
      "withdrawal (%1$s) was never (correctly) created at the bank...": [
        ""
      ],
      "Waiting the bank to create the operation...": [
        ""
      ],
      "This withdrawal was aborted!": [
        ""
      ],
      "Welcome to %1$s!": [
        ""
      ],
      "Username or account label '%1$s' not found.  Won't login.": [
        ""
      ],
      "Wrong credentials given.": [
        ""
      ],
      "Account information could not be retrieved.": [
        ""
      ],
      "Welcome, %1$s !": [
        ""
      ],
      "Bank account balance": [
        ""
      ],
      "Payments": [
        ""
      ],
      "Latest transactions:": [
        ""
      ],
      "List of public accounts was not found.": [
        ""
      ],
      "List of public accounts could not be retrieved.": [
        ""
      ],
      "History of public accounts": [
        ""
      ],
      "Currently, the bank is not accepting new registrations!": [
        ""
      ],
      "Use only letter and numbers starting with a lower case letter": [
        ""
      ],
      "Password don't match": [
        ""
      ],
      "Please register!": [
        ""
      ],
      "Repeat Password:": [
        ""
      ],
      "Registration failed, please report": [
        ""
      ],
      "That username is already taken": [
        ""
      ],
      "New registration gave response error": [
        ""
      ],
      "Bank menu": [
        ""
      ],
      "Select option1": [
        ""
      ],
      "Select option2": [
        ""
      ],
      "days": [
        ""
      ],
      "hours": [
        ""
      ],
      "minutes": [
        ""
      ],
      "seconds": [
        ""
      ]
    }
  }
};
strings["en"] = {
  "domain": "messages",
  "locale_data": {
    "messages": {
      "": {
        "domain": "messages",
        "plural_forms": "nplurals=2; plural=(n != 1);",
        "lang": "en"
      },
      "Logout": [
        ""
      ],
      "Skip to main content": [
        ""
      ],
      "This part of the demo shows how a bank that supports Taler directly would work. In addition to using your own bank account, you can also see the transaction history of some %1$s.": [
        ""
      ],
      "Taler logo": [
        ""
      ],
      "Missing username": [
        ""
      ],
      "Missing password": [
        ""
      ],
      "Please login!": [
        ""
      ],
      "Username:": [
        ""
      ],
      "Password:": [
        ""
      ],
      "Login": [
        ""
      ],
      "Register": [
        ""
      ],
      "Missing IBAN": [
        ""
      ],
      "IBAN should have just uppercased letters and numbers": [
        ""
      ],
      "Missing subject": [
        ""
      ],
      "Missing amount": [
        ""
      ],
      "Amount is not valid": [
        ""
      ],
      "Should be greater than 0": [
        ""
      ],
      "Receiver IBAN:": [
        ""
      ],
      "Transfer subject:": [
        ""
      ],
      "Amount:": [
        ""
      ],
      "Field(s) missing.": [
        ""
      ],
      "Want to try the raw payto://-format?": [
        ""
      ],
      "Missing payto address": [
        ""
      ],
      "Payto does not follow the pattern": [
        ""
      ],
      "Transfer money to account identified by payto:// URI:": [
        ""
      ],
      "payto URI:": [
        ""
      ],
      "payto address": [
        ""
      ],
      "Send": [
        ""
      ],
      "Use wire-transfer form?": [
        ""
      ],
      "No credentials found.": [
        ""
      ],
      "Could not create the wire transfer": [
        ""
      ],
      "Transfer creation gave response error": [
        ""
      ],
      "Wire transfer created!": [
        ""
      ],
      "Amount to withdraw:": [
        "Amount to withdraw"
      ],
      "Withdraw": [
        "Confirm withdrawal"
      ],
      "No credentials given.": [
        ""
      ],
      "Could not create withdrawal operation": [
        ""
      ],
      "Withdrawal creation gave response error": [
        ""
      ],
      "Obtain digital cash": [
        ""
      ],
      "Transfer to bank account": [
        ""
      ],
      "Date": [
        ""
      ],
      "Amount": [
        ""
      ],
      "Counterpart": [
        ""
      ],
      "Subject": [
        ""
      ],
      "Transfer to Taler Wallet": [
        "Charge Taler wallet"
      ],
      "Use this QR code to withdraw to your mobile wallet:": [
        ""
      ],
      "Click %1$s to open your Taler wallet!": [
        ""
      ],
      "Confirm Withdrawal": [
        "Confirm withdrawal"
      ],
      "Authorize withdrawal by solving challenge": [
        ""
      ],
      "What is": [
        ""
      ],
      "Answer is wrong.": [
        ""
      ],
      "Confirm": [
        ""
      ],
      "Cancel": [
        ""
      ],
      "A this point, a %1$s bank would ask for an additional authentication proof (PIN/TAN, one time password, ..), instead of a simple calculation.": [
        ""
      ],
      "No withdrawal ID found.": [
        ""
      ],
      "Could not confirm the withdrawal": [
        "Confirm withdrawal"
      ],
      "Withdrawal confirmation gave response error": [
        ""
      ],
      "Withdrawal confirmed!": [
        ""
      ],
      "Could not abort the withdrawal.": [
        "Close Taler withdrawal"
      ],
      "Withdrawal abortion failed.": [
        ""
      ],
      "Withdrawal aborted!": [
        ""
      ],
      "Abort": [
        ""
      ],
      "withdrawal (%1$s) was never (correctly) created at the bank...": [
        ""
      ],
      "Waiting the bank to create the operation...": [
        ""
      ],
      "This withdrawal was aborted!": [
        ""
      ],
      "Welcome to %1$s!": [
        ""
      ],
      "Username or account label '%1$s' not found.  Won't login.": [
        ""
      ],
      "Wrong credentials given.": [
        ""
      ],
      "Account information could not be retrieved.": [
        ""
      ],
      "Welcome, %1$s !": [
        ""
      ],
      "Bank account balance": [
        ""
      ],
      "Payments": [
        ""
      ],
      "Latest transactions:": [
        ""
      ],
      "List of public accounts was not found.": [
        ""
      ],
      "List of public accounts could not be retrieved.": [
        ""
      ],
      "History of public accounts": [
        ""
      ],
      "Currently, the bank is not accepting new registrations!": [
        ""
      ],
      "Use only letter and numbers starting with a lower case letter": [
        ""
      ],
      "Password don't match": [
        ""
      ],
      "Please register!": [
        ""
      ],
      "Repeat Password:": [
        ""
      ],
      "Registration failed, please report": [
        ""
      ],
      "That username is already taken": [
        ""
      ],
      "New registration gave response error": [
        ""
      ],
      "Bank menu": [
        ""
      ],
      "Select option1": [
        ""
      ],
      "Select option2": [
        ""
      ],
      "days": [
        "days"
      ],
      "hours": [
        "hours"
      ],
      "minutes": [
        "minutes"
      ],
      "seconds": [
        "seconds"
      ]
    }
  }
};
strings["es"] = {
  "domain": "messages",
  "locale_data": {
    "messages": {
      "": {
        "domain": "messages",
        "plural_forms": "nplurals=2; plural=n != 1;",
        "lang": "es"
      },
      "Logout": [
        "Cierre de sesi\xF3n"
      ],
      "Skip to main content": [
        "Saltar el men\xFA de navegaci\xF3n"
      ],
      "This part of the demo shows how a bank that supports Taler directly would work. In addition to using your own bank account, you can also see the transaction history of some %1$s.": [
        "Esta parte de la demostraci\xF3n muestra c\xF3mo funciona un banco que soporta Taler directamente. Adem\xE1s de usar tu propia cuenta de banco, tambi\xE9n podr\xE1s ver el historial de transacciones de algunas %1$s."
      ],
      "Taler logo": [
        "Logo Taler"
      ],
      "Missing username": [
        "Falta nombre de usuario"
      ],
      "Missing password": [
        "Falta contrase\xF1a"
      ],
      "Please login!": [
        "Por favor inicia sesi\xF3n!"
      ],
      "Username:": [
        "Nombre de usuario:"
      ],
      "Password:": [
        "Password:"
      ],
      "Login": [
        "Iniciar sesi\xF3n"
      ],
      "Register": [
        "Registrarse"
      ],
      "Missing IBAN": [
        "Falta IBAN"
      ],
      "IBAN should have just uppercased letters and numbers": [
        "IBAN deber\xEDa tener letras may\xFAsculas y n\xFAmeros"
      ],
      "Missing subject": [
        "Falta asunto"
      ],
      "Missing amount": [
        "Falta monto"
      ],
      "Amount is not valid": [
        "Monto no v\xE1lido"
      ],
      "Should be greater than 0": [
        "Deber\xEDa ser mas grande que 0"
      ],
      "Receiver IBAN:": [
        "IBAN receptor:"
      ],
      "Transfer subject:": [
        "Asunto de transferencia:"
      ],
      "Amount:": [
        "Monto:"
      ],
      "Field(s) missing.": [
        "Faltan campo(s)."
      ],
      "Want to try the raw payto://-format?": [
        "Quieres probar el formato payto:// ?"
      ],
      "Missing payto address": [
        "Falta direccion payto"
      ],
      "Payto does not follow the pattern": [
        "Payto no sigue el patr\xF3n"
      ],
      "Transfer money to account identified by payto:// URI:": [
        "Transferir dinero a la cuenta identificada por la URI payto://:"
      ],
      "payto URI:": [
        "payto URI:"
      ],
      "payto address": [
        "direccion payto"
      ],
      "Send": [
        "Env\xEDar"
      ],
      "Use wire-transfer form?": [
        "Usar el formulario de transferencia bancaria?"
      ],
      "No credentials found.": [
        "Se dieron las credenciales incorrectas."
      ],
      "Could not create the wire transfer": [
        "No se pudo create la transferencia bancaria"
      ],
      "Transfer creation gave response error": [
        "La creaci\xF3n de la transferencia di\xF3 una respuesta erronea"
      ],
      "Wire transfer created!": [
        "Transferencia bancaria creada!"
      ],
      "Amount to withdraw:": [
        "Monto a retirar:"
      ],
      "Withdraw": [
        "Retirar"
      ],
      "No credentials given.": [
        "Se dieron las credenciales incorrectas."
      ],
      "Could not create withdrawal operation": [
        "No se pude create la operaci\xF3n de retiro"
      ],
      "Withdrawal creation gave response error": [
        "La creaci\xF3n de retiro di\xF3 una respuesta err\xF3nea"
      ],
      "Obtain digital cash": [
        "Obtener dinero digital"
      ],
      "Transfer to bank account": [
        "Transferir a una cuenta bancaria"
      ],
      "Date": [
        "Fecha"
      ],
      "Amount": [
        "Monto"
      ],
      "Counterpart": [
        "Contraparte"
      ],
      "Subject": [
        "Asunto"
      ],
      "Transfer to Taler Wallet": [
        "Transferir a una cartera Taler"
      ],
      "Use this QR code to withdraw to your mobile wallet:": [
        "Usar el c\xF3digo QR para retirar a tu cartera m\xF3vil:"
      ],
      "Click %1$s to open your Taler wallet!": [
        "Click %1$s para abrir una cartera Taler!"
      ],
      "Confirm Withdrawal": [
        "Confirmar retirada"
      ],
      "Authorize withdrawal by solving challenge": [
        "Autorizar retiro resolviendo una pregunta"
      ],
      "What is": [
        "Cuanto es"
      ],
      "Answer is wrong.": [
        "La respuesta es incorrecta."
      ],
      "Confirm": [
        "Confirmar"
      ],
      "Cancel": [
        "Cancelar"
      ],
      "A this point, a %1$s bank would ask for an additional authentication proof (PIN/TAN, one time password, ..), instead of a simple calculation.": [
        "En este punto, un banco %1$s preguntar\xEDa por una prueba adicional de autenticaci\xF3n (PIN/TAN, password de un solo uso, ....), en vez de un simple c\xE1lculo."
      ],
      "No withdrawal ID found.": [
        "No ID de retiro encontrado."
      ],
      "Could not confirm the withdrawal": [
        "No se pudo confirmar la retirada"
      ],
      "Withdrawal confirmation gave response error": [
        "La confirmaci\xF3n de retiro di\xF3 una respuesta err\xF3nea"
      ],
      "Withdrawal confirmed!": [
        "El retiro fue confirmado!"
      ],
      "Could not abort the withdrawal.": [
        "No se pudo cancelar el retiro."
      ],
      "Withdrawal abortion failed.": [
        "La cancelaci\xF3n del retiro fall\xF3."
      ],
      "Withdrawal aborted!": [
        "Este retiro fue cancelado!"
      ],
      "Abort": [
        "Cancelar"
      ],
      "withdrawal (%1$s) was never (correctly) created at the bank...": [
        "retiro (%1$s) nunca fue (correctamente) generado en el banco..."
      ],
      "Waiting the bank to create the operation...": [
        "Esperando que el banco genere la operaci\xF3n...."
      ],
      "This withdrawal was aborted!": [
        "Este retiro fue cancelado!"
      ],
      "Welcome to %1$s!": [
        "Bienvenido a %1$s!"
      ],
      "Username or account label '%1$s' not found.  Won't login.": [
        "Nombre de usuario o etiqueta de cuenta '%1$s' no encontrada. No se iniciar\xE1 sesi\xF3n."
      ],
      "Wrong credentials given.": [
        "Se dieron las credenciales incorrectas."
      ],
      "Account information could not be retrieved.": [
        "La informaci\xF3n de la cuenta no pudo ser accedida."
      ],
      "Welcome, %1$s !": [
        "Bienvenido/a, %1$s!"
      ],
      "Bank account balance": [
        "Balance de cuenta bancaria"
      ],
      "Payments": [
        "Pagos"
      ],
      "Latest transactions:": [
        "\xDAltimas transacciones:"
      ],
      "List of public accounts was not found.": [
        "La lista de cuentas p\xFAblicas no fue encontrada."
      ],
      "List of public accounts could not be retrieved.": [
        "La lista de cuentas p\xFAblicas no pudo ser accedida."
      ],
      "History of public accounts": [
        "Historial de cuentas p\xFAblicas"
      ],
      "Currently, the bank is not accepting new registrations!": [
        "Actualmente, el banco no est\xE1 aceptado nuevos registros!"
      ],
      "Use only letter and numbers starting with a lower case letter": [
        "Solo use letras y n\xFAmeros comenzando con una letra min\xFAscula"
      ],
      "Password don't match": [
        "La contrase\xF1a no coincide"
      ],
      "Please register!": [
        "Por favor, registrese!"
      ],
      "Repeat Password:": [
        "Repita la contrase\xF1a:"
      ],
      "Registration failed, please report": [
        "El registro fall\xF3, por favor reportelo"
      ],
      "That username is already taken": [
        "El nombre del usuario ya est\xE1 tomado"
      ],
      "New registration gave response error": [
        "Nuevo registro di\xF3 una respuesta err\xF3nea"
      ],
      "Bank menu": [
        "Menu del banco"
      ],
      "Select option1": [
        "Seleccione opci\xF3n 1"
      ],
      "Select option2": [
        "Seleccione opci\xF3n 2"
      ],
      "days": [
        "d\xEDas"
      ],
      "hours": [
        "horas"
      ],
      "minutes": [
        "minutos"
      ],
      "seconds": [
        "segundos"
      ]
    }
  }
};
strings["it"] = {
  "domain": "messages",
  "locale_data": {
    "messages": {
      "": {
        "domain": "messages",
        "plural_forms": "nplurals=2; plural=(n != 1);",
        "lang": "it"
      },
      "Logout": [
        ""
      ],
      "Skip to main content": [
        ""
      ],
      "This part of the demo shows how a bank that supports Taler directly would work. In addition to using your own bank account, you can also see the transaction history of some %1$s.": [
        ""
      ],
      "Taler logo": [
        ""
      ],
      "Missing username": [
        ""
      ],
      "Missing password": [
        ""
      ],
      "Please login!": [
        "Accedi!"
      ],
      "Username:": [
        ""
      ],
      "Password:": [
        ""
      ],
      "Login": [
        "Accedi"
      ],
      "Register": [
        "Registrati"
      ],
      "Missing IBAN": [
        ""
      ],
      "IBAN should have just uppercased letters and numbers": [
        ""
      ],
      "Missing subject": [
        ""
      ],
      "Missing amount": [
        ""
      ],
      "Amount is not valid": [
        ""
      ],
      "Should be greater than 0": [
        ""
      ],
      "Receiver IBAN:": [
        ""
      ],
      "Transfer subject:": [
        ""
      ],
      "Amount:": [
        "Somma"
      ],
      "Field(s) missing.": [
        ""
      ],
      "Want to try the raw payto://-format?": [
        "Prova il trasferimento tramite il formato Payto!"
      ],
      "Missing payto address": [
        "indirizzo Payto"
      ],
      "Payto does not follow the pattern": [
        ""
      ],
      "Transfer money to account identified by payto:// URI:": [
        "Trasferisci fondi a un altro conto di questa banca:"
      ],
      "payto URI:": [
        ""
      ],
      "payto address": [
        "indirizzo Payto"
      ],
      "Send": [
        ""
      ],
      "Use wire-transfer form?": [
        "Chiudi il bonifico"
      ],
      "No credentials found.": [
        "Credenziali invalide."
      ],
      "Could not create the wire transfer": [
        ""
      ],
      "Transfer creation gave response error": [
        ""
      ],
      "Wire transfer created!": [
        "Bonifico"
      ],
      "Amount to withdraw:": [
        "Somma da ritirare"
      ],
      "Withdraw": [
        "Conferma il ritiro"
      ],
      "No credentials given.": [
        "Credenziali invalide."
      ],
      "Could not create withdrawal operation": [
        ""
      ],
      "Withdrawal creation gave response error": [
        ""
      ],
      "Obtain digital cash": [
        ""
      ],
      "Transfer to bank account": [
        "Trasferisci fondi a un altro conto di questa banca:"
      ],
      "Date": [
        ""
      ],
      "Amount": [
        "Somma"
      ],
      "Counterpart": [
        "Controparte"
      ],
      "Subject": [
        "Causale"
      ],
      "Transfer to Taler Wallet": [
        "Ritira contante nel portafoglio Taler"
      ],
      "Use this QR code to withdraw to your mobile wallet:": [
        "Usa questo codice QR per ritirare contante nel tuo wallet:"
      ],
      "Click %1$s to open your Taler wallet!": [
        ""
      ],
      "Confirm Withdrawal": [
        "Conferma il ritiro"
      ],
      "Authorize withdrawal by solving challenge": [
        ""
      ],
      "What is": [
        ""
      ],
      "Answer is wrong.": [
        ""
      ],
      "Confirm": [
        "Conferma"
      ],
      "Cancel": [
        ""
      ],
      "A this point, a %1$s bank would ask for an additional authentication proof (PIN/TAN, one time password, ..), instead of a simple calculation.": [
        ""
      ],
      "No withdrawal ID found.": [
        ""
      ],
      "Could not confirm the withdrawal": [
        "Conferma il ritiro"
      ],
      "Withdrawal confirmation gave response error": [
        ""
      ],
      "Withdrawal confirmed!": [
        "Questo ritiro \xE8 stato annullato!"
      ],
      "Could not abort the withdrawal.": [
        "Chiudi il ritiro Taler"
      ],
      "Withdrawal abortion failed.": [
        "Questo ritiro \xE8 stato annullato!"
      ],
      "Withdrawal aborted!": [
        "Questo ritiro \xE8 stato annullato!"
      ],
      "Abort": [
        "Annulla"
      ],
      "withdrawal (%1$s) was never (correctly) created at the bank...": [
        ""
      ],
      "Waiting the bank to create the operation...": [
        "La banca sta creando l'operazione..."
      ],
      "This withdrawal was aborted!": [
        "Questo ritiro \xE8 stato annullato!"
      ],
      "Welcome to %1$s!": [
        ""
      ],
      "Username or account label '%1$s' not found.  Won't login.": [
        "L'utente '%1$s' non esiste.  Login impossibile"
      ],
      "Wrong credentials given.": [
        "Credenziali invalide."
      ],
      "Account information could not be retrieved.": [
        "Impossibile ricevere le informazioni relative al conto."
      ],
      "Welcome, %1$s !": [
        ""
      ],
      "Bank account balance": [
        "Bilancio:"
      ],
      "Payments": [
        ""
      ],
      "Latest transactions:": [
        "Ultime transazioni:"
      ],
      "List of public accounts was not found.": [
        "Lista conti pubblici non trovata."
      ],
      "List of public accounts could not be retrieved.": [
        "Lista conti pubblici non pervenuta."
      ],
      "History of public accounts": [
        "Storico dei conti pubblici"
      ],
      "Currently, the bank is not accepting new registrations!": [
        ""
      ],
      "Use only letter and numbers starting with a lower case letter": [
        ""
      ],
      "Password don't match": [
        ""
      ],
      "Please register!": [
        "Accedi!"
      ],
      "Repeat Password:": [
        ""
      ],
      "Registration failed, please report": [
        "Registrazione"
      ],
      "That username is already taken": [
        ""
      ],
      "New registration gave response error": [
        ""
      ],
      "Bank menu": [
        ""
      ],
      "Select option1": [
        ""
      ],
      "Select option2": [
        ""
      ],
      "days": [
        ""
      ],
      "hours": [
        ""
      ],
      "minutes": [
        ""
      ],
      "seconds": [
        ""
      ]
    }
  }
};

// src/components/LangSelector.tsx
var names = {
  es: "Espa\xF1ol [es]",
  en: "English [en]",
  fr: "Fran\xE7ais [fr]",
  de: "Deutsch [de]",
  sv: "Svenska [sv]",
  it: "Italiano [it]"
};
function getLangName(s3) {
  if (names[s3])
    return names[s3];
  return String(s3);
}
function LangSelectorLikePy() {
  const [updatingLang, setUpdatingLang] = p3(false);
  const { lang, changeLanguage } = useTranslationContext();
  const [hidden, setHidden] = p3(true);
  h2(() => {
    function bodyKeyPress(event) {
      if (event.code === "Escape")
        setHidden(true);
    }
    function bodyOnClick(event) {
      setHidden(true);
    }
    document.body.addEventListener("click", bodyOnClick);
    document.body.addEventListener("keydown", bodyKeyPress);
    return () => {
      document.body.removeEventListener("keydown", bodyKeyPress);
      document.body.removeEventListener("click", bodyOnClick);
    };
  }, []);
  return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("button", {
    name: "language",
    onClick: (ev) => {
      setHidden((h3) => !h3);
      ev.stopPropagation();
    }
  }, getLangName(lang)), /* @__PURE__ */ h("div", {
    id: "lang",
    class: hidden ? "hide" : ""
  }, /* @__PURE__ */ h("div", {
    style: "position: relative; overflow: visible;"
  }, /* @__PURE__ */ h("div", {
    class: "nav",
    style: "position: absolute; max-height: 60vh; overflow-y: scroll"
  }, Object.keys(strings).filter((l3) => l3 !== lang).map((l3) => /* @__PURE__ */ h("a", {
    key: l3,
    href: "#",
    class: "navbtn langbtn",
    value: l3,
    onClick: () => {
      changeLanguage(l3);
      setUpdatingLang(false);
    }
  }, getLangName(l3))), /* @__PURE__ */ h("br", null)))));
}

// src/pages/BankFrame.tsx
var logger5 = new Logger("BankFrame");
function BankFrame({
  children
}) {
  const { i18n: i18n2 } = useTranslationContext();
  const backend = useBackendContext();
  const { pageState, pageStateSetter } = usePageContext();
  logger5.trace("state", pageState);
  const logOut = /* @__PURE__ */ h("div", {
    class: "logout"
  }, /* @__PURE__ */ h("a", {
    href: "#",
    class: "pure-button logout-button",
    onClick: () => {
      pageStateSetter((prevState) => {
        const _a2 = prevState, { talerWithdrawUri, withdrawalId } = _a2, rest = __objRest(_a2, ["talerWithdrawUri", "withdrawalId"]);
        backend.clear();
        return __spreadProps(__spreadValues({}, rest), {
          withdrawalInProgress: false,
          error: void 0,
          info: void 0,
          isRawPayto: false
        });
      });
    }
  }, i18n2.str`Logout`));
  const demo_sites = [];
  for (const i3 in bankUiSettings.demoSites)
    demo_sites.push(
      /* @__PURE__ */ h("a", {
        href: bankUiSettings.demoSites[i3][1]
      }, bankUiSettings.demoSites[i3][0])
    );
  return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("header", {
    class: "demobar",
    style: "display: flex; flex-direction: row; justify-content: space-between;"
  }, /* @__PURE__ */ h("a", {
    href: "#main",
    class: "skip"
  }, i18n2.str`Skip to main content`), /* @__PURE__ */ h("div", {
    style: "max-width: 50em; margin-left: 2em;"
  }, /* @__PURE__ */ h("h1", null, /* @__PURE__ */ h("span", {
    class: "it"
  }, /* @__PURE__ */ h("a", {
    href: "/"
  }, bankUiSettings.bankName))), maybeDemoContent(
    /* @__PURE__ */ h("p", null, /* @__PURE__ */ h(i18n2.Translate, null, "This part of the demo shows how a bank that supports Taler directly would work. In addition to using your own bank account, you can also see the transaction history of some", " ", /* @__PURE__ */ h("a", {
      href: "/public-accounts"
    }, "Public Accounts"), "."))
  )), /* @__PURE__ */ h("a", {
    href: "https://taler.net/"
  }, /* @__PURE__ */ h("img", {
    src: logo_white_default,
    alt: i18n2.str`Taler logo`,
    height: "100",
    width: "224",
    style: "margin: 2em 2em"
  }))), /* @__PURE__ */ h("div", {
    style: "display:flex; flex-direction: column;",
    class: "navcontainer"
  }, /* @__PURE__ */ h("nav", {
    class: "demolist"
  }, maybeDemoContent(/* @__PURE__ */ h(p2, null, demo_sites)), /* @__PURE__ */ h("div", {
    class: "right"
  }, /* @__PURE__ */ h(LangSelectorLikePy, null)))), /* @__PURE__ */ h("section", {
    id: "main",
    class: "content"
  }, /* @__PURE__ */ h(ErrorBanner, null), /* @__PURE__ */ h(StatusBanner, null), backend.state.status === "loggedIn" ? logOut : null, children), /* @__PURE__ */ h("section", {
    id: "footer",
    class: "footer"
  }, /* @__PURE__ */ h("div", {
    class: "footer"
  }, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", null, "You can learn more about GNU Taler on our", " ", /* @__PURE__ */ h("a", {
    href: "https://taler.net"
  }, "main website"), ".")), /* @__PURE__ */ h("div", {
    style: "flex-grow:1"
  }), /* @__PURE__ */ h("p", null, "Copyright \xA9 2014\u20142022 Taler Systems SA"))));
}
function maybeDemoContent(content) {
  if (bankUiSettings.showDemoNav) {
    return content;
  }
  return /* @__PURE__ */ h(p2, null);
}
function ErrorBanner() {
  const { pageState, pageStateSetter } = usePageContext();
  if (!pageState.error)
    return null;
  const rval = /* @__PURE__ */ h("div", {
    class: "informational informational-fail",
    style: { marginTop: 8 }
  }, /* @__PURE__ */ h("div", {
    style: { display: "flex", justifyContent: "space-between" }
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("b", null, pageState.error.title)), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("input", {
    type: "button",
    class: "pure-button",
    value: "Clear",
    onClick: () => __async(this, null, function* () {
      pageStateSetter((prev) => __spreadProps(__spreadValues({}, prev), { error: void 0 }));
    })
  }))), /* @__PURE__ */ h("p", null, pageState.error.description));
  delete pageState.error;
  return rval;
}
function StatusBanner() {
  const { pageState, pageStateSetter } = usePageContext();
  if (!pageState.info)
    return null;
  const rval = /* @__PURE__ */ h("div", {
    class: "informational informational-ok",
    style: { marginTop: 8 }
  }, /* @__PURE__ */ h("div", {
    style: { display: "flex", justifyContent: "space-between" }
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("b", null, pageState.info)), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("input", {
    type: "button",
    class: "pure-button",
    value: "Clear",
    onClick: () => __async(this, null, function* () {
      pageStateSetter((prev) => __spreadProps(__spreadValues({}, prev), { info: void 0 }));
    })
  }))));
  return rval;
}

// src/pages/ShowInputErrorLabel.tsx
function ShowInputErrorLabel({
  isDirty,
  message
}) {
  if (message && isDirty)
    return /* @__PURE__ */ h("div", {
      style: { marginTop: 8, color: "red" }
    }, message);
  return /* @__PURE__ */ h(p2, null);
}

// src/pages/LoginForm.tsx
function LoginForm() {
  const backend = useBackendContext();
  const [username, setUsername] = p3();
  const [password, setPassword] = p3();
  const { i18n: i18n2 } = useTranslationContext();
  const ref = _2(null);
  h2(() => {
    var _a2;
    (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, []);
  const errors2 = undefinedIfEmpty({
    username: !username ? i18n2.str`Missing username` : void 0,
    password: !password ? i18n2.str`Missing password` : void 0
  });
  return /* @__PURE__ */ h("div", {
    class: "login-div"
  }, /* @__PURE__ */ h("form", {
    action: "javascript:void(0);",
    class: "login-form",
    noValidate: true
  }, /* @__PURE__ */ h("div", {
    class: "pure-form"
  }, /* @__PURE__ */ h("h2", null, i18n2.str`Please login!`), /* @__PURE__ */ h("p", {
    class: "unameFieldLabel loginFieldLabel formFieldLabel"
  }, /* @__PURE__ */ h("label", {
    for: "username"
  }, i18n2.str`Username:`)), /* @__PURE__ */ h("input", {
    ref,
    autoFocus: true,
    type: "text",
    name: "username",
    id: "username",
    value: username != null ? username : "",
    placeholder: "Username",
    required: true,
    onInput: (e3) => {
      setUsername(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errors2 == null ? void 0 : errors2.username,
    isDirty: username !== void 0
  }), /* @__PURE__ */ h("p", {
    class: "passFieldLabel loginFieldLabel formFieldLabel"
  }, /* @__PURE__ */ h("label", {
    for: "password"
  }, i18n2.str`Password:`)), /* @__PURE__ */ h("input", {
    type: "password",
    name: "password",
    id: "password",
    value: password != null ? password : "",
    placeholder: "Password",
    required: true,
    onInput: (e3) => {
      setPassword(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errors2 == null ? void 0 : errors2.password,
    isDirty: password !== void 0
  }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("button", {
    type: "submit",
    class: "pure-button pure-button-primary",
    disabled: !!errors2,
    onClick: () => {
      if (!username || !password)
        return;
      loginCall({ username, password }, backend);
      setUsername(void 0);
      setPassword(void 0);
    }
  }, i18n2.str`Login`), bankUiSettings.allowRegistrations ? /* @__PURE__ */ h("button", {
    class: "pure-button pure-button-secondary btn-cancel",
    onClick: () => {
      route("/register");
    }
  }, i18n2.str`Register`) : /* @__PURE__ */ h("div", null))));
}
function loginCall(req, backend) {
  return __async(this, null, function* () {
    backend.save({
      url: getBankBackendBaseUrl(),
      username: req.username,
      password: req.password
    });
  });
}

// src/pages/PaytoWireTransferForm.tsx
var logger6 = new Logger("PaytoWireTransferForm");
function PaytoWireTransferForm({
  focus,
  currency
}) {
  var _a2, _b, _c;
  const backend = useBackendContext();
  const { pageState, pageStateSetter } = usePageContext();
  const [submitData, submitDataSetter] = useWireTransferRequestType();
  const [rawPaytoInput, rawPaytoInputSetter] = p3(
    void 0
  );
  const { i18n: i18n2 } = useTranslationContext();
  const ibanRegex = "^[A-Z][A-Z][0-9]+$";
  let transactionData;
  const ref = _2(null);
  h2(() => {
    var _a3;
    if (focus)
      (_a3 = ref.current) == null ? void 0 : _a3.focus();
  }, [focus, pageState.isRawPayto]);
  let parsedAmount = void 0;
  const errorsWire = {
    iban: !(submitData == null ? void 0 : submitData.iban) ? i18n2.str`Missing IBAN` : !/^[A-Z0-9]*$/.test(submitData.iban) ? i18n2.str`IBAN should have just uppercased letters and numbers` : void 0,
    subject: !(submitData == null ? void 0 : submitData.subject) ? i18n2.str`Missing subject` : void 0,
    amount: !(submitData == null ? void 0 : submitData.amount) ? i18n2.str`Missing amount` : !(parsedAmount = Amounts.parse(`${currency}:${submitData.amount}`)) ? i18n2.str`Amount is not valid` : Amounts.isZero(parsedAmount) ? i18n2.str`Should be greater than 0` : void 0
  };
  if (!pageState.isRawPayto)
    return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("form", {
      class: "pure-form",
      name: "wire-transfer-form"
    }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("label", {
      for: "iban"
    }, i18n2.str`Receiver IBAN:`), "\xA0", /* @__PURE__ */ h("input", {
      ref,
      type: "text",
      id: "iban",
      name: "iban",
      value: (_a2 = submitData == null ? void 0 : submitData.iban) != null ? _a2 : "",
      placeholder: "CC0123456789",
      required: true,
      pattern: ibanRegex,
      onInput: (e3) => {
        submitDataSetter((submitData2) => __spreadProps(__spreadValues({}, submitData2), {
          iban: e3.currentTarget.value
        }));
      }
    }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(ShowInputErrorLabel, {
      message: errorsWire == null ? void 0 : errorsWire.iban,
      isDirty: (submitData == null ? void 0 : submitData.iban) !== void 0
    }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("label", {
      for: "subject"
    }, i18n2.str`Transfer subject:`), "\xA0", /* @__PURE__ */ h("input", {
      type: "text",
      name: "subject",
      id: "subject",
      placeholder: "subject",
      value: (_b = submitData == null ? void 0 : submitData.subject) != null ? _b : "",
      required: true,
      onInput: (e3) => {
        submitDataSetter((submitData2) => __spreadProps(__spreadValues({}, submitData2), {
          subject: e3.currentTarget.value
        }));
      }
    }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(ShowInputErrorLabel, {
      message: errorsWire == null ? void 0 : errorsWire.subject,
      isDirty: (submitData == null ? void 0 : submitData.subject) !== void 0
    }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("label", {
      for: "amount"
    }, i18n2.str`Amount:`), "\xA0", /* @__PURE__ */ h("div", {
      style: { width: "max-content" }
    }, /* @__PURE__ */ h("input", {
      type: "text",
      readonly: true,
      class: "currency-indicator",
      size: currency == null ? void 0 : currency.length,
      maxLength: currency == null ? void 0 : currency.length,
      tabIndex: -1,
      value: currency
    }), "\xA0", /* @__PURE__ */ h("input", {
      type: "number",
      name: "amount",
      id: "amount",
      placeholder: "amount",
      required: true,
      value: (_c = submitData == null ? void 0 : submitData.amount) != null ? _c : "",
      onInput: (e3) => {
        submitDataSetter((submitData2) => __spreadProps(__spreadValues({}, submitData2), {
          amount: e3.currentTarget.value
        }));
      }
    })), /* @__PURE__ */ h(ShowInputErrorLabel, {
      message: errorsWire == null ? void 0 : errorsWire.amount,
      isDirty: (submitData == null ? void 0 : submitData.amount) !== void 0
    })), /* @__PURE__ */ h("p", {
      style: { display: "flex", justifyContent: "space-between" }
    }, /* @__PURE__ */ h("input", {
      type: "submit",
      class: "pure-button pure-button-primary",
      disabled: !!errorsWire,
      value: "Send",
      onClick: () => __async(this, null, function* () {
        if (typeof submitData === "undefined" || typeof submitData.iban === "undefined" || submitData.iban === "" || typeof submitData.subject === "undefined" || submitData.subject === "" || typeof submitData.amount === "undefined" || submitData.amount === "") {
          logger6.error("Not all the fields were given.");
          pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
            error: {
              title: i18n2.str`Field(s) missing.`
            }
          }));
          return;
        }
        transactionData = {
          paytoUri: `payto://iban/${submitData.iban}?message=${encodeURIComponent(submitData.subject)}`,
          amount: `${currency}:${submitData.amount}`
        };
        return yield createTransactionCall(
          transactionData,
          backend.state,
          pageStateSetter,
          () => submitDataSetter((p4) => ({
            amount: void 0,
            iban: void 0,
            subject: void 0
          })),
          i18n2
        );
      })
    }), /* @__PURE__ */ h("input", {
      type: "button",
      class: "pure-button",
      value: "Clear",
      onClick: () => __async(this, null, function* () {
        submitDataSetter((p4) => ({
          amount: void 0,
          iban: void 0,
          subject: void 0
        }));
      })
    }))), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("a", {
      href: "/account",
      onClick: () => {
        logger6.trace("switch to raw payto form");
        pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
          isRawPayto: true
        }));
      }
    }, i18n2.str`Want to try the raw payto://-format?`)));
  const errorsPayto = undefinedIfEmpty({
    rawPaytoInput: !rawPaytoInput ? i18n2.str`Missing payto address` : !parsePaytoUri(rawPaytoInput) ? i18n2.str`Payto does not follow the pattern` : void 0
  });
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("p", null, i18n2.str`Transfer money to account identified by payto:// URI:`), /* @__PURE__ */ h("div", {
    class: "pure-form",
    name: "payto-form"
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("label", {
    for: "address"
  }, i18n2.str`payto URI:`), "\xA0", /* @__PURE__ */ h("input", {
    name: "address",
    type: "text",
    size: 50,
    ref,
    id: "address",
    value: rawPaytoInput != null ? rawPaytoInput : "",
    required: true,
    placeholder: i18n2.str`payto address`,
    onInput: (e3) => {
      rawPaytoInputSetter(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errorsPayto == null ? void 0 : errorsPayto.rawPaytoInput,
    isDirty: rawPaytoInput !== void 0
  }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("div", {
    class: "hint"
  }, "Hint:", /* @__PURE__ */ h("code", null, "payto://iban/[receiver-iban]?message=[subject]&amount=[", currency, ":X.Y]"))), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("input", {
    class: "pure-button pure-button-primary",
    type: "submit",
    disabled: !!errorsPayto,
    value: i18n2.str`Send`,
    onClick: () => __async(this, null, function* () {
      if (!rawPaytoInput) {
        logger6.error("Didn't get any raw Payto string!");
        return;
      }
      transactionData = { paytoUri: rawPaytoInput };
      if (typeof transactionData.paytoUri === "undefined" || transactionData.paytoUri.length === 0)
        return;
      return yield createTransactionCall(
        transactionData,
        backend.state,
        pageStateSetter,
        () => rawPaytoInputSetter(void 0),
        i18n2
      );
    })
  })), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("a", {
    href: "/account",
    onClick: () => {
      logger6.trace("switch to wire-transfer-form");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        isRawPayto: false
      }));
    }
  }, i18n2.str`Use wire-transfer form?`))));
}
function useWireTransferRequestType(state) {
  const ret = useLocalStorage(
    "wire-transfer-request-state",
    JSON.stringify(state)
  );
  const retObj = ret[0] ? JSON.parse(ret[0]) : ret[0];
  const retSetter = function(val) {
    const newVal = val instanceof Function ? JSON.stringify(val(retObj)) : JSON.stringify(val);
    ret[1](newVal);
  };
  return [retObj, retSetter];
}
function createTransactionCall(req, backendState, pageStateSetter, cleanUpForm, i18n2) {
  return __async(this, null, function* () {
    if (backendState.status === "loggedOut") {
      logger6.error("No credentials found.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No credentials found.`
        }
      }));
      return;
    }
    let res;
    try {
      const { username, password } = backendState;
      const headers = prepareHeaders(username, password);
      const url = new URL(
        `access-api/accounts/${backendState.username}/transactions`,
        backendState.url
      );
      res = yield fetch(url.href, {
        method: "POST",
        headers,
        body: JSON.stringify(req)
      });
    } catch (error2) {
      logger6.error("Could not POST transaction request to the bank", error2);
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Could not create the wire transfer`,
          description: error2.error.description,
          debug: JSON.stringify(error2)
        }
      }));
      return;
    }
    if (!res.ok) {
      const response = yield res.json();
      logger6.error(
        `Transfer creation gave response error: ${response} (${res.status})`
      );
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Transfer creation gave response error`,
          description: response.error.description,
          debug: JSON.stringify(response)
        }
      }));
      return;
    }
    logger6.trace("Wire transfer created!");
    pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
      info: i18n2.str`Wire transfer created!`
    }));
    cleanUpForm();
  });
}

// src/pages/WalletWithdrawForm.tsx
var logger7 = new Logger("WalletWithdrawForm");
function WalletWithdrawForm({
  focus,
  currency
}) {
  var _a2;
  const backend = useBackendContext();
  const { pageState, pageStateSetter } = usePageContext();
  const { i18n: i18n2 } = useTranslationContext();
  let submitAmount = "5.00";
  const ref = _2(null);
  h2(() => {
    var _a3;
    if (focus)
      (_a3 = ref.current) == null ? void 0 : _a3.focus();
  }, [focus]);
  return /* @__PURE__ */ h("form", {
    id: "reserve-form",
    class: "pure-form",
    name: "tform"
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("label", {
    for: "withdraw-amount"
  }, i18n2.str`Amount to withdraw:`), "\xA0", /* @__PURE__ */ h("div", {
    style: { width: "max-content" }
  }, /* @__PURE__ */ h("input", {
    type: "text",
    readonly: true,
    class: "currency-indicator",
    size: (_a2 = currency == null ? void 0 : currency.length) != null ? _a2 : 5,
    maxLength: currency == null ? void 0 : currency.length,
    tabIndex: -1,
    value: currency
  }), "\xA0", /* @__PURE__ */ h("input", {
    type: "number",
    ref,
    id: "withdraw-amount",
    name: "withdraw-amount",
    value: submitAmount,
    onChange: (e3) => {
      submitAmount = e3.currentTarget.value;
    }
  }))), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("input", {
    id: "select-exchange",
    class: "pure-button pure-button-primary",
    type: "submit",
    value: i18n2.str`Withdraw`,
    onClick: () => {
      submitAmount = validateAmount(submitAmount);
      if (!submitAmount && currency)
        return;
      createWithdrawalCall(
        `${currency}:${submitAmount}`,
        backend.state,
        pageStateSetter,
        i18n2
      );
    }
  }))));
}
function createWithdrawalCall(amount, backendState, pageStateSetter, i18n2) {
  return __async(this, null, function* () {
    if ((backendState == null ? void 0 : backendState.status) === "loggedOut") {
      logger7.error("Page has a problem: no credentials found in the state.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No credentials given.`
        }
      }));
      return;
    }
    let res;
    try {
      const { username, password } = backendState;
      const headers = prepareHeaders(username, password);
      const url = new URL(
        `access-api/accounts/${backendState.username}/withdrawals`,
        backendState.url
      );
      res = yield fetch(url.href, {
        method: "POST",
        headers,
        body: JSON.stringify({ amount })
      });
    } catch (error2) {
      logger7.trace("Could not POST withdrawal request to the bank", error2);
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Could not create withdrawal operation`,
          description: error2.error.description,
          debug: JSON.stringify(error2)
        }
      }));
      return;
    }
    if (!res.ok) {
      const response = yield res.json();
      logger7.error(
        `Withdrawal creation gave response error: ${response} (${res.status})`
      );
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Withdrawal creation gave response error`,
          description: response.error.description,
          debug: JSON.stringify(response)
        }
      }));
      return;
    }
    logger7.trace("Withdrawal operation created!");
    const resp = yield res.json();
    pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
      withdrawalInProgress: true,
      talerWithdrawUri: resp.taler_withdraw_uri,
      withdrawalId: resp.withdrawal_id
    }));
  });
}

// src/pages/PaymentOptions.tsx
function PaymentOptions({ currency }) {
  const { i18n: i18n2 } = useTranslationContext();
  const [tab, setTab] = p3(
    "charge-wallet"
  );
  return /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("div", {
    class: "payments"
  }, /* @__PURE__ */ h("div", {
    class: "tab"
  }, /* @__PURE__ */ h("button", {
    class: tab === "charge-wallet" ? "tablinks active" : "tablinks",
    onClick: () => {
      setTab("charge-wallet");
    }
  }, i18n2.str`Obtain digital cash`), /* @__PURE__ */ h("button", {
    class: tab === "wire-transfer" ? "tablinks active" : "tablinks",
    onClick: () => {
      setTab("wire-transfer");
    }
  }, i18n2.str`Transfer to bank account`)), tab === "charge-wallet" && /* @__PURE__ */ h("div", {
    id: "charge-wallet",
    class: "tabcontent active"
  }, /* @__PURE__ */ h("h3", null, i18n2.str`Obtain digital cash`), /* @__PURE__ */ h(WalletWithdrawForm, {
    focus: true,
    currency
  })), tab === "wire-transfer" && /* @__PURE__ */ h("div", {
    id: "wire-transfer",
    class: "tabcontent active"
  }, /* @__PURE__ */ h("h3", null, i18n2.str`Transfer to bank account`), /* @__PURE__ */ h(PaytoWireTransferForm, {
    focus: true,
    currency
  }))));
}

// src/pages/Transactions.tsx
var logger8 = new Logger("Transactions");
function Transactions({
  pageNumber,
  accountLabel,
  balanceValue
}) {
  const { i18n: i18n2 } = useTranslationContext();
  const { data, error: error2, mutate: mutate2 } = useSWR(
    `access-api/accounts/${accountLabel}/transactions?page=${pageNumber}`
  );
  h2(() => {
    if (balanceValue) {
      mutate2();
    }
  }, [balanceValue != null ? balanceValue : ""]);
  if (typeof error2 !== "undefined") {
    logger8.error("transactions not found error", error2);
    switch (error2.status) {
      case 404: {
        return /* @__PURE__ */ h("p", null, "Transactions page ", pageNumber, " was not found.");
      }
      case 401: {
        return /* @__PURE__ */ h("p", null, "Wrong credentials given.");
      }
      default: {
        return /* @__PURE__ */ h("p", null, "Transaction page ", pageNumber, " could not be retrieved.");
      }
    }
  }
  if (!data) {
    logger8.trace(`History data of ${accountLabel} not arrived`);
    return /* @__PURE__ */ h("p", null, "Transactions page loading...");
  }
  logger8.trace(`History data of ${accountLabel}`, data);
  return /* @__PURE__ */ h("div", {
    class: "results"
  }, /* @__PURE__ */ h("table", {
    class: "pure-table pure-table-striped"
  }, /* @__PURE__ */ h("thead", null, /* @__PURE__ */ h("tr", null, /* @__PURE__ */ h("th", null, i18n2.str`Date`), /* @__PURE__ */ h("th", null, i18n2.str`Amount`), /* @__PURE__ */ h("th", null, i18n2.str`Counterpart`), /* @__PURE__ */ h("th", null, i18n2.str`Subject`))), /* @__PURE__ */ h("tbody", null, data.transactions.map((item, idx) => {
    const sign = item.direction == "DBIT" ? "-" : "";
    const counterpart = item.direction == "DBIT" ? item.creditorIban : item.debtorIban;
    const dateRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{1,2})/;
    const dateParse = dateRegex.exec(item.date);
    const date = dateParse !== null ? `${dateParse[3]}/${dateParse[2]} ${dateParse[1]}` : "date not found";
    return /* @__PURE__ */ h("tr", {
      key: idx
    }, /* @__PURE__ */ h("td", null, date), /* @__PURE__ */ h("td", null, sign, item.amount, " ", item.currency), /* @__PURE__ */ h("td", null, counterpart), /* @__PURE__ */ h("td", null, item.subject));
  }))));
}

// src/components/QR.tsx
var import_qrcode_generator = __toESM(require_qrcode());
function QR({ text }) {
  const divRef = _2(null);
  h2(() => {
    const qr = (0, import_qrcode_generator.default)(0, "L");
    qr.addData(text);
    qr.make();
    if (divRef.current)
      divRef.current.innerHTML = qr.createSvgTag({
        scalable: true
      });
  });
  return /* @__PURE__ */ h("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "left"
    }
  }, /* @__PURE__ */ h("div", {
    style: {
      width: "50%",
      minWidth: 200,
      maxWidth: 300,
      marginRight: "auto",
      marginLeft: "auto"
    },
    ref: divRef
  }));
}

// src/pages/QrCodeSection.tsx
function QrCodeSection({
  talerWithdrawUri,
  abortButton
}) {
  const { i18n: i18n2 } = useTranslationContext();
  h2(() => {
    document.title = `${document.title} ${talerWithdrawUri}`;
  }, []);
  return /* @__PURE__ */ h("section", {
    id: "main",
    class: "content"
  }, /* @__PURE__ */ h("h1", {
    class: "nav"
  }, i18n2.str`Transfer to Taler Wallet`), /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("div", {
    class: "qr-div"
  }, /* @__PURE__ */ h("p", null, i18n2.str`Use this QR code to withdraw to your mobile wallet:`), /* @__PURE__ */ h(QR, {
    text: talerWithdrawUri
  }), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h(i18n2.Translate, null, "Click", " ", /* @__PURE__ */ h("a", {
    id: "linkqr",
    href: talerWithdrawUri
  }, i18n2.str`this link`), " ", "to open your Taler wallet!")), /* @__PURE__ */ h("br", null), abortButton)));
}

// src/pages/WithdrawalConfirmationQuestion.tsx
var logger9 = new Logger("WithdrawalConfirmationQuestion");
function WithdrawalConfirmationQuestion() {
  const { pageState, pageStateSetter } = usePageContext();
  const backend = useBackendContext();
  const { i18n: i18n2 } = useTranslationContext();
  const captchaNumbers = {
    a: Math.floor(Math.random() * 10),
    b: Math.floor(Math.random() * 10)
  };
  let captchaAnswer = "";
  return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("h1", {
    class: "nav"
  }, i18n2.str`Confirm Withdrawal`), /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("div", {
    class: "challenge-div"
  }, /* @__PURE__ */ h("form", {
    class: "challenge-form",
    noValidate: true
  }, /* @__PURE__ */ h("div", {
    class: "pure-form",
    id: "captcha",
    name: "capcha-form"
  }, /* @__PURE__ */ h("h2", null, i18n2.str`Authorize withdrawal by solving challenge`), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("label", {
    for: "answer"
  }, i18n2.str`What is`, "\xA0", /* @__PURE__ */ h("em", null, captchaNumbers.a, "\xA0+\xA0", captchaNumbers.b), "?\xA0"), "\xA0", /* @__PURE__ */ h("input", {
    name: "answer",
    id: "answer",
    type: "text",
    autoFocus: true,
    required: true,
    onInput: (e3) => {
      captchaAnswer = e3.currentTarget.value;
    }
  })), /* @__PURE__ */ h("p", null, /* @__PURE__ */ h("button", {
    class: "pure-button pure-button-primary btn-confirm",
    onClick: (e3) => {
      e3.preventDefault();
      if (captchaAnswer == (captchaNumbers.a + captchaNumbers.b).toString()) {
        confirmWithdrawalCall(
          backend.state,
          pageState.withdrawalId,
          pageStateSetter,
          i18n2
        );
        return;
      }
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Answer is wrong.`
        }
      }));
    }
  }, i18n2.str`Confirm`), "\xA0", /* @__PURE__ */ h("button", {
    class: "pure-button pure-button-secondary btn-cancel",
    onClick: () => __async(this, null, function* () {
      return yield abortWithdrawalCall(
        backend.state,
        pageState.withdrawalId,
        pageStateSetter,
        i18n2
      );
    })
  }, i18n2.str`Cancel`)))), /* @__PURE__ */ h("div", {
    class: "hint"
  }, /* @__PURE__ */ h("p", null, /* @__PURE__ */ h(i18n2.Translate, null, "A this point, a ", /* @__PURE__ */ h("b", null, "real"), " bank would ask for an additional authentication proof (PIN/TAN, one time password, ..), instead of a simple calculation."))))));
}
function confirmWithdrawalCall(backendState, withdrawalId, pageStateSetter, i18n2) {
  return __async(this, null, function* () {
    if (backendState.status === "loggedOut") {
      logger9.error("No credentials found.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No credentials found.`
        }
      }));
      return;
    }
    if (typeof withdrawalId === "undefined") {
      logger9.error("No withdrawal ID found.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No withdrawal ID found.`
        }
      }));
      return;
    }
    let res;
    try {
      const { username, password } = backendState;
      const headers = prepareHeaders(username, password);
      const url = new URL(
        `access-api/accounts/${backendState.username}/withdrawals/${withdrawalId}/confirm`,
        backendState.url
      );
      res = yield fetch(url.href, {
        method: "POST",
        headers
      });
    } catch (error2) {
      logger9.error("Could not POST withdrawal confirmation to the bank", error2);
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Could not confirm the withdrawal`,
          description: error2.error.description,
          debug: JSON.stringify(error2)
        }
      }));
      return;
    }
    if (!res || !res.ok) {
      const response = yield res.json();
      logger9.error(
        `Withdrawal confirmation gave response error (${res.status})`,
        res.statusText
      );
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Withdrawal confirmation gave response error`,
          debug: JSON.stringify(response)
        }
      }));
      return;
    }
    logger9.trace("Withdrawal operation confirmed!");
    pageStateSetter((prevState) => {
      const _a2 = prevState, { talerWithdrawUri } = _a2, rest = __objRest(_a2, ["talerWithdrawUri"]);
      return __spreadProps(__spreadValues({}, rest), {
        info: i18n2.str`Withdrawal confirmed!`
      });
    });
  });
}
function abortWithdrawalCall(backendState, withdrawalId, pageStateSetter, i18n2) {
  return __async(this, null, function* () {
    if (backendState.status === "loggedOut") {
      logger9.error("No credentials found.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No credentials found.`
        }
      }));
      return;
    }
    if (typeof withdrawalId === "undefined") {
      logger9.error("No withdrawal ID found.");
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`No withdrawal ID found.`
        }
      }));
      return;
    }
    let res;
    try {
      const { username, password } = backendState;
      const headers = prepareHeaders(username, password);
      const url = new URL(
        `access-api/accounts/${backendState.username}/withdrawals/${withdrawalId}/abort`,
        backendState.url
      );
      res = yield fetch(url.href, { method: "POST", headers });
    } catch (error2) {
      logger9.error("Could not abort the withdrawal", error2);
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Could not abort the withdrawal.`,
          description: error2.error.description,
          debug: JSON.stringify(error2)
        }
      }));
      return;
    }
    if (!res.ok) {
      const response = yield res.json();
      logger9.error(
        `Withdrawal abort gave response error (${res.status})`,
        res.statusText
      );
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Withdrawal abortion failed.`,
          description: response.error.description,
          debug: JSON.stringify(response)
        }
      }));
      return;
    }
    logger9.trace("Withdrawal operation aborted!");
    pageStateSetter((prevState) => {
      const rest = __objRest(prevState, []);
      return __spreadProps(__spreadValues({}, rest), {
        info: i18n2.str`Withdrawal aborted!`
      });
    });
  });
}

// src/pages/WithdrawalQRCode.tsx
var logger10 = new Logger("WithdrawalQRCode");
function WithdrawalQRCode({
  withdrawalId,
  talerWithdrawUri
}) {
  const { pageState, pageStateSetter } = usePageContext();
  const { i18n: i18n2 } = useTranslationContext();
  const abortButton = /* @__PURE__ */ h("a", {
    class: "pure-button btn-cancel",
    onClick: () => {
      pageStateSetter((prevState) => {
        return __spreadProps(__spreadValues({}, prevState), {
          withdrawalId: void 0,
          talerWithdrawUri: void 0,
          withdrawalInProgress: false
        });
      });
    }
  }, i18n2.str`Abort`);
  logger10.trace(`Showing withdraw URI: ${talerWithdrawUri}`);
  const { data, error: error2 } = useSWR(
    `integration-api/withdrawal-operation/${withdrawalId}`,
    { refreshInterval: 1e3 }
  );
  if (typeof error2 !== "undefined") {
    logger10.error(
      `withdrawal (${withdrawalId}) was never (correctly) created at the bank...`,
      error2
    );
    pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
      error: {
        title: i18n2.str`withdrawal (${withdrawalId}) was never (correctly) created at the bank...`
      }
    }));
    return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("br", null), abortButton);
  }
  if (typeof data === "undefined")
    return /* @__PURE__ */ h("p", null, i18n2.str`Waiting the bank to create the operation...`);
  logger10.trace("withdrawal status", data);
  if (data.aborted)
    pageStateSetter((prevState) => {
      const _a2 = prevState, { withdrawalId: withdrawalId2, talerWithdrawUri: talerWithdrawUri2 } = _a2, rest = __objRest(_a2, ["withdrawalId", "talerWithdrawUri"]);
      return __spreadProps(__spreadValues({}, rest), {
        withdrawalInProgress: false,
        error: {
          title: i18n2.str`This withdrawal was aborted!`
        }
      });
    });
  if (!data.selection_done) {
    return /* @__PURE__ */ h(QrCodeSection, {
      talerWithdrawUri,
      abortButton
    });
  }
  return /* @__PURE__ */ h(WithdrawalConfirmationQuestion, null);
}

// src/pages/AccountPage.tsx
function AccountPage() {
  const backend = useBackendContext();
  const { i18n: i18n2 } = useTranslationContext();
  if (backend.state.status === "loggedOut") {
    return /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h("h1", {
      class: "nav"
    }, i18n2.str`Welcome to ${bankUiSettings.bankName}!`), /* @__PURE__ */ h(LoginForm, null));
  }
  return /* @__PURE__ */ h(SWRWithCredentials, {
    info: backend.state
  }, /* @__PURE__ */ h(Account, {
    accountLabel: backend.state.username
  }));
}
function SWRWithCredentials({
  children,
  info
}) {
  const { username, password, url: backendUrl } = info;
  const headers = prepareHeaders(username, password);
  return /* @__PURE__ */ h(SWRConfig, {
    value: {
      fetcher: (url) => {
        return fetch(new URL(url, backendUrl).href, { headers }).then((r3) => {
          if (!r3.ok)
            throw { status: r3.status, json: r3.json() };
          return r3.json();
        });
      }
    }
  }, children);
}
var logger11 = new Logger("AccountPage");
function Account({ accountLabel }) {
  const { cache: cache2 } = useSWRConfig();
  const endpoint = `access-api/accounts/${accountLabel}`;
  const { data, error: error2, mutate: mutate2 } = useSWR(endpoint, {});
  const backend = useBackendContext();
  const { pageState, pageStateSetter: setPageState } = usePageContext();
  const { withdrawalId, talerWithdrawUri, timestamp } = pageState;
  const { i18n: i18n2 } = useTranslationContext();
  h2(() => {
    mutate2();
  }, [timestamp]);
  if (typeof error2 !== "undefined") {
    logger11.error("account error", error2, endpoint);
    switch (error2.status) {
      case 404: {
        backend.clear();
        setPageState((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`Username or account label '${accountLabel}' not found.  Won't login.`
          }
        }));
        cache2.clear();
        return /* @__PURE__ */ h("p", null, "Profile not found...");
      }
      case HttpStatusCode.Unauthorized:
      case HttpStatusCode.Forbidden: {
        backend.clear();
        setPageState((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`Wrong credentials given.`
          }
        }));
        return /* @__PURE__ */ h("p", null, "Wrong credentials...");
      }
      default: {
        backend.clear();
        setPageState((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`Account information could not be retrieved.`,
            debug: JSON.stringify(error2)
          }
        }));
        return /* @__PURE__ */ h("p", null, "Unknown problem...");
      }
    }
  }
  const balance = !data ? void 0 : Amounts.parseOrThrow(data.balance.amount);
  const accountNumber = !data ? void 0 : getIbanFromPayto(data.paytoUri);
  const balanceIsDebit = data && data.balance.credit_debit_indicator == "debit";
  if (talerWithdrawUri && withdrawalId) {
    logger11.trace("Bank created a new Taler withdrawal");
    return /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h(WithdrawalQRCode, {
      withdrawalId,
      talerWithdrawUri
    }));
  }
  const balanceValue = !balance ? void 0 : Amounts.stringifyValue(balance);
  return /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("h1", {
    class: "nav welcome-text"
  }, /* @__PURE__ */ h(i18n2.Translate, null, "Welcome,", accountNumber ? `${accountLabel} (${accountNumber})` : accountLabel, "!"))), /* @__PURE__ */ h("section", {
    id: "assets"
  }, /* @__PURE__ */ h("div", {
    class: "asset-summary"
  }, /* @__PURE__ */ h("h2", null, i18n2.str`Bank account balance`), !balance ? /* @__PURE__ */ h("div", {
    class: "large-amount",
    style: { color: "gray" }
  }, "Waiting server response...") : /* @__PURE__ */ h("div", {
    class: "large-amount amount"
  }, balanceIsDebit ? /* @__PURE__ */ h("b", null, "-") : null, /* @__PURE__ */ h("span", {
    class: "value"
  }, `${balanceValue}`), "\xA0", /* @__PURE__ */ h("span", {
    class: "currency"
  }, `${balance.currency}`)))), /* @__PURE__ */ h("section", {
    id: "payments"
  }, /* @__PURE__ */ h("div", {
    class: "payments"
  }, /* @__PURE__ */ h("h2", null, i18n2.str`Payments`), /* @__PURE__ */ h(PaymentOptions, {
    currency: balance == null ? void 0 : balance.currency
  }))), /* @__PURE__ */ h("section", {
    id: "main"
  }, /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("h2", null, i18n2.str`Latest transactions:`), /* @__PURE__ */ h(Transactions, {
    balanceValue,
    pageNumber: 0,
    accountLabel
  }))));
}

// src/pages/PublicHistoriesPage.tsx
var logger12 = new Logger("PublicHistoriesPage");
function PublicHistoriesPage() {
  return /* @__PURE__ */ h(SWRWithoutCredentials, {
    baseUrl: getBankBackendBaseUrl()
  }, /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h(PublicHistories, null)));
}
function SWRWithoutCredentials({
  baseUrl,
  children
}) {
  logger12.trace("Base URL", baseUrl);
  return /* @__PURE__ */ h(SWRConfig, {
    value: {
      fetcher: (url) => fetch(baseUrl + url || "").then((r3) => {
        if (!r3.ok)
          throw { status: r3.status, json: r3.json() };
        return r3.json();
      })
    }
  }, children);
}
function PublicHistories() {
  const { pageState, pageStateSetter } = usePageContext();
  const [showAccount, setShowAccount] = useShowPublicAccount();
  const { data, error: error2 } = useSWR("access-api/public-accounts");
  const { i18n: i18n2 } = useTranslationContext();
  if (typeof error2 !== "undefined") {
    switch (error2.status) {
      case 404:
        logger12.error("public accounts: 404", error2);
        route("/account");
        pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`List of public accounts was not found.`,
            debug: JSON.stringify(error2)
          }
        }));
        break;
      default:
        logger12.error("public accounts: non-404 error", error2);
        route("/account");
        pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`List of public accounts could not be retrieved.`,
            debug: JSON.stringify(error2)
          }
        }));
        break;
    }
  }
  if (!data)
    return /* @__PURE__ */ h("p", null, "Waiting public accounts list...");
  const txs = {};
  const accountsBar = [];
  if (typeof showAccount === "undefined" && data.publicAccounts.length > 0) {
    setShowAccount(data.publicAccounts[1].accountLabel);
  }
  logger12.trace(`Public history tab: ${showAccount}`);
  for (const account of data.publicAccounts) {
    logger12.trace("Asking transactions for", account.accountLabel);
    const isSelected = account.accountLabel == showAccount;
    accountsBar.push(
      /* @__PURE__ */ h("li", {
        class: isSelected ? "pure-menu-selected pure-menu-item" : "pure-menu-item pure-menu"
      }, /* @__PURE__ */ h("a", {
        href: "#",
        class: "pure-menu-link",
        onClick: () => setShowAccount(account.accountLabel)
      }, account.accountLabel))
    );
    txs[account.accountLabel] = /* @__PURE__ */ h(Transactions, {
      accountLabel: account.accountLabel,
      pageNumber: 0
    });
  }
  return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("h1", {
    class: "nav"
  }, i18n2.str`History of public accounts`), /* @__PURE__ */ h("section", {
    id: "main"
  }, /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("div", {
    class: "pure-menu pure-menu-horizontal",
    name: "accountMenu"
  }, /* @__PURE__ */ h("ul", {
    class: "pure-menu-list"
  }, accountsBar), typeof showAccount !== "undefined" ? txs[showAccount] : /* @__PURE__ */ h("p", null, "No public transactions found."), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("a", {
    href: "/account",
    class: "pure-button"
  }, "Go back")))));
}
function useShowPublicAccount(state) {
  const ret = useLocalStorage("show-public-account", JSON.stringify(state));
  const retObj = ret[0] ? JSON.parse(ret[0]) : ret[0];
  const retSetter = function(val) {
    const newVal = val instanceof Function ? JSON.stringify(val(retObj)) : JSON.stringify(val);
    ret[1](newVal);
  };
  return [retObj, retSetter];
}

// src/pages/RegistrationPage.tsx
var logger13 = new Logger("RegistrationPage");
function RegistrationPage() {
  const { i18n: i18n2 } = useTranslationContext();
  if (!bankUiSettings.allowRegistrations) {
    return /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h("p", null, i18n2.str`Currently, the bank is not accepting new registrations!`));
  }
  return /* @__PURE__ */ h(BankFrame, null, /* @__PURE__ */ h(RegistrationForm, null));
}
var usernameRegex = /^[a-z][a-zA-Z0-9]+$/;
function RegistrationForm() {
  const backend = useBackendContext();
  const { pageState, pageStateSetter } = usePageContext();
  const [username, setUsername] = p3();
  const [password, setPassword] = p3();
  const [repeatPassword, setRepeatPassword] = p3();
  const { i18n: i18n2 } = useTranslationContext();
  const errors2 = undefinedIfEmpty({
    username: !username ? i18n2.str`Missing username` : !usernameRegex.test(username) ? i18n2.str`Use only letter and numbers starting with a lower case letter` : void 0,
    password: !password ? i18n2.str`Missing password` : !usernameRegex.test(password) ? i18n2.str`Use only letter and numbers starting with a lower case letter` : void 0,
    repeatPassword: !repeatPassword ? i18n2.str`Missing password` : repeatPassword !== password ? i18n2.str`Password don't match` : void 0
  });
  return /* @__PURE__ */ h(p2, null, /* @__PURE__ */ h("h1", {
    class: "nav"
  }, i18n2.str`Welcome to ${bankUiSettings.bankName}!`), /* @__PURE__ */ h("article", null, /* @__PURE__ */ h("div", {
    class: "register-div"
  }, /* @__PURE__ */ h("form", {
    action: "javascript:void(0);",
    class: "register-form",
    noValidate: true
  }, /* @__PURE__ */ h("div", {
    class: "pure-form"
  }, /* @__PURE__ */ h("h2", null, i18n2.str`Please register!`), /* @__PURE__ */ h("p", {
    class: "unameFieldLabel registerFieldLabel formFieldLabel"
  }, /* @__PURE__ */ h("label", {
    for: "register-un"
  }, i18n2.str`Username:`)), /* @__PURE__ */ h("input", {
    id: "register-un",
    name: "register-un",
    type: "text",
    placeholder: "Username",
    value: username != null ? username : "",
    onInput: (e3) => {
      setUsername(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errors2 == null ? void 0 : errors2.username,
    isDirty: username !== void 0
  }), /* @__PURE__ */ h("p", {
    class: "unameFieldLabel registerFieldLabel formFieldLabel"
  }, /* @__PURE__ */ h("label", {
    for: "register-pw"
  }, i18n2.str`Password:`)), /* @__PURE__ */ h("input", {
    type: "password",
    name: "register-pw",
    id: "register-pw",
    placeholder: "Password",
    value: password != null ? password : "",
    required: true,
    onInput: (e3) => {
      setPassword(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errors2 == null ? void 0 : errors2.password,
    isDirty: password !== void 0
  }), /* @__PURE__ */ h("p", {
    class: "unameFieldLabel registerFieldLabel formFieldLabel"
  }, /* @__PURE__ */ h("label", {
    for: "register-repeat"
  }, i18n2.str`Repeat Password:`)), /* @__PURE__ */ h("input", {
    type: "password",
    style: { marginBottom: 8 },
    name: "register-repeat",
    id: "register-repeat",
    placeholder: "Same password",
    value: repeatPassword != null ? repeatPassword : "",
    required: true,
    onInput: (e3) => {
      setRepeatPassword(e3.currentTarget.value);
    }
  }), /* @__PURE__ */ h(ShowInputErrorLabel, {
    message: errors2 == null ? void 0 : errors2.repeatPassword,
    isDirty: repeatPassword !== void 0
  }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("button", {
    class: "pure-button pure-button-primary btn-register",
    disabled: !!errors2,
    onClick: () => {
      if (!username || !password)
        return;
      registrationCall(
        { username, password },
        backend,
        pageStateSetter,
        i18n2
      );
      setUsername(void 0);
      setPassword(void 0);
      setRepeatPassword(void 0);
    }
  }, i18n2.str`Register`), /* @__PURE__ */ h("button", {
    class: "pure-button pure-button-secondary btn-cancel",
    onClick: () => {
      setUsername(void 0);
      setPassword(void 0);
      setRepeatPassword(void 0);
      route("/account");
    }
  }, i18n2.str`Cancel`))))));
}
function registrationCall(req, backend, pageStateSetter, i18n2) {
  return __async(this, null, function* () {
    const url = getBankBackendBaseUrl();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const registerEndpoint = new URL("access-api/testing/register", url);
    let res;
    try {
      res = yield fetch(registerEndpoint.href, {
        method: "POST",
        body: JSON.stringify({
          username: req.username,
          password: req.password
        }),
        headers
      });
    } catch (error2) {
      logger13.error(
        `Could not POST new registration to the bank (${registerEndpoint.href})`,
        error2
      );
      pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
        error: {
          title: i18n2.str`Registration failed, please report`,
          debug: JSON.stringify(error2)
        }
      }));
      return;
    }
    if (!res.ok) {
      const response = yield res.json();
      if (res.status === 409) {
        pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`That username is already taken`,
            debug: JSON.stringify(response)
          }
        }));
      } else {
        pageStateSetter((prevState) => __spreadProps(__spreadValues({}, prevState), {
          error: {
            title: i18n2.str`New registration gave response error`,
            debug: JSON.stringify(response)
          }
        }));
      }
    } else {
      backend.save({
        url,
        username: req.username,
        password: req.password
      });
      route("/account");
    }
  });
}

// src/pages/Routing.tsx
function Routing() {
  const history2 = createHashHistory();
  return /* @__PURE__ */ h(preact_router_es_default, {
    history: history2
  }, /* @__PURE__ */ h(Route, {
    path: "/public-accounts",
    component: PublicHistoriesPage
  }), /* @__PURE__ */ h(Route, {
    path: "/register",
    component: RegistrationPage
  }), /* @__PURE__ */ h(Route, {
    path: "/account",
    component: AccountPage
  }), /* @__PURE__ */ h(Route, {
    default: true,
    component: Redirect,
    to: "/account"
  }));
}
function Redirect({ to }) {
  h2(() => {
    route(to, true);
  }, []);
  return /* @__PURE__ */ h("div", null, "being redirected to ", to);
}

// src/components/app.tsx
var App = () => {
  return /* @__PURE__ */ h(TranslationProvider, {
    source: strings
  }, /* @__PURE__ */ h(PageStateProvider, null, /* @__PURE__ */ h(BackendStateProvider, null, /* @__PURE__ */ h(Routing, null))));
};
window.setGlobalLogLevelFromString = setGlobalLogLevelFromString;
window.getGlobaLevel = () => {
  return globalLogLevel;
};
var app_default = App;

// src/index.tsx
var app = document.getElementById("app");
P(/* @__PURE__ */ h(app_default, null), app);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @preserve jed.js https://github.com/SlexAxton/Jed
 */
//# sourceMappingURL=index.js.map
