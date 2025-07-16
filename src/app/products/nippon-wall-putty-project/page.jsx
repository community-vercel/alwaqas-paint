import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Project-Putty-min-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-wall-putty-project';

export const metadata = {
  title: "Nippon Wall Putty Project",
  description: "High-quality filler for leveling uneven interior walls, patching cracks, and ensuring a smooth base for topcoats.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Wall Putty Project | Alwaqas Paint",
    description: "Water-based wall putty for interior surfaces, offering fast drying, good leveling, and anti-fungus properties.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Wall Putty Project Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Wall Putty Project | Alwaqas Paint",
    description: "Ready-to-use wall putty for interior masonry surfaces, ensuring smooth and durable topcoat application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Wall Putty Project Product",
  }
};

const NipponWallPuttyProject = () => {
  const productName = "Nippon Wall Putty Project";
  const productDescription = "Nippon Wall Putty Project is good quality filler for patching cracks, levelling up uneven rough porous cement walls, plaster work and filling up defective surfaces. It provides a perfect smooth finish for top coat application. Nippon Wall Putty Project is not recommended for exterior.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Project-Putty-min-1.png"
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
          "Fast drying",
          "Good levelling",
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
      technicalDataSheetUrl="/pdf/NPPK-Putty-Project-Putty-TDS-1.pdf"
    />
  );
};

export default NipponWallPuttyProject;