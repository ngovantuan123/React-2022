import { Navigate } from "react-router-dom";
import React from "react";
import NotFound from "./Pages/PageNotFound";
import Page401 from "./Pages/PermissionDenied";
import Home from "./Pages/Home";
import MainLayout from "./components/Layout/Mainlayout";
import UserManagement from "./Pages/UserManagement/UserManagement";
import NotiManagement from "./Pages/NotiManagement/NotiManagement";
import UserInfo from "./Pages/UserInfo/UserInfo";
export const routes = [{
    path: "/",
    element: < MainLayout / > ,
    children: [
        { path: "404", element: < NotFound / > },
        { path: "401", element: < Page401 / > },
        {
            path: "login",
            element: < Navigate to = "/"
            replace / >
        },
        { path: "home", element: < Home / > },
        { path: "user", element: < UserManagement / > },
        { path: "noti", element: < NotiManagement / > },
        { path: "user-info", element: < UserInfo / > },
        {
            index: true,
            element: < Navigate to = "home" / > ,
        },
        { path: "*", element: < Navigate to = "404" / > },
    ],
}, ];