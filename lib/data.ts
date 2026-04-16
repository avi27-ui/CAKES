export interface Cake {
  id: string
  name: string
  description: string
  shortDescription: string
  images: string[]
  category: 'birthday' | 'wedding' | 'anniversary' | 'kids' | 'premium'
  flavours: string[]
  weights: { kg: number; price: number }[]
  tags: ('bestseller' | 'premium' | 'new')[]
  isAvailable: boolean
}

export interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
  occasion: string
  image?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

export const cakes: Cake[] = [
  {
    id: 'black-forest-elegance',
    name: 'Black Forest Elegance',
    description: 'A timeless masterpiece of rich chocolate sponge layered with Chantilly cream and dark cherries, finished with delicate chocolate shavings. Each bite transports you to the heart of the Black Forest.',
    shortDescription: 'Rich chocolate layers with cream and cherries',
    images: ['/images/cakes/black-forest.jpg'],
    category: 'premium',
    flavours: ['Chocolate', 'Cherry'],
    weights: [
      { kg: 0.5, price: 450 },
      { kg: 1, price: 850 },
      { kg: 1.5, price: 1250 },
      { kg: 2, price: 1600 },
    ],
    tags: ['bestseller'],
    isAvailable: true,
  },
  {
    id: 'vanilla-dream',
    name: 'Vanilla Dream',
    description: 'Pure Madagascar vanilla infused into our signature butter sponge, draped in silken buttercream and adorned with edible gold leaf. Simple elegance at its finest.',
    shortDescription: 'Madagascar vanilla with gold accents',
    images: ['/images/cakes/vanilla-dream.jpg'],
    category: 'birthday',
    flavours: ['Vanilla', 'Butter'],
    weights: [
      { kg: 0.5, price: 400 },
      { kg: 1, price: 750 },
      { kg: 1.5, price: 1100 },
      { kg: 2, price: 1450 },
    ],
    tags: ['bestseller'],
    isAvailable: true,
  },
  {
    id: 'red-velvet-royale',
    name: 'Red Velvet Royale',
    description: 'The queen of cakes - velvety crimson layers embraced by our house-made cream cheese frosting, crowned with white chocolate curls and a touch of gold.',
    shortDescription: 'Crimson velvet with cream cheese frosting',
    images: ['/images/cakes/red-velvet.jpg'],
    category: 'anniversary',
    flavours: ['Red Velvet', 'Cream Cheese'],
    weights: [
      { kg: 0.5, price: 500 },
      { kg: 1, price: 950 },
      { kg: 1.5, price: 1400 },
      { kg: 2, price: 1800 },
    ],
    tags: ['premium'],
    isAvailable: true,
  },
  {
    id: 'chocolate-truffle-tower',
    name: 'Chocolate Truffle Tower',
    description: 'For the true chocolate connoisseur - Belgian dark chocolate ganache cascading over moist chocolate sponge, finished with hand-rolled truffles.',
    shortDescription: 'Belgian chocolate ganache perfection',
    images: ['/images/cakes/truffle-tower.jpg'],
    category: 'premium',
    flavours: ['Dark Chocolate', 'Truffle'],
    weights: [
      { kg: 0.5, price: 550 },
      { kg: 1, price: 1050 },
      { kg: 1.5, price: 1550 },
      { kg: 2, price: 2000 },
    ],
    tags: ['premium', 'new'],
    isAvailable: true,
  },
  {
    id: 'strawberry-blush',
    name: 'Strawberry Blush',
    description: 'Fresh strawberries folded into airy sponge and whipped cream, decorated with whole berries and a delicate rose petal finish.',
    shortDescription: 'Fresh strawberries with rose petals',
    images: ['/images/cakes/strawberry-blush.jpg'],
    category: 'birthday',
    flavours: ['Strawberry', 'Vanilla'],
    weights: [
      { kg: 0.5, price: 480 },
      { kg: 1, price: 900 },
      { kg: 1.5, price: 1350 },
      { kg: 2, price: 1750 },
    ],
    tags: ['new'],
    isAvailable: true,
  },
  {
    id: 'butterscotch-caramel',
    name: 'Butterscotch Caramel',
    description: 'Golden butterscotch notes dance with salted caramel in this indulgent creation, topped with caramelized nuts and drizzled with house-made sauce.',
    shortDescription: 'Butterscotch with salted caramel',
    images: ['/images/cakes/butterscotch.jpg'],
    category: 'birthday',
    flavours: ['Butterscotch', 'Caramel'],
    weights: [
      { kg: 0.5, price: 420 },
      { kg: 1, price: 800 },
      { kg: 1.5, price: 1180 },
      { kg: 2, price: 1550 },
    ],
    tags: ['bestseller'],
    isAvailable: true,
  },
  {
    id: 'rainbow-wonderland',
    name: 'Rainbow Wonderland',
    description: 'A magical six-layer rainbow cake that brings joy to every celebration. Each colorful layer is a different fruit flavor, wrapped in cloud-like vanilla frosting.',
    shortDescription: 'Six colorful fruit-flavored layers',
    images: ['/images/cakes/rainbow.jpg'],
    category: 'kids',
    flavours: ['Mixed Fruit', 'Vanilla'],
    weights: [
      { kg: 1, price: 950 },
      { kg: 1.5, price: 1400 },
      { kg: 2, price: 1850 },
    ],
    tags: ['bestseller'],
    isAvailable: true,
  },
  {
    id: 'wedding-elegance',
    name: 'Wedding Elegance',
    description: 'A three-tier masterpiece designed for your most special day. Choose your flavors and let us create an edible work of art adorned with sugar flowers and gold accents.',
    shortDescription: 'Custom three-tier wedding creation',
    images: ['/images/cakes/wedding.jpg'],
    category: 'wedding',
    flavours: ['Vanilla', 'Chocolate', 'Red Velvet', 'Butterscotch'],
    weights: [
      { kg: 3, price: 4500 },
      { kg: 5, price: 7000 },
      { kg: 7, price: 9500 },
    ],
    tags: ['premium'],
    isAvailable: true,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Krishnan',
    content: 'The wedding cake was absolutely breathtaking. Every guest asked where we ordered it from. Zia Cakes made our special day even more memorable.',
    rating: 5,
    occasion: 'Wedding',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    content: 'Ordered the Chocolate Truffle Tower for my wife\'s birthday. The taste was divine and the presentation was like something from a luxury patisserie.',
    rating: 5,
    occasion: 'Birthday',
  },
  {
    id: '3',
    name: 'Anitha Venkatesh',
    content: 'My daughter was thrilled with her Rainbow Wonderland cake. The colors were vibrant and the taste was incredibly fresh. Thank you for making her day magical!',
    rating: 5,
    occasion: 'Kids Birthday',
  },
]

