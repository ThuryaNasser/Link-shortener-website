import React from "react";
import MainBar from './components/MainBar';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="mb-5">
          Link shortener website
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p className="mt-5 ">paste you'r link here</p>
        <div class="row g-3 form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="Pasted your URL here"/>
        </div>
        <div class="col-12">
        <button type="submit" class="btn btn-primary">shorten!</button>
        <div/>
        <button type="submit" class="btn btn-primary">copy</button>
        </div> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel=""
        >
          Learn React
        </a> */}
        <MainBar />
      </div>
      <div>

      </div>

    </div>
  );
}

export default App;
