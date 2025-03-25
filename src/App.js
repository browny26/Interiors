import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-bg">
      <Container>
        <Navbar />
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
