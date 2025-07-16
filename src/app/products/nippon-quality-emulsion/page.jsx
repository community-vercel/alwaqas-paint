import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Group-12966.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-quality-emulsion';

export const metadata = {
  title: "Nippon Quality Emulsion | Alwaqas Paint",
  description: "Styrene acrylic-based emulsion for interior concrete surfaces, offering excellent coverage and a smooth flat finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Quality Emulsion | Alwaqas Paint",
    description: "Durable emulsion paint with good hiding power and long-lasting colors for interior walls and ceilings.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Quality Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Quality Emulsion | Alwaqas Paint",
    description: "High-coverage emulsion paint for interior surfaces, free of lead, mercury, and other harmful compounds.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Quality Emulsion Product",
  }
};

const NipponQualityEmulsion = () => {
  const productName = "Nippon Quality Emulsion";
  const productDescription = "Nippon Quality Emulsion is a styrene acrylic based emulsion with smooth flat finish designed for interior concrete surfaces including walls and ceilings. It gives good hiding and covering with a wide range of long lasting colours.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Group-12966.png"
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
          "Excellent hiding power",
          "Long-lasting colors",
          "Smooth flat finish",
          "Suitable for interior concrete surfaces"
        ]
      }
      highlights={
        [
          "Good levelling",
          "Highly durable",
          "Better hiding power and coverage",
          "Free of lead, mercury, chromium and cadmium compounds"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Flat" }
        ]
      }
      technicalDataSheetUrl="/pdf/Nippon-Quality-Emulsion_compressed.pdf"
      shadeCardsUrl="/pdf/Q-Interior-Emulsion-SC-2021.pdf"
    />
  );
};

export default NipponQualityEmulsion;