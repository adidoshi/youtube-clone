import React, { useEffect, useState } from "react";
import "./_app.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionScreen from "./screens/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const history = useHistory();

  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route exact path="/auth">
        <LoginScreen />
      </Route>

      <Route exact path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route exact path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route exact path="/feed/subscriptions">
        <Layout>
          <SubscriptionScreen />
        </Layout>
      </Route>

      <Route exact path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
