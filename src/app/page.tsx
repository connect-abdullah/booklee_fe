import IconExample from "@/src/components/IconExample";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome to Bookle FE
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-md">
          A Next.js 15 + TypeScript project using Bun with Tailwind CSS, ESLint,
          Prettier, and React Icons.
        </p>
        <IconExample />
      </main>
    </div>
  );
}
