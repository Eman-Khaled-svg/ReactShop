import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"


export default function ProductList() {
  const { products, categories, filterByCategory, loading } =
    useContext(ProductContext)

  return (
    <>
      {/* FILTER */}
      <div className="mb-4">
        <button
          className="btn btn-dark me-2"
          onClick={() => filterByCategory('all')}
        >
          All
        </button>

        {categories.map(cat => (
          <button
            key={cat}
            className="btn btn-outline-dark me-2"
            onClick={() => filterByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

   {loading && (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <ClipLoader color="#0d6efd" size={60} />
  </div>
)}

      {/* PRODUCTS */}
      {!loading && (
        <div className="row">
          {products.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '250px', objectFit: 'contain' }}
                />

                <div className="card-body">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <h5 className="card-title">{product.title}</h5>
                  </Link>

                  <p className="card-text text-truncate">
                    {product.description}
                  </p>
                  <p className="card-text fw-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
