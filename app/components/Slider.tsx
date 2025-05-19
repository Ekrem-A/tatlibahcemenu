export default function Slider() {
  return (
    <div className="relative w-full h-64">
      <img src="/path/to/your/image.jpg" alt="Slider Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Slider Title</h2>
      </div>
    </div>
  );
}