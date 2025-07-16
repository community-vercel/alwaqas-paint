import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Clear-Wood-Lacquer.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-timber-finish-cw-lacquer';

export const metadata = {
  title: "Nippon Timber Finish C W Lacquer | Alwaqas Paint",
  description: "Premium quality top coat for sealed wood surfaces, offering a hard, scratchproof, and glossy finish with excellent resistance to stains.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Timber Finish C W Lacquer | Alwaqas Paint",
    description: "Durable, glossy lacquer for wood surfaces with high flexibility and resistance to water, tea, and beverage stains.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Timber Finish C W Lacquer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Timber Finish C W Lacquer | Alwaqas Paint",
    description: "Glossy, scratchproof lacquer for wood surfaces with excellent durability and stain resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Timber Finish C W Lacquer Product",
  }
};

const NipponTimberFinishCWLacquer = () => {
  const productName = "Nippon Timber Finish C W Lacquer";
  const productDescription = "A premium quality top coat for sealed wood surfaces that provides a hard, scratchproof and glossy finish. With good flexibility, the Nippon Timber Finish Clear Wood Lacquer has a long life and can withhold without cracking. It possesses excellent resistance to water, tea and beverage stains.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Clear-Wood-Lacquer.png"
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
          "Hard, scratchproof finish",
          "High flexibility",
          "Excellent stain resistance",
          "Glossy appearance"
        ]
      }
      highlights={
        [
          "Durable finish",
          "Provides enhanced glazed covering",
          "Water and beverage stain resistance"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "2-3 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Glossy" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-Wood-Range-Timber-Finish-Clear-Wood-Lacquer-TDS_compressed.pdf"
      shadeCardsUrl=""
    />
  );
};

export default NipponTimberFinishCWLacquer;