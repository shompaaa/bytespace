import { CourseCard } from "@/components/shared/CourseCard";
import { Ornament } from "@/components/shared/Ornament";
import { HappyStudentsCard } from "@/components/shared/StatCards";
import { courses } from "@/content/home";
import type { AuthMode } from "@/content/auth";
import { cn } from "@/lib/utils";

/**
 * Decorative collage beside the auth form, laid out on the 698x648 Figma artboard.
 * Desktop only; the only difference between Login and Register is the white coil's x position.
 */
export function AuthCollage({ mode }: { mode: AuthMode }) {
  return (
    <div aria-hidden className="relative mt-2 hidden h-162 w-174.5 max-w-full xl:block">
      <CourseCard course={courses[1]} moreTone="dark" className="pointer-events-none absolute top-42 left-0" />
      <CourseCard
        course={courses[2]}
        moreTone="dark"
        className="pointer-events-none absolute top-19.75 left-27.75"
      />
      <HappyStudentsCard lime compact className="absolute top-130 left-56.5" />
      <Ornament
        shape="coil"
        tint="white"
        size={175}
        flip
        className={cn("top-101", mode === "register" ? "left-130.75" : "left-87")}
      />
      <Ornament shape="torus" tint="lime" size={146} className="top-17.5 left-7.25" />
      <Ornament shape="pyramid" tint="lime" size={188} className="top-114.5 -left-6.25" />
    </div>
  );
}
