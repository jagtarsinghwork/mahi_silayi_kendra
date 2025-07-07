import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function TestersPage() {
  // Mock data
  const testers = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      status: 'active',
      device: 'iPhone 13',
      sessions: 12,
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria@example.com',
      status: 'pending',
      device: 'Pixel 6',
      sessions: 0,
      lastActive: 'Not started'
    },
    {
      id: '3',
      name: 'James Wilson',
      email: 'james@example.com',
      status: 'completed',
      device: 'Galaxy S22',
      sessions: 8,
      lastActive: '3 days ago'
    }
  ]
  return (
    <div className="space-y-6 text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Testers
        </h2>
        <Button className="gap-2 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white">
          <Plus className="h-4 w-4" />
          Invite Testers
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search testers..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
          />
        </div>
        <Button variant="outline" className="gap-2 text-white bg-gray-800 hover:bg-gray-700 border-gray-700">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Testers List */}
      <div className="grid grid-cols-1 gap-4">
        {testers.map((tester) => (
          <Card key={tester.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                    {tester.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-white">{tester.name}</h3>
                      <p className="text-sm text-gray-400">{tester.email}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tester.status === 'active' ? 'bg-blue-900 text-blue-300' :
                      tester.status === 'pending' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-green-900 text-green-300'
                    }`}>
                      {tester.status}
                    </span>
                  </div>

                  {/* Tester Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-4 text-white">
                    <div>
                      <p className="text-sm text-gray-400">Device</p>
                      <p className="font-medium">{tester.device}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Sessions</p>
                      <p className="font-medium">{tester.sessions}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Last Active</p>
                      <p className="font-medium">{tester.lastActive}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                  Session Logs
                </Button>
                {tester.status === 'pending' && (
                  <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                    Resend Invite
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}