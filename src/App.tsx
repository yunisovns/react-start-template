import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './features/forms/LoginForm';
import RegForm from './features/forms/RegForm';
import ModalInputButton from './shared/ModalInputButton/ModalInputButton';
import { ProfilePage } from './shared/Profile/ProfilePage';
import PrivateRoute from './shared/Routes/PrivateRoute';
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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegForm />} />
            <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
            <Route path="/operation" element={<PrivateRoute element={<OperationList />} />} />
            <Route path="/modal" element={<ModalInputButton />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BaseLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
