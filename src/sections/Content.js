import React, { Component } from 'react';
import MenuCourse from './pages/MenuCourse';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
import Cover from './pages/Cover/Cover';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/Page5/Page5';
import Page6 from './pages/Page6/Page6';
import Page7 from './pages/Page7/Page7';
import Page8 from './pages/Page8/Page8';
import Page9 from './pages/Page9/Page9';
import Page10 from './pages/Page10/Page10';
import Page11 from './pages/Page11/Page11';
import Page12 from './pages/Page12/Page12';
import Page13 from './pages/Page13/Page13';
import Page14 from './pages/Page14/Page14';
import Page15 from './pages/Page15/Page15';
import Page16 from './pages/Page16/Page16';
import Page17 from './pages/Page17/Page17';
import Page18 from './pages/Page18/Page18';
import Page19 from './pages/Page19/Page19';
import Page20 from './pages/Page20/Page20';
import Page21 from './pages/Page21/Page21';
import Page22 from './pages/Page22/Page22';
import Page23 from './pages/Page23/Page23';
import Page24 from './pages/Page24/Page24';
import Page25 from './pages/Page25/Page25';
import Page26 from './pages/Page26/Page26';
import Page27 from './pages/Page27/Page27';
import Page28 from './pages/Page28/Page28';
import Page29 from './pages/Page29/Page29';
import Page30 from './pages/Page30/Page30';
import BackCover from './pages/BackCover/BackCover';

class Content extends Component {
  showContent = () => {
    const { actualIndex, clickNavigation, data, checkEnabledUnit, endActivities, checkEndActivity, checkEndUnit } = this.props;

    switch (actualIndex) {
      // COVER -------------------------------------------------------------------------------
      case 0: return ( <Cover dataPage = { data.coverPage } startCourse = { clickNavigation } /> );

      // INS ---------------------------------------------------------------------------------
      case 1: return( <Page1 dataPage = { data.page1 } startCourse = { clickNavigation } /> );

      case 2: return( <Page2 dataPage = { data.page2 } endActivities = { endActivities[2] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } /> );

      // UNIDAD 1 ---------------------------------------------------------------------------
      // AMANDO EL MUTUALISMO ---------------------------------------------------------------
      case 3: return( <Page3 dataPage = { data.page3 } /> );
      
      case 4: return( <Page4 dataPage = { data.page4 } /> );
      
      case 5: return( <Page5 dataPage = { data.page5 }  /> );
      
      case 6: return( <Page6 dataPage = { data.page6 } endActivities = { endActivities[6] } checkEndActivity = { checkEndActivity } /> );
      
      case 7: return( <Page7 dataPage = { data.page7 } endActivities = { endActivities[7] } checkEndActivity = { checkEndActivity } /> );
      
      case 8: return( <Page8 dataPage = { data.page8 } endActivities = { endActivities[8] } checkEndActivity = { checkEndActivity } /> );

      case 9: return( <Page9 dataPage = { data.page9 } /> );

      case 10: return( <Page10 dataPage = { data.page10 } endActivities = { endActivities[10] } checkEndActivity = { checkEndActivity } /> );
      
      case 11: return( <Page11 dataPage = { data.page11 } /> );

      case 12: return( <Page12 dataPage = { data.page12 } endActivities = { endActivities[12] } checkEndActivity = { checkEndActivity } /> );

      case 13: return( <Page13 dataPage = { data.page13 } /> );

      case 14: return( <Page14 dataPage = { data.page14 } endActivities = { endActivities[14] } checkEndActivity = { checkEndActivity } /> );

      case 15: return( <Page15 dataPage = { data.page15 } endActivities = { endActivities[15] } checkEndActivity = { checkEndActivity } /> );
      
      case 16: return( <Page16 dataPage = { data.page16 } /> );

      case 17: return( <Page16 dataPage = { data.page17 } /> );

      case 18: return( <Page18 dataPage = { data.page18 } /> );

      case 19: return( <Page19 dataPage = { data.page19 } endActivities = { endActivities[19] } checkEndActivity = { checkEndActivity } /> );

      case 20: return( <Page20 dataPage = { data.page20 } endActivities = { endActivities[20] } checkEndActivity = { checkEndActivity } /> );

      case 21: return( <Page21 dataPage = { data.page21 } endActivities = { endActivities[21] } checkEndActivity = { checkEndActivity } /> );

      case 22: return( <Page22 dataPage = { data.page22 } endActivities = { endActivities[22] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );

      case 23: return( <Page23 dataPage = { data.page23 } /> );

      case 24: return( <Page24 dataPage = { data.page24 } /> );
      
      case 25: return( <Page25 dataPage = { data.page25 } /> );
      // FIN UNIDAD 1 -----------------------------------------------------------------------



      case 26: return( <Page26 dataPage = { data.page26 } endActivities = { endActivities[26] } checkEndActivity = { checkEndActivity } /> );

      case 27: return( <Page27 dataPage = { data.page27 } endActivities = { endActivities[27] } checkEndActivity = { checkEndActivity } /> );

      case 28: return( <Page28 dataPage = { data.page28 } endActivities = { endActivities[28] } checkEndActivity = { checkEndActivity } /> );

      case 29: return( <Page29 dataPage = { data.page29 } /> );

      case 30: return( <Page30 dataPage = { data.page30 } endActivities = { endActivities[30] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit }  /> );

      // // END --------------------------------------------------------------------------------
      case 31: return( <BackCover dataPage = { data.page31 } /> );

      default:
        break;
    }
  }

  render() {
    const { data, enableUnit, goToPage, nextUnit, unitActual, updateActualUnit, updateNextUnit, unitFinal } = this.props;

    return (
      <div className='content'>
        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

        { /* CARGAR DEL MENU LATERAL */ }
        <MenuCourse
          actualIndex = { this.props.actualIndex }
          dataPage = { data.menuCourse }
          enableUnit = { enableUnit }
          goToPage = { goToPage }
          nextUnit = { nextUnit }
          Units = { data.menuCourse.Units }
          unitActual = { unitActual }
          updateActualUnit = { updateActualUnit }
          updateNextUnit = { updateNextUnit }
          unitFinal = { unitFinal } />

          {/* CARGA DEL COMPOMENTE FOOTER */}
        <Footer
          actualIndex = { this.props.actualIndex }
          bgFooter = { this.props.bgFooter }
          clickNavigation = { this.props.clickNavigation }
          data = { this.props.data }
          endActivities = { this.props.endActivities }
          getPos = { this.getPos }
          imageFooter = { this.props.imageFooter }
          labelFooter = { this.props.labelFooter }
          limitNavigation = { this.props.limitNavigation } />
      </div>
    );
  }
}

export default Content;
