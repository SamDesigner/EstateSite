import { useState } from "react";
import Loader from "../Loader/Loader";
import { showSuccessToast } from "../../utils/toast";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_GALLERY_TOTAL = 15 * 1024 * 1024; // 15MB
const MAX_VIDEO_SIZE = 20 * 1024 * 1024; // 20MB

const PropertyForm = ({ onSubmit, initialData = {} }) => {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    location: initialData?.location || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
    listingType: initialData?.listingType || "",
  });

  const [displayImage, setDisplayImage] = useState(null);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // NEW: Per-field error messages
  const [displayImageError, setDisplayImageError] = useState("");
  const [galleryError, setGalleryError] = useState("");
  const [videoError, setVideoError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // --------------------------
  // DISPLAY IMAGE VALIDATION
  // --------------------------
  const handleDisplayImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      setDisplayImageError("Display image must not exceed 5MB.");
      e.target.value = "";
      return;
    }

    setDisplayImageError("");
    setDisplayImage(file);
  };

  // --------------------------
  // GALLERY IMAGES VALIDATION
  // --------------------------
  const handleGalleryImages = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length === 0) return;

    for (let file of selectedFiles) {
      if (file.size > MAX_IMAGE_SIZE) {
        setGalleryError(`"${file.name}" is too large. Max 5MB allowed.`);
        e.target.value = "";
        return;
      }
    }

    const totalSize = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_GALLERY_TOTAL) {
      setGalleryError("Total gallery upload must not exceed 15MB.");
      e.target.value = "";
      return;
    }

    setGalleryError("");
    setImages(selectedFiles);
  };

  // --------------------------
  // VIDEO VALIDATION
  // --------------------------
  const handleVideo = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > MAX_VIDEO_SIZE) {
      setVideoError("Video must not exceed 20MB.");
      e.target.value = "";
      return;
    }

    setVideoError("");
    setVideo(file);
  };

  // --------------------------
  // FORM SUBMISSION
  // --------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (displayImageError || galleryError || videoError) {
      alert("Fix upload errors before submitting.");
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));

    if (displayImage) data.append("displayImage", displayImage);
    images.forEach((img) => data.append("images", img));
    if (video) data.append("video", video);

    try {
      await onSubmit(data);
      showSuccessToast("Property action completed");
    } catch (error) {
      console.error("Error while submitting property", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
      
      <div className="grid md:grid-cols-2 gap-[20px]">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="border border-gray-400 p-2 rounded-[5px]"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="border border-gray-400 p-2 rounded-[5px]"
        />
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border border-gray-400 min-h-[150px] rounded-[5px] p-2"
      />

      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        type="number"
        placeholder="Price"
        className="border border-gray-400 p-2 rounded-[5px]"
      />

      <div className="flex flex-col gap-[10px]">
        <label className="text-[14px]">Property Type</label>
        <select 
          name="listingType" 
          value={form.listingType} 
          onChange={handleChange} 
          required 
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        >
          <option value="">-- Select --</option>
          <option value="sale">For Sale</option>
          <option value="lease">For Lease</option>
          <option value="sold out">Sold Out</option>
        </select>
      </div>

      {/* DISPLAY IMAGE */}
      <div className="flex flex-col gap-[10px]">
        <label className="text-[14px]">Display Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleDisplayImage}
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        />
        {displayImageError && (
          <p className="text-red-500 text-sm">{displayImageError}</p>
        )}
      </div>

      {/* GALLERY IMAGES */}
      <div className="flex flex-col gap-[10px]">
        <label>Gallery Images:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleGalleryImages}
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        />
        {galleryError && (
          <p className="text-red-500 text-sm">{galleryError}</p>
        )}
      </div>

      {/* VIDEO */}
      <div className="flex flex-col gap-[10px]">
        <label>Select Video:</label>
        <input
          type="file"
          accept="video/mp4,video/mov"
          onChange={handleVideo}
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        />
        {videoError && (
          <p className="text-red-500 text-sm">{videoError}</p>
        )}
      </div>

      <div className="flex items-center justify-center mt-[5vh]">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-companyGreen text-white w-[350px] p-3 rounded-full"
        >
          {isLoading ? <Loader /> : "Submit"}
        </button>
      </div>

    </form>
  );
};

export default PropertyForm;
