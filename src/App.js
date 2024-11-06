import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import TvShows from "./TvShows/TvShows";
import MovieDetails from "./MovieDetails/MovieDetails";
import TvShowsDetails from "./TvShowsDetails/TvShowsDetails";
import Footer from "./Footer/Footer";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tvShows", element: <TvShows /> },
      { path: "movieDetails/:id", element: <MovieDetails /> },
      { path: "tvDetails/:id", element: <TvShowsDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>      
        <RouterProvider router={routes} />
        <Footer />
      
    </>
  );
}

export default App;
