import React from 'react'
import Header from './components/Header'
import AddContactForm from './components/AddContactForm'
import ContactsList from './components/ContactsList'

function App() {
  return (
    <>
      <Header title="Contacts" />
      <main className="container mx-auto pt-8 space-y-8">
        <AddContactForm />
        <ContactsList />
      </main>
    </>
  )
}

export default App
