import { Meta } from '@storybook/react';
import { LongOperation } from './LongOperation';

const meta: Meta<typeof LongOperation> = {
  title: 'shared/LongOperation',
  component: LongOperation,
  args: {
    title: 'Оплата обучения по курсу "React.js Developer"',
    Discription: 'Очень короткое описание операции которое один непонятный человек может сделать очень длинным',
    transactionAmount: 100000,
    Category: 'Обучение',
    Date: '23.04.2022',
  },
};

export default meta;

export const Default = {};
