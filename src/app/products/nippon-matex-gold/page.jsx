import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/matex-gold-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-matex-gold';

export const metadata = {
  title: "Nippon Matex Gold Emulsion | Alwaqas Paint",
  description: "High-opacity, durable emulsion paint for interior walls with a smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Matex Gold Emulsion | Alwaqas Paint",
    description: "Premium emulsion paint with better hiding power and long-lasting matt finish for interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Matex Gold Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Matex Gold Emulsion | Alwaqas Paint",
    description: "Durable, high-opacity emulsion paint for smooth, long-lasting interior wall finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Matex Gold Emulsion Product",
  }
};

const NipponMatexGoldEmulsion = () => {
  const productName = "Nippon Matex Gold Emulsion";
  const productDescription = "Nippon Matex Gold is specially formulated to provide a smooth matt finish for interior walls with higher opacity and durability.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/matex-gold-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
        </div>
      }
      features={[
        "High opacity",
        "Durable formulation",
        "Smooth matt finish",
        "Easy application"
      ]}
      highlights={[
        "Better hiding power and coverage",
        "Higher film build",
        "Lead and mercury free",
        "Long-lasting",
        "Matt finish"
      ]}
      specifications={[
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ]}
      technicalDataSheetUrl="/pdf/NIPPON-MATEX-GOLD_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (5).pdf"
    />
  );
};

export default NipponMatexGoldEmulsion;