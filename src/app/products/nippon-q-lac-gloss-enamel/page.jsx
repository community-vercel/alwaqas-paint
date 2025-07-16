import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Q-lac.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-q-lac-gloss-enamel';

export const metadata = {
  title: "Nippon Q-Lac Gloss Enamel | Alwaqas Paint",
  description: "High-gloss enamel paint for wood and metal surfaces, suitable for both interior and exterior applications.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Q-Lac Gloss Enamel | Alwaqas Paint",
    description: "Durable, high-gloss enamel paint with excellent coverage and fungus resistance for wood and metal surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Q-Lac Gloss Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Q-Lac Gloss Enamel | Alwaqas Paint",
    description: "Glossy, durable enamel paint for interior and exterior wood and metal surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Q-Lac Gloss Enamel Product",
  }
};

const NipponQLacGlossEnamel = () => {
  const productName = "Nippon Q-Lac Gloss Enamel";
  const productDescription = "Nippon Q-Lac is specially formulated to give a high gloss finish. It is suitable for both interior and exterior painting of wood and metal surfaces.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Q-lac.png"
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
          "High gloss finish",
          "Suitable for wood and metal",
          "Excellent durability",
          "Easy to apply"
        ]
      }
      highlights={
        [
          "Easy to apply",
          "Forms a smooth, tough paint film",
          "Excellent gloss and durability",
          "Fungus resistant"
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
      technicalDataSheetUrl="/pdf/NPPK-Q-LAC-ENAMEL-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/Q-Enamel-Shade-Card_compressed.pdf"
    />
  );
};

export default NipponQLacGlossEnamel;