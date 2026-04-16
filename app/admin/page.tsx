import { Cake, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react'
import { cakes, brandInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

// Mock order data (would come from database in production)
const recentOrders = [
  { id: '1', customer: 'Priya K.', cake: 'Black Forest Elegance', date: '2026-04-15', status: 'Confirmed', amount: 850 },
  { id: '2', customer: 'Rajesh M.', cake: 'Red Velvet Royale', date: '2026-04-16', status: 'New', amount: 950 },
  { id: '3', customer: 'Anitha V.', cake: 'Rainbow Wonderland', date: '2026-04-17', status: 'Completed', amount: 950 },
]

const stats = [
  { label: 'Total Cakes', value: cakes.length, icon: Cake, change: '+2 this month' },
  { label: 'Pending Orders', value: 3, icon: ShoppingBag, change: '2 new today' },
  { label: 'Revenue (Month)', value: '₹24,500', icon: DollarSign, change: '+12% vs last month' },
  { label: 'Max Orders/Day', value: brandInfo.maxOrdersPerDay, icon: TrendingUp, change: 'Current limit' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 
          className="text-3xl font-semibold text-charcoal"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Dashboard
        </h1>
        <p 
          className="text-charcoal/60 mt-1"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Welcome back! Here&apos;s an overview of your bakery.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="bg-card p-6 border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gold/10 rounded-lg">
                <stat.icon className="h-5 w-5 text-gold" />
              </div>
            </div>
            <p 
              className="text-3xl font-semibold text-charcoal"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {stat.value}
            </p>
            <p 
              className="text-sm text-charcoal/60 mt-1"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {stat.label}
            </p>
            <p 
              className="text-xs text-gold mt-2"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-card border border-border">
        <div className="p-6 border-b border-border">
          <h2 
            className="text-xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Recent Orders
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                {['Customer', 'Cake', 'Date', 'Status', 'Amount'].map((header) => (
                  <th 
                    key={header}
                    className="px-6 py-3 text-left text-xs tracking-wider uppercase text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/50 transition-colors">
                  <td 
                    className="px-6 py-4 text-sm text-charcoal"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {order.customer}
                  </td>
                  <td 
                    className="px-6 py-4 text-sm text-charcoal"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {order.cake}
                  </td>
                  <td 
                    className="px-6 py-4 text-sm text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {order.date}
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className={cn(
                        'px-3 py-1 text-xs tracking-wider uppercase',
                        order.status === 'New' && 'bg-gold/20 text-gold-dark',
                        order.status === 'Confirmed' && 'bg-blue-100 text-blue-700',
                        order.status === 'Completed' && 'bg-green-100 text-green-700'
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td 
                    className="px-6 py-4 text-sm font-semibold text-charcoal"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    ₹{order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { href: '/admin/cakes', label: 'Manage Cakes', desc: 'Add, edit or remove cakes' },
          { href: '/admin/orders', label: 'View Orders', desc: 'Check and update order status' },
          { href: '/admin/availability', label: 'Set Availability', desc: 'Block dates or set limits' },
        ].map((action) => (
          <a
            key={action.href}
            href={action.href}
            className={cn(
              'p-6 bg-card border border-border',
              'hover:border-gold transition-colors group'
            )}
          >
            <h3 
              className="text-lg font-semibold text-charcoal group-hover:text-gold transition-colors"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {action.label}
            </h3>
            <p 
              className="text-sm text-charcoal/60 mt-1"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {action.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
