import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Home from "../../routes/Home"
import OwnHome from "../../routes/own/OwnHome"
import VisitorsHome from "../../routes/visitors/VisitorsHome"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visitors" component={VisitorsHome} />
          <Route path="/own" component={OwnHome} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes