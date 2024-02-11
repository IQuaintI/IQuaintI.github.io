import { Grid } from "@mui/material";
import Header from "./components/Header";
import Works from "./components/Works";
import "../src/css/App.scss";

import Card from "./assets/Card";
import Rx from "../public/rxSymbol.png";

function App() {
  return (
    <>
      {/* Header */}
      <div id="scroll-container">
        <section className="snap-section">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} id="header">
              <Header
                title="Hello."
                subtitle="I trust you are here to cause no trouble."
              />
            </Grid>
          </Grid>
        </section>

        {/* Body */}
        <section className="snap-section">
          <Grid
            id="body"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ height: "100vh" }}
          >
            {/* Content-Left */}
            <Grid item xs={5} id="content-left">
              <a href="https://legendary-lebkuchen-9a1881.netlify.app/">
                <Card
                  image={Rx}
                  title="Recipe Book"
                  subtitle="A proving ground for React, TypeScript, and SCSS. A useful start."
                />
              </a>
            </Grid>

            {/* Works */}
            <Grid item xs={2} id="hero">
              <Works title="Insert Cont" />
            </Grid>

            {/* Content-Right */}
            <Grid item xs={5} id="content-right">
              <Card
                image="https://via.placeholder.com/150"
                title="lorem ipsum"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
}

export default App;
