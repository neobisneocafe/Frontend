import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
      <div>
          <h1>ERROR PAGE</h1> 
          <p>404 - TRY AGAIN - CHECK THE PATH!</p>
          <Link to="/main">Go back</Link>
      </div>
    )
  }