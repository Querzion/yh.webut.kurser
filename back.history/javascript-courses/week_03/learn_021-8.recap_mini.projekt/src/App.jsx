import React from 'react'
import Header from './components/Header'
import AddCustomerForm from './components/AddCustomerForm'
import CustomerList from './components/CustomerList'

function App() {
  return (
    <>
      <Header title="Customers" />
      <main className="container mx-auto pt-8 space-y-8">
        <AddCustomerForm />
        <CustomerList />
      </main>
    </>
  )
}

export default App
