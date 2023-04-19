import { useContext } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../utils/cartContext'
import { toast } from 'react-toastify';

export const useAddCart = () => {
    const navigate = useNavigate()
    const { addCart } = useContext(CartContext)
    const handleBack = () => {
        navigate('/')
    }
  const mutation = useMutation(async function(params) {
    const response = await fetch(`${process.env.REACT_APP_API_BASE}api/cart`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }, {
    onSuccess: function(response) {
      addCart(response.count)
      handleBack()
      toast.success('The item was successfully added to your cart!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, {
    onError: function(error){
      toast.error('Something went wrong', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  })
  
  return mutation
}