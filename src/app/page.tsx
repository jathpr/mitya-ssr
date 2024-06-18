import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image width={600} height={600} src="/face.jpg" alt="My face" />
        <span className="relative top-4 left-1/3">Kuku</span>
      </main>
    </>
  );
}

// position: relative;
// /* right: 10px; */
// top: 20px;
// left: 30vw;
