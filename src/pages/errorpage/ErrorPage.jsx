import "./errorpage.scss"
import { useRouteError } from "react-router-dom";
import { Navbar
 } from "../../components/Navbar/Navbar";
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorpage">
        <Navbar />
        <div className="notfound">
            <div className="title">404</div>
            <span>Sorry, an unexpected error has occurred.</span>
        </div>
    </div>
  );
}