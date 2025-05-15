import PropertyForm from "../../components/PropertyForm/PropertyForm";
import { updateProperty, getProperty } from "../../api/propertyApi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProperty, setSingleProperty] = useState(null);

  const updateEstateProperty = async (formData) => {
    try {
      const response = await updateProperty(id, formData);
      console.log("This was the response while updating the property", response);
      navigate("/Dashboard");
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
  if (!singleProperty) return <p>Loading...</p>;

  return (
    <div>
      <h1>Update Property</h1>
      <PropertyForm
        onSubmit={updateEstateProperty}
        initialData={singleProperty}
      />
    </div>
  );
};

export default UpdateProperty;
