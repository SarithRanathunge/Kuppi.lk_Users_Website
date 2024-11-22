import React, {useState} from 'react'
import NavBar from './components/navBar'
import Home from './pages/home'
import Contact from './pages/contact'


const SubPortfolioApp = () => {
  const [diaplay, newDiaply] = useState(false);

  const handleClick = () => {
    newDiaply(true)
  }

  const handleClickImage = () => {
    newDiaply(false)
    console.log('Click');
  }
  return (
    <div>

      {/* Header Navigation Bar  */}
      <div className='w-full h-auto'>
          <NavBar onClick={handleClick} onClickImage={handleClickImage}/>
      </div>

      {/* Home Page  */}
      <div className='w-full h-auto'>
        {diaplay ? <Home/> : <Contact />}
      </div>
    </div>
  )
}

export default SubPortfolioApp