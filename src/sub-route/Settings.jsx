import SettingEditProfilePage from "pages/SettingEditProfile";
import SettingPrivacyPolicyPage from "pages/SettingPrivacyPolicy";
import SettingProfilePage from "pages/SettingProfile";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Settings = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/setting/profile"} />} />
    </Routes>
  );
};

export default Settings;
