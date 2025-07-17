import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";

// Layout with Header and Footer shown on every page
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* renders child route component */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/recipes",
        element: <Body />,
      },
      {
        path: "/recipe/:id", // assuming you pass an ID for details
        element: <RecipeDetails />,
      },
    ],
  },
]);

const MainContainer = () => {
  return (
    <div className="main-container">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default MainContainer;

// const Body = () => {
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />,
//     },
//     {
//       path: "/browse",
//       element: <Browse />,
//     },
//     {
//       path: "/info/:id",
//       element: <MovieInfoPopup />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={appRouter}></RouterProvider>
//     </div>
//   );
// };

// export default Body;
