import React from 'react'
import noresults from '../assets/no-results.png';
import Asset from './Asset'

const PageNotFound = () => {
  return (
    <div>
        {/* <img src = {noresults} alt = "Sorry" /> */}
        <Asset src={noresults} message={"Sorry!! The page you are looking for does not exist"}/>
    </div>
  )
}

export default PageNotFound