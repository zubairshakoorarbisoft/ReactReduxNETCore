import React from "react";
import PostList from "./components/PostList";
import WeatherForcastList from "./components/WeatherForcastList";
import { BrowserRouter, Route } from "react-router-dom";
import NavMenu from "./components/shared/NavMenu";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <NavMenu />
                <div>
                    <Route path="/Dashboard" exact component={PostList} />
                    <Route path="/Weathers" exact component={WeatherForcastList} />
                </div>
            </BrowserRouter>
        </div>


    );
};

export default App;
