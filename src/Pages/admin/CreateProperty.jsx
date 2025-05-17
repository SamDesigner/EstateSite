import PropertyForm from "../../components/PropertyForm/PropertyForm";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../../api/propertyApi";
const CreateProperty = () => {
    const navigate = useNavigate()
  const handleCreate = async (formData) => {
    try {
      await createProperty(formData);
      navigate("/admin/Dashboard");
    } catch (err) {
      console.error("Error creating property:", err);
    }
  };
  return (
    <>
      <div className="py-[30px] text-center">
        <h1 className="text-[30px] text-black font-[500]">Create A Property</h1>
      </div>
      <PropertyForm onSubmit={handleCreate} />
    </>
  );
};

export default CreateProperty;
