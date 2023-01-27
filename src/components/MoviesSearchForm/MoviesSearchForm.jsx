import { useState } from "react";

export const MoviesSearchForm = ({onSubmit}) => {
    const [request, setRequest] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(request)
      setRequest("")
    }

    return (
    <>
      
        <form onSubmit={handleSubmit}>
          <button type="submit">Search</button>
            <input
              name="request"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={request}
              onChange={(event) => setRequest(event.target.value)}
            />
      
        </form>
     
    </>
    );
}

