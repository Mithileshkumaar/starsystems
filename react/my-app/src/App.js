
import './App.css';
import Card from '../src/components/cards'




function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div>
          <h3>Brand name</h3>
        </div>
        <div>
          <ul >
            <li>
              <button >cart: </button>

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
      {/* <!-- content --> */}
      <div className="container">



        <div id="products-wrapper" style={{ display: 'flex' }} >

          <Card />
        </div>




      </div>


    </div>
  );
}

export default App;



