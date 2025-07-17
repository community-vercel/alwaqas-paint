import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/42.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/synthetic-varnish';

export const metadata = {
  title: "Master Synthetic Varnish",
  description: "Premium air-drying synthetic varnish for wood and metal with UV protection, heat resistance, and high-gloss finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Varnish",
    description: "Durable solvent-based varnish with abrasion resistance and long-lasting gloss for both interior and exterior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Synthetic Varnish Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Synthetic Varnish | Alwaqas Paint",
    description: "Heat-resistant synthetic varnish with strong adhesion and fast-drying formula for superior surface protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Synthetic Varnish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Varnish",
    image: "/master/42.webp", 
    description: "Our best synthetic varnish paint is an air-drying, solvent-based coating. It's designed to protect and enhance wood and metal surfaces. Buy master synthetic varnish paint in Pakistan and get the high-gloss finish. First, it adds a sleek shine, then the varnish formula creates a hard, durable layer that resists abrasions. Our synthetic varnish also features heat-resistant properties. So, you can use our varnish for painting on surfaces exposed to heat like coasters and trays. By offering protection against UV rays and weather damage, it's ideal for both indoor and outdoor applications. It's also compatible with synthetic enamels to further boost gloss levels. Buy synthetic varnish paint online and make your surfaces look fresh for years!",
    features: [
      "Abrasion resistant",
      "UV protection",
      "Fast drying",
      "Heat resistant",
      "Long-lasting gloss retention",
      "Interior & exterior use",
      "Strong adhesion",
    ],
    downloads: {
      ds: "/pdf/master/varnish.pdf", 
      sc: "", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;