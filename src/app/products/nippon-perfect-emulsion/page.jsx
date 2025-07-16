import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Perfect-Emulsion.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-perfect-emulsion';

export const metadata = {
  title: "Nippon Perfect Emulsion | Alwaqas Paint",
  description: "Premium acrylic-based emulsion for interior masonry surfaces, offering a luxurious smooth finish and high washability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Perfect Emulsion | Alwaqas Paint",
    description: "High-quality emulsion paint with anti-fungal properties and a fresh lemon fragrance for durable, smooth interior finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Perfect Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Perfect Emulsion | Alwaqas Paint",
    description: "Premium emulsion paint with high scrub resistance and luxurious finish for interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Perfect Emulsion Product",
  }
};

const NipponPerfectEmulsion = () => {
  const productName = "Nippon Perfect Emulsion";
  const productDescription = "A premium quality acrylic-based emulsion specially designed to give a smooth luxurious finish to interior masonry surfaces, brickworks and wallboards. It is highly washable, has a smooth finish and its long lasting colours make it an ideal choice for interiors.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Perfect-Emulsion.png"
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
          "High washability",
          "Long-lasting colors",
          "Smooth luxurious finish",
          "Anti-fungal properties"
        ]
      }
      highlights={
        [
          "Anti-fungal",
          "High scrub resistance",
          "Luxurious smooth finish",
          "Fresh lemon fragrance"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Smooth" }
        ]
      }
      technicalDataSheetUrl="/pdf/NIPPON-PERFECT-EMULSION.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (6).pdf"
    />
  );
};

export default NipponPerfectEmulsion;