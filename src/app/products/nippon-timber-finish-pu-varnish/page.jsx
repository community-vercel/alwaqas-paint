import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/PU-Varnish-min.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-timber-finish-pu-varnish';

export const metadata = {
  title: "Nippon Timber Finish PU Varnish (Gloss & Matt) ",
  description: "Polyurethane-based varnish for interior and exterior wood surfaces, offering excellent durability and resistance to scratches and chemicals.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Timber Finish PU Varnish (Gloss & Matt)",
    description: "Premium polyurethane varnish with outstanding weathering and abrasion resistance for wood surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Timber Finish PU Varnish Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Timber Finish PU Varnish (Gloss & Matt) | Alwaqas Paint",
    description: "Durable polyurethane varnish for wood surfaces with excellent resistance to fungus, alkali, and scratches.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Timber Finish PU Varnish Product",
  }
};

const NipponTimberFinishPUVarnish = () => {
  const productName = "Nippon Paint Timber Finish PU Varnish (Gloss & Matt)";
  const productDescription = "Nippon Timber Finish PU Varnish (Gloss & Matt) is a single component Polyurethane based for exterior and interior use. It provides outstanding weathering, excellent scratch/abrasion resistance & good chemical resistance.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/PU-Varnish-min.png"
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
          "Polyurethane-based formulation",
          "Outstanding weathering resistance",
          "Excellent scratch and abrasion resistance",
          "Good chemical resistance"
        ]
      }
      highlights={
        [
          "Excellent durability",
          "Exceptional resistance to fungus and alkali"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "2-3 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Gloss & Matt" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPLK-Timber-Finish-PU-Varnish-Gloss-plus-Matt.pdf"
      shadeCardsUrl=""
    />
  );
};

export default NipponTimberFinishPUVarnish;