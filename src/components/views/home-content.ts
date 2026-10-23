// Home page copy and data. Base is the approved Phase-2 index.html. Original Home sections that
// index.html does not have (video, gallery, mobile app, receipts, about, testimonials) keep their old copy.
// Wording that the files in `rebrand resources/website-updates/` set must change there first.

export type Quote = { text: string; who: string }
export type Card = { title: string; description: string }

export const hero = {
  kicker: "Your business in a box",
  titleLine1: "Run your whole business",
  titleLine2: "from one hand.",
  lede: "Bleaum puts POS, invoicing, inventory, ordering, delivery and AI on one real-time platform.",
  primaryCta: "Book a demo",
  secondaryCta: "See the product",
  secondaryHref: "/#products",
  pos: {
    tabs: ["Process", "Orders", "Returns", "Notes"],
    items: [
      { name: "Canvas Tote", price: "$24.00" },
      { name: "Ceramic Mug", price: "$14.00" },
      { name: "Leather Wallet", price: "$48.00", low: true },
      { name: "Candle Set", price: "$18.00" },
    ],
    cart: { label: "2 items in cart", total: "$38.00" },
    alt: "Sample Bleaum POS screen with four items and a cart total of $38.00",
  },
}

export const products = {
  title: "Everything the counter needs. Nothing it does not.",
  subtitle: "Nine products share one real-time record, so a sale, a transfer and a delivery all agree.",
  linkText: "Learn more",
  items: [
    { title: "Point of Sale", description: "Fast checkout with live inventory, offline mode and mixed payment types.", href: "/grow/point-of-sale" },
    { title: "Payments", description: "Take card and ACH payments in the same flow as the sale.", href: "/grow/payments" },
    { title: "Delivery", description: "Route planning, ID checks, proof of delivery and live driver tracking.", href: "/grow/delivery" },
    { title: "Online store", description: "Your own branded iOS, Android and web storefront, tied to your stock.", href: "/grow/ecommerce" },
    { title: "Inventory", description: "Live counts, transfers between stores and low-stock alerts.", href: "/operations/inventory-management" },
    { title: "Compliance", description: "Audit trails, staff permissions and state tracking and reporting integrations.", href: "/operations/automated-compliance" },
    { title: "Reporting & analytics", description: "Sales, margin and stock across every location in one place.", href: "/operations/reporting-analytics" },
    { title: "Marketing & loyalty", description: "Rewards, coupons and messages that bring regulars back.", href: "/grow/marketing" },
    { title: "Integrations", description: "Connect accounting, analytics and the systems your state requires.", href: "/operations/integrations" },
  ],
}

export const inventory = {
  kicker: "Inventory",
  title: "Know what is on the shelf, in every store.",
  text: "Counts update with every sale, return and transfer, and low-stock alerts reach you before the shelf is empty.",
  bullets: [
    "Counts sync across locations as they change",
    "Transfers between stores leave a clear record",
    "Low-stock alerts for each item",
    "An audit trail for every adjustment",
  ],
  more: { text: "Explore inventory", href: "/operations/inventory-management" },
  quote: { text: "With Bleaum, we don't wait until close to count—we count while we sell. It's a game changer.", who: "AJ, Happy Root" },
  visAlt: "Sample inventory table: Leather Wallet is low on stock",
  visHead: ["Inventory", "Main street store"],
  columns: ["Item", "On hand", "Status"],
  rows: [
    { name: "Canvas Tote", onHand: 42 },
    { name: "Ceramic Mug", onHand: 18 },
    { name: "Leather Wallet", onHand: 3, low: true },
    { name: "Candle Set", onHand: 27 },
  ],
  inStock: "In stock",
  lowStock: "Low stock",
}

