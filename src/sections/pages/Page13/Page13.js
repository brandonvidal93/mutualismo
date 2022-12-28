import React from 'react';
import './Page13.scss';

import Instruction from '../../../components/Instruction';

import HeaderImage from '../../../assets/img/13/n-2.png';
import Image from '../../../assets/img/13/1.png';

const Page13 = ({dataPage}) => {
  return (
    <div className='pageContent page-13 animated fadeIn'>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <img alt = 'Imagen' className = 'imageNPC pAbs' src = { Image }/>
      
      <div className = 'c-10 animated fadeIn'>
        <div className = 'mL-7 c-4 mT-025 mR-2'> 
          {
            dataPage.title ? <h2 className = 'mB-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <h3 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></h3> : null
          }
          {
            dataPage.text2 ? <p className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }}></p> : null
          }
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page13;