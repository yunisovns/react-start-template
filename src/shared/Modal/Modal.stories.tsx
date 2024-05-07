import { Meta } from '@storybook/react';
import React from 'react';
import '../../index.css';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    visible: true,
    children: (
      <>
        <h1>Модальное окно</h1>
        <p>
          Модальное окно в графическом интерфейсе пользователя — это окно, которое блокирует работу пользователя с
          родительским приложением до тех пор, пока пользователь это окно не закроет.
        </p>
      </>
    ),
  },
};

export default meta;

export const Default = {};
