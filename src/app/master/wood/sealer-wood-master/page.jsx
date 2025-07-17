import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/27.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/sealer-wood-master';

export const metadata = {
  title: "Sealer Wood Master | Premium Wood Protection Primer",
  description: "High-performance wood sealer with deep-penetrating formula for moisture resistance and flawless surface preparation under topcoats.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Sealer Wood Master | Wood Surface Protection",
    description: "Professional-grade wood sealer that creates moisture-resistant barrier while enhancing wood's natural beauty and preparing for topcoats.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Sealer Wood Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sealer Wood Master | Wood Surface Primer",
    description: "Deep-penetrating wood sealer providing strong resistance against moisture and stains with smooth finish for furniture and doors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Sealer Wood Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Sealer Wood Master",
    image: "/master/27.webp", 
    description: "Sealer Wood Master from Master Paints is a high-performance wood treatment that deeply penetrates and seals wood surfaces against moisture, stains, and daily wear. This professional-grade sealer creates an invisible protective barrier while enhancing the wood's natural beauty and providing an ideal smooth base for topcoats. Perfect for furniture, doors, cabinetry, and all woodworking projects, Sealer Wood Master significantly extends the lifespan of wood surfaces. Whether you're preparing raw wood for finishing or protecting existing surfaces, this sealer delivers long-lasting results. Available for purchase online with nationwide delivery across Pakistan, it's the trusted choice for woodworkers and DIY enthusiasts seeking professional-quality protection.",
    features: [
      "Deep-penetrating formula for maximum protection",
      "Strong resistance against moisture and stains",
      "Creates smooth, flawless finish for topcoats",
      "Enhances wood's natural grain and beauty",
      "Ideal surface preparation for paints and varnishes",
      "Extends lifespan of wood surfaces",
      "Suitable for furniture, doors, and cabinetry",
      "Professional-grade quality for DIY and commercial use"
    ],
    downloads: {
      ds: "/pdf/master/Master Wood Sealer_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;