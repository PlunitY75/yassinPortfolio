import { useEffect, useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoPortfolio from '../assets/images/logoPortfolio.png'
import './Navbar.css'


import './Navbar.css'

function Navbar() {

 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled)
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);




  return (
    <>
      <div className={`nbContainer ${scrolled ? 'scrolled' : ''}`}>
        <div className='nbInnerContainer'>
            <div className='logoContainer' onClick={() => console.log('clic !')}>
                <img className='logoPortfolio' src={logoPortfolio} alt="photo" />
            </div>
            <div className='pageContainer'>
                <div className={`pagesContainer ${scrolled ? 'scrolled' : ''}`}>
                    <a>Présentation</a>
                    <a>Compétences</a>
                    <a>Parcours</a>
                    <a>Projets</a>
                    <a>Loisirs</a>
                </div>
                <div className='otherContainer'>
                    <div className='lkdlogo'>
                      <LinkedInIcon color='primary' sx={{ fontSize: 50}}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
