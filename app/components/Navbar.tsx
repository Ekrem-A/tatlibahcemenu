export default function Navbar() {
  return (
    <nav className="bg-[#8B4513] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Restoran Menüsü</h1>
        <div className="flex gap-4">
          <a href="/" className="text-white">Anasayfa</a>
        </div>
      </div>
    </nav>
  );
}
