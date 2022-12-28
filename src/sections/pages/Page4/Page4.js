import React, {useState} from 'react';
import './Page4.scss';

import Instruction from '../../../components/Instruction';
import InteractiveFlip1 from '../../../components/InteractiveFlip1';

import HeaderImage from '../../../assets/img/4/n-2.png';
import FlipImage1 from '../../../assets/img/4/1.png';
import FlipImage2 from '../../../assets/img/4/2.png';
import FlipImage3 from '../../../assets/img/4/3.png';
import FlipImage4 from '../../../assets/img/4/4.png';
import FlipImage5 from '../../../assets/img/4/5.png';

const Page4 = ({dataPage, checkEndActivity}) => {
  const [FlipImageArray] = useState([FlipImage1, FlipImage2, FlipImage3, FlipImage4, FlipImage5]);

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(4, end);
  }

  return (
    <div className = {'pageContent page-4 animated fadeIn'}>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <div className = 'c-10 animated fadeIn d-Flex d-C j-S aI-S'>
          <div className = 'mL-7 c-10 mT-025 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'mL-5 c-8 d-Flex j-C aI-S'>
            <InteractiveFlip1 dataPage = { dataPage.multimedia } imageArray={FlipImageArray} isEnded = { isEnded } />
          </div>
        </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page4;