import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/31.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/synthetic-enamel';

export const metadata = {
  title: "Synthetic Enamel Paint | Multi-Surface Gloss Finish",
  description: "Premium synthetic enamel paint for wood, steel and walls with 77+ color options, offering rust resistance and durable glossy finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Enamel | High-Gloss Protective Paint",
    description: "Advanced oxidation-polymerization formula creates tough, chemical-resistant surfaces with excellent color retention on multiple substrates.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Synthetic Enamel Paint Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synthetic Enamel Paint | 77+ Colors Available",
    description: "Non-toxic enamel with lightfast pigments that dries quickly to a smooth, high-gloss finish resistant to rust and corrosion.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Synthetic Enamel Paint Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Enamel",
    image: "/master/31.webp", 
    description: "Master Synthetic Enamel is a versatile, high-performance paint suitable for wood, steel, and walls with any primer. This premium enamel delivers a durable, glossy finish with exceptional resistance to rust, corrosion, and chemicals. Available in over 77 vibrant colors, our synthetic enamel features advanced oxidation-polymerization technology that ensures quick drying while creating a tougher, smoother surface than conventional paints. The formulation provides excellent adhesion and long-lasting color retention, making it a cost-effective solution for both interior and exterior applications. Whether for residential, commercial, or industrial use, this enamel maintains its high-gloss appearance and protective qualities over time. Contact us for synthetic enamel paint prices in Pakistan and discover why it's the top choice for professionals and DIY enthusiasts alike.",
    features: [
      "Highly resistant to rust, corrosion and chemicals",
      "Exceptional color retention that lasts for years",
      "Premium high-gloss finish",
      "Non-toxic, environmentally friendly formula",
      "Easy to clean and maintain",
      "Lightfast pigments resist fading",
      "Works on wood, steel and masonry surfaces",
      "Quick-drying advanced formula"
    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel12_compressed.pdf", 
      sc: "/pdf/master/Synthetic-Enamel.pdf", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;