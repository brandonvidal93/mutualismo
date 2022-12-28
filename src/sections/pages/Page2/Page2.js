import React, {useEffect} from 'react';
import './Page2.scss';

import Instruction from '../../../components/Instruction';

import ImgBienvenida from '../../../assets/img/2/img-1.png';

const Page2 = ({dataPage, checkEnabledUnit}) => {
  useEffect(() => {
    checkEnabledUnit(0);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }, [checkEnabledUnit]);


  return (
    <div className='pageContent page-2 animated fadeIn'>
      <img alt = 'Imagen' className = 'imageNPC pAbs' src = { ImgBienvenida }/>
      <div className = 'c-4 mT-7 mL-7 animated fadeIn'>
        {
          dataPage.title ? <h1 className = 'mB-3 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
        }
        {
          dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
        }
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page2;