export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/gallery/gallery-1.jpg', alt: 'Elegant wedding cake', category: 'Wedding' },
  { id: '2', src: '/images/gallery/gallery-2.jpg', alt: 'Chocolate masterpiece', category: 'Premium' },
  { id: '3', src: '/images/gallery/gallery-3.jpg', alt: 'Birthday celebration', category: 'Birthday' },
  { id: '4', src: '/images/gallery/gallery-4.jpg', alt: 'Custom design', category: 'Custom' },
  { id: '5', src: '/images/gallery/gallery-5.jpg', alt: 'Anniversary special', category: 'Anniversary' },
  { id: '6', src: '/images/gallery/gallery-6.jpg', alt: 'Kids party cake', category: 'Kids' },
]

export const categories = [
  { id: 'all', name: 'All Creations' },
  { id: 'birthday', name: 'Birthday' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'anniversary', name: 'Anniversary' },
  { id: 'kids', name: 'Kids Special' },
  { id: 'premium', name: 'Premium Collection' },
]

export const brandInfo = {
  name: 'Zia Cakes',
  tagline: 'Artisanal Cakes Crafted with Passion',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@ziacakes.com',
  address: 'Virudhachalam, Tamil Nadu',
  instagram: '@ziacakes',
  maxOrdersPerDay: 8,
}
