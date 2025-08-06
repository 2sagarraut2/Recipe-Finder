import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
// import SearchComponent from "./SearchComponent";
import { RecipeProvider } from "../context/RecipeContext";
import Error from "./Error";
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./SearchComponent"));

// Layout with Header and Footer shown on every page
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-content">
        <div className="body">
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
    element: <AppLayout />, // Header + Footer layout
    children: [
      { path: "/", element: <Body /> },
      { path: "/recipe/:id", element: <RecipeDetails /> },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <LazyComponent />
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
      <div className="main-container">
        <RouterProvider router={appRouter} />
      </div>
    </RecipeProvider>
  );
};

export default MainContainer;
