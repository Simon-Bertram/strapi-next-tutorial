import Image from "next/image";

export interface TestimonialBlock {
  __component: "blocks.testimonial";
  id: number;
  authorName: string;
  quote: string;
  photo: {
    id: number;
    documentId: string;
    alternativeText: string | null;
    name: string;
    url: string;
  };
}

export function TestimonialBlock({ block }: { block: TestimonialBlock }) {
  const imageUrl = `${
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337"
  }${block?.photo?.url}`;

  return (
    <figure>
      <div>
        <div>
          <Image
            src={imageUrl}
            alt={block.photo.alternativeText || block.authorName}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-center"
          />
        </div>
      </div>
    </figure>
  );
}
