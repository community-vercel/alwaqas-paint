import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';
import Head from 'next/head';

const NipponExpresskote = () => {
  const productName = "Nippon ACS Putty";
  const productDescription = " high quality filler for patching cracks, levelling uneven rough porous cement walls, plaster work and filling defective surfaces.";
  
  // Use direct absolute URL to a high-quality image (minimum 300x300 pixels recommended for WhatsApp)
  const productImageUrl = "https://www.alwaqaspaint.com/_next/image?url=%2FACS-Putty-1.png&w=640&q=75";
  const pageUrl = "https://www.alwaqaspaint.com/products/nippon-acs-putty";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{productName} | Alwaqas Paint</title>
        <meta name="title" content={`${productName} | Alwaqas Paint`} />
        <meta name="description" content={productDescription} />

        {/* Open Graph / Facebook & WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${productName} | Alwaqas Paint`} />
        <meta property="og:description" content={productDescription} />
        <meta property="og:image" content={productImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={productName} />
        <meta property="og:site_name" content="Alwaqas Paint" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={`${productName} | Alwaqas Paint`} />
        <meta name="twitter:description" content={productDescription} />
        <meta name="twitter:image" content={productImageUrl} />
        <meta name="twitter:image:alt" content={productName} />

        {/* Additional WhatsApp-specific tags (optional) */}
        <meta property="og:image:secure_url" content={productImageUrl} />
      </Head>

      {/* Rest of your component remains the same */}
      <BaseProductDetail
        productName={productName}
        productImage="/ACS-Putty-1.png"
        category=""
        productDescription={
          <div className="prose max-w-none">
            <p className="mb-4">
              {productDescription}
              The ACS Putty provides a perfect smooth finish which enhances the performance of the top coat. 
              It has excellent workability, drying and sanding properties.
            </p>
            
            <div className="flex flex-row gap-4 justify-center items-center my-4">
              <div className="w-10 h-16">
                <Image 
                  src="/fungus_resistant.png" 
                  alt="fungus_resistant"
                  width={64}
                  height={64}
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        }
        features={[
          "Strong adhesion",
          "Smooth finish",
          "Highly durable",
        ]}
        technicalDataSheetUrl="/pdf/NPPK-Putty-ACS-Putty-TDS_compressed.pdf"
      />
    </>
  );
};

export default NipponExpresskote;