export const delivery = {
  kicker: "Delivery",
  title: "From order to doorstep, on one route.",
  text: "Plan stops, check ID at the door, capture a signature and let customers follow the driver.",
  bullets: ["Route planning across every stop", "Digital ID check and signature capture", "Live driver tracking for you and your customer"],
  more: { text: "Explore delivery", href: "/grow/delivery" },
  quote: { text: "We went from chaos to clockwork overnight.", who: "Collin, Park Social" },
  visAlt: "Sample delivery route with four steps",
  visHead: ["Route 12", "4 stops"],
  steps: [
    { title: "Order packed", text: "Ready for pickup at 2:10 pm" },
    { title: "Driver assigned", text: "Route planned across four stops" },
    { title: "ID checked", text: "Signature captured at the door" },
    { title: "Delivered", text: "Customer notified" },
  ],
}

export const mobile = {
  kicker: "Online store",
  title: "Your Branded Mobile App",
  text: "Launch a custom storefront without the custom development cost. Get your own iOS & Android app in days, not months.",
  bullets: [
    "Live inventory synchronization",
    "Secure in-app payment processing",
    "Real-time delivery tracking",
    "Custom branding & design",
    "Push notification campaigns",
    "Customer loyalty programs",
  ],
  quote: { text: "It's like having our own app development team—without the headache or the cost.", who: "Hugo, Go Green" },
  native: { title: "Native Mobile Experience", text: "iOS & Android ready with app store deployment" },
  items: [
    { title: "Seamless Shopping", text: "Cart, checkout, and order tracking" },
    { title: "Secure Payments", text: "Multiple payment methods supported" },
    { title: "Smart Notifications", text: "Order updates and promotions" },
  ],
}

export const receipts = {
  kicker: "Receipts",
  title: "Receipts That Just Work",
  text: "Print, text, or email. Itemized, branded, tax-compliant. Your customers choose how they want their receipt.",
  bullets: [
    "Fully synced with POS & inventory systems",
    "Custom branding and logo integration",
    "Automatic tax compliance calculations",
    "Multiple delivery method options",
    "Digital receipt storage and retrieval",
  ],
  quote: { text: "Customers love choosing how they get their receipts. It's the little things that make a big difference.", who: "Cam, Project Releaf" },
  system: { title: "Smart Receipt System", text: "Print, text, or email automatically based on customer preference" },
  optionsTitle: "Receipt Delivery Options:",
  options: [
    { big: "Print", small: "Thermal printer" },
    { big: "Text", small: "SMS delivery" },
    { big: "Email", small: "Digital copy" },
  ],
  complianceTitle: "Compliance Features:",
  compliance: ["Tax calculations included", "Regulatory compliance built-in", "Custom branding options"],
}

export const video = {
  title: "See Bleaum in Action",
  subtitle: "Watch how we transform retail operations from chaos to clockwork",
  poster: "/marketing/IMAGE.png",
  caption: "Platform Demo",
  captionText: "See how Bleaum streamlines retail operations",
}

export const gallery = {
  title: "Explore the platform",
  subtitle: "See what you can run with Bleaum, from point of sale to delivery",
  items: [
    { src: "/marketing/2.png", alt: "pos", title: "All-in-One POS System", description: "Complete point-of-sale solution", href: "/grow/point-of-sale" },
    { src: "/marketing/delivery.png", alt: "Last Mile Delivery Solutions", title: "Last Mile Delivery", description: "Smart routing & tracking", href: "/grow/delivery" },
    { src: "/marketing/bleaumpay.png", alt: "Bleaum Pay", title: "Bleaum Pay", description: "One Payment Platform. Fully Covered", href: "/grow/payments" },
    { src: "/marketing/3.png", alt: "Branded Mobile App Screenshot", title: "Branded Mobile App", description: "iOS & Android app", href: "/grow/ecommerce" },
    { src: "/marketing/5.png", alt: "Human Support Staff Assisting Customer", title: "Human Support", description: "Real people, real solutions", href: "/support" },
    { src: "/marketing/realtime.png", alt: "Multi-Location Management", title: "Multi-Location Ready", description: "Scale across multiple locations", href: "/grow/point-of-sale" },
    { src: "/marketing/7.png", alt: "Secure & Compliant Platform", title: "Secure & Compliant", description: "Enterprise-grade security", href: "/operations/automated-compliance" },
    { src: "/marketing/4.png", alt: "Smart Receipts Drag and Drop Graphic", title: "Smart Receipts", description: "Dynamic receipts for every order", href: "/grow/point-of-sale" },
    { src: "/marketing/inventory.png", alt: "Real-Time Inventory Tracking", title: "Real-Time Inventory", description: "Live inventory management", href: "/operations/inventory-management" },
  ],
}

