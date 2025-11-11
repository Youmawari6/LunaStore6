export default function Auth() {
return (
<div className="max-w-md mx-auto mt-20 bg-[#071833] p-6 rounded-lg">
<h2 className="text-2xl font-semibold mb-4">Login / Register</h2>
<input placeholder="Email" className="w-full p-2 mb-3 bg-[#0a1b3a] rounded" />
<input placeholder="Password" type="password" className="w-full p-2 mb-4 bg-[#0a1b3a] rounded" />
<button className="w-full py-2 bg-[var(--gv-blue)] rounded">Masuk</button>
<p className="text-center text-sm mt-4 opacity-70">Belum punya akun? <span className="text-[var(--gv-neon)]">Daftar</span></p>
</div>
)
}