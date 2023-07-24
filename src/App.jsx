import "./App.css";
import "./components/Titulo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <Formulario></Formulario>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>Todos los derechos reservados &copy; 2023 </p>
      </footer>
    </>
  );
}

export default App;
