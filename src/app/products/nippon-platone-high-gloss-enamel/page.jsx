import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/platone-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-platone-high-gloss-enamel';

export const metadata = {
  title: "Nippon Platone High Gloss Enamel | Alwaqas Paint",
  description: "Superior quality alkyd-based enamel paint for vibrant, long-lasting finishes on interior and exterior metal and wood surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Platone High Gloss Enamel | Alwaqas Paint",
    description: "High-gloss enamel paint with excellent weather and corrosion resistance, ideal for metal and wood surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Platone High Gloss Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Platone High Gloss Enamel | Alwaqas Paint",
    description: "Durable, high-gloss enamel paint with anti-fungal properties for metal and wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Platone High Gloss Enamel Product",
  }
};

const NipponPlatoneHighGlossEnamel = () => {
  const productName = "Nippon Platone High Gloss Enamel";
  const productDescription = "Nippon Platone High Gloss is a superior quality alkyd-based enamel paint, suitable for metal and wood surfaces (interior or exterior).";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/platone-1.png"
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
          "Vibrant, long-lasting colors",
          "Excellent weather resistance",
          "Corrosion resistance for metals",
          "Smooth high-gloss finish"
        ]
      }
      highlights={
        [
          "Long lasting and vibrant colors",
          "Very good resistance against harsh weather",
          "Very good resistance against corrosion on metals",
          "Anti-fungal"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "4-6 hours" },
          { name: "Recoat Time", value: "6-8 hours" },
          { name: "Finish", value: "High Gloss" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-Platone-High-Gloss-Enamel-TDS-00000002_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (9).pdf"
    />
  );
};

export default NipponPlatoneHighGlossEnamel;