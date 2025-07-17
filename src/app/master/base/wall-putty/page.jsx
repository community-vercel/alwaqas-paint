import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/19.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/wall-putty';

export const metadata = {
  title: "Master Wall Putty",
  description: "Acrylic wall putty paint designed to give walls a smooth, crack-free finish and enhance paint durability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Wall Putty",
    description: "Professional wall putty that fills pores and imperfections, providing an ideal surface for flawless paint application.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Wall Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Wall Putty | Alwaqas Paint",
    description: "Easy-to-apply wall putty that protects from moisture and maintains a professional indoor finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Wall Putty Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Wall Putty",
    image: "/master/19.webp",
    description: "Master Wall Putty is an acrylic wall putty paint designed to give walls a smooth, crack-free finish. It effectively fills pores and imperfections, providing an ideal surface for paint application. This putty also adds a protective layer that enhances the durability of your paint. It's easy to apply, quick to dry, and ensures the paint finish is flawless. Just know it maintains a professional look indoors only. You can buy the best wall putty online in Pakistan for the best results. We keep our wall putty paint price in Pakistan affordable without compromising on quality. Make a smart choice to beautify your walls and buy Master wall putty online in Pakistan.",
    features: [
      "Extends paint life",
      "Protects from moisture",
      "Easy and fast-drying",
      "Affordable for indoors",
      "Maintains a neat look",
    ],
    downloads: {
      ds: "/pdf/master/Master Wall Putty_compressed.pdf",
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;