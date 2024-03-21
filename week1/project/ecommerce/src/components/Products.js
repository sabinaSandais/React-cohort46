const Products = ({ productsData }) => {
  return (
    <div>
      <ul className="product-list">
        {productsData.map((product) => (
          <li key={product.id}>
            <div>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
              <p>{product.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
