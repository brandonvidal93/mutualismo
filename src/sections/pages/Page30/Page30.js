import React, {useState} from 'react';

import Instruction from '../../../components/Instruction';
import ModalGallery1 from '../../../components/ModalGallery1';

import HeaderImage from '../../../assets/img/menuCourse/n-10.png';
import ButtonImagen from '../../../assets/img/30/n-1.png';
import Img1 from '../../../assets/img/30/1.png';
import Img2 from '../../../assets/img/30/2.png';
import Img3 from '../../../assets/img/30/3.png';
import Img4 from '../../../assets/img/30/4.png';
import Img5 from '../../../assets/img/30/5.png';

const Page30 = ({dataPage, checkEndActivity, checkEndUnit, checkEnabledUnit}) => {
  const [openModal, setOpenModal] = useState(false);

  const imgArray = [Img1, Img2, Img3, Img4, Img5];

  // FUNCION PARA ABRIR MODAL
  const showModal = () => {
    setOpenModal(!openModal);

    document.querySelector('.buttonVideo').classList.remove('pulse');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(30, end);
    checkEndUnit(5);
    checkEnabledUnit(6);
  }

  return (
    <div className='pageContent page-30 animated fadeIn'>
      { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
      { openModal !== false ? <ModalGallery1 dataPage = { dataPage } showModal={ showModal } isEnded = { isEnded } arrayImage={imgArray} /> : null }

      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>
      
      <div className = 'c-10 d-Flex j-S'>
        <div className = 'mL-7 c-3 mT-4 mR-5'> 
          {
            dataPage.title ? <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>

        <div className = 'c-4 d-Flex j-C aI-S mT-3 mL-2'>
          <button className = 'buttonVideo mR-6 pulse' onClick = { showModal }>
            <img
              alt = 'Imagen'
              className = ''
              src = { ButtonImagen }/>
          </button>
        </div>
      </div>

      

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page30;