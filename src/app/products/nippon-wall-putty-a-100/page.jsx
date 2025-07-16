import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/A-100-Wall-Putty-Packshot-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-wall-putty-a-100';

export const metadata = {
  title: "Nippon Wall Putty A-100 | Alwaqas Paint",
  description: "High-quality water-based wall putty for smooth interior masonry surfaces, ideal for topcoat preparation.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Wall Putty A-100 ",
    description: "Water-based wall putty for interior walls, offering fast drying, good leveling, and anti-fungus properties.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Wall Putty A-100 Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Wall Putty A-100 | Alwaqas Paint",
    description: "Ready-to-use wall putty for interior masonry surfaces, ensuring smooth and durable topcoat application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Wall Putty A-100 Product",
  }
};

const NipponWallPuttyA100 = () => {
  const productName = "Nippon Wall Putty A-100";
  const productDescription = "The Wall Putty A-100 provides a smooth finish for top coat applications. It is specially formulated for interior masonry surfaces. The Nippon Wall Putty is not recommended on exteriors.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/A-100-Wall-Putty-Packshot-1.png"
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
      technicalDataSheetUrl="/pdf/NPPK-Putty-Wall-Putty-A-100-TDS.pdf"
    />
  );
};

export default NipponWallPuttyA100;