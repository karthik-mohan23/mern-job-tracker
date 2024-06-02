import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{error.status}</h1>
            <p className="py-6">Oops! Page Not Found.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{error.statusText}</h1>
        </div>
      </div>
    </div>
  );
}
export default Error;
