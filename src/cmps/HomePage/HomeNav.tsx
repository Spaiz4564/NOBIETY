import React from 'react'
import { appService } from '../../services/app-service'
export default function HomeNav() {
  const sections = appService.getSections()

  return (
    <div className='home-nav-container'>
      <ul className='home-nav-list flex justify-center'>
        {sections.map((s, i) => (
          <li key={i}>{s.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  )
}
