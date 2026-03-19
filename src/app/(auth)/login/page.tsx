
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

     
    </main>
  );
}