/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllProducts = async () => {
    setLoading(true)
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      setProducts(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getCategories = async () => {
    try {
      const res = await axios.get(
        'https://fakestoreapi.com/products/categories'
      )
      setCategories(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const filterByCategory = async (category) => {
    setLoading(true)
    try {
      if (category === 'all') {
        await getAllProducts()
      } else {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        )
        setProducts(res.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllProducts()
    getCategories()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
