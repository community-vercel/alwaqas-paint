import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/29.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/synthetic-varnish';

export const metadata = {
  title: "Synthetic Varnish | Premium Wood Protection & Gloss Finish",
  description: "High-gloss synthetic varnish for wood with quick-drying formula that protects against moisture, stains and scratches while enhancing natural wood grain.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Synthetic Varnish | Wood Surface Protection",
    description: "Durable synthetic varnish that creates protective layer for furniture and woodwork with beautiful high-gloss finish and extended lifespan.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Synthetic Varnish Wood Finish",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synthetic Varnish | Wood Furniture Protection",
    description: "Quick-drying varnish that enhances wood grain with glossy finish while providing lasting protection against daily wear and moisture.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Synthetic Varnish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Varnish",
    image: "/master/29.webp", 
    description: "Master Synthetic Varnish provides superior protection and beauty for all wooden surfaces. This premium formulation creates a crystal-clear, high-gloss protective layer that shields furniture, doors, and woodwork from moisture, stains, and daily wear. The advanced quick-drying formula not only enhances the wood's natural grain but also forms a durable barrier that significantly extends the life of your wooden objects. Perfect for both restoration projects and new wood finishes, our synthetic varnish delivers professional-quality results with its smooth application and brilliant shine. Available for convenient online purchase, it's the ideal solution for DIY enthusiasts and professionals seeking lasting wood protection with exceptional aesthetic appeal.",
    features: [
      "High-gloss, crystal-clear finish",
      "Triple protection against moisture, stains, and scratches",
      "Fast-drying formula for quick project completion",
      "Extends lifespan of furniture and woodwork",
      "Enhances and highlights natural wood grain",
      "Creates durable protective barrier",
      "Ideal for both restoration and new projects",
      "Professional-quality results with easy application"
    ],
    downloads: {
      ds: "/pdf/master/varnish_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;