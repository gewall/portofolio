import PageLayout from "@/app/(landing)/_components/PageLayout";
import React from "react";
import Cover from "./_sections/cover";
import Description from "./_sections/description";
import { GetAllProjects, GetProjectBySlug } from "@/lib/api/projects";
import { Project as iProject } from "@/lib/types/project.type";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Project | Algi Nugraha",
//   description: "Portofolio Algi Nugraha",
// };
export const dynamic = "force-static";
export type IImage = {
  src: string;
  alt: string;
};

type Params = Promise<{ slug: string }>;

export const revalidate = 3600;
export async function generateStaticParams() {
  const data = await GetAllProjects();
  const _data = data.data as iProject[];
  // console.log(data);

  return _data.map((_: iProject) => ({ slug: _.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const data = await GetProjectBySlug(slug);
  const { title } = data.data as iProject;
  // console.log(post, "title");

  return {
    title: title + " | Algi Nugraha",
  };
}

const Project = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const req = await GetProjectBySlug(slug);
  const data = await req.data;

  return (
    <PageLayout>
      <Cover src={data.cover_url} alt={data.slug} />
      <Description
        description={data.description}
        download_link={data.download_link}
        title={data.title}
        classification={data.classification}
        images={data.images?.split(",")}
        cover_url={data.cover_url}
        slug={data.slug}
      />
    </PageLayout>
  );
};

export default Project;
