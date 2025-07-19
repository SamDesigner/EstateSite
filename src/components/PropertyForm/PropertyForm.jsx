import { useState } from "react";
import Loader from "../Loader/Loader";
import { showSuccessToast } from "../../utils/toast";
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
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (displayImage) data.append("displayImage", displayImage);
    images.forEach((img) => data.append("images", img));
    try {
      await onSubmit(data);
      showSuccessToast("Property action completed");
    } catch (error) {
      console.error("Error while creating a blog", error);
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
        // required
        className="border border-gray-400 p-2 rounded-[5px]"
      />
      <div className="flex flex-col gap-[10px]">
        <label className="text-[14px]">Property Type</label>
        <select value={form.listingType} onChange={handleChange} required className="border border-gray-400 p-2 rounded-[5px] bg-white"
>
          <option value="">-- Select --</option>
          <option value='sale'>For Sale</option>
          <option value='lease'>For Lease</option>
        </select>
      </div>
      <div className="flex flex-col gap-[10px]">
        <label className="text-[14px]">Display Image:</label>
        <input
          type="file"
          onChange={(e) => setDisplayImage(e.target.files[0])}
          accept="image/*"
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <label>Gallery Images:</label>
        <input
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          accept="image/*"
          className="border border-gray-400 p-2 rounded-[5px] bg-white"
        />
      </div>
      <div className="flex items-center justify-center mt-[5vh]">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-companyGreen text-white w-[350px] p-3 rounded-full"
        >
          {isLoading ? <Loader /> : <span>Submit</span>}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
