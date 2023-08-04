import React,{useState} from 'react'
import Searchbar from './Searchbar'
import products from '../data'
import {BsFillBagPlusFill } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/bag-actions'

const Products = () => {
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')
    
    const searchItemHandler= (name) => {
      setSearch(name)
    }
    
  return (
    <div className='products'>
    <Searchbar  onChange={searchItemHandler}/>
      <div className='row'>
        {products.filter((item) => {
          return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
        }).map((product) => {
          
            return (
              <div key={product.id} className="items-card" >
                <div className='itmes-img'>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className='item-info'>
                  <h4>{`${product.title}`}</h4>
                  <p>{product.category}</p>
                  <div className='item-price'>
                    <span>{`$${product.price}`}</span>
                    <button className='add-to-cart'  onClick={() => dispatch(addProduct(product))}  >
                    <BsFillBagPlusFill/>
                    </button>
                  </div>
                </div>
              </div>
              
            )
        })}  

      </div>
    </div>
  )
}

export default Products