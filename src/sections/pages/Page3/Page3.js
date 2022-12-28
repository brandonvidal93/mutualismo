import React, {useState} from 'react';
import Instruction from '../../../components/Instruction';
import SlideUpDown from '../../../components/SlideUpDown';

import './Page3.scss';

import HeaderImage from '../../../assets/img/3/n-1.png';
import ComicImage1 from '../../../assets/img/3/comic-1.png';
import ComicImage2 from '../../../assets/img/3/comic-2.png';
import ComicImage3 from '../../../assets/img/3/comic-3.png';
import ComicImage4 from '../../../assets/img/3/comic-4.png';
import ComicImage5 from '../../../assets/img/3/comic-5.png';

const Page3 = ({dataPage, checkEndActivity, checkEndUnit, checkEnabledUnit}) => {
  const [ComicImageArray] = useState([ComicImage1, ComicImage2, ComicImage3, ComicImage4, ComicImage5]);

  const isEnded = (end) => {
    checkEndActivity(3, end);
    checkEndUnit(0);
    checkEnabledUnit(1);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  };

  return (
    <div className='pageContent page-3 animated fadeIn'>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <div className = 'c-10'>
        <div className = 'mL-7 c-10 mT-025 mR-2'> 
          {
            dataPage.title ? <h3 className = 'mB-025' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h3> : null
          }
          {
            dataPage.text ? <p className = 'mB-1 fs-i' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>

        <div className = 'mL-9'>
          <SlideUpDown multimedia = { dataPage.multimedia } isEnded = { isEnded } imageArray={ComicImageArray} />
        </div>
      </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page3;