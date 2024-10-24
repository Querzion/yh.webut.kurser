import React from 'react'

// Här tar funktionen emot head/main-source data för att kunna användas i denna sub-source
const AddCustomerForm = ({ mainSourceAddCustomer }) => {

  // Här skapas ett nytt array
  const [customerName, setCustomerName] = React.useState('')

  // Här skapas en backen metod som hanterar submit knappen och tar innehållet från inputen
  // som är 'customerName' och för det genom mainSourceAddCustomer funktionen.
  const handleSubmit = (e) => {
    e.preventDefault()

    if (customerName.trim() === "") return

    mainSourceAddCustomer(customerName)
    setCustomerName('')
  }

  // Detta är frontend utseendet, den visuella delen som man interagerar med.
  return (
    <form className="flex" onSubmit={handleSubmit}>
        <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} type="text" className="border border-sky-800 flex-1 px-2 py-1 rounded-l-lg" />
        <button className="bg-sky-800 text-white font-semibold px-5 rounded-r-lg hover:bg-sky-900 transition-colors">Add Customer</button>
    </form>
  )
}

export default AddCustomerForm
