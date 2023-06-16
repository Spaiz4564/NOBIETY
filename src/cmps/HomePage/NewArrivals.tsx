import { appService } from '../../services/app-service'

export default function NewArrivals() {
  const newArrivals = appService.getNewArrivals()
  return (
    <section className='new-arrivals-section'>
      <div className='new-arrivals-container'>
        <div className='new-arrivals-text flex space-between align-center'>
          <h2>NEW ARRIVALS</h2>
          <span>SEE ALL</span>
        </div>
        <div className='new-arrivals-catalog'>
          <ul>
            {newArrivals.map(a => (
              <li>
                <div className='new-arrivals-img'>
                  <img src={a.img} alt='' />
                </div>
                <span>{a.name}</span>
                <span>${a.price}.00 USD</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
