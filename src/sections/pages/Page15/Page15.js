import React from 'react';
import Instruction from '../../../components/Instruction';
import Accordion1 from '../../../components/Accordion1';

import HeaderImage from '../../../assets/img/15/n-2.png';

const Page15 = ({dataPage, checkEndActivity}) => {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(15, end);
  }
  return (
    <div className = {'pageContent page-15 animated fadeIn'}>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <div className = 'c-10 animated fadeIn'>
        <div className = 'mL-7 c-10 mT-025 mR-2'> 
          {
            dataPage.title ? <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>

        <div className = 'mL-3 mT-2 d-Flex j-C'>
          <Accordion1 dataPage = { dataPage } isEnded = { isEnded } />
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page15;