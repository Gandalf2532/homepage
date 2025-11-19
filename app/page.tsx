import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center px-16 bg-white dark:bg-black sm:items-start mt-10">
        <div className='flex w-full flex-row items-center px-16 bg-white dark:bg-black sm:items-start mt-10'>
          <h1 className='font-bold text-4xl border-8 border-teal-600 rounded-lg p-8 flex-4/7 text-center'>Meine Homepage</h1>
          <Image src="/Profilbild-cropped.png" alt="Logo" width={100} height={100} className='rounded-full m-2 max-w-30 flex-3/7' />
        </div>
        <div className='sm:items-start p-8 px-16 text-2xl text-center text-blue-500'>
            <p>Das ist meine (wunderschöne) seite, die <var>root</var> meiner Domain ist, die ich nur für private Zwecke verwende.</p>
        </div>
      </main>
    </div>
  );
}