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
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-[#fdfdfd]">
      <h1 className="text-[2.5rem] text-[#444] font-bold">{PAGE_NOT_FOUND}</h1>
      <p className="font-[1.1rem] text-[#666] my-4 mx-0">
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
