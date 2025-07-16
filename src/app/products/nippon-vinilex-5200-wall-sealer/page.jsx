import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Vnilex-5100.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-vinilex-5200-wall-sealer';

export const metadata = {
  title: "Nippon Vinilex 5200 Wall Sealer | Alwaqas Paint",
  description: "Styrene acrylic water-based wall sealer for interior walls, protecting against mild alkalinity and moisture.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Vinilex 5200 Wall Sealer ",
    description: "Water-based sealer for interior walls, offering excellent protection against alkalinity and moisture for durable finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Vinilex 5200 Wall Sealer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Vinilex 5200 Wall Sealer | Alwaqas Paint",
    description: "Interior wall sealer with strong resistance to alkalinity and moisture, ideal for new and repainted surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Vinilex 5200 Wall Sealer Product",
  }
};

const NipponVinilex5200WallSealer = () => {
  const productName = "Nippon Vinilex 5200 Wall Sealer";
  const productDescription = "Nippon Vinilex 5200 Wall Sealer is a styrene acrylic water-based wall sealer. It is specially formulated for interior walls to protect the finishing coats against the effects of mild alkalinity and moisture from the substrate.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Vnilex-5100.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/good_alkaline_effloresence_resistance.png"
                alt="Good Alkaline and Efflorescence Resistance Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      }
      features={
        [
          "Styrene acrylic water-based formulation",
          "Protects against mild alkalinity",
          "Moisture resistance",
          "Enhances topcoat durability"
        ]
      }
      highlights={
        [
          "Good efflorescence resistance",
          "Good for new walls and repainting",
          "For interior use"
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
      technicalDataSheetUrl="/pdf/NPPK-Vinilex-5200-Wall-Sealer_compressed.pdf"
    />
  );
};

export default NipponVinilex5200WallSealer;