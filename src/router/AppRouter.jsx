import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login and register */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* Journal app */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
