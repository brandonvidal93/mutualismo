import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Quiz1.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Quiz1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 0,
      accumulatedPoints: 0,
      totalPoints: props.multimedia.questions.length,
      multipleQuestionPoints: 3,
      multAccuPoints: 0,
      raw: 0,
      showModal: false
    }
  }

  actividadHandle = (event) => {
    const { questions } = this.props.multimedia;

    // SELECCION DEL ID DE LA OPCION
    let idSelect = event.target.id;
    // NUMERO ID 0, 1, 2, 3, ...
    let numId = idSelect.substring(7, 8);

    let typeQuestion = questions[this.state.question].type;

    // console.log(this.state.question);

    switch (typeQuestion) {
      case 'single':
        // console.log('Valor de la respuesta: ' + document.getElementById(idSelect).getAttribute('value'));
        

        //QUITAR LA SELECCION DE LA OPCIÓN

        // VALIDAR QUE LA RESPUESTA ES CORRECTA
        if (document.getElementById(idSelect).getAttribute('value') === 'true') {
          document.getElementById('icon-' + numId).classList.add('dNone');
          document.getElementById('iCheck-' + numId).classList.remove('dNone');
          document.getElementById('option-' + numId).classList.add('labelTrue');

          this.accumulatedQuiz(1);
        } else {
          document.getElementById('icon-' + numId).classList.add('dNone');
          document.getElementById('iError-' + numId).classList.remove('dNone');
          document.getElementById('option-' + numId).classList.add('labelFalse');
        }

        document.getElementById('act-'+ this.state.question).classList.add('disabledSolid2');
        document.getElementById('btnNextQuiz').classList.remove('disabled');
        break;

      case 'multiple':

        document.getElementById('icon-' + numId).classList.add('dNone');
        document.getElementById('iCheck-' + numId).classList.remove('dNone');

        if (document.getElementById(idSelect).getAttribute('value') === 'true') {
          this.accumulatedMultiple(1);
        }

        document.getElementById('btnNextQuiz').classList.remove('disabled');

        break;

      case 'FV':
        // console.log('Valor de la respuesta: ' + document.getElementById(idSelect).getAttribute('value'));
        // document.getElementById('icon-' + numId).classList.add('dNone');
        // document.getElementById('iCheck-' + numId).classList.remove('dNone');

        //QUITAR LA SELECCION DE LA OPCIÓN

        // VALIDAR QUE LA RESPUESTA ES CORRECTA
        if (document.getElementById(idSelect).getAttribute('value') === 'true') {
          this.accumulatedQuiz(1);

          document.querySelector('.labelTrue').classList.add('trueSelect');
        } else {
          document.querySelector('.labelFalse').classList.add('falseSelect');
        }

        document.getElementById('act-'+ this.state.question).classList.add('disabledSolid2');
        document.getElementById('btnNextQuiz').classList.remove('disabled');
        break;

      default:
        console.log();
        break;
    }
  }

  accumulatedQuiz = (point) => {
    this.setState({
      accumulatedPoints: this.state.accumulatedPoints + point
    });

    console.log(this.state.accumulatedPoints);
  }

  accumulatedMultiple = (point) => {
    this.setState({
      multAccuPoints: this.state.multAccuPoints + point
    });

    console.log(this.state.multAccuPoints);
  }

  nextQuestion = () => {
    const { questions } = this.props.multimedia;

    document.getElementById('act-'+ this.state.question).classList.remove('disabledSolid2');
    document.getElementById('btnNextQuiz').classList.add('disabled');

    for (var i = 0; i < questions[this.state.question].options.length; i++) {
      document.getElementsByClassName('icon')[i].classList.remove('dNone');
      document.getElementsByClassName('iconCheck')[i].classList.add('dNone');
      document.getElementsByClassName('iconError')[i].classList.add('dNone');
      document.getElementsByClassName('optionAct3')[i].classList.remove('labelTrue');
      document.getElementsByClassName('optionAct3')[i].classList.remove('labelFalse');
    }

    this.setState({
      question: this.state.question + 1
    })
  }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y PASAR A LA PAGINA FINAL
  endQuiz = () => {
    console.log('Puntos acumulados: ' + this.state.accumulatedPoints);
    console.log('Puntos acumulados: ' + this.state.multAccuPoints);

    // Suma de la pregunta multiple
    let puntoMultiple = (this.state.multAccuPoints * 1) / this.state.multipleQuestionPoints;
    let totalParcial = this.state.accumulatedPoints + puntoMultiple;
    let totalFinal = (totalParcial * 100) / this.state.totalPoints;

    this.props.setScore(totalFinal);
    console.log('Puntaje total: ' + totalFinal);

    this.setState({
      raw: totalFinal
    })
    console.log('Final no va más');

    this.setState({
      showModal: !this.state.showModal
    })
    document.querySelector('.footer').classList.add('dNone');
    document.querySelector('.menuContent').classList.add('dNone');
  }

  isEnded = () => {
    this.props.isEnded(true);
  }

  showModal = (modal) => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  //FUNCION PARA CERRAR LA MODAL
  hideModal = event => {
    event.preventDefault();

    document.querySelector('.footer').classList.remove('dNone');
    document.querySelector('.menuContent').classList.remove('dNone');

    console.log();

    this.showModal();

    this.props.endQuiz(document.getElementById('buttonCloseQuizModal').id); // VA EN EL BOTON DE FINALIZACIÓN

    this.isEnded();
  }

  render() {
    const { multimedia } = this.props;

    return (
      <div className = 'Quiz1 c-9 '>
        {
          this.state.showModal !== false ?
          <div className = 'modalQuiz animated fadeIn'>
            <div className = 'showModal'>
              <div className = 'c-10 d-Flex d-C j-C aI-C'>
                <img alt = 'Imagen' className = 'mB-2' src = { this.state.raw >= 70 ? multimedia.modal.check.img : multimedia.modal.error.img }/>
                <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: this.state.raw >= 70 ? multimedia.modal.check.title : multimedia.modal.error.title }}></h2>
                <p className = 'tCenter mB-2' dangerouslySetInnerHTML = {{ __html: this.state.raw >= 70 ? multimedia.modal.check.text : multimedia.modal.error.text }}></p>

                <button
                  className = 'buttonQuiz pT-05 pB-05 pL-1 pR-1'
                  onClick = { this.hideModal }
                  id = { 'buttonCloseQuizModal' }
                  >
                    Continuar
                  {/* <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon icon="circle" />
                    <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                  </span> */}
                </button>
              </div>
              {/* <button
                className = 'buttonClose'
                onClick = { this.hideModal }
                id = { 'buttonCloseQuizModal' }
                >
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                </span>
              </button> */}
            </div>
          </div>
          : null
        }

        <div className = { 'question d-Flex d-C j-E aI-S' } id = { 'question-' + this.state.question }>
          {console.log(multimedia.questions[this.state.question].type)}

          <p className = 'mB-1' dangerouslySetInnerHTML = {{ __html: multimedia.questions[this.state.question].instruction }}></p>
          <p className = { 'labelStatement mB-1 ' + (multimedia.questions[this.state.question].type === 'FV' ? 'labelFV' : '') } dangerouslySetInnerHTML = {{ __html: multimedia.questions[this.state.question].statement }}></p>

          <div 
          className = { 'optionsBox c-10 ' + (multimedia.questions[this.state.question].type !== 'FV' ? 'd-Flex d-C j-S aI-S wW' : 'd-Flex d-R j-C aI-S') } 
          id = { 'act-' + this.state.question } 
          style = {{ "height": (multimedia.questions[this.state.question].type === 'FV' ? 105 : 175) }}>
            {
              multimedia.questions[this.state.question].options.map((choice, i) => {
                return(
                  
                  <div className = 'option mB-05 d-Flex j-S aI-C' key = {i} id = { 'Op-' + (i) }>
                    <span className = { 'fa-layers icon mR-1 ' + (multimedia.questions[this.state.question].type === 'FV' ? 'dNone' : '') } id = { 'icon-' + (i) }>
                      <FontAwesomeIcon icon="circle" className = 'circle color-6' />
                      <p className = { 'typeLabel' }>{ choice.type }</p>
                    </span>

                    <span className = { 'fa-layers iconCheck mR-1 dNone ' + (multimedia.questions[this.state.question].type === 'FV' ? 'dNone' : '')} id = { 'iCheck-' + (i) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check' />
                    </span>

                    <span className = { 'fa-layers iconError mR-1 dNone ' + (multimedia.questions[this.state.question].type === 'FV' ? 'dNone' : '')} id = { 'iError-' + (i) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="times" inverse transform="shrink-6" className = 'check' />
                    </span>

                    <p className = {'labelStatement optionAct3 ' + (choice.type === 'VR' ? 'labelTrue fw-7 mR-05 ': '') + (choice.type === 'FR' ? 'labelFalse fw-7 mL-05': '') } id = { 'option-' + (i) } value = { choice.value } dangerouslySetInnerHTML = {{ __html: choice.text }} onClick = { this.actividadHandle }></p>
                  </div>
                )
              })
            }
          </div>

          <button
            className = 'buttonQuiz pT-05 pB-05 pL-1 pR-1 disabled'
            id = 'btnNextQuiz'
            onClick = { (multimedia.questions.length - 1) !== this.state.question ? this.nextQuestion : this.endQuiz }>
            { (multimedia.questions.length - 1) !== this.state.question ? 'Siguiente' : 'Finalizar' }
          </button>

        </div>
      </div>
    );
  }
}

export default Quiz1;