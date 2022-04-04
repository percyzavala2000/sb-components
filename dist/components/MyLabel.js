var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import './mylabel.css';
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'no Label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, allcaps = _a.allcaps, _e = _a.fontcolor, fontcolor = _e === void 0 ? '' : _e, props = __rest(_a, ["label", "size", "color", "allcaps", "fontcolor"]);
    var mode = allcaps && 'allcaps';
    return (_jsxs("span", __assign({ className: "label ".concat(size, " text-").concat(color, " ").concat(mode), style: { color: fontcolor } }, props, { children: [" ", label, " "] })));
};