export const why = {
  title: "Why teams choose Bleaum",
  subtitle: "Plain reasons, not big numbers.",
  items: [
    { title: "Quick to set up", description: "A guided checklist takes a new store from first login to first sale." },
    { title: "One system, every location", description: "Run one store or many from the same real-time record." },
    { title: "Works with what you have", description: "Use the counter computer, tablet and phone you already own." },
    { title: "Real people when you need help", description: "Chat or open a ticket and reach a person, with a Help Center behind it." },
    { title: "Built for regulated retail", description: "Compliance tools are part of the product, not an add-on." },
    { title: "Clear pricing", description: "Know what you pay before you sign." },
  ] satisfies Card[],
}

export const about = {
  title: "Built by Operators",
  subtitle: "We've been in the trenches. We know the pain points. That's why we built something different.",
  quote: "Every feature we build comes from real problems we've solved in the field. That's what makes Bleaum different.",
  founder: { name: "Antonio Panella", role: "Founder & CEO", photo: "/marketing/6.png" },
  values: [
    { title: "Our Mission", description: "Empower small businesses with enterprise-grade tools that actually work" },
    { title: "Our Vision", description: "A world where running a retail business is simple, profitable, and stress-free" },
    { title: "Our Values", description: "Transparency, reliability, and genuine care for our customers' success" },
  ] satisfies Card[],
  stats: [
    { number: "300+", label: "Retailers" },
    { number: "Live", label: "Inventory" },
    { number: "1", label: "Platform" },
    { number: "24/7", label: "Support" },
  ],
}

export const trust = {
  kicker: "Trust",
  title: "Built for regulated retail.",
  text: "We started where compliance, efficiency and precision are everything. Today the platform supports a wide range of regulated and fast-moving industries.",
  pillars: [
    { title: "State tracking and reporting", description: "Integrations send the reports your state requires, so your counts and theirs match." },
    { title: "Audit trails and permissions", description: "Every change is logged. Give each person only the access they need." },
    { title: "Encrypted and backed up", description: "Data is encrypted in transit and at rest, and backed up on a schedule." },
  ] satisfies Card[],
  // Names and cards follow website-updates #24.
  industries: [
    { title: "Retail & Specialty Stores", description: "POS, inventory and ordering for stores of any size" },
    { title: "Wholesale & Distribution", description: "Orders, inventory and delivery in one place" },
    { title: "Regulated Markets", description: "Detailed tracking and reporting for regulated products" },
  ] satisfies Card[],
}

export const testimonials = {
  title: "What Our Customers Say",
  subtitle: "Real stories from real retailers who've transformed their business with Bleaum",
  items: [
    { quote: "Bleaum cut our inventory time from 4 hours to 30 minutes. Our team actually enjoys using it now!", name: "Perry Jones", company: "Centered by Design", location: "Tulsa, Oklahoma", rating: 5 },
    { quote: "The mobile app launched our online presence overnight. Sales increased 40% in the first month.", name: "Andrew H", company: "Go Green", location: "Ontario, Canada", rating: 5 },
    { quote: "We switched from a big-name POS and never looked back. Bleaum just works—no more headaches.", name: "AJ", company: "Happy Root", location: "Oklahoma City, Oklahoma", rating: 5 },
    { quote: "The compliance features saved us during our last audit. Everything was organized and ready to go.", name: "Angelica", company: "Park Social", location: "Alameda, California", rating: 5 },
  ],
}

