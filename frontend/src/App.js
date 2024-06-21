import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'D:/Ace/Practicals/JavaThings/java2/frontend/src/App.css';

// import 'src/Components/Style.css';

import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Teampage from './Components/Pages/Teampage';
import Addfdsuser from './Components/Oprfdsuser/Addfdsuser';
import Editfdsuser from './Components/Oprfdsuser/Editfdsuser';
import Viewfdsuser from './Components/Oprfdsuser/Viewfdsuser';
import Loginfdsuser from './Components/Oprfdsuser/Loginfdsuser';

import Addngo from './Components/Oprngo/Addngo';
import Editngo from './Components/Oprngo/Editngo';
import Viewngo from './Components/Oprngo/Viewngo';
import Loginngo from './Components/Oprngo/Loginngo';

import Addfoodreq from './Components/Oprfoodreq/Addfoodreq';
import Editfoodreq from './Components/Oprfoodreq/Editfoodreq';
import Viewfoodreq from './Components/Oprfoodreq/Viewfoodreq';
import Bookfoodreqs from './Components/Oprfoodreq/Bookfoodreqs';

import Stat from './Components/Layout/Stat';
import Statnew from './Components/Pages/Statnew';
import MyBarChart from './Components/Layout/MyBarChart';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Pages/Teampage" element={<Teampage />} />
          <Route exact path="/Layout/Stat" element={<Stat />} />
          <Route exact path="/Oprfdsuser/Addfdsuser" element={<Addfdsuser />} />
          <Route exact path="/Oprfdsuser/Editfdsuser" element={<Editfdsuser />} />
          <Route exact path="/Oprfdsuser/Viewfdsuser" element={<Viewfdsuser />} />
          <Route exact path="/Oprfdsuser/Loginfdsuser" element={<Loginfdsuser />}/>


          <Route exact path="/Oprngo/Addngo" element={<Addngo />} />
          <Route exact path="/Oprngo/Editngo" element={<Editngo />} />
          <Route exact path="/Oprngo/Viewngo" element={<Viewngo />} />
          <Route exact path="/Oprngo/Loginngo" element={<Loginngo />} />
          
          <Route exact path="/Oprfoodreq/Addfoodreq" element={<Addfoodreq />} />
          <Route exact path="/Oprfoodreq/Editfoodreq" element={<Editfoodreq />} />
          <Route exact path="/Oprfoodreq/Viewfoodreq" element={<Viewfoodreq />} />
          <Route exact path="/Oprfoodreq/Bookfoodreqs" element={<Bookfoodreqs />} />
          <Route exact path="/Pages/Statnew" element={<Statnew />} />
          <Route exact path="/Layout/MyBarChart" element={<MyBarChart />} />

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
