import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState();
  const [noOfElement, setnoOfElement] = useState(8);

  const loadMore = () => {
    setnoOfElement(noOfElement + 8);
  };

  const slice = items.slice(0, noOfElement);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=100")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  return (
    <div className="Full">
      <div className="Header">
        <Home />
        </div>
        <div className="LOGO">

        </div>
        <div className="container">
          {slice.map((item) => (
            <div key={items.id} className="column">
              <img className="img" src={item.download_url} alt="img"></img>
              {/* <p className='id'>Picture : {item.id} </p>
                  <p className='author'>author : {item.author} </p> */}
            </div>
          ))}
          <div className="button">
            <button className="btn-12" onClick={() => loadMore()}><span>Load more!</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
