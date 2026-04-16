import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'The Gallery | Zia Cakes',
  description: 'A visual archive of our finest creations — birthdays, weddings, anniversaries, and quieter moments.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <PageHeader
        eyebrow="Archive"
        title="The"
        accent="Gallery"
        description="A visual record of moments we have had the privilege of composing. Each frame, one celebration."
      />
      <GalleryGrid />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}
