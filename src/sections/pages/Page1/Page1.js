import React, {useState} from 'react';
import Instruction from '../../../components/Instruction';

import './Page1.scss';

import Img1 from '../../../assets/img/1/n-1.png';
import Img2 from '../../../assets/img/1/n-2.png';
import Img3 from '../../../assets/img/1/n-3.png';
import Img4 from '../../../assets/img/1/n-4.png';
import Img5 from '../../../assets/img/1/n-5.png';
import Img61 from '../../../assets/img/1/n-6-1.png';
import Img62 from '../../../assets/img/1/n-6-2.png';
import Img7 from '../../../assets/img/1/n-7.png';
import BackgroundPage from '../../../assets/img/1/bgPage-1.png'

const Page1 = ({dataPage, startCourse}) => {
  const [itemActive, setItemActive] = useState(0);
  const [img1Array] = useState([Img1, Img2, Img3, Img4, Img5, Img61, Img7]);
  const [img2Array] = useState([null, null, null, null, null, Img62, null]);

  console.log('dataPage', dataPage);

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  const handleStartCourse = e => {
    e.preventDefault();
    startCourse(e.target.id);
  }

  // MOSTRAR ITEM
  const showItem = e => {
    e.preventDefault();

    let numId = parseInt(e.target.id.substring(12, 13));

    setItemActive(numId);
  }

  const style = {
    backgroundImage: `url(${BackgroundPage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 430
  }

  return (
    <div className='pageContent page-1 animated fadeIn'>
      <div className = 'c-10'>
        <div className = 'c-3 mB-2'>
          <h2 className = 'mT-4 mL-4 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2>
        </div>
      </div>

      <div className = 'c-10 d-Flex d-C j-E aI-C' style = {{ ...style, 'paddingTop': 40, 'paddingLeft': 0, 'paddingRight': 0, 'paddingBottom': 40 }} >
          <div className = 'boxContent d-Flex d-C j-C aI-C pT-1'>
            {
              (itemActive !== dataPage.information.length - 1) ?
              dataPage.information.map((item, i) => {
                return(
                  <div
                    className = { 'd-Flex d-C j-C aI-C animated fadeIn ' + (itemActive === i ? '' : 'dNone') }
                    key = { i }>
                    {
                      img1Array[i] ? <img
                        alt = 'Imagen'
                        className = 'mB-1'
                        src = { img1Array[i] }/> : null
                    }
                    {
                      item.text1 ? <p className = 'tCenter c-7 mB-025' dangerouslySetInnerHTML = {{ __html: item.text1 }}></p> : null
                    }
                    {
                      img2Array[i] ? <img
                        alt = 'Imagen'
                        className = 'mB-025'
                        src = { img2Array[i] }/> : null
                    }
                  </div>
                )
              }) :
              <div className = { 'c-10 d-Flex j-C aI-C' }>
                <button
                  className = 'btnStart'
                  id = 'btnInstruction'
                  onClick = { handleStartCourse }>
                  Continuar
                </button>
              </div>
            }
          </div>
          <div className = 'buttonBoxInst d-Flex j-C aI-C'>
            {
              dataPage.information.map((button, i) => {
                return(
                  <div
                    className = { 'btnItemInst ' + (itemActive === i ? 'btnActive': '') }
                    id = { 'btnItemInst-' + i }
                    key = { i }
                    onClick = { showItem } >
                  </div>
                )
              })
            }
          </div>
        </div>

      <Instruction dataPage = { dataPage.instruction } />
    </div>
  )
}

export default Page1;