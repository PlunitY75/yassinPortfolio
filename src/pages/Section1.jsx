import {  } from 'react'

import './Section1.css'
import photo from '../assets/images/pp3.jpg'

function Section1() {

  return (
    <>
      <div className='containerS1'>
        <div className='innerContainerS1'>
            <div className='titleContainerS1'> 
                <a href='/CV_ZRELLI_Alternance.pdf' target='_blank' rel="noopener noreferrer">
                    <div className ='prenomContainer'>
                        <p className='prenom'> Yassin 
                            <br></br>
                            ZRELLI    
                        </p> 
                        
                    </div>
                </a>
                <div className='descContainerS1'>
                    
                    <h1 className='descTitle'> Futur Ingénieur spécialisé dans le&nbsp;<span className="animatedWord">Développement </span> </h1>
                    <p className='descriptionTitle'>
                        Admis au cycle Ingénieur Informatique à l'ESIEA Paris, je suis à la recherche d'une alternance 
                        <br></br> pour la rentrée de Septembre 2025 dans le domaine du développement, de la data ou 
                        <br></br> dans la gestion de projets informatique.
                    </p>
                </div>
            </div>
            <div className='imageContainerS1'>
                <img className='pp' src={photo} alt="photo" />
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Section1
