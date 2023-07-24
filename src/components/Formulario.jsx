import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

const useFormulario = () => {
  const info = JSON.parse(localStorage.getItem("info")) || [];

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");

  const informacion = [
    {
      nombre: nombre,
      apellido: apellido,
      email: email,
      dni: dni,
    },
  ];

  const [listaFormulario, setListaFormulario] = useState(info);

  const handleSubmit = (event) => {
    (event) => event.preventDefault(event);
    setListaFormulario([...listaFormulario, informacion]);
    setApellido("");
    setDni("");
    setEmail("");
    setNombre("");
    info.push(informacion);
    localStorage.setItem("info", JSON.stringify(info));
    alert("Su informacion fue subida con exito");
    event.reset();
  };

  return {
    handleSubmit,
    nombre,
    setNombre,
    apellido,
    setApellido,
    email,
    setEmail,
    dni,
    setDni,
    informacion,
    listaFormulario,
  };
};

const Formulario = () => {
  const arregloFormulario = useFormulario();
  return (
    <section className="bg-secondary border border-2 rounded-3 border-dark pt-5  px-2 mb-3">
      <Form onSubmit={arregloFormulario.handleSubmit}>
        <FormGroup className="mb-3 d-flex row">
          <article className="col-6">
            <FormControl
              className="col-6 mb-3"
              type="text"
              placeholder="Nombre"
              defaultValue={arregloFormulario.nombre}
              onChange={(e) => arregloFormulario.setNombre(e.target.value)}
              required
            ></FormControl>
          </article>
          <article className="col-6 mb-3">
            <FormControl
              className="col-6"
              type="text"
              placeholder="Apellido"
              defaultValue={arregloFormulario.apellido}
              onChange={(e) => arregloFormulario.setApellido(e.target.value)}
              required
            ></FormControl>
          </article>
          <article className="col-6 mb-3">
            <FormControl
              className="col-6"
              type="mail"
              placeholder="mail@gmail.com"
              defaultValue={arregloFormulario.email}
              onChange={(e) => arregloFormulario.setEmail(e.target.value)}
              required
            ></FormControl>
          </article>
          <article className="col-6 mb-3">
            <FormControl
              className="col-6"
              type="number"
              placeholder="DNI"
              defaultValue={arregloFormulario.dni}
              onChange={(e) => arregloFormulario.setDni(e.target.value)}
              required
            ></FormControl>
          </article>
          <article className="text-center mb-3">
            <Button variant="warning" type="submit">
              Enviar
            </Button>
          </article>
        </FormGroup>
      </Form>
    </section>
  );
};

export default Formulario;
