import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Vnilex-5100.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-vinilex-5100-wall-sealer';

export const metadata = {
  title: "Nippon Vinilex 5100 Wall Sealer",
  description: "Acrylic-based wall sealer for exterior walls, protecting against mild alkalinity and efflorescence.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Vinilex 5100 Wall Sealer | Alwaqas Paint",
    description: "Protects new and repainted exterior walls from efflorescence with an acrylic-based, fungus-resistant formula.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Vinilex 5100 Wall Sealer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Vinilex 5100 Wall Sealer | Alwaqas Paint",
    description: "Acrylic wall sealer for exterior surfaces, offering excellent efflorescence resistance and low VOC.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Vinilex 5100 Wall Sealer Product",
  }
};

const NipponVinilex5100WallSealer = () => {
  const productName = "Nippon Vinilex 5100 Wall Sealer";
  const productDescription = "Nippon Vinilex 5100 Wall Sealer is an acrylic based wall sealer. It is specially formulated to protect finishing coats against the effects of mild alkalinity and efflorescence. It is best used on exterior walls, plastered walls, ceilings, brickwork, hard and soft board and asbestos.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Vnilex-5100.png"
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
            <div className="w-10 h-16">
              <Image 
                src="/low_voc.png"
                alt="Low VOC Icon"
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
          "Acrylic-based formulation",
          "Protects against efflorescence",
          "Low VOC",
          "Suitable for exterior surfaces"
        ]
      }
      highlights={
        [
          "Good efflorescence resistance",
          "Good for new walls and repainting",
          "For exterior use"
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
      technicalDataSheetUrl="/pdf/Vinilex-5100-Wall-Sealer-1.pdf"
    />
  );
};

export default NipponVinilex5100WallSealer;