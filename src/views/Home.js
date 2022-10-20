
// ** React Imports
import { useCallback, useEffect, useState} from 'react'
import { Row, Col } from 'reactstrap'
import BasicHookForm from './ui-element/home/form'
import DataTableWithButtons from './ui-element/dataTable/tableData'

// **  Components
import SimpleAreaChart from './ui-element/home/wabSiteChart'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

//importation data Table slise
// ** Table Columns
import { useSelector, useDispatch } from 'react-redux'
import {getTodoAsync, showTodo} from '../redux/ligneOperation'

const Home = () => {

  const [items, setItems] = useState({
    code: "",
    libelle: "",
    value: "",
    produit: ""
})

    const data      = useSelector(showTodo)

    const dispatch  = useDispatch()

    const initFetch = useCallback(() => {
      dispatch(getTodoAsync())
    }, [dispatch])
  
    useEffect(() => {
      initFetch()
    }, [initFetch])

    //recuperation valeur champs formulaire

    const recupFome = (e) => {

      const {name, value} = e.target

      setItems(recupValue => ({
            ...recupValue,
            [name]: value
      }))

    }

  return (
    <div>    
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <BasicHookForm items={items} recupFome={recupFome}/>
        </Col>
        <Col xl='8' md='6' xs='12'>
          <DataTableWithButtons data={data}/>
        </Col>
      </Row> 
      <Row className='match-height'>
        <Col xl='12' md='6' xs='12'>
          <SimpleAreaChart />
        </Col>
      </Row> 
    </div>
  )
}

export default Home
