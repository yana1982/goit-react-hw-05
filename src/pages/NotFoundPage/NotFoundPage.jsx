import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <p>
        Page not found!<Link to="/">Return to Homepage</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
