import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Group-12958.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-extreme-wall-putty';

export const metadata = {
  title: "Nippon Extreme Wall Putty | Alwaqas Paint",
  description: "Superior water-based wall putty for patching cracks and leveling rough cement walls with a smooth, durable finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Extreme Wall Putty | Alwaqas Paint",
    description: "Water-based filler for smooth, durable wall surfaces, enhancing top coat performance with strong adhesion.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Extreme Wall Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Extreme Wall Putty | Alwaqas Paint",
    description: "High-quality wall putty for smooth, durable finishes on cement and plaster surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Extreme Wall Putty Product",
  }
};

const NipponExtremeWallPutty = () => {
  const productName = "Nippon Extreme Wall Putty";
  const productDescription = "Nippon Extreme Wall Putty is a superior quality water-based filler for patching cracks, levelling uneven rough porous cement walls, plaster work and filling defective surfaces. It provides a super smooth finish and strong adhesion. It has excellent durability, drying and sanding properties which enhances the performance of top coat.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Group-12958.png"
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
      features={[
        "Strong adhesion",
        "Smooth finish",
        "Highly durable",
      ]}
      highlights={[
        "Water-based formulation",
        "Excellent drying and sanding properties",
        "Enhances top coat performance",
        "Ideal for cement and plaster surfaces",
        "Fills cracks and levels uneven surfaces",
        "Environmentally friendly"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Putty-Extreme-Wall-Putty-TDS_compressed.pdf"
    />
  );
};

export default NipponExtremeWallPutty;