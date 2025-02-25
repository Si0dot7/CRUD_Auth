import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditData = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([
    {
      name: "",
      detail: "",
      price: "",
    },
  ]);

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    try {
      const getData = await axios.get(
        import.meta.env.VITE_API_URI + "/product/" + id
      );
      setData(getData.data);
    } catch (error) {
      console.log(error);
      console.log("loadData error");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(import.meta.env.VITE_API_URI + "/product/" + params.id, data);
        navigate("/");
    } catch (error) {
        console.log(error);
        
    }
  };
  return (
    <div className="flex items-center justify-center  bg-blue-900 h-screen">
      <section className=" w-96">
        <form
          className="w-full h-fit border bg-gray-50"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="my-3 flex justify-center font-bold  text-2xl">
            Form Data
          </h1>
          <div className="my-7 flex justify-center">
            <input
              className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => handleChange(e)}
              value={data.name}
            />
          </div>
          <div className="my-7 flex justify-center">
            <input
              className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
              type="text"
              name="detail"
              placeholder="detail"
              onChange={(e) => handleChange(e)}
              value={data.detail}
            />
          </div>
          <div className="my-7 flex justify-center">
            <input
              className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
              type="text"
              name="price"
              placeholder="price"
              onChange={(e) => handleChange(e)}
              value={data.price}
            />
          </div>
          <button
            type="submit"
            className=" border border-gray-500 ml-16 rounded-md bg-blue-300 w-16 my-2 px-1"
          >
            submit
          </button>
          
        </form>
      </section>
    </div>
  );
};

export default EditData;
