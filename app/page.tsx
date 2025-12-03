import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-start flex-col bg-zinc-50 font-sans dark:bg-black bg-repeat" style={{minHeight:'100vh',backgroundImage: 'url(/background_img.png)',  backgroundColor: 'rgba(0, 0, 0, 0.6)', backgroundBlendMode: 'multiply' }}>
      <main className="text-sky-50 flex w-full flex-col items-center px-16  sm:items-start mt-10">
        <div className='flex w-full flex-row items-center px-16  sm:items-start mt-10'>
          <h1 className='text-sky-50 font-bold text-4xl border-8 border-teal-600 rounded-lg p-8 flex-4/7 text-center'>Meine Homepage</h1>
          <Image src="/Profilbild-cropped.png" alt="Logo" width={100} height={100} className='rounded-full m-2 max-w-30 flex-3/7' />
        </div>
        <div className='text-sky-50 sm:items-start p-8 px-16 text-2xl text-center'>
            <p>Das ist meine (wunderschöne) Seite, die <var>root</var> meiner Domain ist, die ich nur für private Zwecke verwende.</p>
        </div>
      </main>
      <footer className="static">
        <a className="text-blue-500 absolute bottom-10 text-lg" href="/about">Impressum</a>
      </footer>
    </div>
  );
}