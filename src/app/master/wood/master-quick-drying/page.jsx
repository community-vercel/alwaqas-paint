import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/35.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/master-quick-drying';

export const metadata = {
  title: "Master Quick Drying Paint | Fast-Drying Alkyd Paint",
  description: "Professional quick-drying paint that dries in 15 minutes with high-gloss finish, perfect for fast projects on walls, ceilings and furniture.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Quick Drying Paint | Alwaqas Paint",
    description: "Advanced alkyd resin formula dries in 15 minutes, recoats in 2 hours - ideal for time-sensitive painting projects with superior coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Quick Drying Paint Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Quick Drying Paint | Fast Project Solution",
    description: "High-productivity paint with strong coverage and smooth texture that dries remarkably fast for professionals and DIYers.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Quick Drying Paint Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Master Quick Drying",
    image: "/master/35.webp", 
    description: "Master Quick Drying is designed for quick and efficient projects. Its advanced formula uses special alkyd resins and selected pigments, allowing it to dry faster than regular paints. Buy master quick-drying paint online and complete your paint projects quickly. The high-gloss finish makes surfaces shine, giving a smooth and polished look. Master quick-drying paint offers flexibility to match any decor. This paint is more expensive due to its quick-drying technology but provides excellent value. The best part is that it dries in just 15 minutes and can be recoated in 2 hours. This feature makes it perfect for walls, ceilings, and furniture. Get an all-in-one solution for your painting needs with Master Quick Drying Paint in Pakistan.",
    features: [
      "Saves time (dries in 15 minutes)",
      "High-gloss appealing finish",
      "Versatile for different surfaces",
      "High productivity for fast projects",
      "Strong coverage with fewer applications",
      "Advanced alkyd resin formula"
    ],
    downloads: {
      ds: "/pdf/master/Quick Drying Data Sheet_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;