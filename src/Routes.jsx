import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Spinner from "components/loader/Spinner";
import Settings from "sub-route/Settings";
import ChangePassword from "pages/change-password/ChangePassword";
const SettingTermsCondition = React.lazy(() =>
  import("pages/SettingTermsCondition")
);
const SettingPrivacyPolicy = React.lazy(() =>
  import("pages/SettingPrivacyPolicy")
);
const SettingEditProfile = React.lazy(() => import("pages/SettingEditProfile"));
const SettingProfile = React.lazy(() => import("pages/SettingProfile"));
const SupportHelp = React.lazy(() => import("pages/SupportHelp"));
const AllCars = React.lazy(() => import("pages/AllCars"));
const MyMember = React.lazy(() => import("pages/MyMember"));
const AdminPanel = React.lazy(() => import("pages/AdminPanel"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<AdminPanel />} />
          <Route path="/mymember" element={<MyMember />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route path="/supporthelp" element={<SupportHelp />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/setting/profile" element={<SettingProfile />} />
          <Route
            path="/setting/profile/edit"
            element={<SettingEditProfile />}
          />
          <Route
            path="/setting/privacy-policy"
            element={<SettingPrivacyPolicy />}
          />
          <Route
            path="/setting/terms-condition"
            element={<SettingTermsCondition />}
          />
          <Route path="/setting/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
