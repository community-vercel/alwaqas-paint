import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/weather-bond.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-weatherbond';

export const metadata = {
  title: "Nippon Weatherbond | Alwaqas Paint",
  description: "Highly durable exterior paint with excellent resistance to harsh weather, dirt, fungus, and UV fading.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Weatherbond ",
    description: "Protect your exterior walls with Nippon Weatherbond, offering superior resistance to weather, fungus, and efflorescence.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Weatherbond Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Weatherbond | Alwaqas Paint",
    description: "Durable exterior paint with UV protection and resistance to dirt, fungus, and flaking.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Weatherbond Product",
  }
};

const NipponWeatherbond = () => {
  const productName = "Nippon Weatherbond";
  const productDescription = "Nippon Weatherbond is a highly durable paint that adheres well to all types of exterior wall surfaces. It is formulated to provide the ultimate performance – to protect your home against harsh weather conditions, dirt and fungus.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/weather-bond.png"
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
          "Excellent weather resistance",
          "Strong adhesion to exterior surfaces",
          "Fungus and algae resistance",
          "UV protection for lasting colors"
        ]
      }
      highlights={
        [
          "Durable against harsh weather",
          "Tougher resistance against dirt, fungus, algae, flaking and efflorescence",
          "Peel, flake, fade & chalk resistance",
          "UV protection for longer-lasting colours",
          "No added lead or mercury"
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
      technicalDataSheetUrl="/pdf/Weatherbond-Exterior_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (1).pdf"
    />
  );
};

export default NipponWeatherbond;