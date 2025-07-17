import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/11.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/exterior-primer';

export const metadata = {
  title: "Exterior Primer",
  description: "Professional-grade primer that prepares masonry surfaces for painting, enhancing adhesion and durability of exterior finishes.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Exterior Primer",
    description: "Weather-resistant primer that levels masonry surfaces and prevents cracks, mildew and mold for long-lasting results.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Exterior Primer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Exterior Primer | Alwaqas Paint",
    description: "Essential foundation primer for exterior surfaces that ensures smooth, even topcoat application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Exterior Primer Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Exterior Primer",
    image: "/master/11.webp",
    description: "Exterior primer is a wonderful coating that prepares your masonry surfaces for better adhesion. Prepare your surfaces with Master Paints' Exterior Primer, the ideal foundation for a flawless finish. This top-rated primer paint in Pakistan provides better adhesion of your exterior paint, enhancing durability and longevity. If you're searching for the best wall primer price in Pakistan, Master Paints exclusively presents exceptional value. With our Exterior Primer, you can have perfect, smooth and even topcoat. Master Paints offers a competitive price of this exterior primer, essential for achieving professional-quality results. Get your Exterior Primer Paint today and start your project with the best foundation possible.",
    features: [
      "Weather protection",
      "Helps levelling up the masonry surfaces",
      "Crack resistant",
      "Mildew and Mold Resistant",
      "Durable",
    ],
    downloads: {
      ds: "/pdf/master/Master Wall Primer ( water based )_compressed.pdf",
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;