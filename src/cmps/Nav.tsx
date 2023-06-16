import React from 'react'
import { svgService } from '../services/svg-service'

export default function Nav() {
  function getSvg(iconName: string) {
    return { __html: svgService.getSvg(iconName) }
  }

  return (
    <div className='nav-container full '>
      <div className='nav-container-fixed main-layout ful'>
        <nav>
          <div className='explore-links'>
            <span className='underline scale-down'>DISCOVER</span>
            <span className='scale-down'>SHOP</span>
          </div>
          <div className='logo'>
            <span className='underline'>NOBIETY</span>
          </div>
          <div className='nav-icons'>
            <div
              className='icon'
              dangerouslySetInnerHTML={getSvg('searchIcon')}
            ></div>
            <div
              className='icon'
              dangerouslySetInnerHTML={getSvg('userIcon')}
            ></div>
            <div
              className='icon'
              dangerouslySetInnerHTML={getSvg('cartIcon')}
            ></div>
          </div>
        </nav>
      </div>
    </div>
  )
}
