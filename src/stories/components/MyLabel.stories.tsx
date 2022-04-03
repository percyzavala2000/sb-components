import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel} from '../../components/MyLabel';

export default {
    title:'UI/MyLabel',
    component:MyLabel,
    argTypes:{
        color:{control:'select'},
    }
} as ComponentMeta<typeof MyLabel> ;

const Template:ComponentStory<typeof MyLabel > = (arg)=> <MyLabel {...arg} />;

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allcaps:false,
    color:'primary',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'h1',
    allcaps:true,
}
export const Secundary = Template.bind({});
Secundary.args = {
    size:'h2',
    color:'secondary',
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'h3',
    color:'tertiary'
}
export const CustonFontColor = Template.bind({});
Tertiary.args = {
    size:'h1',
    fontcolor:'#5517ac',
}
