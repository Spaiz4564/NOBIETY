import { Outlet } from 'react-router-dom'
import Nav from '../cmps/Nav'

export default function Root() {
  return (
    <div className='main-layout'>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
