import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layout";
import Home from "../modules/components/homes/Home";
import Explore from "../modules/components/explore/Explore";
import Messages from "../modules/components/messages/Messages";
import Feeds from "../modules/components/explore/widgets/Feeds";
import Reels from "../modules/components/explore/widgets/Reels";
import FYP from "../modules/components/explore/widgets/FYP";
import Profiles from "../modules/components/profiles/Profiles";
import Login from "../../../Tugas/Tugas 3/Login";
import NotFound from "../../../Tugas/Tugas 3/NotFound";

export default function AppRoute() {
  const routes = [
    // { path: "", element: <Home /> },
    { path: "home", element: <Home /> },
    {
      path: "explore",
      element: <Explore />,
      children: [
        { path: "feeds", element: <Feeds /> },
        { path: "reels", element: <Reels /> },
        { path: "fyp", element: <FYP /> },
      ],
    },
    { path: "messages", element: <Messages /> },
    { path: "profile", element: <Profiles /> },
  ];

  return (
    // <Routes>
    //     <Route index element={<Login />} />
    //     <Route path='home' element={<Layouts><Home /></Layouts>} />
    //     <Route path='explore' element={<Layouts><Explore /></Layouts>} >
    //         <Route path="feeds" element={<Feeds />} />
    //         <Route path="reels" element={<Reels />} />
    //         <Route path="fyp" element={<FYP />} />
    //     </Route>
    //     <Route path='messages' element={<Layouts><Messages /></Layouts>} />
    //     <Route path='profile' element={<Layouts><Profiles /></Layouts>} />

    //     <Route path='login' element={<Login />} />
    //     <Route path='*' element={<NotFound />} />
    // </Routes>
    <Routes>
      <Route index element={<Login />} />
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layouts>{route.element}</Layouts>}
        >
          {route.children?.map((child) => (
            <Route key={child.path} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
