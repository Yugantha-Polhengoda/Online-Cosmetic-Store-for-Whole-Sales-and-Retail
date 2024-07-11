/*import React from 'react'
import DiscountForm from '../components/DiscountForm'
import { Row, Col, Container } from 'react-bootstrap'
import './style.css'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'

/**
* @author
* @function Adddiscount
**/

/*export const Adddiscount = (props) => {
  return(
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li><NavLink to = {'/'}>Home</NavLink></li>
              <li><NavLink to = {'/Addstock'}>Add Stock</NavLink></li>
              <li><NavLink to = {'/Adddiscount'}>Add a Discount</NavLink></li>
              <li><NavLink to = {'/Monthlyreport'}>Monthly Report</NavLink></li>
            </ul>
          </Col>
          <Col md={10}style={{ marginLeft: 'auto'}}>container</Col>
        </Row>
      </Container>
      <div className='dform'>
          <DiscountForm />
        </div>
    </Layout>
   )

 }

 export default Adddiscount







/*import { useEffect } from 'react'
import { useAdddiscountsContext } from '../hooks/useAdddiscountContext'

//components

import DiscountDetails from '../components/DiscountDetails'
import AddDiscountForm from '../components/AddDiscountForm'
import { Row, Col, Container } from 'react-bootstrap'
import './style.css'
import { NavLink } from 'react-router-dom'
import Layout from '../components/Layout'

const Adddiscount = () => {
  const { discounts, dispatch } = useAdddiscountsContext()

  useEffect(() => {
    const fetchDiscounts = async () => {
      const response = await fetch('/api/discounts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_DISCOUNTS', payload: json })
      }
    }

    fetchDiscounts()
  }, [dispatch])


  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li><NavLink to = {'/'}>Home</NavLink></li>
              <li><NavLink to = {'/Addstock'}>Add Stock</NavLink></li>
              <li><NavLink to = {'/Adddiscount'}>Add a Discount</NavLink></li>
              <li><NavLink to = {'/Monthlyreport'}>Monthly Report</NavLink></li>
            </ul>
          </Col>
          <Col md={10}style={{ marginLeft: 'auto'}}>container</Col>
        </Row>
      </Container>

      <div className="adddiscount">
        <div className="discounts">
          {discounts && discounts.map((discount) => (
            <DiscountDetails key={discount._id} discount={discount} />
          ))}
        </div>
        <div className='dform'>
          <AddDiscountForm />
        </div>
      </div>
    </Layout>
  )
}
 
export default Adddiscount*/