import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'

function App() {

  // Lift state - Förflyttat data array uppåt, för att kunna arbeta med det genom flera sub-sources.
  const [customers, setCustomers] = React.useState([
    {
        id: uuidv4(),
        name: "Hans Mattin-Lassei"
    },
    {
        id: uuidv4(),
        name: "Tommy Mattin-Lassei"
    },
  ])

  // Här adderas en ny customer, och ett nytt array skapas, som även använder föregående arrays data
  const addCustomer = (customerName) => {
    setCustomers(state => {
      return [...state, {id: uuidv4(), name: customerName}]
    })
  }

  // här skapas en funktion för deleteCustomer knappen, som sedan filtrerar bort det som inte tagits bort, 
  // så att endast det som ska tas bort tas bort
  const deleteCustomer = (id) => {
    setCustomers(state => {
      return state.filter(customer => customer.id !== id)
    })
  } 

  return (
    <>
      <Header title="Customers" />
      <main className="container mx-auto pt-8 space-y-8">
        {/* För att kunna använda add customer, så behöver det förflyttas ner till sub-sourcen AddCustomerForm */}
        <AddCustomerForm mainSourceAddCustomer={addCustomer} />
        {/* För att kunna använda customer arrayen, så måste de föras ner till nästa sub-source(child) CustomerList */}
        <CustomerList mainSourceCustomers={customers} feedToSubSourceDeleteCustomer={deleteCustomer} />
      </main>
    </>
  )
}

export default App
