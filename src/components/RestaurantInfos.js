import RestaurantAddress from './RestaurantAddress'

const IMG_URL = 'https://strapi.myidea.fr'

function RestaurantInfos (props) {
  const { restaurant } = props
  return (
    <div>
      <h1>{restaurant.title}</h1>
      <img className='card-img' src={`${IMG_URL}${restaurant.photos[0].url}`} />
      <p>{restaurant.description}</p>
      <RestaurantAddress adresse={restaurant.adresse} />
    </div>
  )
}

export default RestaurantInfos
