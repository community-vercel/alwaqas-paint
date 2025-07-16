import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  // Use static version number (change only when image updates)
  imageVersion: "1.0",
  // Your existing image URL
  baseImageUrl: "https://www.alwaqaspaint.com/Crystal-Matt-Packshot-2-min-1.png",
  // WhatsApp requires explicit dimensions
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-crystal-matt-enamel';

export const metadata = {
  title: "Nippon Crystal Matt Enamel | Alwaqas Paint",
  description: "Premium anti-fungal enamel for interior walls, wood and metal with luxurious smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Crystal Matt Enamel | Alwaqas Paint",
    description: "Highly washable enamel with excellent stain resistance and mid sheen finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Crystal Matt Enamel Product",
        type: "image/png", // Explicit type declaration
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Crystal Matt Enamel | Alwaqas Paint",
    description: "Premium anti-fungal enamel with luxurious matt finish",
    images: [productImageUrl],
  },
  other: {
    // WhatsApp-specific tags
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Crystal Matt Enamel Product",
  }
};

const NipponCrystalMattEnamel = () => {
  const productName = "Nippon Crystal Matt Enamel";
  const productDescription = "Nippon Crystal Matt Enamel is an anti-fungal enamel of premium quality. It is recommended for interior walls, wood and metal. This paint forms a luxurious smooth matt finish that is highly washable with excellent stain resisting properties.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Crystal-Matt-Packshot-2-min-1.png"
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
                priority // Important for above-the-fold images
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Long-lasting",
        "Washable",
        "Fungus resistant",
        "Good scrub resistance",
        "Mid sheen finish"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Crystal-Matt-Enamel-TDS.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (8).pdf"
    />
  );
};

export default NipponCrystalMattEnamel;