"use client";

import { useParams } from "next/navigation";

function formatSlug(slug: string | string[] | undefined) {
  if (!slug) return "Part";
  const slugStr = Array.isArray(slug) ? slug.join(" ") : slug;
  return slugStr
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProjectPartPage() {
  const params = useParams();
  const { slug } = params;
  const partName = formatSlug(slug);

  return (
    <div>
      <h1 className="lato-regular tracking-tight text-gray-900">{partName}</h1>
      <p className="mt-4 text-lg text-gray-600">
        More details about {partName} will go here.
      </p>
    </div>
  );
}
