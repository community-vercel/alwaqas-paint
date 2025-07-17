import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/37.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/synthetic-enamel';

export const metadata = {
  title: "Master Synthetic Enamel",
  description: "Top-quality synthetic enamel paint with a glossy, durable finish for wood, steel, and walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Enamel",
    description: "High-gloss, non-toxic synthetic enamel paint with excellent color retention and resistance to rust.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Synthetic Enamel Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Synthetic Enamel | Alwaqas Paint",
    description: "Durable, easy-to-clean synthetic enamel paint with lightfast pigments for a vibrant, lasting finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Synthetic Enamel Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Synthetic Enamel",
    image: "/master/37.webp",
    description: "Master Synthetic Enamel paint is a type of paint that can be used with any primer on wood, steel, and walls. It is a top-quality paint that provides a durable finish with any primer. The top-rated synthetic enamel metal paint gives a glossy appearance. Buy master synthetic enamel metal paint and pick from over 77 different colors online. Our best synthetic enamel metal paint is formulated with advanced technology that dries quickly through oxidation and polymerization. The result will be a tougher and smoother surface. Contact us for Synthetic enamel metal paint prices in Pakistan. Overall, it’ll be a budget-friendly move as it keeps the “painted” area resistant to rust, corrosion, and chemicals.",
    features: [
      "Highly resistant",
      "Excellent color retention over time",
      "High gloss finish",
      "Non-toxic",
      "Easy to clean",
      "Lightfast pigments",
    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel11_compressed (1).pdf",
      sc: "/pdf/master/Synthetic-Enamel (1).pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;