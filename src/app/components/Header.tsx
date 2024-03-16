import Image from "next/image";
import headerContent from "../content/header.json";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export default function Header() {
  return (
    <div className="min-h-screen flex flex-row gap-36">
      <div className="text-center flex-2">
        <h1 className={`${roboto.className} text-5xl font-semibold`}>
          {headerContent.welcome}
        </h1>
        <p className="mt-4">{headerContent.intro}</p>
      </div>
      <div className="min-w-60 flex-1">
        <Image
          className="rounded-full"
          src="/profile.webp"
          width={500}
          height={500}
          alt="Markus Tyrkkö"
        />
        <div></div>
      </div>
    </div>
  );
}
