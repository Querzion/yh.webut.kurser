import React from 'react'

const CustomerListItem = ({ subSourceCustomer, fedFromMainSourceDeleteCustomer }) => {

  

  return (
    <li className="flex justify-between items-center">
        <div className="flex items-center gap-10">
            <p className="w-[100px]">{subSourceCustomer.id.slice(0, 6)}</p>
            <p className="font-semibold text-lg">{subSourceCustomer.name}</p>
        </div>
        <button onClick={() => fedFromMainSourceDeleteCustomer(subSourceCustomer.id)} className="bg-red-800 text-white px-5 py-1 rounded-lg hover:bg-red-900 transition-colors">Remove Customer</button>
    </li>
  )
}
export default CustomerListItem
