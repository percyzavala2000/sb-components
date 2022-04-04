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
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from '../../components/MyLabel';
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
    }
};
var Template = function (arg) { return _jsx(MyLabel, __assign({}, arg)); };
export var Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allcaps: false,
    color: 'primary',
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'h1',
    allcaps: true,
};
export var Secundary = Template.bind({});
Secundary.args = {
    size: 'h2',
    color: 'secondary',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'h3',
    color: 'tertiary'
};
export var CustonFontColor = Template.bind({});
Tertiary.args = {
    size: 'h1',
    fontcolor: '#5517ac',
};
