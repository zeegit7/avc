import React, { Component } from 'react';
import Header from './Header';
import { Player, Jumbotron, Button } from 'video-react';
//import '../App.css';



class Output extends Component {

  constructor(props){

    super(props);

    console.log("props",this.props.title);

  }

  render() {

    var url = './Results/' + this.props.title + '.mp4';

    console.log('url=',url);

    return (
    <div>

            <div>
              <Header/>
            </div>

            <br></br>
            <br></br>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
 
              {/* <div className="embed-responsive embed-responsive-16by9" style={{maxHeight:800}} type="video/x-flv" >
               <iframe title = "Hello" className="embed-responsive-item" src={url} allowFullScreen></iframe>
             </div>  */}
             
             {/* <video src={url} controls="controls" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">
             </video> */}

            <Player
                  playsInline
                  src={url}
            />
            

            {/* <a href="file:///C:\Users\Zee\Desktop\avc\avc_frontend\public\Results\"><strong>Access summarized video here!</strong></a> */}





            <br></br>

            <br></br>

            <div style={{border:2}}>
              <strong >Textual summary:</strong>
              <p>Video technology has come a long way with more individuals and organizations turning to it when it comes to learning and recreation. 
                Research says viewers retain 95% of a message when they watch it in a video compared to 10% when reading it in the text. 
                One-third of all online activity is spent watching videos. 
                YouTube has over a billion users (almost one-third of total internet users) with more than 500 million hours of videos watched on the website each day. 
                The amount of available video information has dramatically increased, so much so that by 2019, internet video traffic is expected to account for 80% of all consumer Internet traffic. 
                As such, it is difficult for viewers to discern which video contains the information they are looking for. Also, most videos have a lot of content that isn’t directly related to the topic being discussed. 
                As a consequence, content-based retrieval tools are urgently needed for fast and easy access to video content. In particular, queries may rely on off-line indexing. 
                Keyword spotting on video soundtracks could be of great help in this indexation process. 
                It is an important audio mining technique that searches audio/video signals to find a given keyword within a spoken utterance. 
                The audio/video can be processed to generate a keyword set and then use Keyword Spotting (KWS) to find the important parts of the video and summarize it. 
                The outcome would be better search results for videos, less time spent watching similar videos and the ability to view a text-based summary of the video.</p>
            </div>

            </div>

            </div>

            <div className="col-sm-1"></div>
      
      </div>
    );
  }
}

export default Output;