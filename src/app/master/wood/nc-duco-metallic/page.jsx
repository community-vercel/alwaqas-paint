import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/33.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/nc-duco-metallic';

export const metadata = {
  title: "N.C Duco Metallic | Premium Wood & Metal Finish",
  description: "High-gloss nitrocellulose lacquer for wood and metal with self-leveling technology, available in 11 metallic colors with water-resistant properties.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "N.C Duco Metallic | Shiny Metallic Wood Finish",
    description: "Fast-drying metallic lacquer with high solid content for durable, water-resistant coating on furniture and metal fixtures with self-leveling application.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "N.C Duco Metallic Wood Finish",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "N.C Duco Metallic | Furniture & Metal Paint",
    description: "Premium metallic finish paint with self-leveling technology for wood and metal surfaces in 11 shiny colors including Bright Gold and Black Metallic.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "N.C Duco Metallic Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "N.C Duco Metallic",
    image: "/master/33.webp", 
    description: "N.C Duco Metallic is a top-quality gloss paint designed for both wood and metal surfaces. This premium nitrocellulose lacquer provides a sleek and shiny metallic finish. You can buy NC Duco metallic paint online in 11 elegant metallic colors, including Bright Gold, Black Metallic, and more! Known for its fast-drying properties, it features advanced self-leveling technology for smooth, professional application. Master N.C Duco Metallic paint contains high solid content, resulting in enhanced durability and excellent water resistance. Whether you're refinishing furniture or upgrading metal fixtures, this versatile paint delivers a striking metallic finish with lasting protection.",
    features: [
      "Efficient refinishing for wood and metal",
      "Professional self-leveling application",
      "Available in high-gloss and matte finishes",
      "Ideal for furniture restoration projects",
      "Enhanced water-resistant properties",
      "11 premium metallic color options",
      "High solid content for durable coating"
    ],
    downloads: {
      ds: "", 
      sc: "/pdf/master/Duco-Metallic.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;