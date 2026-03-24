import Loader from "widgets/Loader/Loader";
import "./PageLoader.scss";

export default function PageLoader() {
  return (
    <div className={"page-loader"}>
      <Loader />
    </div>
  );
}
