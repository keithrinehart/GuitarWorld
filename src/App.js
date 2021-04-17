import React, { useState, useEffect } from "react";
import "./App.css";
import { css } from "@emotion/react";
import Home from "./pages/home";
import Gibson from "./pages/gibson";
import Fender from "./pages/fender";
import Epiphone from "./pages/epiphone";
import Jackson from "./pages/jackson";
import Ibanez from "./pages/ibanez";
import Four from "./pages/four";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollBehavior";
import ScaleLoader from "react-spinners/ScaleLoader";

const loaderCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #333;
  animation: loader 800ms linear forwards, none;
  @keyframes loader {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000); //3sec.
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ScaleLoader
          css={loaderCSS}
          color={"rgb(240, 91, 22)"}
          loading
          size={30}
        />
      ) : (
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/GuitarWorld" component={Home} />
              <Route path="/gibson/" component={Gibson} />
              <Route path="/fender/" component={Fender} />
              <Route path="/epiphone/" component={Epiphone} />
              <Route path="/jackson/" component={Jackson} />
              <Route path="/ibanez/" component={Ibanez} />
              {/*<Route component={Four} />*/}
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
