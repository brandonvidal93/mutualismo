import React, {useState} from 'react';
import Instruction from '../../../components/Instruction';
import ModalCircle3 from '../../../components/ModalCircle3';

import HeaderImage from '../../../assets/img/6/n-2.png';
import ModalImage1 from '../../../assets/img/6/1.png';
import ModalImage2 from '../../../assets/img/6/2.png';
import ModalImage3 from '../../../assets/img/6/3.png';
import ModalImage4 from '../../../assets/img/6/4.png';
import ModalImage5 from '../../../assets/img/6/5.png';
import ModalImage6 from '../../../assets/img/6/6.png';
import ModalImage7 from '../../../assets/img/6/7.png';
import ModalImage8 from '../../../assets/img/6/8.png';
import ModalBackground from '../../../assets/img/6/bgPage-6.png';

const Page6 = ({dataPage, checkEndActivity}) => {
  const [modalImageArray] = useState([ModalImage1, ModalImage2, ModalImage3, ModalImage4, ModalImage5, ModalImage6, ModalImage7, ModalImage8]);

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(6, end);
  }

  return (
    <div className = {'pageContent page-6 animated fadeIn'}>
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
          <ModalCircle3 dataPage = { dataPage } isEnded = { isEnded } imageArray={modalImageArray} background={ModalBackground} />
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page6;