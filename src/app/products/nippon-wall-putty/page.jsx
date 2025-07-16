import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Hi-Bond-Acrylic-Putty-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-wall-putty';

export const metadata = {
  title: "Nippon Wall Putty | Alwaqas Paint",
  description: "High-quality water-based wall putty for leveling uneven interior walls, patching cracks, and providing a smooth base for topcoats.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Wall Putty | Alwaqas Paint",
    description: "Water-based putty for interior walls with strong adhesion, fast drying, and anti-fungus properties for smooth, durable finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Wall Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Wall Putty | Alwaqas Paint",
    description: "Ready-to-use wall putty for interior surfaces, offering excellent leveling and fungus resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Wall Putty Product",
  }
};

const NipponWallPutty = () => {
  const productName = "Nippon Wall Putty";
  const productDescription = "Nippon Wall Putty (water-based) is a high quality ready-to-use filler recommended for levelling uneven rough porous cement walls, plaster work, patching cracks and filling defective surfaces. The Nippon Wall Putty is not recommended for exteriors.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Hi-Bond-Acrylic-Putty-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/fungus_resistant.png"
                alt="Fungus Resistant Icon"
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
          "Durable smooth finish",
          "Good adhesion",
          "Fast-drying",
          "Easy to use"
        ]
      }
      highlights={
        [
          "Safe to apply after 3 days of plastering",
          "Shortens waiting time for top coat application",
          "Adheres firmly to concrete and masonry surfaces",
          "Anti-fungus",
          "Fast drying",
          "Environmental friendly"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "1-2 sqm/kg" },
          { name: "Drying Time", value: "2-4 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Smooth" }
        ]
      }
      technicalDataSheetUrl="/pdf/Nippon-Wall-Putty.pdf"
    />
  );
};

export default NipponWallPutty;