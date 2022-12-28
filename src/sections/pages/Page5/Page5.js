import React, {useState} from 'react';

import Instruction from '../../../components/Instruction';
import DnDCircle1 from '../../../components/DnDCircle1/DnDCircle1';

import HandImage from '../../../assets/img/hand-1.png';
import HeaderImage from '../../../assets/img/5/n-2.png';
import DnDImage1 from '../../../assets/img/5/1.png';
import DnDImage2 from '../../../assets/img/5/2.png';
import DnDImage3 from '../../../assets/img/5/3.png';
import DnDImage4 from '../../../assets/img/5/4.png';
import DnDImage5 from '../../../assets/img/5/5.png';
import DnDImage6 from '../../../assets/img/5/6.png';
import DnDImage7 from '../../../assets/img/5/7.png';
import DnDImage8 from '../../../assets/img/5/8.png';
import DnDImage9 from '../../../assets/img/5/9.png';
import DnDBackground from '../../../assets/img/5/bgPage-5.png';

const Page5 = ({dataPage, checkEndActivity}) => {
  const [DnDImageArray] = useState([DnDImage1, DnDImage2, DnDImage3, DnDImage4, DnDImage5, DnDImage6, DnDImage7, DnDImage8, DnDImage9]);

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  const isEnded = (end) => {
    checkEndActivity(5, end);
  }

  return (
    <div className = {'pageContent page-5 animated fadeIn'}>
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

        <div className = 'mL-5'>
          <DnDCircle1 multimedia = { dataPage.multimedia } isEnded = { isEnded } imageArray={DnDImageArray} background={DnDBackground} imageSelector={HandImage} />
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page5;