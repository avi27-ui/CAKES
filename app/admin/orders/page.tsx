'use client'

import { useState } from 'react'
import { Search, Filter, Eye, Phone, Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock order data
const mockOrders = [
  { 
    id: '1', 
    customer: 'Priya Krishnan', 
    phone: '+91 98765 43210',
    cake: 'Black Forest Elegance', 
    flavour: 'Chocolate',
    weight: '1kg',
    date: '2026-04-15', 
    deliveryType: 'Pickup',
    status: 'new', 
    amount: 850,
    message: 'Happy Birthday on the cake please'
  },
  { 
    id: '2', 
    customer: 'Rajesh Menon', 
    phone: '+91 87654 32109',
    cake: 'Red Velvet Royale', 
    flavour: 'Red Velvet',
    weight: '1.5kg',
    date: '2026-04-16', 
    deliveryType: 'Delivery',
    status: 'confirmed', 
    amount: 1400,
    message: 'Anniversary special - add two names'
  },
  { 
    id: '3', 
    customer: 'Anitha Venkatesh', 
    phone: '+91 76543 21098',
    cake: 'Rainbow Wonderland', 
    flavour: 'Mixed Fruit',
    weight: '1kg',
    date: '2026-04-17', 
    deliveryType: 'Pickup',
    status: 'completed', 
    amount: 950,
    message: ''
  },
]

const statusOptions = ['all', 'new', 'confirmed', 'completed']

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.cake.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
    setSelectedOrder(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-gold/20 text-gold-dark'
      case 'confirmed': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-green-100 text-green-700'
      default: return 'bg-muted text-charcoal/60'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 
          className="text-3xl font-semibold text-charcoal"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Orders
        </h1>
        <p 
          className="text-charcoal/60 mt-1"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Manage and track all customer orders.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by customer or cake..."
            className={cn(
              'w-full pl-10 pr-4 py-3 bg-card border border-border',
              'text-charcoal placeholder:text-charcoal/40',
              'focus:outline-none focus:ring-2 focus:ring-gold/50'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-charcoal/40" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={cn(
              'px-4 py-3 bg-card border border-border',
              'text-charcoal',
              'focus:outline-none focus:ring-2 focus:ring-gold/50'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                {['Customer', 'Cake', 'Date', 'Amount', 'Status', 'Actions'].map((header) => (
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
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <p 
                      className="text-sm font-medium text-charcoal"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.customer}
                    </p>
                    <p 
                      className="text-xs text-charcoal/60"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.phone}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p 
                      className="text-sm text-charcoal"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.cake}
                    </p>
                    <p 
                      className="text-xs text-charcoal/60"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.flavour} - {order.weight}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p 
                      className="text-sm text-charcoal"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.date}
                    </p>
                    <p 
                      className="text-xs text-charcoal/60"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.deliveryType}
                    </p>
                  </td>
                  <td 
                    className="px-6 py-4 text-sm font-semibold text-charcoal"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    ₹{order.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className={cn(
                        'px-3 py-1 text-xs tracking-wider uppercase',
                        getStatusColor(order.status)
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 text-charcoal/60 hover:text-gold transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p 
              className="text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              No orders found
            </p>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-charcoal/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card max-w-lg w-full max-h-[90vh] overflow-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 
                className="text-xl font-semibold text-charcoal"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Order Details
              </h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 text-charcoal/60 hover:text-charcoal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <p 
                  className="text-xs tracking-wider uppercase text-gold mb-2"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Customer
                </p>
                <p className="text-lg font-semibold text-charcoal">{selectedOrder.customer}</p>
                <a 
                  href={`tel:${selectedOrder.phone}`}
                  className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-gold mt-1"
                >
                  <Phone className="h-4 w-4" />
                  {selectedOrder.phone}
                </a>
              </div>

              {/* Order Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Cake</p>
                  <p className="text-sm text-charcoal">{selectedOrder.cake}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Flavour</p>
                  <p className="text-sm text-charcoal">{selectedOrder.flavour}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Weight</p>
                  <p className="text-sm text-charcoal">{selectedOrder.weight}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Amount</p>
                  <p className="text-sm font-semibold text-charcoal">₹{selectedOrder.amount}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Date</p>
                  <p className="text-sm text-charcoal">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-1">Delivery</p>
                  <p className="text-sm text-charcoal">{selectedOrder.deliveryType}</p>
                </div>
              </div>

              {/* Special Message */}
              {selectedOrder.message && (
                <div>
                  <p className="text-xs tracking-wider uppercase text-gold mb-2">Special Instructions</p>
                  <p className="text-sm text-charcoal bg-muted p-3">{selectedOrder.message}</p>
                </div>
              )}

              {/* Status Update */}
              <div>
                <p className="text-xs tracking-wider uppercase text-gold mb-3">Update Status</p>
                <div className="flex gap-2">
                  {statusOptions.filter(s => s !== 'all').map((status) => (
                    <button
                      key={status}
                      onClick={() => updateOrderStatus(selectedOrder.id, status)}
                      className={cn(
                        'flex-1 py-2 text-xs tracking-wider uppercase transition-all',
                        selectedOrder.status === status
                          ? 'bg-charcoal text-ivory'
                          : 'bg-muted text-charcoal hover:bg-charcoal/10'
                      )}
                    >
                      {status === selectedOrder.status && <Check className="h-3 w-3 inline mr-1" />}
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
