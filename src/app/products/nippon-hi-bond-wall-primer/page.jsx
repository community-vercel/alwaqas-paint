import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Hi-bond.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-hi-bond-wall-primer';

export const metadata = {
  title: "Nippon Hi-Bond Wall Primer | Alwaqas Paint",
  description: "Solvent-based primer with excellent alkali resistance, providing a smooth surface for topcoat application on new and painted walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Hi-Bond Wall Primer | Alwaqas Paint",
    description: "High-performance solvent-based primer with strong adhesion and alkali resistance for durable wall surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Hi-Bond Wall Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Hi-Bond Wall Primer | Alwaqas Paint",
    description: "Solvent-based primer for excellent alkali resistance and smooth topcoat application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Hi-Bond Wall Primer Product",
  }
};

const NipponHiBondWallPrimer = () => {
  const productName = "Nippon Hi-Bond Wall Primer";
  const productDescription = "Nippon Hi-Bond Wall Primer is a solvent-based primer that is specially formulated to provide excellent alkali resistance. It forms an excellent barrier coat against alkalinity for both new and already painted walls and provides a good smooth surface for the painting of a subsequent topcoat.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Hi-bond.png"
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
            <div className="w-10 h-16">
              <Image 
                src="/excellent_adhesion.png"
                alt="Excellent Adhesion Icon"
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
        "Excellent alkali resistance",
        "Strong adhesion",
        "Smooth surface preparation",
        "Suitable for new and painted walls"
      ]}
      highlights={[
        "Strong adhesion",
        "Alkali resistance",
        "Solvent-based",
        "Prepares surfaces for topcoat"
      ]}
      specifications={[
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-3 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matte" }
      ]}
      technicalDataSheetUrl="/pdf/HI-BOND-WALL-PRIMER_compressed.pdf"
    />
  );
};

export default NipponHiBondWallPrimer;