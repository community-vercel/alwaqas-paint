import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/15.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/synthetic-metallic';

export const metadata = {
  title: "Master Synthetic Metallic",
  description: "Premium synthetic metallic paint with a glossy, lustrous finish for luxurious interior and exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Metallic",
    description: "High-quality paint with a stunning metallic finish, offering durability and a radiant glow for any surface.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Synthetic Metallic Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Synthetic Metallic | Alwaqas Paint",
    description: "Glossy, durable synthetic metallic paint for a luxurious, radiant finish at competitive prices.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Synthetic Metallic Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Synthetic Metallic",
    image: "/master/15.webp",
    description: "Master Paints' Synthetic Metallic, is the best synthetic metallic paint offering you a shiny, glossy rich lustrous texture. This high-quality paint features a unique formula that provides a stunning metallic finish, perfect for adding a touch of luxury to any surface. As a top-rated synthetic metallic paint, it offers exceptional coverage and durability, ensuring your walls shine with a radiant glow. If you're looking to buy Master Synthetic Metallic paint, you can easily make a purchase online in Pakistan. Synthetic metallic paint prices in Pakistan are quite reasonable, helping you achieve a glamorous look for your interiors and exteriors has never been easier. Buy online today and beautify your spaces with a luxury look.",
    features: [
      "Durable Formula",
      "Metallic Finish",
      "Glossy Texture",
      "Instant Drying",
      "Easy to Maintain",
      "Versatile Application",
    ],
    downloads: {
      ds: "",
      sc: "/pdf/master/Synthetic Metallic (1).pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;