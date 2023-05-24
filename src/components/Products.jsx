import { Toolbar } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      
      <nav>
      <h1>SHOPPING ONLINE</h1>
      <h2>ONLINE DELIVERY</h2>
      <div><p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut sint
        quaerat reprehenderit autem impedit fugiat numquam dignissimos
        voluptates placeat commodi sunt voluptate, nemo ratione amet accusantium
        quos recusandae iure rem. Reprehenderit doloremque, nam non deleniti
        repellat blanditiis accusantium repellendus possimus assumenda? Beatae
        consequuntur velit reiciendis mollitia, quas molestiae accusamus
        assumenda.
        </p>

        
      </div>
      <Toolbar sx={{gap:'50px',alignItems:'center'}}>
      <input type='search' placeholder='Search products' />
      <Link to  ='featured'>Featured</Link>

        <Link to='new'>New</Link>
        </Toolbar>

      </nav>
      
      <Outlet />
      
    </>
  )
}