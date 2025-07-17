import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/water-pro/3.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/water-pro/dulux-aquashield-interior-waterproof-basecoat';

export const metadata = {
  title: "Dulux Aquashield Interior Waterproof Basecoat",
  description: "Premium basecoat with DampProtect Technology, offering waterproof protection and enhanced durability for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    description: "High-quality interior basecoat with DampProtect Technology, guarding against dampness and enhancing topcoat life.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Interior Waterproof Basecoat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Interior Waterproof Basecoat | Alwaqas Paint",
    description: "Premium basecoat for interior walls, featuring DampProtect Technology for waterproofing and alkali resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Interior Waterproof Basecoat Product",
  }
};

const DuluxAquashieldInteriorBasecoat = () => {
  const product = {
    id: 3,
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    image: "/water-pro/3.png",
    description: "Dulux Aquashield Interior Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to interior walls. Its revolutionary DampProtect Technology guards interior walls against dampness, enhances top coat life and prevents alkali salt deposits.",
    keyInformation: {
      finish: "Matt",
      coverage: "7-9 m²/L",
      dryingTime: "3-4 hours",
      coats: "1",
    },
    features: [
      "Alkali Guard",
      "Crack Bridging",
      "Enhances Topcoat Opacity",
      "DampProtect Technology"
    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Interior Waterproof Basecoat with 3-4 hours drying time.",
    downloads: {
      sds: "/pdf/interior_basecoat (1).pdf",
      tds: "/pdf/tds_dulux_aquashield_interior_waterproof_basecoat.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldInteriorBasecoat;