import { Link } from "react-router-dom";

export default function Root() {
    return (
      <div>
        <h1>{`Landing page`}</h1>
        <Link to="/portfolio">My portfolio</Link>
      </div>
    );
  }