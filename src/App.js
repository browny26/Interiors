import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="bg-bg">
      <Container>
        <Navbar />
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
