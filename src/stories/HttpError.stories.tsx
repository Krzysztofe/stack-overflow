import HttpError from "../components/HttpError";



export default {
  title: "HttpError",
  component: HttpError,
};

export const Primary = () => (
  <HttpError errorMsg={new Error("An error occurred.")} />
);
