import {useState} from "react";

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

}

function App() {
  
const [genshinState, setGenshinState] = useState({
  types: [],
});


const fetchGenshinApi = async (item, url= "https://api.genshin.dev/") => {
  const respuesta = await fetch(url);
  const respJson = await respuesta.json();
  if (item === "types"){ 
  setGenshinState({
    ...genshinState, 
    types: respJson.types,
  });

} else {
  setGenshinState ({
    ...genshinState,
    [item]:respJson,
  });
  }
};

fetchGenshinApi("types");

// fetchGenshinApi("types");

const handleChangeType = ({target}) => {
  const url = `https://api.genshin.dev/${target.value}`
  fetchGenshinApi(target.value, url);
  console.log(genshinState);
}


  return (
    <div className="App">
      <div className="card container p-3 mt-4 text-center" id="contenedor">
        <center><img className="p-3" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png" alt="" width={200} height={100} /></center>
       
        <select className="form-select" aria-label="Disabled select example" name="types" onChange={handleChangeType} >
                
          <option  value="">Seleccione un Elemento</option>
          {genshinState.types?.map((type) => (
            <option key={type} value={type} >
              {tipos[type]}
            
            </option> 
           ))}
          </select>
      </div>
      
    </div>
  );
}

export default App;
