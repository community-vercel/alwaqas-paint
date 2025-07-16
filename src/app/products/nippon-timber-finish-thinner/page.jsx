import YouMayAlsoLike from '@/components/RandomProducts';
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Timber-Finish-Thinner.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-timber-finish-thinner';

export const metadata = {
  title: "Nippon Timber Finish Thinner | Alwaqas Paint",
  description: "High-quality thinner for NC-based wood finishes, paints, primers, and topcoats, suitable for wood and metal surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Timber Finish Thinner ",
    description: "Effective thinner for NC-based wood finishes, ensuring smooth application and protection for wood and metal surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Timber Finish Thinner Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Timber Finish Thinner | Alwaqas Paint",
    description: "Thinner for NC-based wood finishes, paints, and primers, designed for wood and metal surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Timber Finish Thinner Product",
  }
};

const NipponTimberFinishThinner = () => {
  const productName = "Nippon Timber Finish Thinner";
  const productDescription = "Nippon Paint Timber Finish Thinner is best for thinning of (NC based) wood finishes, paints, primers and top coat colours.";

  return (
    <>
      <BaseProductDetail
        productName={productName}
        productImage="/Timber-Finish-Thinner.png"
        category="Wood & Metal"
        productDescription={
          <div className="prose max-w-none">
            <p className="mb-4">
              {productDescription}
            </p>
          </div>
        }
        features={
          [
            "Effective thinning for NC-based finishes",
            "Suitable for wood and metal surfaces",
            "Ensures smooth application",
            "Compatible with primers and topcoats"
          ]
        }
        highlights={
          [
            "Protects the wooden and metal surfaces",
            "This thinner is a mixture Aliphatic and Aromatic Hydro-Carbons, Esters and Ketones"
          ]
        }
        specifications={
          [
            { name: "Coverage", value: "Varies by application" },
            { name: "Drying Time", value: "N/A" },
            { name: "Recoat Time", value: "N/A" },
            { name: "Finish", value: "N/A" }
          ]
        }
        technicalDataSheetUrl="/pdf/NPPK-Wood-Range-Nippon-Timber-Finish-Thinner_compressed.pdf"
      />
      <YouMayAlsoLike />
    </>
  );
};

export default NipponTimberFinishThinner;