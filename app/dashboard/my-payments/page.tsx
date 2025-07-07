import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function PaymentsPage() {
  // Mock data
  const payments = [
    {
      id: '1',
      date: '2023-06-15',
      amount: 299.00,
      type: 'Testing Package',
      status: 'completed',
      invoice: 'INV-2023-06-001'
    },
    {
      id: '2',
      date: '2023-05-28',
      amount: 149.00,
      type: 'Extended Testing',
      status: 'completed',
      invoice: 'INV-2023-05-042'
    },
    {
      id: '3',
      date: '2023-05-10',
      amount: 499.00,
      type: 'Enterprise Plan',
      status: 'refunded',
      invoice: 'INV-2023-05-015'
    }
  ]
  
  return (
    <div className="space-y-6 text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Payment History
        </h2>
        <Button variant="outline" className="gap-2 text-white bg-gray-800 hover:bg-gray-700 border-gray-700">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search payments..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
          />
        </div>
        <Button variant="outline" className="gap-2 text-white bg-gray-800 hover:bg-gray-700 border-gray-700">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="text-left text-sm border-b border-gray-700">
              <th className="pb-3 px-4 text-gray-400">Date</th>
              <th className="pb-3 px-4 text-gray-400">Amount</th>
              <th className="pb-3 px-4 text-gray-400">Type</th>
              <th className="pb-3 px-4 text-gray-400">Status</th>
              <th className="pb-3 px-4 text-gray-400">Invoice</th>
              <th className="pb-3 px-4 text-gray-400"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-800/50">
                <td className="py-4 px-4">{payment.date}</td>
                <td className="py-4 px-4 font-medium">${payment.amount.toFixed(2)}</td>
                <td className="py-4 px-4">{payment.type}</td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    payment.status === 'completed' ? 'bg-green-900 text-green-300' :
                    payment.status === 'refunded' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    {payment.invoice}
                  </a>
                </td>
                <td className="py-4 px-4 text-right">
                  <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-4">
        <p className="text-sm text-gray-400">Showing 1 to 3 of 3 entries</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-white bg-gray-800 hover:bg-gray-700 border-gray-700" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="text-white bg-gray-800 hover:bg-gray-700 border-gray-700" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}