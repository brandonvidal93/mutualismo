import React, { Component } from 'react';
// import StartDrop from '../../components/DnDStart/dropBoard';
// import StartDrag from '../../components/DnDStart/dragButton';
import Accordion1 from '../../components/Accordion1';
import DnDCircle1 from '../../components/DnDCircle1/DnDCircle1';
import DnDCircle2 from '../../components/DnDCircle2/DnDCircle2';
import DnDCircle3 from '../../components/DnDCircle3/DnDCircle3';
import DnDLabel1 from '../../components/DnDLabel1/DnDLabel1';
import DnDIcon1 from '../../components/DnDIcon1/DnDIcon1';
import DnDSwipe1 from '../../components/DnDSwipe1/DnDSwipe1';
import Instruction from '../../components/Instruction';
import InteractiveAudio1 from '../../components/InteractiveAudio1/InteractiveAudio1';
import InteractiveFlip1 from '../../components/InteractiveFlip1';
import InteractivePath1 from '../../components/InteractivePath1';
import InteractivePath2 from '../../components/InteractivePath2';
import InteractivePath3 from '../../components/InteractivePath3';
import InteractivePath4 from '../../components/InteractivePath4';
import InteractivePath5 from '../../components/InteractivePath5';
import InteractiveSubtitle from '../../components/InteractiveSubtitle';
import ModalCircle1 from '../../components/ModalCircle1';
import ModalCircle2 from '../../components/ModalCircle2';
import ModalCircle3 from '../../components/ModalCircle3';
import ModalVideo1 from '../../components/ModalVideo1';
import ModalGallery1 from '../../components/ModalGallery1';
import ModalGallery2 from '../../components/ModalGallery2';
import Pyramid1 from '../../components/Pyramid1';
import Quiz1 from '../../components/Quiz1';
import SlideDot1 from '../../components/SlideDot1';
import SlideUpDown from '../../components/SlideUpDown';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Pages.scss';

library.add(fas, fab, far);

class Cover extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = (e) => {
    const target = e.currentTarget.id;

    this.props.startCourse(target);
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className={ (dataPage.type) + ' pL-4 animated fadeIn' } style = { style }>
        <div className="c-35 dF-C-cs">
          {
            dataPage.logoCourse ? <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo mT-7 mL-1 mB-2'
              src = { dataPage.logoCourse }/> : null
          }
          {
            dataPage.title ? <h1 className = 'mT-5 mB-05 F4 fw-9 title-course' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
          }
          {
            dataPage.subTitle ? <p className = 'mL-05 mB-4 F1-3 fw-5' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></p> : null
          }
          {
            dataPage.module ? <h3 className = 'mB-1 fs-i' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></h3> : null
          }
          {
            dataPage.courseName ? <p className = 'mL-025 mB-1 fs-i' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p> : null
          }

          <button
            className = 'buttonQuiz pT-1 pB-1 pL-3 pR-3'
            onClick = { this.startCourse }
            id = { 'btnIniciar' }
            >
              Iniciar
          </button>
        </div>

