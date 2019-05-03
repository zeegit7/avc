import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import {Button, Form} from 'react-bootstrap';
import {history} from '../utils/utils';

const headers = {
  'Accept': 'application/json'
};

const uploadVideoUrl = 'http://localhost:5000/';

class Input extends Component {

  constructor(){

    super();

    this.videoData = {

      "url" : "",
      "title" : "",
      "description" : ""

    }
  }
  



 

  handleSubmit(){

    console.log("Video submitted!");

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
          this.props.handleVideoTitle(this.videoData.title);
          //alert("Video upload successsful");
      }).catch(err => {
          console.log("Video upload server error");
          return err;
          });

  }

  render() {

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


                  {/* <form id="register-form">

                      <div>

                          <div>

                            <br></br>

                            <br></br>


                          <h1>Upload</h1>

                          <br></br>

                              <input type="text" name="name" placeholder ="Enter Video URL" onChange= {(e)=>{this.videoData.url=e.target.value}}/>

                              <br></br>

                              <br></br>


                              <input type="text" name="contact" placeholder ="Enter Title" onChange= {(e)=>{this.videoData.title=e.target.value}}/>

                              <br></br>

                              <br></br>

                              <input type="text" name="city" placeholder ="Enter Description" onChange= {(e)=>{this.videoData.description=e.target.value}}/>

                              <br></br>

                              <br></br>
                                  
                                  <br/>
                                  <Button  onClick={()=> {this.handleSubmit()}} >
                                      Submit
                                  </Button>


                          </div>

                      </div>

                      </form> */}



          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
      
    );
  }
}

export default Input;