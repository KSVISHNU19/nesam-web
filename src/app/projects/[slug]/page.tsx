import React from "react";
import { notFound } from "next/navigation";
import { projectsData, getProjectBySlug } from "@/data/projects";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";

// Define segment parameters to statically pre-render all 30 projects
export async function generateStaticParams() {
  return projectsData.map((proj) => ({
    slug: proj.slug,
  }));
}

// Generate dynamic metadata for proper SEO on each project detail page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} Portfolio Showroom | Nesam`,
    description: `${project.description} Discover the installation breakdown, materials used, and client feedback for this premium project.`,
    openGraph: {
      title: `${project.name} | Completed Project Showcase`,
      description: project.description,
      images: [
        {
          url: project.images[0],
          width: 800,
          height: 600,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Retrieve project details
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        <ProjectDetailClient project={project} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
