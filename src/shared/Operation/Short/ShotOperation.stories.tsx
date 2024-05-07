import { Meta } from '@storybook/react';
import { ShortOperation } from './ShortOperation';

const meta: Meta<typeof ShortOperation> = {
  title: 'shared/ShortOperation',
  component: ShortOperation,
  args: {
    title: 'Курс "React.js Developer"',
    ShortDiscription: 'Очень короткое описание операции которое один непонятный человек может сделать очень длинным',
    transactionAmount: 100000,
    Category: 'Обучение',
  },
};

export default meta;

export const Default = {};