export const contact = {
  title: "Already a customer? We are here.",
  text: "Chat, call or email our team, or open the Help Center for guides and the setup checklist.",
  primary: { text: "Contact support", href: "/support" },
  secondary: { text: "Open the Help Center", href: "/help/guide" },
}

export const cta = {
  title: "See Bleaum in your store.",
  text: "Book a demo and we will walk through your setup with you.",
  primary: "Book a demo",
  secondary: { text: "Talk to support", href: "/support" },
}

// Header and footer links from index.html, pointed at the real routes.
export const nav = {
  tagline: "Your business in a box.",
  utility: [
    { text: "Help Center", href: "/help/guide" },
    { text: "Support", href: "/support" },
  ],
  product: [
    {
      heading: "Grow your business",
      links: [
        { title: "Point of Sale", text: "Retail POS for any size operation", href: "/grow/point-of-sale" },
        { title: "Online store", text: "Branded mobile apps and web storefronts", href: "/grow/ecommerce" },
        { title: "Marketing & loyalty", text: "Reward regulars and bring them back", href: "/grow/marketing" },
        { title: "Payments", text: "Take card and ACH payments at the counter", href: "/grow/payments" },
        { title: "Delivery", text: "Routes, ID checks and live tracking", href: "/grow/delivery" },
      ],
    },
    {
      heading: "Simplify operations",
      links: [
        { title: "Reporting & analytics", text: "Sales, margin and stock in one place", href: "/operations/reporting-analytics" },
        { title: "Compliance", text: "Built-in tools for regulated retail", href: "/operations/automated-compliance" },
        { title: "Inventory", text: "Live counts and low-stock alerts", href: "/operations/inventory-management" },
        { title: "Integrations", text: "Partners that help you run your business", href: "/operations/integrations" },
        { title: "All products", text: "See everything Bleaum does", href: "/#products" },
      ],
    },
  ],
  industries: { text: "Industries", href: "/resources/industries" },
  resources: [
    { title: "Blog", text: "Insights, news and updates", href: "/blog" },
    { title: "Help Center", text: "Guides and setup help for every product", href: "/help/guide" },
    { title: "SOPs", text: "Standard operating procedures", href: "/resources/sops" },
    { title: "Refer a business", text: "Earn rewards for referrals", href: "/resources/refer" },
  ],
  company: [
    { title: "About", text: "Who we are and why we build Bleaum", href: "/company/about" },
    { title: "Careers", text: "Join our team", href: "/company/careers" },
    { title: "Support", text: "Chat, call or email our team", href: "/support" },
  ],
  demo: "Book a demo",
}

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { text: "Point of Sale", href: "/grow/point-of-sale" },
        { text: "Online store", href: "/grow/ecommerce" },
        { text: "Payments", href: "/grow/payments" },
        { text: "Delivery", href: "/grow/delivery" },
        { text: "Integrations", href: "/operations/integrations" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/company/about" },
        { text: "Careers", href: "/company/careers" },
        { text: "Book a demo", href: "/demo" },
        { text: "Refer a business", href: "/resources/refer" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "Help Center", href: "/help/guide" },
        { text: "Guides", href: "/help/guide" },
        { text: "Contact support", href: "/support" },
        { text: "Sign in to Bleaum", href: "https://ops.pos.bleaum.io/" },
      ],
    },
  ],
  legal: [
    { text: "Terms", href: "/terms" },
    { text: "Privacy", href: "/privacy" },
  ],
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/bleaum/" },
    { name: "Twitter", href: "https://x.com/bleaumwithus" },
    { name: "Instagram", href: "https://www.instagram.com/bleaumwithus/" },
  ],
}
