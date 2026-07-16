import React from "react";
import { notFound } from "next/navigation";
import { categoriesData, productsData, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/sections/ProductDetailClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";

// Define segment parameters to statically pre-render all 308 products
export async function generateStaticParams() {
  return productsData.map((prod) => ({
    category: prod.category,
    slug: prod.slug,
  }));
}

// Generate dynamic metadata for proper SEO on each product detail page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const catObj = categoriesData.find((c) => c.slug === product.category);

  return {
    title: `${product.name} | ${product.code} | Nesam Premium Showroom`,
    description: `${product.description} Premium grade ${catObj?.name || product.category} model by Nesam. View specifications and key applications.`,
    openGraph: {
      title: `${product.name} | Code: ${product.code}`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  // Retrieve product details
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) {
    notFound();
  }

  // Find category data
  const catObj = categoriesData.find((c) => c.slug === category);
  if (!catObj) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        <ProductDetailClient product={product} category={catObj} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
