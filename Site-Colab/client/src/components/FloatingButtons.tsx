import { Instagram } from "lucide-react";

const FloatingButtons = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/colab_ufpb/', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Instagram Button */}
      <button
        onClick={handleInstagramClick}
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Seguir no Instagram"
      >
        <Instagram className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;
