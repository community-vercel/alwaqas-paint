import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/8.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/royal-exterior-silk-emulsion';

export const metadata = {
  title: "Master Royal Exterior Silk Emulsion",
  description: "Premium mid-sheen emulsion paint with a glossy, durable finish for exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Royal Exterior Silk Emulsion",
    description: "High-quality exterior paint with a silk-like texture, offering weather resistance and a glossy finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Royal Exterior Silk Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royal Exterior Silk Emulsion | Alwaqas Paint",
    description: "Durable, glossy exterior paint with excellent coverage and weather resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Royal Exterior Silk Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Royal Exterior Silk Emulsion",
    image: "/master/8.webp",
    description: "Master Paints offers the quality mid sheen emulsion paints known as Royal Silk Emulsions. You can give your exteriors a glossy finish with Royal Exterior Silk Emulsion. This top-rated exterior paint delivers a smooth, silk-like texture that resists harsh weather conditions, keeping your walls looking fresh and elegant with a shiny finish. Looking for an easy place to buy Royal Exterior Silk Emulsion? We help you buy Master Royal Exterior Silk Emulsion online today! With competitive prices in Pakistan, this premium paint gives you exceptional coverage and durability. Choose Royal Exterior Silk Emulsion for a quality, long-lasting finish that stands out. Purchase yours now and enhance the beauty of your home’s exterior.",
    features: [
      "Long Lasting",
      "Full Coverage",
      "Glossy Look",
      "Shiny Finish",
      "Weather Resistant",
    ],
    downloads: {
      ds: "",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;