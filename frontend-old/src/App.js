import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import UserLayout from "./layouts/UserLayout";
import { Details } from "./pages/Details";



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<UserLayout />}>
    <Route index element={<Dashboard />} />
    <Route path='details' element={<Details />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}


