import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0", // Change this when image updates
  baseImageUrl: "https://www.alwaqaspaint.com/Brilliance-Matt-Enamel-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-brilliance-matt-enamel';

export const metadata = {
  title: "Nippon Brilliance Matt Enamel | Alwaqas Paint",
  description: "Premium quality anti-fungal enamel for interior walls, wood and metal with luxurious smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Brilliance Matt Enamel | Alwaqas Paint",
    description: "Anti-fungal enamel with stain-resisting properties, ideal for kitchens, bathrooms and high-traffic areas.",
    url: pageUrl,
    type: "product",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Brilliance Matt Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Brilliance Matt Enamel | Alwaqas Paint",
    description: "Premium anti-fungal enamel with luxurious matt finish",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Brilliance Matt Enamel Product",
  }
};

const NipponHiBondWall = () => {
  const productName = "Nippon Brilliance Matt Enamel";
  const productDescription = "Nippon Brilliance Matt Enamel is a premium quality anti-fungal enamel recommended for interior walls, wood and metal. It forms a luxurious smooth matt finish that is highly washable. With its stain-resisting properties it is extremely suitable for kitchens, bathrooms, corridors and staircases.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Brilliance-Matt-Enamel-1.png"
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
                alt="Fungus resistant icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Durable against harsh weather",
        "Excellent dirt resistance",
        "Anti-fungal and anti-algal",
        "Alkali-resistant"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Brilliance-Matt-Enamel-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (8).pdf"
    />
  );
};

export default NipponHiBondWall;