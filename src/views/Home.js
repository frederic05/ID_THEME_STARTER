import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

// **  Components
import CardMedal from './ui-element/home/CardMedal'
import StatsCard from './ui-element/home/StatsCard'
import CardBrowserState from './ui-element/home/CardBrowserStates'
import CardTransactions from './ui-element/home/CardTransactions'


// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const Home = () => {

  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** vars
  const trackBgColor = '#e9ecef'

  return (
    <div>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal />
        </Col>
        <Col xl='8' md='6' xs='12'>
        <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row> 
      <Row className='match-height'>
        <Col lg='4' md='6' xs='12'>
        <CardBrowserState colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' xs='12'>
        <CardTransactions />
        </Col>
        <Col lg='4' md='6' xs='12'>
        <CardBrowserState colors={colors} trackBgColor={trackBgColor} />
        </Col>
      </Row> 

    </div>
  )
}

export default Home
