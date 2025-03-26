import Link from "next/link";

export const metadata = {
    title: "Projeto - Dashboard",
    description: "Essa é a descrição da minha página para SEO",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="py-4">
                <h1 className="text-center text-2xl font-bold">Dashboard</h1>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center">
                <Link href="/" className="bg-white hover:bg-sky-700 duration-100 ease-in text-black rounded-xl p-2 font-semibold">
                    Página Inicial
                </Link>
            </main>
        </div>
    );
}