import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-5 py-16 md:py-24 max-w-4xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  );
}
