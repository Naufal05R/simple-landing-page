import { benefits } from "@/constants/benefits";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 items-center">
        <Image
          src="/assets/images/thumbnail.png"
          alt="thumbnail"
          width={1920}
          height={1080}
          className="w-full object-contain"
        />
        <div className="mx-auto max-w-5xl space-y-4 text-center">
          <iframe
            src="https://www.youtube.com/embed/fyl9P6CP9fg"
            allowFullScreen
            className="w-full aspect-video"
          />
          <p className="text-justify">
            SR12 Herbal Kosmetik merupakan perusahaan yang bergerak dibidang
            Herbal dan Skincare berdiri pada tahun 2015, mempunyai visi yang
            besar untuk memberikan nilai manfaat bagi semua orang, telah membawa
            perusahaan ini bertumbuh dengan cepat dan disambut baik oleh
            masyarakat.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=6281332767575"
            target="_blank"
            className="inline-flex bg-green-500 rounded-full px-7 py-3.5 font-bold"
          >
            Chat Whatsapp
          </Link>
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Produk Terlaris
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={`/assets/images/produk/best-seller/${i + 1}.webp`}
              alt="produk"
              width={720}
              height={720}
            />
          ))}
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Produk Terlaris
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <Image
              key={i}
              src={`/assets/images/produk/${i + 1}.webp`}
              alt="produk"
              width={720}
              height={720}
            />
          ))}
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Keuntungan Gabung Mitra
        </h3>
        <div className="flex flex-wrap justify-center">
          {benefits.map(({ title, description, Icon }, i) => (
            <div
              key={i}
              className="min-[450px]:basis-1/2 md:basis-1/3 flex flex-col items-center text-center min-[450px]:p-4 md:p-8"
            >
              <Icon size={50} className="text-red-500" />
              <h4 className="text-2xl lg:text-4xl text-red-300 font-medium">
                {title}
              </h4>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Paket Mitra
        </h3>
        <div className="flex flex-wrap justify-center">
          {benefits.map(({ title, description, Icon }, i) => (
            <div
              key={i}
              className="min-[450px]:basis-1/2 md:basis-1/3 flex flex-col items-center text-center min-[450px]:p-4 md:p-8"
            >
              <Icon size={50} className="text-red-500" />
              <h4 className="text-2xl lg:text-4xl text-red-300 font-medium">
                {title}
              </h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
