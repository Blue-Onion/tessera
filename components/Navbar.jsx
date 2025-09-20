import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className='container mx-auto py-4'>
      <nav className='flex justify-between items-center'>
        <div className="">
          <h2 className='text-xl'>Tessera</h2>
        </div>
        <div className="">
          <Button className={"rounded-md"} variant={''}>Login</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar