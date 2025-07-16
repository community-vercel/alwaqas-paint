import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Matt-Lacquer.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-timber-finish-matt-lacquer';

export const metadata = {
  title: "Nippon Timber Finish Matt Lacquer | Alwaqas Paint",
  description: "Premium quality topcoat for sealed wood surfaces, providing a hard, scratchproof, and matt finish with excellent resistance to stains.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Timber Finish Matt Lacquer | Alwaqas Paint",
    description: "Durable matt lacquer for wood surfaces with high flexibility and resistance to water, tea, and beverage stains.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Timber Finish Matt Lacquer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Timber Finish Matt Lacquer | Alwaqas Paint",
    description: "Matt lacquer for wood surfaces with excellent durability and resistance to fungus and alkali.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Timber Finish Matt Lacquer Product",
  }
};

const NipponTimberFinishMattLacquer = () => {
  const productName = "Nippon Timber Finish Matt Lacquer";
  const productDescription = "Nippon Timber Finish Matt Lacquer is a premium quality topcoat NC Matt Lacquer for sealed wood surfaces which provides hard, scratchproof and matt Finish. Good flexibility gives long life performance without cracking. Also Provides excellent resistance to water, tea and beverage stains.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Matt-Lacquer.png"
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
          "Hard, scratchproof matt finish",
          "High flexibility",
          "Excellent stain resistance",
          "Long-lasting performance"
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
          { name: "Finish", value: "Matt" }
        ]
      }
      technicalDataSheetUrl="/pdf/NIPPON-PAINT-TIMBER-FINISH-MATT-LACQUER_compressed.pdf"
      shadeCardsUrl=""
    />
  );
};

export default NipponTimberFinishMattLacquer;