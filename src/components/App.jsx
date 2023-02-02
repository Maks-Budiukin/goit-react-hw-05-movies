import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

import Movies from "./Movies/Movies";
import NotFound from "./NotFound/NotFound";

const Home = lazy(() => import("./Home/Home"));
const Cast = lazy(() => import("./Cast/Cast"));
const Movie = lazy(() => import("./Movie/Movie"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {

return (<>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
    )
};
