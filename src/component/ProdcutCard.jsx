import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
return (
<div className="col-md-4 mb-4" >
<div className="card h-100">
<img src={product.image} className="card-img-top p-3" alt={product.title}
style={{ height: '250px', objectFit: 'contain' }} />
<div className="card-body">
<Link to={`/product/${product.id}`} className="text-decoration-none text-
dark">

<h5 className="card-title">{product.title}</h5>
</Link>
<p className="card-text text-truncate">{product.description}</p>
<p className="card-text fw-bold">${product.price}</p>
</div>
</div>
</div>
)
}