import React, { Component } from 'react';
import {Route, Router, Switch } from 'react-router-dom';
import {history} from './utils/utils';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';
import Error from './components/Error';




class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      videoTitle: ""

    };

  }

  handleVideoTitle(title){

    console.log("handleVideoTitle" ,title);
    this.state.videoTitle = title;
    console.log("this.state.videoTitle" ,this.state.videoTitle);
    history.push("/output");
  
  }

  render() {

    return (
      <Router history={history}>

        <div className="App">

          <Switch>

          <Route  exact path="/" component ={() => (<Input handleVideoTitle={this.handleVideoTitle.bind(this)}/>)}/>
          <Route  exact path="/output" component ={() => (<Output title={this.state.videoTitle}/>)}/>

          <Route component={Error} />
          
          

          </Switch>

        </div>

      </Router>
    );
  }
}

export default App;