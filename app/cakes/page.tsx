import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CakeCatalog } from '@/components/cakes/cake-catalog'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'The Collection | Zia Cakes',
  description: 'Explore our handcrafted collection of signature cakes — each composed from single-origin chocolate, Madagascan vanilla, and cultured butter.',
}

export default function CakesPage() {
  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <PageHeader
        eyebrow="The Collection"
        title="Signature"
        accent="Creations"
        description="A curated selection — each cake composed, decorated, and finished by hand. No two are ever quite the same."
      />
      <CakeCatalog />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}
