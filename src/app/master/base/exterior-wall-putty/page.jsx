import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/22.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/exterior-wall-putty';

export const metadata = {
  title: "Master Exterior Wall Putty",
  description: "100% acrylic-based filler for masonry surfaces that fills cracks and imperfections while protecting against moisture damage.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Exterior Wall Putty",
    description: "High-performance wall putty with waterproof formula for plaster, concrete and wooden surfaces with quick drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Exterior Wall Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Exterior Wall Putty | Alwaqas Paint",
    description: "Acrylic-based wall putty offering full coverage and excellent preparation for paint application on all surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Exterior Wall Putty Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Exterior Wall Putty",
    image: "/master/22.webp",
    description: "To make your wall paint stay intact for a few more years, try Master Exterior Wall Putty. It is a high-performance, 100% acrylic-based filler designed for all types of masonry surfaces. It helps fill cracks, pores, and other imperfections easily. No need to prepare it, open and apply it for smooth results. Buy the best exterior wall putty in Pakistan that has a waterproof formula that protects walls from moisture and damage. Use top-rated exterior wall putty paint on plaster, concrete, and wooden surfaces. Regardless of the surface, this putty offers excellent filling properties and fast drying times. The exterior wall putty paint price in Pakistan is affordable, get in touch with us for the best value.",
    features: [
      "Offers full coverage",
      "Best prep for paint application",
      "For indoor and outdoor use",
      "Water-resistant",
      "Quick-drying",
    ],
    downloads: {
      ds: "",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;