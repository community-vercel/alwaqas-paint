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
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-hi-bond-acrylic-putty';

export const metadata = {
  title: "Nippon Hi-Bond Acrylic Putty | Alwaqas Paint",
  description: "Premium acrylic-based putty for filling cracks and leveling rough cement walls with a smooth, durable finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Hi-Bond Acrylic Putty | Alwaqas Paint",
    description: "High-quality acrylic putty for smooth, long-lasting surfaces, ideal for cement and plaster applications.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Hi-Bond Acrylic Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Hi-Bond Acrylic Putty | Alwaqas Paint",
    description: "Acrylic-based putty with excellent adhesion and abrasion resistance for smooth wall finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Hi-Bond Acrylic Putty Product",
  }
};

const NipponHiBondAcrylicPutty = () => {
  const productName = "Nippon Hi-Bond Acrylic Putty";
  const productDescription = "A premium quality readymade acrylic-based putty with an excellent smooth finish which serves as a filler/leveller in a paint system. Specially formulated for filling cracks, levelling rough porous cement walls, plastering and filling defective surfaces. Hi-Bond Acrylic Putty makes surfaces last longer.";

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
      features={[
        "Improved coverage",
        "Smooth finish",
        "Excellent abrasion resistance",
        "Strong adhesion",
        "Water resistant"
      ]}
      highlights={[
        "Ideal for filling cracks and leveling surfaces",
        "Enhances surface durability",
        "Easy to apply on cement and plaster",
        "Water-based formulation",
        "Smooth, long-lasting finish",
        "Environmentally friendly"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Putty-Hi-Bond-Acrylic-Putty-TDS (1)_compressed.pdf"
    />
  );
};

export default NipponHiBondAcrylicPutty;