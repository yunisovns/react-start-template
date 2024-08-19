import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalInputButton from './shared/ModalInputButton/ModalInputButton';
import { ProfilePage } from './shared/Profile/ProfilePage';
import { BaseLayout } from './shared/layouts/BaseLayout';
import { LocalizationInitiator } from './shared/localization/LocalizationInitiator';
import { MainPage } from './widgets/MainPage/mainpage';
import OperationList from './widgets/OperationList/OperationList';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex-col dark:bg-slate-800 dark:text-white">
        <LocalizationInitiator />
        <BaseLayout>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/operation" element={<OperationList />} />
            <Route path="/modal" element={<ModalInputButton />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BaseLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
