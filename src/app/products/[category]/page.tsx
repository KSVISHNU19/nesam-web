import React from "react";
import { notFound } from "next/navigation";
import { categoriesData, getProductsByCategory } from "@/data/products";
import CategoryClient from "@/components/sections/CategoryClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";

// Define segment parameters to statically pre-render all categories
export async function generateStaticParams() {
  return categoriesData.map((cat) => ({
    category: cat.slug,
  }));
}

// Generate dynamic metadata for proper SEO on each category
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const catObj = categoriesData.find((c) => c.slug === category);
  
  if (!catObj) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${catObj.name} Premium Showroom | Nesam`,
    description: `${catObj.description} Explore our elite collection of architectural building materials.`,
    openGraph: {
      title: `${catObj.name} Premium Showroom | Nesam`,
      description: catObj.description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  
  // Find category data
  const catObj = categoriesData.find((c) => c.slug === category);
  if (!catObj) {
    notFound();
  }

  // Load products in this category
  const products = getProductsByCategory(category);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        <CategoryClient category={catObj} products={products} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
