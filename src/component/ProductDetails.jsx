import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import {useContext } from "react";


export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
const { addToCart } = useContext(CartContext);

  const getProductDetails = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      )
      setProduct(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductDetails()
  }, [id])

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark" />
      </div>
    )
  }
if (!product) return <h2 className="text-center mt-5">Product not found</h2>;
  const handleAddToCart = () => {
  addToCart(product);  // أضف المنتج للكارت
  Swal.fire({
    icon: "success",
    title: "Added to Cart!",
    text: `${product.title} has been added successfully.`,
    confirmButtonColor: "#0d6efd",
  }).then(() => {
    navigate("/cart"); // روح لصفحة الكارت بعد الضغط على OK
  });
};


  return (
    <>
    <Helmet>
  <title>{product.title} - Product Details</title>
  <meta
    name="description"
    content="View detailed info about this product."
  />
</Helmet>

    <div className="row align-items-center">
      <div className="col-md-5">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
        />
      </div>

      <div className="col-md-7">
        <h2 className='text-danger'>{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <p style={{lineHeight:'2.5'}}>{product.description}</p>
        <h4 className="text-success">${product.price}</h4>
       <button onClick={handleAddToCart} className="btn btn-primary btn-lg">
  Add to Cart
</button>


      </div>
    </div>
    </>
  )
}
