import './App.css';

function App() {
  return (
    <section className='section'>
      <div className="content">
        <div className="card">
          <img src="/image-product-desktop.jpg" alt="image card" />
          <div className="description">
            <h4>Perfume</h4>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className="detail">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, perfumer-Creator for the House of CHANEL
            </p>
            <p className="price">
              <span>$149.99</span>
              <span>$169.99</span>
            </p>
            <button className="primary-button add-to-cart-button">
              <img src="/icon-cart.svg" alt="Add to Cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
