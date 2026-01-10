import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface EventGalleryProps {
  eventName: string;
  images: string[];
  onClose: () => void;
}

export function EventGallery({ eventName, images, onClose }: EventGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  // ESC schließt
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close gallery"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Header */}
      <div className="absolute top-4 left-4 text-white z-10">
        <h2 className="text-2xl md:text-3xl font-bold">{eventName}</h2>
        <p className="text-gray-300 mt-1">
          Foto {currentImageIndex + 1} von {images.length}
        </p>
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Main image */}
      <div className="max-w-6xl max-h-[80vh] w-full mx-auto px-4 md:px-20">
        <img
          src={images[currentImageIndex]}
          alt={`${eventName} - Foto ${currentImageIndex + 1}`}
          className="w-full h-full object-contain select-none"
          loading="eager"
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? "border-white scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Thumbnail ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
