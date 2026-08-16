// ── People data ────────────────────────────────────────────────────────────
// Add, remove, or reorder team members here.
// To move someone to alumni: change status to "alumni".
// photo paths are relative to /public — e.g. "/images/people/people_wolff.png"

export interface Person {
  id: string;
  name: string;
  role: string;
  photo: string;
  status: "current" | "alumni";
}

export const people: Person[] = [
  {
    id: "wolff",
    name: "Dr. Phillip Wolff",
    role: "Lab Director",
    photo: "/images/people/people_wolff.png",
    status: "current",
  },
  {
    id: "zarina",
    name: "Dr. Zarina Bilgrami",
    role: "Post Doc",
    photo: "/images/people/people_zarina.png",
    status: "current",
  },
  {
    id: "linying",
    name: "Linying Li",
    role: "Doctoral Student",
    photo: "/images/people/people_linying.png",
    status: "current",
  },
  {
    id: "nan",
    name: "Nan Jiang",
    role: "Doctoral Student",
    photo: "/images/people/people_nan.png",
    status: "current",
  },
  {
    id: "ryan",
    name: "Ryan McArdle",
    role: "Senior Software Engineer",
    photo: "/images/people/people_ryan.png",
    status: "current",
  },
  {
    id: "ben",
    name: "Ben Dixon",
    role: "Research Software Engineer",
    photo: "/images/people/people_ben.png",
    status: "current",
  },
  {
    id: "annie",
    name: "Annie He",
    role: "Research Software Engineer",
    photo: "/images/people/people_annie.png",
    status: "current",
  },
  {
    id: "jason",
    name: "Jason Zhang",
    role: "Undergraduate Research Assistant",
    photo: "/images/people/people_jason.png",
    status: "current",
  },
  {
    id: "mannu",
    name: "Maanu Obalapuram",
    role: "Undergraduate Research Assistant",
    photo: "/images/people/people_mannu.png",
    status: "current",
  },
  {
    id: "ramlh",
    name: "Ramlah Amer",
    role: "Undergraduate Research Assistant",
    photo: "/images/people/people_ramlh.png",
    status: "current",
  },
];
