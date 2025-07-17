import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/23.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/super-primer';

export const metadata = {
  title: "Master Super Primer",
  description: "High-performance acrylic primer for multiple surfaces with waterproof protection and quick drying properties.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Super Primer",
    description: "PVA-based primer that strengthens surfaces while resisting alkali and moisture, suitable for both interior and exterior use.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Super Primer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Super Primer | Alwaqas Paint",
    description: "Acrylic primer with waterproof seal that works on cement, brick and plaster surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Super Primer Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Super Primer",
    image: "/master/23.webp",
    description: "Master Super Primer is a high-performance acrylic primer that works on multiple surfaces. It creates a strong barrier that protects against water damage and seepage, ensuring a longer life for your paint job. Our top-rated super primer paint provides excellent sealing and adhesion on cement, brick, and plaster surfaces. Its PVA-based formula strengthens interior surfaces while resisting alkali and moisture, especially on new plaster. Finish your projects within a day as it dries quickly, allowing you to recoat in just a few hours. Buy the best super primer paint in Pakistan online for a new project or to refresh an old surface. Check out the super primer paint price in Pakistan.",
    features: [
      "Waterproof seal",
      "Works on various surfaces (like cement and plaster)",
      "Dries quickly (in 2-3 hours)",
      "Improves paint strength",
      "For indoor and outdoor use",
    ],
    downloads: {
      ds: "/pdf/master/super primer_compressed.pdf",
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;