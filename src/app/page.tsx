import Link from "next/link";

export const metadata = {
    title: "Projeto - Inicio",
    description: "Essa é a descrição da minha página para SEO",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="py-4">
                <h1 className="text-center text-2xl font-bold">Página Inicial</h1>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center">
                <Link href="/dashboard" className="bg-white hover:bg-sky-700 duration-100 ease-in text-black rounded-xl p-2 font-semibold">
                    Dashboard
                </Link>
            </main>
        </div>
    );
}