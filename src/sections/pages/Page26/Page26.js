import React, {useState} from 'react';

import Instruction from '../../../components/Instruction';
import ModalCircle1 from '../../../components/ModalCircle1';

import HeaderImage from '../../../assets/img/menuCourse/n-3.png';
import Image1 from '../../../assets/img/12/1.png';
import Image2 from '../../../assets/img/12/2.png';

const Page26 = ({dataPage, checkEndActivity}) => {
  const [imageArray] = useState([Image1, Image2]);

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(26, end);
  }

  return (
    <div className='pageContent page-26 animated fadeIn'>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>
      
      <div className = 'c-10 animated fadeIn'>
        <div className = 'mL-7 c-10 mT-6 mR-2'> 
          {
            dataPage.title ? <h2 className = 'mB-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <p className = 'mB-5 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>

        <div className = 'c-9 d-Flex j-C aI-S'>
          <ModalCircle1 dataPage = { dataPage } isEnded = { isEnded } imageArray={imageArray} />
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page26;