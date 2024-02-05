import logo from './logo.svg';
import './App.css';
import Card from './components/cards.jsx'

function App() {
  return (
    <div className="App">

      <div class="navbar">
        <div>
          <h3>Brand name</h3>
        </div>
        <div>
          <ul >
            <li>
              <button onclick="press()">cart: </button>

              <span id="total-count">0</span>

            </li>
            <li>Username</li>



          </ul>
        </div>

      </div>
      <div id="dropdown">
        <ul id="cart-item" >
          <li id="cart-list"
          >

          </li>
        </ul>
      </div>

      <div class="container">


        <div id="products-wrapper" >
          <h2 > most purchased product:</h2>
          <Card />
        </div>




      </div>


    </div>
  );
}

export default App;
