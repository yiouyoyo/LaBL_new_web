import Image from "next/image";
import { people } from "@/data/people";

function PersonCard({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circular headshot */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <p
        className="text-sm font-semibold text-navy leading-snug mb-1"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        {name}
      </p>

      {/* Role */}
      <p className="text-xs text-navy/55 leading-snug">
        {role}
      </p>
    </div>
  );
}

export default function People() {
  const current = people.filter((p) => p.status === "current");

  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 py-20">

      {/* Section heading */}
      <h1
        className="text-5xl md:text-6xl font-bold text-navy mb-16"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        Meet the Team
      </h1>

      {/* Grid — 5 cols desktop, 3 tablet, 2 mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        {current.map((person) => (
          <PersonCard
            key={person.id}
            name={person.name}
            role={person.role}
            photo={person.photo}
          />
        ))}
      </div>

    </div>
  );
}
