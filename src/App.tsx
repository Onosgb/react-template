import "./styles.css";
import image from "./logo512.png";
export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template -{process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      ;
      <img src={image} alt="React Logo" />
    </>
  );
};
