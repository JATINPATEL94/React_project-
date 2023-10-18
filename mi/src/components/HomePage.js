import React from 'react'
import SiteBanner from './SiteBanner'
import SpecialOffer from './SpecialOffer'
import Salaider from './Salaider'
import data from '../data/data.json'


const HomePage = () => {
  return (
    <>
        <SiteBanner HomeSiteBanner={data.hotAccessories.HomeSiteBanner} />
        <SpecialOffer specialItems={data.hotAccessories.specialItems} />
        <Salaider CarouselOffers={data.hotAccessories.CarouselOffers} />
    </>
  )
}

export default HomePage
