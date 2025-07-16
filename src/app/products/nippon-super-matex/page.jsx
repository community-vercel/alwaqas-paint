import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/super-matex-1.png",
  imageWidth: 1200,
  imageHeight: 630,
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-super-matex';

export const metadata = {
  title: "Nippon Super Matex Emulsion | Alwaqas Paint",
  description: "Cost-effective emulsion paint for interior walls and ceilings. Offers smooth matt finish and anti-fungal properties.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Super Matex Emulsion | Alwaqas Paint",
    description: "A versatile interior emulsion for walls and ceilings with a smooth matt finish and anti-fungal protection.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Super Matex Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Super Matex Emulsion | Alwaqas Paint",
    description: "Interior emulsion with anti-fungal properties and smooth matt finish for all surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Super Matex Emulsion Product",
  }
};

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Super Matex Emulsion"
      productImage="/super-matex-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            A cost-effective one-for-all solution!<br /><br />
            Nippon Super Matex is recommended for interior walls, ceilings, plaster, brickwork, hard and soft boards, and asbestos.
          </p>
        </div>
      }
      highlights={[
        "Anti-fungal",
        "Smooth matt finish",
      ]}
      technicalDataSheetUrl="/pdf/SUPER-MATEX_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (4).pdf"
    />
  );
};

export default NipponHiBondWall;