      </div>
    );
  }
}

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: 0,
      showModal: true
    }
  }

  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone'); // OCULTAR EL FONDO
    document.querySelector('.menuContent').classList.add('dNone'); // OCULTAR EL FONDO
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // MOSTRAR ITEM
  showItem = e => {
    e.preventDefault();

    let numId = parseInt(e.target.id.substring(12, 13));

    this.setState({
      item: numId
    });
  }

  // OCULTAR MODAL
  hideModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });

    document.querySelector('.footer').classList.remove('dNone');
    document.querySelector('.menuContent').classList.remove('dNone');
  }

  render() {
    const { dataPage } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.resources.bg + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 430
    }

    return (
      <div className = { 'pageContent'}>
        {
          this.state.showModal ?
          <div className = 'modalInstruction'>
            <div className = 'bgCircle dF-R-cc showModal'>
              <div className = 'boxInfo d-C d-Flex j-C aI-C pT-2 pB-2 pL-2 pR-2'>
                <hr className = 'mB-1 line-5'></hr>
                <p className = 'tCenter blanco mB-1'>
                  Antes de iniciar, te invitamos a hacer el recorrido de navegación dando clic en el siguiente botón.
                </p>
                <button
                  className = 'buttonClose blanco'
                  onClick = { this.hideModal } >
                  Instructivo
                </button>
              </div>
            </div>
          </div> :
          null
        }

        <div className = 'c-10 animated fadeIn'>
          <div className = 'c-3 mB-2'>
            <h2 className = 'mT-4 mL-4 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2>
          </div>

          <div className = 'c-10 d-Flex d-C j-E aI-C' style = {{ ...style, 'paddingTop': 40, 'paddingLeft': 0, 'paddingRight': 0, 'paddingBottom': 40 }} >
            <div className = 'boxContent d-Flex d-C j-C aI-C pT-1'>
              {
                (this.state.item !== dataPage.information.length - 1) ?
                dataPage.information.map((item, i) => {
                  return(
                    <div
                      className = { 'd-Flex d-C j-C aI-C animated fadeIn ' + (this.state.item === i ? '' : 'dNone') }
                      key = { i }>
                      {
                        item.img1 ? <img
                          alt = 'Imagen'
                          className = 'mB-1'
                          src = { item.img1 }/> : null
                      }
                      {
                        item.text1 ? <p className = 'tCenter c-7 mB-025' dangerouslySetInnerHTML = {{ __html: item.text1 }}></p> : null
                      }
                      {
                        item.img2 ? <img
                          alt = 'Imagen'
                          className = 'mB-025'
                          src = { item.img2 }/> : null
                      }
                    </div>
                  )
                }) :
                <div className = { 'c-10 d-Flex j-C aI-C' }>
                  <button
                    className = 'buttonStart'
                    id = 'btnInstruction'
                    onClick = { this.startCourse }>
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
                      className = { 'btnItemInst ' + (this.state.item === i ? 'btnActive': '') }
                      id = { 'btnItemInst-' + i }
                      key = { i }
                      onClick = { this.showItem } >
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        
        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page2 extends Component {
  // componentDidMount() {
  //   this.props.checkEnabledUnit(0);
  // }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);

    this.props.checkEnabledUnit(0);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 mT-6'> 
            <img alt = 'Imagen' className = 'imageNPC pAbs' src = { dataPage.resources.img1 }/>
            {
              dataPage.title ? <h1 className = 'c-7 mB-05 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
            }
            {
              dataPage.text ? <p className = 'c-5 mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'mB-2 mL-7'>
            <InteractiveSubtitle dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page3 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(3, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'c-10 animated fadeIn'>
          <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
            <h2
              className = 'textHeader F2'
              dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
              style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

            <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

            <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
          </div>

          <div className = 'c-10 animated fadeIn d-Flex j-S aI-S'>
            <div className = 'mL-7 c-45 mT-025 mR-2'> 
              {
                dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
              }
              {
                dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
              }
            </div>
            <div className = 'c-45 d-Flex j-C aI-S'>
              <ModalCircle1 dataPage = { dataPage } isEnded = { this.isEnded } />
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page4 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex d-C aI-S j-C'>
          <div className = 'mL-7 c-10 mT-025 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-4 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <InteractivePath1 dataPage = { dataPage } isEnded = { this.isEnded } />
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page5 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-3 mT-3 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C mT-2'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page6 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);

    this.props.checkEndUnit(0);
    this.props.checkEnabledUnit(1);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }
  
  // componentDidMount() {
  //   this.props.checkEndUnit(0);
  //   this.props.checkEnabledUnit(1);
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <SlideUpDown multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page7 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex j-S aI-S'>
          <div className = 'mL-7 c-3 mT-025 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'c-5 d-Flex j-C aI-S'>
            <InteractiveFlip1 dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page8 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(8, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <DnDCircle1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page9 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(9, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 d-Flex j-S aI-C animated fadeIn'>
          <div className = 'mL-7 c-3 mT-3 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-5 d-Flex j-C aI-S'>
            <DnDSwipe1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page10 extends Component {
  state = {
    openModal: false
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });

    document.querySelector('.buttonVideo').classList.remove('pulse');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(10, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalGallery1 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 d-Flex j-S aI-C animated fadeIn'>
          <div className = 'mL-7 c-5 mT-3 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-5 d-Flex j-C aI-S'>
            <button className = 'buttonVideo mR-6 pulse' onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = ''
                src = { dataPage.multimedia.buttonModal.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page11 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-6'>
            <InteractivePath2 dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page12 extends Component {
  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 d-Flex j-S aI-C animated fadeIn'>
          <div className = 'mL-7 c-4 mT-3 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-3 d-Flex j-C aI-S'>
            <img
                alt = 'Imagen'
                className = ''
                src = { dataPage.img }/>
          </div>
        </div>
      </div>
    );
  }
}

class Page13 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(13, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 d-Flex j-S aI-C animated fadeIn'>
          <div className = 'mL-7 c-3 mT-3 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-7 d-Flex j-C aI-S'>
            <DnDCircle2 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    );
  }
}

class Page14 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(14, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 d-Flex j-S aI-S animated fadeIn'>
          <div className = 'mL-7 c-3 mT-3 mR-3'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-7 d-Flex j-S aI-S'>
            <Pyramid1 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    );
  }
}

class Page15 extends Component {

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(15, end);

    this.props.checkEndUnit(1);
    this.props.checkEnabledUnit(2);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }

  // componentDidMount() {
  //   this.props.checkEndUnit(1);
  //   this.props.checkEnabledUnit(2);
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-6'>
            <DnDLabel1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page16 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(16, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-3 mT-3 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C mT-2'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page17 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(17, end);

    this.props.checkEndUnit(2);
    this.props.checkEnabledUnit(3);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }

  // componentDidMount() {
  //   this.props.checkEndUnit(2);
  //   this.props.checkEnabledUnit(3);
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-6'>
            <InteractivePath3 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page18 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(18, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-6'>
            <Accordion1 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page19 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(19, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-4 mR-2 mT-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C'>
            <ModalCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page20 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(20, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-75 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = ''>
            <SlideDot1 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page21 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(21, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-10 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <InteractiveAudio1 dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>
      </div>
    );
  }
}

class Page22 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(22, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-3 mT-3 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C mT-2'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page23 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(23, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-C aI-C'>
          <div className = 'mL-7 c-35'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C'>
            <ModalCircle3 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>  
    );
  }
}

class Page24 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(24, end);
  }

  render() {
    const { dataPage } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo1 dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn c-10 d-Flex j-Bt aI-C'>
          <div className = 'mL-7 c-3 mT-3 mR-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>
          <div className = 'd-Flex c-45 j-C aI-C mT-2'>
            <button className = 'buttonVideo mR-6' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page25 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(25, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-7 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <InteractivePath4 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page26 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(26, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-7 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <InteractivePath5 dataPage = { dataPage } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page27 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(27, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-35 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <DnDIcon1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page28 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(28, end);

    this.props.checkEndUnit(3);
    this.props.checkEnabledUnit(4);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
    document.getElementById('btnNavDown').classList.add('animationDownMenu');
  }

  // componentDidMount() {
  //   this.props.checkEndUnit(3);
  //   this.props.checkEnabledUnit(4);
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-1 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn'>
          <div className = 'mL-7 c-4 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7'>
            <DnDCircle3 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page29 extends Component {
  state = {
    openModal: false,
    actGallery: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });

    document.querySelector('.buttonVideo').classList.remove('pulse');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(29, end);
  }

  // activateGallery = (end) => {
  //   this.setState({
  //     actGallery: true
  //   });
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalGallery2 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-2 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex j-S aI-C'>
          <div className = 'mL-7 c-5 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }

            {/* <InteractiveSubtitle dataPage={ dataPage.multimedia } isEnded = { this.activateGallery } /> */}

            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'c-3 d-Flex j-C aI-S'>
            <button className = { 'buttonVideo pulse ' + (this.state.actGallery ? '' : 'disabled')} onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = ''
                src = { dataPage.multimedia.buttonModal.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page30 extends Component {
  state = {
    openModal: false
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });

    document.querySelector('.buttonVideo').classList.remove('pulse');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(30, end);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalGallery2 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-2 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex d-C j-S aI-S'>
          <div className = 'mL-7 c-35 mT-025 mR-2 mB-2'> 
            {
              dataPage.title ? <h2 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7 c-8 d-Flex j-C aI-S'>
            <button className = { 'buttonVideo pulse' } onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = 'c-8'
                src = { dataPage.multimedia.buttonModal.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page31 extends Component {
  state = {
    openModal: false
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
    });

    document.querySelector('.buttonVideo').classList.remove('pulse');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(31, end);

    this.props.checkEndUnit(4);
    this.props.checkEnabledUnit(5);

    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
    document.getElementById('btnNavDown').classList.add('animationDownMenu');
  }

  // componentDidMount() {
  //   this.props.checkEndUnit(4);
  //   this.props.checkEnabledUnit(5);
  // }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalGallery2 dataPage = { dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-2 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex d-R j-S aI-C mT-3'>
          <div className = 'mL-7 c-6 mT-025 mR-2 mB-6'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-2 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
            <div className = 'd-Flex j-C aI-C'>
              {
                dataPage.img ? <img alt = 'Imagen' className = 'c-4' src = { dataPage.img }/> : null
              }
            </div>
          </div>

          <div className = 'c-45 d-Flex j-S aI-S mT-2'>
            <button className = { 'buttonVideo pulse' } onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = 'c-10'
                src = { dataPage.multimedia.buttonModal.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page32 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL QUIZ
  startQuiz = e => {
    e.preventDefault();
    this.props.startQuiz(e.target.id);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-2 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex d-R j-S aI-C mT-3'>
          <div className = 'mL-7 c-5 mT-025 mR-2 mB-6'> 
            {
              dataPage.title ? <h2 className = 'mB-1 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }

            <button
              className = 'buttonQuiz pT-1 pB-1 pL-2 pR-2'
              id = 'btnQuiz'
              onClick = { this.startQuiz }>
              { dataPage.button }
            </button>
          </div>

          <div className = 'c-45 d-Flex j-S aI-S'>
            <img
              alt = 'Imagen'
              className = ''
              src = { dataPage.img }/>
          </div>
        </div>
      </div>
    );
  }
}

class Page33 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(33, end);

    this.props.checkEndUnit(5);
    this.props.checkEnabledUnit(6);
    
    document.querySelector('.buttonOpen').classList.add('animationOpenMenu');
  }
  
  // componentDidMount() {
  //   this.props.checkEndUnit(5);
  //   this.props.checkEnabledUnit(6);
  // }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL QUIZ
  endQuiz = (buttonPress) => {
    // e.preventDefault();
    this.props.endQuiz(buttonPress);
  }

  render() {
    const { dataPage } = this.props;

    return (
      <div className = { 'pageContent'}>
        <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-2 mL-4 mT-2'>
          <h2
            className = 'textHeader F2'
            dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
            style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

          <FontAwesomeIcon icon="play" size = 'lg' className = 'mL-025 mR-05' style = {{ 'color': '#EAEAEA' }} />

          <img alt = 'Imagen' className = '' src = { dataPage.headerPage.imgHeader }/>
        </div>

        <div className = 'c-10 animated fadeIn d-Flex d-C j-S aI-S'>
          <div className = 'mL-7 c-5 mT-025 mR-2 mB-1'> 
            {
              dataPage.title ? <h2 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
            }
            {
              dataPage.text ? <p className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
            }
          </div>

          <div className = 'mL-7 c-9'>
            <Quiz1 multimedia = { dataPage.multimedia } isEnded = { this.isEnded } endQuiz = { this.endQuiz } setScore = { this.props.setScore } />
          </div>
        </div>
      </div>
    );
  }
}

class Page34 extends Component {
  closeCourse = () => {
    // ESTO SOLO SE EJECUTA CUANDO SE INICIA EL SERVIDOR O CUANDO SE ABRE COMO EMERGENTE
    window.parent.parent.close();
  }

  render() {

    const { dataPage, calificacion } = this.props;

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return(
      <div className={ (dataPage.type) + ' pL-4 animated fadeIn' } style = { style }>
        {
          dataPage.logoCourse ? <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo'
            src = { dataPage.logoCourse }/> : null
        }
        <div className="c-65 pL-5 d-Flex d-C j-C aI-C" style = {{ 'marginLeft': '16rem' }}>
          {
            dataPage.message.success.title ? <h1 className = 'mB-2 F3 blanco tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.title : dataPage.message.error.title }}></h1> : null
          }
          
          {
            dataPage.message.success.module ? <h3 className = 'mB-1 blanco tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.module : dataPage.message.error.module }}></h3> : null
          }
          {
            dataPage.message.success.courseName ? <p className = 'c-8 mB-2 blanco tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.courseName : dataPage.message.error.courseName }}></p> : null
          }
          {
            dataPage.message.success.subTitle ? <h2 className = 'mB-2 F2-5 blanco tCenter' dangerouslySetInnerHTML = {{ __html: calificacion >= 70 ? dataPage.message.success.subTitle : dataPage.message.error.subTitle }}></h2> : null
          }
          {
            dataPage.buttonEnd ? 
              <h2 
                className = 'blanco tCenter fw-3 buttonEnd' 
                dangerouslySetInnerHTML = {{ __html: dataPage.buttonEnd }}
                onClick = { this.closeCourse }
                style = {{ 'cursor': 'pointer' }} /> : 
              null
          }

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

export {
  Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14,
  Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29,
  Page30, Page31, Page32, Page33, Page34
};
