import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/7.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/matt-enamel-finish';

export const metadata = {
  title: "Master Matt Enamel Finish",
  description: "Durable, non-glossy paint with a smooth, matte finish for elegant interior and exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Matt Enamel Finish",
    description: "Premium matt enamel paint with stain resistance and a smooth, sea shell finish for versatile surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Matt Enamel Finish Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Matt Enamel Finish | Alwaqas Paint",
    description: "Long-lasting, anti-fungal matt enamel paint with high opacity and easy maintenance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Matt Enamel Finish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Matt Enamel Finish",
    image: "/master/7.webp",
    description: "Matt Enamel Finish is a fantastic, non-glossy paint that gives your walls a smooth and elegant look with a matte texture and subtle finish! This Matt enamel is perfect for anyone wanting a soft, non-reflective surface that looks ideal and classy in any room. The solvent-based matt finish formula is perfect for any surface like wood, metal, and even walls, making it a reliable choice for your home or office. One of the main benefits of using Matt Enamel Finish is its durability and a deep strong look. It is durable, long-lasting, and can resist scratches and stains, which is especially great for high-activity areas with easy cleanliness options. If you’re interested in trying it out, you can buy Matt Enamel Finish paint online. Check out the Matt Enamel Finish price in Pakistan and find the best deal. You can also explore the Matt finish paint shade card to choose the perfect color for your space. Enjoy the beauty and benefits of Matt Enamel Finish today!",
    features: [
      "Smooth Flow",
      "Full Coverage",
      "Anti Fungal",
      "Stain Resistant",
      "High Opacity",
      "Smooth Sea Shell Finish",
    ],
    downloads: {
      ds: "/pdf/master/Matt Enamel_compressed.pdf",
      sc: "/pdf/master/Matt Enamel1_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;