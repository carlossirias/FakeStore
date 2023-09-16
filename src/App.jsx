import { useContext, useMemo, useState } from 'react'
import { Products } from './components/Products'
import { Filters } from './components/Filters'
import { FiltersProducts } from './context/FiltersContext'
import {Footer} from './components/FooterCarlos'

const API_URL = 'https://fakestoreapi.com/products'

function useProducts()
{
  const [productsRes, setProductsRes] = useState()
  const {filter} = useContext(FiltersProducts)

  const filteredProducts = productsRes?.filter(product=>{
    return (filter.category === 'all' || product.category === filter.category) && product.price >= filter.min 
  })

  const maxPrice = parseInt(filteredProducts?.sort((a,b) => a.price - b.price).at(-1)?.price)

  console.log(maxPrice)

  useMemo(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setProductsRes(data))
  },[])

  return {productsRes: filteredProducts, maxPrice}
}

function App() {

  const {productsRes, maxPrice} = useProducts()

  

  return (
    <>
      <main className="w-full h-full min-h-screen verdi-gris flex flex-col items-center bg-gray-50">
        
        <Products products={productsRes} >
          <Filters maxPrice={maxPrice}></Filters>
        </Products>
        <Footer colorText={'#4CB5AE'} colorHover={'#022c22'} isBlack={false}></Footer>
      </main>
    </>
  )
}

export default App
