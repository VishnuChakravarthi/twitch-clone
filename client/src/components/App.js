import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import Header from "./Header";
import history from "./History";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
