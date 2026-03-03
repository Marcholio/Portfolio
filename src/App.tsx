import "react-skeleton-css/styles/skeleton.2.0.4.css";

import Header from "./Header";
import Project from "./Project";
import "./styles/App.css";

import duunitin from "./content/duunitin.json";
import katsastustilastot from "./content/katsastustilastot.json";
import portfolio from "./content/portfolio.json";
import turboclean from "./content/turboclean.json";
import fridgepi from "./content/fridgepi.json";
import polttoainesaa from "./content/polttoainesaa.json";
import vueTodo from "./content/vuetodo.json";
import bikeVisu from "./content/bike-visu.json";

const App = () => {

  return (
    <div className="App" style={{ backgroundImage: `url(background.webp)` }}>
      <div className="container">
        <Header />
        <div id="projects" />
        <Project
          content={katsastustilastot}
          img={"katsastustilastot.png"}
          thumbnail={"thumbnails/katsastustilastot.png"}
        />
        <Project
          content={portfolio}
          img={"portfolio.webp"}
          thumbnail={"thumbnails/portfolio.png"}
        />
        <Project
          content={polttoainesaa}
          img={"polttoainesaa.webp"}
          thumbnail={"thumbnails/polttoainesaa.png"}
        />
        <Project
          content={vueTodo}
          img={"vuetodo.webp"}
          thumbnail={"thumbnails/vuetodo.png"}
        />
        <Project
          content={turboclean}
          img={"turboclean.webp"}
          thumbnail={"thumbnails/turboclean.png"}
        />
        <Project
          content={fridgepi}
          img={"fridgePi.webp"}
          thumbnail={"thumbnails/fridgePi.png"}
        />
        <Project
          content={duunitin}
          img={"duunitin.webp"}
          thumbnail={"thumbnails/duunitin.jpg"}
        />
        <Project
          content={bikeVisu}
          img="bike-visu.webp"
          thumbnail="thumbnails/bike-visu.png"
        />
      </div>
    </div>
  );
};

export default App;
