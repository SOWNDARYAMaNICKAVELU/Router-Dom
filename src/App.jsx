import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Order } from "./components/Order";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Products } from "./components/Products";
import { PageNotFound } from "./components/PageNotFound";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { Signin } from "./components/Signin";
import { RequireAuth } from "./components/RequireAuth";

const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        /*---------- Protected Routes----------*/
        <Route
          path="/signin"
          element={
            <RequireAuth>
              <Signin />
            </RequireAuth>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <About />
            </React.Suspense>
          }
        />
        <Route path="order" element={<Order/>} />
        /*---------- Nested Routes---------- */

        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        /* ----------Dynamic Routes---------- */
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
