import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-items-center px-10 ">
      
      {/* Content */}
      <div className="flex flex-1 items-center justify-center gap-20 px-10">
        
        {/* Foto */}
        <div className="shrink-0">
          <div className="h-60 w-60 overflow-hidden rounded-full border-8 border-white">
            <Image
              src="/image.png"
              alt="Foto alix"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Biodata */}
        <div className="max-w-2xl font-semibold">
          <h1 className="mb-2 text-4xl font-bold">
            I am Khair iyhabarsyah
          </h1>

          <p className="mb-4 text-xl text-gray-200">
            Pelajar SMK Telkom Malang
          </p>

          <p className="text-lg leading-relaxed">
          Hi! I'm Khair, a creative and motivated individual who enjoys learning new things and developing new skills. I'm passionate about exploring ideas, taking on new challenges, and creating meaningful work. Through this portfolio, I'd like to showcase my projects, experiences, and learning journey
          </p>
        </div>
      </div>
    </div>
    
  </>
  );
}