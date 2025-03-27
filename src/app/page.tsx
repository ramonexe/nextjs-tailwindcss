import Link from "next/link";

export const metadata = {
    title: "Ramon Garcia - Portfólio",
    description: "Portfólio de Ramon Dos Santos Garcia",
};

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="flex justify-center sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="font-bold text-xl text-accent">
                        <Link href="/">Ramon Dos <span className="text-yellow-500">Santos Garcia</span></Link>
                    </div>
                    <nav className="flex gap-4">
                        <Link href="#sobre" className="hover:text-gray-700">Sobre</Link>
                        <Link href="#habilidades" className="hover:text-accent">Habilidades</Link>
                        <Link href="#projetos" className="hover:text-accent">Projetos</Link>
                        <Link href="#contato" className="hover:text-accent">Contato</Link>
                    </nav>
                </div>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center">
                <section id="hero" className="py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 space-y-4">
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap bg-yellow-500" data-v0-t="badge">
                            Disponível para trabalho
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Desenvolvedor Front-end <span className="text-yellow-500">Criativo</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Transformando ideias em experiências digitais incríveis com código limpo e design moderno.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button className="px-6 py-2 cursor-pointer text-white rounded-md font-semibold bg-yellow-500 hover:bg-yellow-600 transition-colors">Entre em contato</button>
                            <button className="px-6 py-2 bg-transparent cursor-pointer border border-accent text-accent rounded-md font-semibold hover:bg-accent hover:text-white transition-colors">Ver projetos</button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-500 overflow-hidden border-4 border-yellow-500">
                            <img src="https://avatars.githubusercontent.com/u/143695500?v=4" alt="Desenvolvedor Front-end" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}