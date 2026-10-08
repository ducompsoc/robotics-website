import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import Logo from "@/component/logo";
import { cn } from "@/lib/utils";

function ButtonLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      className={cn(
        "w-fit h-fit theme-primary p-10 rounded-3xl transition duration-500 ease-out hover:scale-110",
        className,
      )}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-center gap-5 p-10 text-6xl">
        <Logo className="text-8xl" />
        <h1 className="font-bold inline-block max-w-full">Durham Robotics</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start text-5xl gap-10">
        <div className="flex items-center justify-center py-20">
          <ButtonLink href="https://drive.google.com/drive/folders/18HcgBb-BlYEPk7QOGgEVmGcI9HyJz8fa" className="theme-contrast glow-warm">
            Session Material
          </ButtonLink>
        </div>
        <div className="flex flex-row gap-10 p-10">
          <ButtonLink href="https://discord.gg/NW5sPcCgfk">
            <FontAwesomeIcon icon={faDiscord} />
          </ButtonLink>
          <ButtonLink href="https://instagram.com/du_robotics/">
            <FontAwesomeIcon icon={faInstagram} />
          </ButtonLink>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLink
              href="https://forms.gle/ZYESVUPDZFtXi4zy5"
              className="theme-primary"
          >
            Join the Exec
          </ButtonLink>
        </div>
      </main>
    </>
  );
}
