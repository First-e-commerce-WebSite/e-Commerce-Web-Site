import data from "./data";


function App() {
  return (
    <div >
      <header >
        <a href="/">a_s_Store.tn</a>

      </header>
      <main>
        <h1> Featured Products</h1>
        <div className="products">
          {
            data.products.map(product => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} width="300" height="300" />
                </a>
                <div className="product-info" >
                  <a href={`/product/${product.slug}`}>

                    <p>{product.name}</p>
                  </a>
                  <a href={`/product/${product.slug}`}>

                  </a>
                    <p><strong>{product.price} DT</strong></p>
                  <button>Add To Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
