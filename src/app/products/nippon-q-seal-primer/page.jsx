import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Q-Seal-Solvent-Based-Primer-min.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-q-seal-primer';

export const metadata = {
  title: "Nippon Q Seal Primer | Alwaqas Paint",
  description: "Solvent-based primer with excellent alkali resistance and strong adhesion for new and painted walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Q Seal Primer | Alwaqas Paint",
    description: "High-performance solvent-based primer that forms a barrier against alkalinity, ensuring a smooth surface for topcoat application.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Q Seal Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Q Seal Primer | Alwaqas Paint",
    description: "Solvent-based primer with strong adhesion and alkali resistance for durable wall preparation.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Q Seal Primer Product",
  }
};

const NipponQSealPrimer = () => {
  const productName = "Nippon Q Seal Primer";
  const productDescription = "Nippon Q Seal is a solvent-based primer specially formulated to provide excellent alkali resistance. It is a primer with good adhesion property. The sealer forms an excellent barrier coat against alkalinity for both new and already painted walls and gives a good surface for the painting of subsequent topcoat.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Q-Seal-Solvent-Based-Primer-min.png"
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
          "Excellent alkali resistance",
          "Strong adhesion",
          "Smooth surface preparation",
          "Suitable for new and painted walls"
        ]
      }
      highlights={
        [
          "Strong adhesion",
          "Alkali resistance",
          "Solvent-based",
          "Prepares surfaces for topcoat"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "2-3 hours" },
          { name: "Recoat Time", value: "6-8 hours" },
          { name: "Finish", value: "Matte" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-Q-Seal-Solvent-Based-Primer.pdf"
    />
  );
};

export default NipponQSealPrimer;