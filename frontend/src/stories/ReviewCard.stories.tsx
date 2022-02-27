import { Meta, Story } from '@storybook/react';
import { ReviewCard } from '../components/ReviewCard';

const meta: Meta = {
    title: "ReviewCard",
    component: ReviewCard,
}

export default meta;

const Template: Story<{
    name: string,
    description: string,
    photo: string,
}> = (args) => <ReviewCard review={args}/>

export const Main = Template.bind({});

Main.args = {
    name:'Joao',
    description:"estamos aqui mais um dia",
    photo: "https://cdn-icons-png.flaticon.com/512/194/194938.png"
}
