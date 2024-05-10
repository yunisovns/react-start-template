import React, { ChangeEvent, FC, useState } from 'react';
import { Modal } from '../Modal';

const ModalInputButton: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('Modal Text');

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onModalTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex  flex-col items-center justify-center dark:bg-slate-800 dark:text-white">
      <input
        className="rounded px-4 py-2 transition duration-300 dark:bg-slate-800  dark:text-white"
        placeholder="Modal Text"
        value={inputValue}
        onChange={onModalTextChange}
      />
      <button
        onClick={openModal}
        type="button"
        className="dark:bg-slate-800-indigo-500 mt-5 flex w-auto items-center justify-center rounded-bl-lg rounded-br-lg rounded-tr-lg bg-indigo-100 py-2 font-semibold shadow-lg hover:bg-gray-300 hover:shadow-xl"
      >
        Открыть модальное окно
      </button>

      {modalVisible && (
        <Modal onClose={closeModal} visible={modalVisible}>
          <p>{inputValue}!</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalInputButton;
