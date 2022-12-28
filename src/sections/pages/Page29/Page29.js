import React from 'react';

// import Instruction from '../../../components/Instruction';
// import ModalCircle1 from '../../../components/ModalCircle1';

import './Page29.scss'

import HeaderImage from '../../../assets/img/menuCourse/n-10.png';
import Image from '../../../assets/img/29/1.png';
// import Image1 from '../../../assets/img/28/1.png';

const Page29 = ({dataPage, checkEndActivity}) => {
  // const [imageArray] = useState([Image1, Image1]);

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  // const isEnded = (end) => {
  //   checkEndActivity(29, end);
  // }

  return (
    <div className='pageContent page-29 animated fadeIn'>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <img alt = 'Imagen' className = 'imageNPC pAbs' src = { Image }/>
      
      <div className = 'c-10 animated fadeIn'>
        <div className = 'mL-7 c-5 mT-3 mR-2'> 
          {
            dataPage.title ? <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Page29;