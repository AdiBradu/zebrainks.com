import { useState } from 'react'
import './App.scss';
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.component'
import Portfolio from './pages/Portfolio/Portfolio.component'
import GraphicDesign from './pages/GraphicDesign/GraphicDesign.component'
import LandingPage from './pages/LandingPage/LandingPage.component'
import {Helmet} from "react-helmet";

function App() {
  const {appBackground, setAppBackground} = useState("rgba(253, 253, 253,1);")

  return (
    <Router>
      <div className="App" style={{ background: "appBackground"}}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Zebra INKS - Digital Agency</title>
            <meta name="description" content="Digital agency based in Bucharest, ROMANIA. We do graphic design, web development, social media, off-line advertising and more." />
        </Helmet>
        <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/"
                exact
                render={
                  () => <LandingPage/>
                }
              >
              </Route>
              <Route
                path="/portfolio"
                exact
                render={
                  () => <Portfolio/>
                }
              >
              </Route>
              <Route
                path="/graphic-design"
                exact
                render={
                  () => <GraphicDesign/>
                }
              >
              </Route>
            </Switch>
          </AnimatePresence>
        )}
        />
      </div>
    </Router>
  );
}

export default App;
