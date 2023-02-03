import { useState } from "react";
import PropTypes from 'prop-types';

import css from "components/MoviesSearchForm/MoviesSearchForm.module.css"

export const MoviesSearchForm = ({onSubmit}) => {
    const [request, setRequest] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(request)
      setRequest("")
    }

    return (
    <>
      
        <form onSubmit={handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>Search</button>
            <input
              name="request"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
              value={request}
            onChange={(event) => setRequest(event.target.value)}
            className={css.input}
            />
      
        </form>
     
    </>
    );
}

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}
