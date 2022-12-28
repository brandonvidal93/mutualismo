import React from 'react';
import './BackCover.scss';

import LogoCover from '../../../assets/img/cover/logo-1.png';
import BackgroundCover from '../../../assets/img/backCover/bgPage-BackCover.png';

const BackCover = ({dataPage, imageArray, imageBackground}) => {
  const closeCourse = () => {
    // ESTO SOLO SE EJECUTA CUANDO SE INICIA EL SERVIDOR O CUANDO SE ABRE COMO EMERGENTE
    window.parent.parent.close();
  }

  const style = {
    backgroundImage: 'url(' + BackgroundCover + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className={ (dataPage.type) + ' pL-2 animated fadeIn' } style = { style }>
      <div className="c-35 dF-C-cs">
        {
          LogoCover ? <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-3 mB-2'
            src = { LogoCover }/> : null
        }
      </div>
      <div className="c-4 d-Flex d-C j-C aI-C">
        {
          dataPage.message.success.title ? <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.message.success.title }}></h2> : null
        }
        
        {
          dataPage.message.success.module ? <h3 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.message.success.module }}></h3> : null
        }
        {
          dataPage.message.success.courseName ? <p className = 'c-8 mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.message.success.courseName }}></p> : null
        }
        {
          dataPage.message.success.subTitle ? <h1 className = 'mB-2 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.message.success.subTitle }}></h1> : null
        }
        {
          dataPage.buttonEnd ? 
            <h3
              className = 'F1 buttonEnd' 
              dangerouslySetInnerHTML = {{ __html: dataPage.buttonEnd }}
              onClick = { closeCourse }
              style = {{ 'cursor': 'pointer' }} /> : 
            null
        }

        { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
      </div>
    </div>
  )
}

export default BackCover;