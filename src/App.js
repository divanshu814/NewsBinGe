// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
// import News setProgress={setProgress} from './Components/News setProgress={setProgress}';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=> {

  // apiKey=process.env.REACT_APP_NEWS_API
  // apiKey="0a217e378762426e950b97f957690bd6"

  // const [state, setState] = useState(progress=0)
  // state={
  //   progress: 0
  // }

  // setProgress=(progress)=>{
  //   setState({progress: progress})
  //   // setState(progress=progress);
  // }
  
  
  
  
  const [progress, setProgress] = useState(0)
  return (
      <div>
        <Router>

        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        setProgress={progress}
        // onLoaderFinished={()=> setProgress(0)} 
        />

        {/* </LoadingBar> */}

        <Routes>

        {/* <News  setProgress={setProgress} key='' pageSize={8} country='in' category='Sports'/> */}
        <Route exact path="/" element={<News setProgress={setProgress} key='' pageSize={8} country='in' category='general'/>}/>
        <Route exact path="/business" element={<News setProgress={setProgress} key='business' pageSize={8} country='in' category='business'/>}/>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={8} country='in' category='entertainment'/>}/>
        <Route exact path="/general" element={<News setProgress={setProgress} key='general' pageSize={8} country='in' category='general'/>}/>
        <Route exact path="/health" element={<News setProgress={setProgress} key='health' pageSize={8} country='in' category='health'/>}/>
        <Route exact path="/science" element={<News setProgress={setProgress} key='science' pageSize={8} country='in' category='science'/>}/>
        <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pageSize={8} country='in' category='sports'/>}/>
        <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pageSize={8} country='in' category='technology'/>}/>
        
        
        </Routes>
        </Router>
      </div>
    )
  }

export default App

