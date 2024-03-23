import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserLayout from "./layouts/UserLayout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<UserLayout />}>
    <Route index element={<Dashboard />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}


