import { useRouteError, useNavigate } from "react-router-dom";
import {
  GOTO_HOME,
  MOVED_DELETED,
  PAGE_LOOKING_FOR,
  PAGE_NOT_FOUND,
} from "../utils/constants";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-boundary">
      <h1>{PAGE_NOT_FOUND}</h1>
      <p className="error-message">
        {PAGE_LOOKING_FOR}
        <br />
        {error?.statusText || MOVED_DELETED}
      </p>
      <button className="go-home-btn" onClick={() => navigate("/")}>
        {GOTO_HOME}
      </button>
    </div>
  );
};

export default Error;
