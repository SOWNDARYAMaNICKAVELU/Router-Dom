import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div><h2>Home Page</h2></div>
      <button onClick={() => navigate('order')}> Buy Now</button>
    </>
  )
}