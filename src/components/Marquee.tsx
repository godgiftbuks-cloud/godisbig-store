const tickerItems = [
  "New Arrival — Granite Series Vol. 4",
  "Outdoor Utility / Urban Texture",
  "Free Shipping over $200",
  "Autumn Winter '24 Ready to Wear",
];

export default function Marquee() {
  return (
    <div className="border-y border-ink py-3 overflow-hidden bg-paper">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[0, 1, 2, 3].map((rep) =>
          tickerItems.map((item, i) => (
            <span key={`${rep}-${i}`} className="text-xs font-medium uppercase mx-8 tracking-tight">
              {item} <span className="ml-8 opacity-30">✦</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
