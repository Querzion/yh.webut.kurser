import React from 'react'
import CustomerListItem from './CustomerListItem'
import { v4 as uuidv4 } from 'uuid';

const CustomerList = () => {

    const [Customers, setCustomers] = React.useState([
        {
            id: uuidv4(),
            name: "Hans Mattin-Lassei"
        }
    ])


  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-10">
                <p className="font-bold text-xl w-[100px]">Id</p>
                <p className="font-bold text-xl">Name</p>
                <p></p>

            </div>
        </div>
        <ul className="space-y-4">
            <CustomerListItem />
        </ul>
    </div>
  )
}

export default CustomerList
