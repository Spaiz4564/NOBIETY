function getSvg(iconName: string) {
  return svgIcon[iconName]
}

export const svgService = { getSvg }

// in template
/* <div className='icon' dangerouslySetInnerHTML={getSvg('cartIcon')}></div> */

// in methodes
// function getSvg(iconName) {
//     return { __html: svgService.getSvg(iconName) }
//   }

const svgIcon: any = {
  searchIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" aria-label="search icon" viewBox="0 0 40 40" role="img" class="icon___x1EUc icon searchIcon large___XqXtE"><path stroke="currentColor" stroke-width="2" d="M28.333 16.667c0 6.443-5.223 11.666-11.666 11.666C10.223 28.333 5 23.11 5 16.667 5 10.223 10.223 5 16.667 5c6.443 0 11.666 5.223 11.666 11.667z" vector-effect="non-scaling-stroke"></path><path stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2" d="M33.333 33.333 25 25" vector-effect="non-scaling-stroke"></path></svg>`,
  userIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" aria-label="account icon" viewBox="0 0 40 40" role="img" class="icon___x1EUc icon accountIcon large___XqXtE"><path stroke="currentColor" stroke-width="2" d="M26.667 21.667H13.333a6.667 6.667 0 0 0-6.666 6.666V35h26.666v-6.667a6.667 6.667 0 0 0-6.666-6.666z" vector-effect="non-scaling-stroke"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.333 10a7.333 7.333 0 1 1-14.666 0 7.333 7.333 0 0 1 14.666 0z" vector-effect="non-scaling-stroke"></path></svg>',
  cartIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" aria-label="shopping cart icon" viewBox="0 0 40 40" role="img" class="icon___x1EUc icon cartIcon large___XqXtE"><path stroke="currentColor" stroke-width="2" d="M26.667 23.333v-18a2 2 0 0 0-2-2h-9.334a2 2 0 0 0-2 2v18" vector-effect="non-scaling-stroke"></path><path stroke="currentColor" stroke-width="2" d="M28.333 35H11.667A6.667 6.667 0 0 1 5 28.333v-15h30v15A6.667 6.667 0 0 1 28.333 35z" vector-effect="non-scaling-stroke"></path></svg>',
}
