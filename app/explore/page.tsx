export default function explore() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">  
            <main className="flex-grow mx-auto max-w-5xl px-6 py-10">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Jelajahi Novel</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <header>
                        <a href="../" className="text-xl font-semibold text-indigo-600 hover:underline">Home</a>
                        <a href="../menu" className="ml-4 text-xl font-semibold text-indigo-600 hover:underline">Menu</a>
                        <a href="../blog" className="ml-4 text-xl font-semibold text-indigo-600 hover:underline">Blog</a>
                    </header>
                    {/* Placeholder for novel cards */}
                    {[...Array(9)].map((_, index) => (
                        <div key={index} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="h-48 w-full bg-zinc-300 dark:bg-zinc-700 rounded-md mb-4"></div>
            <p className="text-center">Cover Image</p>
                            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Judul Novel {index + 1}</h2>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Deskripsi singkat tentang novel ini yang menarik pembaca untuk menjelajahi lebih lanjut.</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}