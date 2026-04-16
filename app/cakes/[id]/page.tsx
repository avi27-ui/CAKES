import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CakeDetail } from '@/components/cakes/cake-detail'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { cakes } from '@/lib/data'

export async function generateStaticParams() {
  return cakes.map((cake) => ({
    id: cake.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const cake = cakes.find((c) => c.id === id)
  
  if (!cake) {
    return {
      title: 'Cake Not Found | Zia Cakes',
    }
  }

  return {
    title: `${cake.name} | Zia Cakes`,
    description: cake.description,
  }
}

export default async function CakeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const cake = cakes.find((c) => c.id === id)

  if (!cake) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CakeDetail cake={cake} />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}
