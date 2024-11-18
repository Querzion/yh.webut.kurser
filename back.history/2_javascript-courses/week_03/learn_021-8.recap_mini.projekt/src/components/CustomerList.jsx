import React from 'react'
import CustomerListItem from './CustomerListItem'

const CustomerList = ({ mainSourceCustomers, feedToSubSourceDeleteCustomer }) => {
    // Detta är boxen som varje item hamnar i och över alla items är detta utseende.
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
                {
                    mainSourceCustomers.length > 0 && mainSourceCustomers.map(customer => (
                        <CustomerListItem key={customer.id} subSourceCustomer={customer} fedFromMainSourceDeleteCustomer={feedToSubSourceDeleteCustomer} />
                    ))
                }
                {
                    mainSourceCustomers.length <= 0 && <p className="font-semibold text-lg">No customers to show.</p>
                }
            </ul>
        </div>
    )
}

export default CustomerList
