import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/easy-coat-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-easy-coat';

export const metadata = {
  title: "Nippon Easy Coat Emulsion | Alwaqas Paint",
  description: "Economy emulsion paint with excellent brushing and leveling properties, offering vibrant colors for interior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Easy Coat Emulsion | Alwaqas Paint",
    description: "Cost-effective emulsion paint with a wide range of colors and smooth application for interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Easy Coat Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Easy Coat Emulsion | Alwaqas Paint",
    description: "Vibrant, economical emulsion paint for interior surfaces, free of harmful compounds.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Easy Coat Emulsion Product",
  }
};

const NipponEasyCoatEmulsion = () => {
  const productName = "Nippon Easy Coat Emulsion";
  const productDescription = "Nippon Easy Coat Emulsion is an economy emulsion with excellent brushing and levelling properties. It offers a wide range of cool and vibrant colour combinations. Nippon Easy Coat stands out as the best cost-effective choice.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/easy-coat-1.png"
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
          "Excellent brushing properties",
          "Good levelling",
          "Wide range of vibrant colors",
          "Cost-effective"
        ]
      }
      highlights={
        [
          "Wide range of colours",
          "Economical",
          "Free of lead, mercury, chromium and cadmium compounds"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Matte" }
        ]
      }
      technicalDataSheetUrl="/pdf/NIPPON-EASY-COAT-EMULSION_compressed.pdf"
      shadeCardsUrl="/pdf/Nippon-Quality-Emulsion_compressed (1).pdf"
    />
  );
};

export default NipponEasyCoatEmulsion;