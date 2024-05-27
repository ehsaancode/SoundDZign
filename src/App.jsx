import "./App.css";
import {
  Header,
  Topics,
  Footer,
  Blog,
  Testimonial,
  Info,
} from "./components/index.js";

const App = () => {
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
