import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Download, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function MyAppsPage() {
  // Mock data - replace with your actual data fetching
  const apps = [
    {
      id: '1',
      name: 'TestFire Demo',
      packageName: 'com.testfire.demo',
      status: 'testing',
      installs: 42,
      daysLeft: 7,
      version: '1.0.2'
    },
    {
      id: '2',
      name: 'Ecommerce App',
      packageName: 'com.example.shop',
      status: 'approved',
      installs: 128,
      daysLeft: 0,
      version: '2.1.0'
    },
    {
      id: '3',
      name: 'Fitness Tracker',
      packageName: 'com.fitness.tracker',
      status: 'pending',
      installs: 0,
      daysLeft: 14,
      version: '0.9.5'
    }
  ]
  return (
    <div className="space-y-6 text-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Applications
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-white bg-gray-800 hover:bg-gray-700 border-gray-700">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white">
            <Plus className="h-4 w-4" />
            New Application
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search apps..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-500"
          />
        </div>
        <Button variant="outline" className="gap-2 text-white bg-gray-800 hover:bg-gray-700 border-gray-700">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Apps List */}
      <div className="grid grid-cols-1 gap-4">
        {apps.map((app) => (
          <Card key={app.id} className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-white">{app.name}</h3>
                  <p className="text-sm text-gray-400">{app.packageName}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  app.status === 'approved' ? 'bg-green-900 text-green-300' :
                  app.status === 'testing' ? 'bg-blue-900 text-blue-300' :
                  'bg-yellow-900 text-yellow-300'
                }`}>
                  {app.status}
                </span>
              </div>

              {/* App Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-4 text-white">
                <div>
                  <p className="text-sm text-gray-400">Installs</p>
                  <p className="font-medium">{app.installs}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Version</p>
                  <p className="font-medium">{app.version}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">
                    {app.status === 'testing' ? 'Days Left' : 'Status'}
                  </p>
                  <p className="font-medium">
                    {app.status === 'testing' ? `${app.daysLeft} days` : 'Live'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                  Analytics
                </Button>
                {app.status === 'testing' && (
                  <Button variant="outline" size="sm" className="text-white bg-gray-700 hover:bg-gray-600 border-gray-600">
                    Extend Testing
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