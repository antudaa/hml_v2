import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, YouTubeIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary">
      <div className="mx-auto flex max-w-full flex-col-reverse items-center gap-y-4 px-4 py-6 text-center md:px-10 lg:grid lg:grid-cols-4 lg:items-center lg:gap-x-6 lg:px-16 xl:px-24">
        <div className="lg:flex lg:justify-start">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                aria-label="Visit HML on LinkedIn"
                className="flex rounded-md bg-[#0077B5] p-2 text-white transition hover:opacity-90"
                href="https://www.linkedin.com/company/hml-korea/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                aria-label="Visit HML on YouTube"
                className="flex rounded-md bg-red-600 px-1 py-2 text-white transition hover:opacity-90"
                href="https://www.youtube.com/@HML-Korea"
                rel="noreferrer"
                target="_blank"
              >
                <YouTubeIcon className="size-6" />
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 lg:flex lg:justify-center">
          <div className="font-light text-white">
            <p>
              11th Floor, Kwanghwamoon Building, 149 Sejong-daero, Jongno-gu,
              Seoul, Republic of Korea 03186
            </p>
            <p>
              TEL: +82-2-752-3400, FAX: +82-2-6280-3402, EMAIL:
              {" "}
              marketing@hi-megaline.com
            </p>
            <p>© {year} HML All rights reserved</p>
          </div>
        </div>

        <div className="flex items-center lg:justify-end">
          <Link
            href="/"
            className="flex items-center px-2 py-1 text-white transition-opacity hover:opacity-90"
          >
            <Image
              alt="HML logo"
              className="h-16 w-auto object-contain"
              height={200}
              src="/logo/HML_Logo_White.png"
              width={900}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
