import React from 'react';
import './Cover.scss';
// importar imagen
import LogoCover from '../../../assets/img/cover/logo-1.png';
import BackgroundCover from '../../../assets/img/cover/fondo-cover.jpg';

const Cover = ({dataPage, startCourse}) => {
  const style = {
    backgroundImage: 'url(' + BackgroundCover + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  const handleStartCourse = (e) => {
    const target = e.currentTarget.id;

    startCourse(target);
  }

  return (
    <div className={ (dataPage.type) + ' pL-3 animated fadeIn' } style = { style }>
      <div className="c-35 dF-C-cs">
        {
          LogoCover ? <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-7 mB-2'
            src = { LogoCover }/> : null
        }
        {
          dataPage.title ? <h1 className = 'mT-2 mB-05 F3 fw-9 title-course' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
        }
        {
          dataPage.subTitle ? <p className = 'mL-05 mB-3 F1 fw-5' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></p> : null
        }
        {
          dataPage.module ? <h3 className = 'mB-1 fs-i' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></h3> : null
        }
        {
          dataPage.courseName ? <p className = 'mL-025 mB-1 fs-i' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p> : null
        }

        <button
          className = 'buttonQuiz F1'
          onClick = { handleStartCourse }
          id = { 'btnIniciar' }
          >
            Iniciar
        </button>
      </div>

      </div>
  )
}

export default Cover;