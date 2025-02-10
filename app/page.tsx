import { benefits } from "@/constants/benefits";
import { offers } from "@/constants/offers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="pb-2 lg:pb-4 flex flex-col gap-8 items-center bg-white">
        <Image
          src="/assets/images/thumbnail.png"
          alt="thumbnail"
          width={1920}
          height={1080}
          className="w-full object-contain"
        />
        <div className="px-2 lg:px-4 mx-auto sm:max-w-2xl lg:max-w-5xl text-center">
          <p className="mb-4 text-justify">
            SR12 Herbal Kosmetik merupakan perusahaan yang bergerak dibidang
            Herbal dan Skincare berdiri pada tahun 2015, mempunyai visi yang
            besar untuk memberikan nilai manfaat bagi semua orang, telah membawa
            perusahaan ini bertumbuh dengan cepat dan disambut baik oleh
            masyarakat.
          </p>
          <iframe
            src="https://www.youtube.com/embed/fyl9P6CP9fg"
            allowFullScreen
            className="mb-8 w-full aspect-video"
          />
          <Link
            href="https://api.whatsapp.com/send/?phone=6281332767575"
            target="_blank"
            className="inline-flex bg-green-500 text-white rounded-full px-7 py-3.5 font-bold"
          >
            Chat Whatsapp
          </Link>
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Produk Terlaris
        </h3>
        <div className="px-2 lg:px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
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
          Kategori Produk
        </h3>
        <div className="px-2 lg:px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
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
          {benefits.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="max-w-md min-[450px]:basis-1/2 md:basis-1/3 flex flex-col items-center text-center min-[450px]:p-4 md:p-8"
            >
              <Icon size={50} className="text-red-500" />
              <h4 className="text-xl lg:text-2xl text-red-400/90 font-semibold">
                {title}
              </h4>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Paket Mitra
        </h3>
        <div className="w-full flex flex-wrap justify-center bg-transparent">
          {offers.map(
            ({
              title,
              price,
              amplifier,
              discount,
              descriptions,
              url,
              recommended,
            }) => (
              <div
                key={title}
                className="basis-full sm:basis-1/2 lg:basis-1/3 p-2 max-xl:max-w-md xl:p-4 bg-transparent"
              >
                <div className="relative overflow-clip text-neutral-800 rounded-2xl flex flex-col items-center text-center p-4 xl:p-8 shadow-[0_10px_60px_10px_theme(colors.indigo.200)]">
                  <div
                    className={`w-48 aspect-square absolute top-0 right-0 -translate-y-12 translate-x-12 grid place-items-center ${
                      !recommended && "hidden"
                    }`}
                  >
                    <span className="py-1 w-full rotate-45 uppercase text-xs font-semibold tracking-tighter text-white text-center bg-red-500 shadow-lg">
                      Recommended
                    </span>
                  </div>
                  <h4 className="text-xl lg:text-2xl text-red-500 font-black">
                    {title}
                  </h4>
                  <p className="text-2xl lg:text-4xl font-bold">
                    <s className="text-xl lg:text-2xl">
                      Rp. {price}
                      {amplifier}
                    </s>{" "}
                    Rp.{" "}
                    {price -
                      (price * Math.min(100, Math.max(0, discount))) / 100}
                    {amplifier}
                  </p>
                  <ul className="mt-4 ">
                    {descriptions.map((description) => (
                      <li key={description} className="list-disc text-left">
                        {description}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={url}
                    target="_blank"
                    className="mt-8 w-full bg-red-500 rounded-full px-7 py-3.5 font-bold text-center text-white"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Kata Mereka Tentang SR12
        </h3>
        <div className="px-2 lg:px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={`/assets/images/testimonial/${i + 1}.webp`}
              alt="produk"
              width={720}
              height={720}
            />
          ))}
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=6281332767575"
          target="_blank"
          className="inline-flex bg-green-500 text-white rounded-full px-7 py-3.5 font-bold"
        >
          Chat Whatsapp
        </Link>

        <h3 className="text-center font-bold text-2xl lg:text-4xl">
          Pemenang Turkey
        </h3>
        <div className="px-2 lg:px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={`/assets/images/winner/${i + 1}.webp`}
              alt="produk"
              width={720}
              height={720}
            />
          ))}
        </div>
      </main>
      <footer className="py-4 flex gap-6 flex-wrap items-center justify-center bg-red-800 text-white font-bold">
        Copyright © 2025
      </footer>
    </>
  );
}
