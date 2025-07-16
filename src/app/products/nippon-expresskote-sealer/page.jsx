import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/express-stroke-sealer.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-expresskote';

export const metadata = {
  title: "Nippon Expresskote - Surface Preparation Range | Alwaqas Paint",
  description: "Efficiently seals and regulates moisture in cement plaster or concrete, minimizing hairline cracks, peeling, and fungal growth.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Expresskote - Surface Preparation Range | Alwaqas Paint",
    description: "Seals moisture in cement and concrete surfaces, preventing cracks, peeling, and fungal issues with fast-drying, eco-friendly properties.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Expresskote Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Expresskote - Surface Preparation Range | Alwaqas Paint",
    description: "Eco-friendly, fast-drying sealer for cement and concrete surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Expresskote Product",
  }
};

const NipponExpresskote = () => {
  const productName = "Nippon Expresskote - Surface Preparation Range";
  const productDescription = "Efficiently seals and regulates the drying process of the inherent moisture present in the cement plaster or concrete, thus minimizing hairline cracks and peeling, bubbling, fungus, algae, alkali and efflorescence associated with high moisture.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/express-stroke-sealer.png"
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
        "Cement plaster",
        "Precast concrete",
        "Cast in-situ concrete",
        "Brickwork",
        "Hard/Soft Boards",
        "Gypsum Boards",
      ]}
      highlights={[
        "Safe to apply after 3 days of plastering",
        "Shortens waiting time for top coat application",
        "Adheres firmly to concrete and masonry surfaces",
        "Resists water and UV",
        "Easy to apply",
        "Water-based",
        "Anti-fungus",
        "Fast drying",
        "Environmentally friendly"
      ]}
      technicalDataSheetUrl="/pdf/Expresskote-TDS_compressed.pdf"
    />
  );
};

export default NipponExpresskote;