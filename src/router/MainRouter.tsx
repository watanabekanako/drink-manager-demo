import { Route, Routes } from "react-router-dom";

import { AdminRouter } from "./AdminRouter";
import { UserRouter } from "./UserRouter";

// import { MainMock } from "../components/pages/MainMock";
import Login from "../components/pages/Login";
import AdminLogin from "../components/pages/AdminLogin";
import AdminHome from "../components/pages/AdminHome";
import Register from "../components/pages/Register";
import Top from "../components/pages/Top";
import DefaultLayout from "../components/layout/DefaultLayout";
// ヘッダー不必要のため仮置
import Faq from "../components/pages/Faq";

const MainRoute = [
  // {
  //   path: "/main",
  //   element: <MainMock />,
  // },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/adminhome",
    element: <AdminHome />,
  },
  {
    path: "/home",
    element: <Top />,
  },
  // ヘッダー不必要のため仮置
  {
    path: "/faq",
    element: <Faq />,
  },
];

export const MainRouter = () => {
  return (
    <>
      <Routes>
        {MainRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
       {/* adminhome配下のルーティング */}
       {AdminRouter.map((route, index) => (
          <Route
            key={index}
            path={`/adminhome${route.path}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
        {/* home配下のルーティング */}
        {UserRouter.map((route, index) => (
          <Route
            key={index}
            path={`/home${route.path}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
      </Routes>
    </>
  );
};