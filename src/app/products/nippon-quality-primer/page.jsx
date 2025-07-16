import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Q-Primer-Edited.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-quality-primer';

export const metadata = {
  title: "Nippon Quality Primer | Alwaqas Paint",
  description: "Acrylic water-based wall sealer for interior walls, protecting against mild alkalinity and moisture.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Quality Primer | Alwaqas Paint",
    description: "Water-based primer that primes interior walls, offering protection against alkalinity and moisture for durable topcoat finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Quality Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Quality Primer | Alwaqas Paint",
    description: "Acrylic-based primer for interior walls with excellent protection against alkalinity and moisture.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Quality Primer Product",
  }
};

const NipponQualityPrimer = () => {
  const productName = "Nippon Quality Primer";
  const productDescription = "Nippon Quality-Primer Wall Sealer is an acrylic water based wall sealer. It is specially formulated for interior walls to prime the surface and protect finishing coats against the effects of mild alkalinity and moisture from the substrate.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Q-Primer-Edited.png"
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
          "Acrylic water-based formulation",
          "Protects against mild alkalinity",
          "Enhances topcoat adhesion",
          "Suitable for interior walls"
        ]
      }
      highlights={
        [
          "Protects against alkalinity and moisture",
          "Strong adhesion",
          "Water-based",
          "Prepares surfaces for topcoat"
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
      technicalDataSheetUrl="/pdf/QUALITY-PRIMER_compressed.pdf"
    />
  );
};

export default NipponQualityPrimer;