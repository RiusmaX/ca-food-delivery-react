import RestaurantAddress from './RestaurantAddress'
import './styles/RestaurantInfosStyle.css'

const IMG_URL = 'https://strapi.myidea.fr'

function RestaurantInfos (props) {
  const { restaurant } = props
  return (
    <div className='infos-container'>
      <div className='col'>
        <h1>{restaurant.title}</h1>
        <img className='card-img' src={`${IMG_URL}${restaurant.photos[0].url}`} />
        <p>{restaurant.description}</p>
      </div>
      <div className='col'>
        <RestaurantAddress adresse={restaurant.adresse} />
      </div>
    </div>
  )
}

export default RestaurantInfos
