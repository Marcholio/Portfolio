import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/background.webp')] text-white bg-cover bg-fixed">
      <div className="max-w-screen-md">
        <Header />
      </div>
    </main>
  );
}
