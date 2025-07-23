import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
import SearchComponent from "./SearchComponent";
import { RecipeProvider } from "../context/RecipeContext";
import Error from "./Error";

// Layout with Header and Footer shown on every page
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-content">
        <Outlet />
        <Footer />
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
      { path: "/search", element: <SearchComponent /> },
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
