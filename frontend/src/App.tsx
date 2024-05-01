import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import UserLayout from "./layouts/UserLayout";
import { Details } from "./pages/Details";
import Error from "./components/Error";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<UserLayout />}>
    <Route 
      index element={<Dashboard />} 
      errorElement={<Error />}
    />
    <Route 
      path='details' element={<Details />} 
      errorElement={<Error />} 
    />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}