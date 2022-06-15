import { useEffect, useState } from "react";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  characters: "Personajes",
  consumables: "Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemies: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
};

function App() {
  const [genshinState, setGenshinState] = useState({
    types: [],
  });

  const fetchGenshinApi = async (item, url = "https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJson = await respuesta.json();

  

    if (item === "types") {
      setGenshinState({
        ...genshinState,
        types: respJson.types,
      });
    } 
    
    else {
      setGenshinState({types:[...genshinState.types], [item]:respJson});
    
    }
    console.log(respJson);
  };

  useEffect(() => {
    fetchGenshinApi("types");
  }, []);

  // fetchGenshinApi("types");

  const handleChangeType = ({ target }) => {
    const url = `https://api.genshin.dev/${target.value}`;
    fetchGenshinApi(target.value, url);
  };

  return (
    <div className="App">
      <div className="card container p-3 mt-4 text-center" id="contenedor">
        <center>
          <img
            className="p-3"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png"
            alt=""
            width={200}
            height={100}
          />
        </center>

        <select
          className="form-select"
          aria-label="Disabled select example"
          name="types"
          onChange={handleChangeType}
        >
          <option value="">Seleccione un Elemento</option>
          {genshinState.types?.map((type) => (
            <option key={type} value={type}>
              {tipos[type]}
            </option>
          ))}
        </select>

        {genshinState.artifacts && (
          <select
            name="artifacts"
            className="form-select mt-2"
            aria-label="Disabled select example"
          >
            <option value="">Seleccione un set de artefactos</option>
            {genshinState.artifacts.map((artifact) => (
              <option key={artifact} value={artifact}>
                {artifact}
              </option>
            ))}
          </select>
        )}

        {genshinState.boss && (
          <select
            name="boss"
            className="form-select mt-2"
            aria-label="Disabled select example"
          >
            <option value="">Seleccione un set de Jefes</option>
            {genshinState.boss.map((bos) => (
              <option key={bos} value={bos}>
                {bos}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="card container p-3 mt-4 text-center" id="contenedor">
        <div>
          <form class="d-flex w-50 mx-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
      
          </form>
        </div>

      <hr />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card  h-100">
              <img
                src="https://somoskudasai.com/wp-content/uploads/2021/02/portada_genshin-impact-37.jpg"
                className="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Paimon</h5>
                <p className="card-text">
                  Paimon es un personaje no jugable en Genshin Impact que
                  acompaña al Viajero a lo largo de su aventura en Teyvat como
                  su guía. Conoció al Viajero cuando la sacaron de un lago en el
                  que menciona que se habría ahogado si no fuera porque el
                  Viajero la salvó.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Comida de Emergencia</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://www.xtrafondos.com/descargar.php?id=7761&resolucion=3840x2160"
                className="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Viajero</h5>
                <p className="card-text">
                  Al comienzo del juego, ambos son hermanos gemelos de otro
                  mundo que viajan por todo el universo, hasta que una Diosa
                  desconocida los atacó, atrapando a uno de ellos y sellando su
                  manera de viajar para dejarlos varados en Teyvat.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Mas canon que nunca</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images2.alphacoders.com/114/1140752.jpg"
                className="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Venti</h5>
                <p className="card-text">
                  Es un bardo de espíritu libre y amante del vino en Mondstadt y
                  el actual recipiente mortal de Barbatos, el Arconte Anemo.{" "}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Bardo de Pacotilla</small>
              </div>
            </div>
          </div>
          {/* segunda */}
          <div className="col">
            <div className="card  h-100">
              <img
                src="https://static1-es.millenium.gg/articles/2/28/11/2/@/129487-amber-orig-2-amp_main_media_schema-1.jpeg"
                className="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Amber</h5>
                <p className="card-text">
                  Paimon es un personaje no jugable en Genshin Impact que
                  acompaña al Viajero a lo largo de su aventura en Teyvat como
                  su guía. Conoció al Viajero cuando la sacaron de un lago en el
                  que menciona que se habría ahogado si no fuera porque el
                  Viajero la salvó.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Comida de Emergencia</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://consejosjuegospro.com/wp-content/uploads/2021/09/La-mejor-construccion-de-Jean-Impact-de-Genshin.jpg"
                class="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Jean</h5>
                <p className="card-text">
                  Al comienzo del juego, ambos son hermanos gemelos de otro
                  mundo que viajan por todo el universo, hasta que una Diosa
                  desconocida los atacó, atrapando a uno de ellos y sellando su
                  manera de viajar para dejarlos varados en Teyvat.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">La capitana mas chida</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img
                src="https://playeronenews.com/wp-content/uploads/2022/05/genshin-lisa3-1024x576.jpg"
                className="card-img-top h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lisa</h5>
                <p className="card-text">
                  Es un bardo de espíritu libre y amante del vino en Mondstadt y
                  el actual recipiente mortal de Barbatos, el Arconte Anemo.{" "}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  La waifu mas hot de genshin
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
