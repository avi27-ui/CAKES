'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Cake, 
  ShoppingBag, 
  Image as ImageIcon, 
  Calendar, 
  Settings, 
  Menu,
  X,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/cakes', label: 'Cakes', icon: Cake },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/availability', label: 'Availability', icon: Calendar },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-sidebar flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          'fixed lg:static inset-y-0 left-0 z-50',
          'w-64 bg-sidebar border-r border-sidebar-border',
          'transition-transform duration-300',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/admin" className="block">
              <h1 
                className="text-2xl font-semibold text-sidebar-foreground"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                ZIA
              </h1>
              <p 
                className="text-[10px] tracking-[0.3em] uppercase text-sidebar-primary"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Admin Panel
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/admin' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive 
                      ? 'bg-sidebar-accent text-sidebar-primary'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Back to site */}
          <div className="p-4 border-t border-sidebar-border">
            <Link
              href="/"
              className={cn(
                'flex items-center justify-center gap-2 w-full py-3',
                'text-sm text-sidebar-foreground/70 hover:text-sidebar-primary',
                'border border-sidebar-border hover:border-sidebar-primary',
                'rounded-lg transition-colors'
              )}
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              View Live Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-16 bg-sidebar border-b border-sidebar-border flex items-center px-4 lg:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-sidebar-foreground hover:text-sidebar-primary"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Mobile close button when sidebar is open */}
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-sidebar rounded-full text-sidebar-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}
