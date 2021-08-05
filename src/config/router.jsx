import Home from "../pages/home";
import MoviePage from '../pages/movie-page'

export const routes = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        title: "Home",
        isHeaderElement: true,
    },
    {
        path: "/movies/:id",
        exact: false,
        component: <MoviePage />,
        title: "Movie",
        isHeaderElement: false,
    },
];