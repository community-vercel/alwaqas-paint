import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Timber-Finish-Wood-Sealer-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-timber-finish-wood-sealer';

export const metadata = {
  title: "Nippon Timber Finish Wood Sealer | Alwaqas Paint",
  description: "Quick-drying wood sealer that penetrates wood pores, providing a smooth surface for topcoat application with fungus resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Timber Finish Wood Sealer | Alwaqas Paint",
    description: "High-quality wood sealer for smooth, durable surfaces, ideal for dry and seasoned wood with excellent fungus resistance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Timber Finish Wood Sealer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Timber Finish Wood Sealer | Alwaqas Paint",
    description: "Quick-drying sealer for wood surfaces, ensuring smooth topcoat application and fungus resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Timber Finish Wood Sealer Product",
  }
};

const NipponTimberFinishWoodSealer = () => {
  const productName = "Nippon Timber Finish Wood Sealer";
  const productDescription = "An excellent quick drying wood sealer, Nippon Timber Finish Wood Sealer penetrates the pores of wood and seals the wood surface. After sanding it provides smooth surface for top coat application and also prevents the top coat from sinking.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Timber-Finish-Wood-Sealer-1.png"
      category="Wood & Metal"
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
          "Quick-drying formulation",
          "Penetrates wood pores",
          "Smooth surface for topcoat",
          "Prevents topcoat sinking"
        ]
      }
      highlights={
        [
          "Provides smooth surface",
          "Perfect for dry and seasoned wood",
          "Fungus resistant"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Matte" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-Wood-Range-Timber-Finish-Wood-Sealer_compressed.pdf"
    />
  );
};

export default NipponTimberFinishWoodSealer;