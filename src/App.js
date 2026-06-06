import React, { useState } from 'react';
import './App.css';

function App() {
  const [logged, setLogged] = useState(false);
  const [vista, setVista] = useState("inventario");

  const [productos, setProductos] = useState([
    { nombre: "Arroz", cantidad: 10 },
    { nombre: "Leche", cantidad: 5 }
  ]);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    cantidad: ""
  });

  const [registro, setRegistro] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const agregarProducto = () => {
    if (!nuevo.nombre || !nuevo.cantidad) return;

    setProductos([...productos, nuevo]);

    setNuevo({
      nombre: "",
      cantidad: ""
    });

    alert("Donación publicada correctamente");
  };

  if (!logged) {
    return (
      <div className="container">
        <div className="card">
          <h1>🍽️ AppEat</h1>

          <h2>Iniciar Sesión</h2>

          <input placeholder="Correo electrónico" />
          <input placeholder="Contraseña" type="password" />

          <button onClick={() => setLogged(true)}>
            Ingresar
          </button>

          <hr />

          <h3>Registro</h3>

          <input
            placeholder="Nombre"
            value={registro.nombre}
            onChange={(e) =>
              setRegistro({
                ...registro,
                nombre: e.target.value
              })
            }
          />

          <input
            placeholder="Correo"
            value={registro.email}
            onChange={(e) =>
              setRegistro({
                ...registro,
                email: e.target.value
              })
            }
          />

          <input
            placeholder="Contraseña"
            type="password"
            value={registro.password}
            onChange={(e) =>
              setRegistro({
                ...registro,
                password: e.target.value
              })
            }
          />

          <button>
            Registrarse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="card">
        <h1>🍽️ AppEat</h1>

        <button onClick={() => setVista("inventario")}>
          Inventario
        </button>

        <button onClick={() => setVista("publicar")}>
          Publicar Donación
        </button>

        <button onClick={() => setLogged(false)}>
          Cerrar Sesión
        </button>
      </div>

      {vista === "inventario" && (
        <div className="card">
          <h2>Inventario de Donaciones</h2>

          <ul>
            {productos.map((p, i) => (
              <li key={i}>
                {p.nombre} - {p.cantidad} unidades
              </li>
            ))}
          </ul>
        </div>
      )}

      {vista === "publicar" && (
        <div className="card">
          <h2>Publicar Donación</h2>

          <input
            placeholder="Nombre del producto"
            value={nuevo.nombre}
            onChange={(e) =>
              setNuevo({
                ...nuevo,
                nombre: e.target.value
              })
            }
          />

          <input
            placeholder="Cantidad"
            value={nuevo.cantidad}
            onChange={(e) =>
              setNuevo({
                ...nuevo,
                cantidad: e.target.value
              })
            }
          />

          <button onClick={agregarProducto}>
            Publicar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;