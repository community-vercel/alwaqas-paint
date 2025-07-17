import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/43.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/aluminium-silver';

export const metadata = {
  title: "Master Aluminium Silver",
  description: "High-performance aluminium silver paint with a chrome-like finish for durable protection on metal surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Aluminium Silver",
    description: "Premium aluminium paint with heat and chemical resistance, ideal for grills, gates, and roofs.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Aluminium Silver Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Aluminium Silver | Alwaqaspaint",
    description: "Durable, easy-to-apply aluminium silver paint with strong adhesion and a pearly sheen finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Aluminium Silver Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Aluminium Silver",
    image: "/master/43.webp",
    description: "Master high-performance aluminium metal silver paint provides a sleek, chrome-like finish while offering excellent protection. With advanced leafing aluminium pigment, this single-component paint is ideal for metal surfaces such as grills, gates, roofs, and pipes. Buy aluminium metal silver paint online to effectively guard against corrosion, discolouration, and mild heat damage. Master aluminium silver paint in Pakistan is perfect for both industrial and domestic uses. There’s no primer needed, and it’s resistant to mild chemicals and temperatures up to 95°F. The best aluminium silver metal paint in Pakistan ensures long-lasting durability. This paint is suitable for both interior and exterior applications. Use it and get a smooth, hard finish with a pearly sheen.",
    features: [
      "Heat resistant",
      "Full coverage",
      "Easy to apply",
      "Durable finish",
      "Chemical resistant",
      "Strong adhesion",
    ],
    downloads: {
      ds: "/pdf/master/mixing Silver2_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;