import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import {Button, Form} from 'react-bootstrap';

const headers = {
  'Accept': 'application/json'
};



//line 13, 75 - change paths


//change this if required
const uploadVideoUrl = 'http://localhost:5000/';

class Input extends Component {

  constructor(){

    super();

    this.state={

      errors : [],
      showErrorMessages:false,
      messageType : "alert alert-light" 

    };

    this.videoData = {

      "url" : "",
      "title" : "",
      "description" : ""

    }
  }
  

  handleSubmit(){

    console.log("Video submitted!");

    this.state.errors=[];
    this.setState({messageType:"alert-alert-light"})

    //api call
    fetch(`${uploadVideoUrl}`, {
      method: 'POST',
      credentials:'include',
      mode: 'cors',
      headers: { ...headers,'Content-Type': 'application/json' },
      body: JSON.stringify(this.videoData)
  })
  .then(res => {
      console.log("res",res)
          console.log("Add Video Success!!")
          this.setState({errors:["Access summarized video here!"]})
          //this.props.handleVideoTitle(this.videoData.title);
          //alert("Video upload successsful");
      }).catch(err => {
          console.log("Video upload server error");
          return err;
          });

  }

  render() {

    let errors = this.state.errors.map((error, i)=>{
      return(


        //change this - required

          <a href='file:///C:\Users\Zee\Desktop\avc\avc_frontend\public\Results\' className="alert alert-success" role="alert">
              {error}
          </a>

  )});

    return (
    <div>

            <div>
              <Header/>
            </div>

            <br/>

            <br/>

            <br/>

            <br/>


            <div className="row">
              <div className="col-sm-3"></div>
                <div className="col-sm-6">


                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter URL"  onChange= {(e)=>{this.videoData.url=e.target.value}}/>
                    <Form.Text className="text-muted">
                      Please enter Video URL
                    </Form.Text>
                  </Form.Group>

                  <br></br>

                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter title"  onChange= {(e)=>{this.videoData.title=e.target.value}}/>
                    <Form.Text className="text-muted">
                      Please enter Video Title
                    </Form.Text>
                  </Form.Group>

                  <br></br>

                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter description"  onChange= {(e)=>{this.videoData.description=e.target.value}}/>
                    <Form.Text className="text-muted">
                      Please enter Video Description
                    </Form.Text>
                  </Form.Group>

                </Form>

                <br></br>

                <Button  onClick={()=> {this.handleSubmit()}} >
                    Submit
                 </Button>

                 <br>
                 </br>

                 <br>
                 
                 </br>

                 <br>
                 
                 </br>

                 <br>
                 
                 </br>

                 <div className = "container">

                  <div className={this.state.messageType}>

                      {errors}

                  </div>

                  </div>

          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      
    );
  }
}

export default Input;