import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Nippon-texture-nippeon.png",
  imageWidth: 1200,
  imageHeight: 630,
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-texture-nipponeon';

export const metadata = {
  title: "Nippon Texture Nippon’eon | Alwaqas Paint",
  description: "Water-based texture finish that offers stunning patterns using special rollers or scrapers. Durable, low-absorbent and eco-friendly.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Texture Nippon’eon | Alwaqas Paint",
    description: "Create stunning textured finishes on your walls with Nippon’eon – water-based, durable, and versatile.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Texture Nippon’eon Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Texture Nippon’eon | Alwaqas Paint",
    description: "Water-based texture finish for creative interior patterns with long-lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Texture Nippon’eon Product",
  }
};

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Texture Nippon’eon"
      productImage="/Nippon-texture-nippeon.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            Nippon Texture Nippon’eon is a unique water-based texture finish which gives tremendous texture motifs with special textured rollers and scrapers. Numerous beautiful patterns can be created as a base and can be top-coated with various shades of water and solvent based products.
          </p>
        </div>
      }
      highlights={[
        "Environment-friendly",
        "Long lasting and durable",
        "Low absorbency",
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Texture-Nipponeon_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (4).pdf"
    />
  );
};

export default NipponHiBondWall;
