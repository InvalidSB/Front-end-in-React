import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Home extends Component {
    state = {}

    render() {
        return (<div>

          <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='Sidebox'>
            <h4>{data.homepageData[0]} </h4><br/><span>{data.homepageData[1]}</span><br></br>
            {data.homepageData[2]}
               <br></br>
                    <button><a href="/">DownloadCV</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Home;