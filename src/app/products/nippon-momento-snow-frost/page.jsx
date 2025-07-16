import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Momento-Special-Effect-spark-silver.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-momento-snow-frost';

export const metadata = {
  title: "Nippon Momento - Snow Frost | Alwaqas Paint",
  description: "Special effect paint with a sparkling silver finish, low VOC, and eco-friendly formulation for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Momento - Snow Frost | Alwaqas Paint",
    description: "Transform walls with a sparkling silver finish, hiding surface imperfections with an eco-friendly, low-odor formula.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Momento Snow Frost Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Momento - Snow Frost | Alwaqas Paint",
    description: "Eco-friendly special effect paint with a sparkling silver finish for stunning interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Momento Snow Frost Product",
  }
};

const NipponMomentoSnowFrost = () => {
  const productName = "Nippon Momento - Snow Frost";
  const productDescription = "Momento Sparkle lets you recreate intricate works of Italian craftsmanship in your home with its distinctive special effects that turn ordinary walls into extraordinary masterpieces. Momento Sparkle is formulated with low VOC, contains no lead or mercury, and is formaldehyde-free.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Momento-Special-Effect-spark-silver.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
        </div>
      }
      features={
        [
          "Special sparkling silver effect",
          "Low VOC formulation",
          "Formaldehyde-free",
          "Hides surface imperfections"
        ]
      }
      highlights={
        [
          "Adds a dash of glitz to walls for a finish that sparkles like a gem",
          "Hides unevenness of the wall surface",
          "Low odour, environmentally friendly"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Sparkle" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-TDS-Momento.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (3).pdf"
    />
  );
};

export default NipponMomentoSnowFrost;