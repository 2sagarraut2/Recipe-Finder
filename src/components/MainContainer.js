import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
// import SearchComponent from "./SearchComponent";
import { RecipeProvider } from "../context/RecipeContext";
import Error from "./Error";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const LazySearchComponent = lazy(() => import("./SearchComponent"));

// Layout with Header and Footer shown on every page
const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <UserContext.Provider value={{ loggedInUser: "Abhishek" }}>
        <Header />
      </UserContext.Provider>
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
      { path: "*", element: <Error /> },
    ],
  },
]);

const MainContainer = () => {
  const [username, setUserName] = useState("Sagar");
  return (
    <UserContext.Provider value={{ loggedInUser: username }}>
      <RecipeProvider>
        <div className="pt-[10px]">
          <RouterProvider router={appRouter} />
        </div>
      </RecipeProvider>
    </UserContext.Provider>
  );
};

export default MainContainer;
