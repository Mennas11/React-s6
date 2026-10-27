
import { useLoaderData } from "react-router-dom";

function Products() {
  const products = useLoaderData();

  return (
    <section>
      <h2>Our Jewelry Collection</h2>

      <div className="products">
        {products.map((product) => (
          <article key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="150"
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
