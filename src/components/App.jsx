import { Routes, Route} from "react-router-dom";
import { lazy } from "react";

import Movies from "../Pages/Movies/Movies";
import NotFound from "../Pages/NotFound/NotFound";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../Pages/Home/Home"));
const Cast = lazy(() => import("./Cast/Cast"));
const Movie = lazy(() => import("../Pages/Movie/Movie"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {

return (<>
        
        
          <Routes>
              <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                      <Route path="/movies/:id" element={<Movie />} >
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                      </Route>
                  <Route path="*" element={<NotFound />} />
              </Route>
        </Routes>
      
    </>
    )
};
