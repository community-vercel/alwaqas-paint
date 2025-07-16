import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Matex-Pro-1-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-matex-pro';

export const metadata = {
  title: "Nippon Matex Pro Emulsion - White Bucket | Alwaqas Paint",
  description: "Styrene acrylic-based emulsion for interior concrete surfaces, offering dense coverage and durability for walls and ceilings.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Matex Pro Emulsion - White Bucket | Alwaqas Paint",
    description: "Durable emulsion paint with excellent coverage for interior walls, ceilings, plaster, and brickwork, free of harmful compounds.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Matex Pro Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Matex Pro Emulsion - White Bucket | Alwaqas Paint",
    description: "High-coverage emulsion paint for interior surfaces, free of lead, mercury, and other harmful compounds.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Matex Pro Emulsion Product",
  }
};

const NipponMatexProEmulsion = () => {
  const productName = "Nippon Matex Pro Emulsion - White Bucket";
  const productDescription = "A Styrene acrylic-based emulsion designed for interior concrete surfaces including walls and ceilings. It gives a dense surface coverage and is specially designed for surfaces with less demand for smoothness and scrubbing. Nippon Matex Pro is best for decorating and protecting interior walls, ceilings, plaster, brickwork and wall boards.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Matex-Pro-1-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
        </div>
      }
      features={[
        "Dense surface coverage",
        "Durable formulation",
        "Suitable for multiple interior surfaces",
        "Easy application"
      ]}
      highlights={[
        "Good levelling",
        "Highly durable",
        "Better hiding power and coverage",
        "Free of lead, mercury, chromium and cadmium compounds"
      ]}
      specifications={[
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ]}
      technicalDataSheetUrl="/pdf/Matex-Pro_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (3).pdf"
    />
  );
};

export default NipponMatexProEmulsion;