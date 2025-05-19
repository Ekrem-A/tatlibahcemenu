export default function Topbar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex flex-wrap justify-between items-center gap-y-2 hidden md:flex">
      <div className="flex gap-4 ">
        <span>🕒 <strong>Açılış Saati: </strong> 08:00 AM - 11:30 PM</span>
      </div>
      <div className="flex items-center gap-3 text-white">
        <a href="#"><i className="fab fa-facebook" /></a>
        <a href="https://www.instagram.com/tatlibahcekafe/"><i className="fab fa-instagram" /></a>
        <a href="https://x.com/tatlibahcecafe"><i className="fab fa-x-twitter" /></a>
        
      </div>
      <div>
        📍 <strong>KONUM :</strong> KÜÇÜK ÇAMLICA MAH. ULU ÇINAR SK. NO 17
      </div>
    </div>
  );
}
