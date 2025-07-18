import PropertyForm from "../../components/PropertyForm/PropertyForm";
import { updateProperty, getProperty } from "../../api/propertyApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProperty, setSingleProperty] = useState(null);

  const updateEstateProperty = async (formData) => {
    try {
      const response = await updateProperty(id, formData);
      console.log(
        "This was the response while updating the property",
        response
      );
      navigate("/admin/Dashboard");
    } catch (error) {
      console.error("Error while updating property:", error);
    }
  };

  useEffect(() => {
    const getSingleProperty = async () => {
      try {
        const response = await getProperty(id);
        setSingleProperty(response);
        console.log("Single Property gotten", response);
      } catch (error) {
        console.error("There was an error in your code", error);
      }
    };

    getSingleProperty();
  }, [id]);

  // Don't render the form until data is fetched
  if (!singleProperty) return <div className={`flex items-center justify-center`}><Loader /></div>;

  return (
    <div>
      <div className="py-[30px] text-center">
        <h1 className="text-[30px] text-black font-[500]">Update Property</h1>
      </div>
      <PropertyForm
        onSubmit={updateEstateProperty}
        initialData={singleProperty}
      />
    </div>
  );
};

export default UpdateProperty;
