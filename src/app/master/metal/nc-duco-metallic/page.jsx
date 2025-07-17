import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/39.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/nc-duco-metallic';

export const metadata = {
  title: "Master N.C Duco Metallic",
  description: "Premium gloss paint with a sleek, metallic finish for wood and metal surfaces, offering durability and water resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master N.C Duco Metallic",
    description: "Fast-drying, self-leveling metallic paint available in 11 shiny colors for furniture and metal fixtures.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master N.C Duco Metallic Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master N.C Duco Metallic | Alwaqas Paint",
    description: "Versatile, high-solid metallic paint with water-resistant properties for a striking, durable finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master N.C Duco Metallic Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "N.C Duco Metallic",
    image: "/master/39.webp",
    description: "N.C Duco Master is a top-quality gloss paint designed for both wood and metal surfaces. It’s similar to N.C. Duco Master but this one provides a sleek and shiny finish. You can buy NC Duco metallic paint online in 11 shiny metallic colors, such as Bright Gold, Black Metallic, and more! It’s known for its fast-drying properties. Additionally, it features self-leveling technology for a smooth application. Master N.C Duco Metallic paint in Pakistan has a high solid content. So, the coating has enhanced durability and water resistance. Whether you're working on furniture or metal fixtures, this versatile paint is a top choice for achieving a striking finish.",
    features: [
      "Efficient re-finishing",
      "Wood and metal surface application",
      "Multi-surface use",
      "deal for furniture projects",
      "Water-resistant properties",
      "Self-leveling",
    ],
    downloads: {
      ds: "",
      sc: "/pdf/master/Duco-Metallic (1).pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;