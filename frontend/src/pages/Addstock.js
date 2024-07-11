import { useEffect } from 'react'
import { useAddstocksContext } from '../hooks/useAddstockContext'

//components

import StockDetails from '../components/StockDetails'
import AddStockForm from '../components/AddStockForm'
import { Row, Col, Container } from 'react-bootstrap'
import './style.css'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'

const Addstock = () => {
  const { stocks, dispatch } = useAddstocksContext()

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await fetch('/api/stocks')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_STOCKS', payload: json })
      }
    }

    fetchStocks()
  }, [dispatch])


  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li><NavLink to = {'/'}>Home</NavLink></li>
              <li><NavLink to = {'/Campaign'}>Campaigns</NavLink></li>
              <li><NavLink to = {'/Addstock'}>Add Stock</NavLink></li>
              <li><NavLink to = {'/Discount'}>Discount</NavLink></li>
              <li><NavLink to = {'/Monthlyreport'}>Monthly Report</NavLink></li>
            </ul>
          </Col>
          <Col md={10}style={{ marginLeft: 'auto'}}>container</Col>
        </Row>
      </Container>

      <div className="addstock">
        <div className="stocks">
          {stocks && stocks.map((stock) => (
            <StockDetails key={stock._id} stock={stock} />
          ))}
        </div>
        <div className='sform'>
          <AddStockForm />
        </div>
      </div>
    </Layout>
  )
}
 
export default Addstock 