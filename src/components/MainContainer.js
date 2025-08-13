import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
import { RecipeProvider } from "../context/RecipeContext";
import Error from "./Error";
import { lazy, Suspense, useEffect, useState } from "react";
import { UserProvider } from "../context/UserContext";

const LazySearchComponent = lazy(() => import("./SearchComponent"));
const LazyFavouriteComponent = lazy(() => import("./Favourites"));

const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="p-5 w-[calc(110%-50px)]">
        <div className="pt-[2%] ml-[15%]">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/recipe/:id", element: <RecipeDetails /> },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <LazySearchComponent />
          </Suspense>
        ),
      },
      {
        path: "favourites",
        element: (
          <Suspense fallback={<h3>Loading</h3>}>
            <LazyFavouriteComponent />
          </Suspense>
        ),
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

const MainContainer = () => {
  return (
    <RecipeProvider>
      <UserProvider>
        <div className="pt-[10px]">
          <RouterProvider router={appRouter} />
        </div>
      </UserProvider>
    </RecipeProvider>
  );
};

export default MainContainer;
