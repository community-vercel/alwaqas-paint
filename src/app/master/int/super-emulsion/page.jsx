import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/4.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/super-emulsion';

export const metadata = {
  title: "Master Super Emulsion (Distemper)",
  description: "Water-based emulsion paint with a smooth, pigmented finish for interior walls and ceilings.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Super Emulsion (Distemper)",
    description: "Eco-friendly, lead-free distemper paint with excellent coverage and a durable, washable finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Super Emulsion (Distemper) Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Super Emulsion (Distemper) | Alwaqas Paint",
    description: "Durable, low-odor super emulsion paint with smooth finish and extra coverage for interiors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Super Emulsion (Distemper) Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Super Emulsion (Distemper)",
    image: "/master/4.webp",
    description: "Master Super Emulsion (Distemper), is the ideal solution for achieving pigmented and smooth walls with its fine texture! This top-rated super emulsion paint features a subtle, plain finish making it perfect for any room in your home or school. Its water-based formula ensures quick drying and low odor, offering a safer and more convenient distemper for interior spaces. Master Super Emulsion provides excellent coverage, allowing you to easily smoothen your walls with fewer coats. This super emulsion is durable and long-lasting, ensuring that the color remains bright and fresh over time for your interior. Plus, it’s easy to clean, keeping your walls looking great with minimal effort. Ready to upgrade your space with easy, affordable, and economical distemper paints? You can buy super emulsion paint online with ease and have it delivered right to your doorstep. Looking for quality and reliability? Buy Master Super Emulsion paint today and enjoy a long-lasting, beautiful finish that breathes life into your environment!",
    features: [
      "Lead Free",
      "Eco Friendly",
      "Smooth Finish",
      "Super Wash ability",
      "Extra Coverage",
    ],
    downloads: {
      ds: "/pdf/master/Super Emulsion_compressed.pdf",
      sc: "/pdf/master/Super-Emulsion (1)_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;