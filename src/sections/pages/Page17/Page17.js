import React from 'react';

import Instruction from '../../../components/Instruction';
import InteractiveFlip3 from '../../../components/InteractiveFlip3';

import HeaderImage from '../../../assets/img/menuCourse/n-3.png';

const Page17 = ({dataPage, checkEndActivity, checkEndUnit, checkEnabledUnit}) => {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(17, end);
    checkEndUnit(1);
    checkEnabledUnit(2);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }

  return (
    <div className = {'pageContent page-17 animated fadeIn'}>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <div className = 'c-10 animated fadeIn d-Flex d-C j-S aI-S'>
          <div className = 'mL-7 c-8 mT-025 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-025' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'c-9 d-Flex j-C aI-S'>
            <InteractiveFlip3 dataPage = { dataPage.multimedia } isEnded = { isEnded } />
          </div>
        </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page17;