import {useState,useEffect} from 'react'


const Register = () => {
  return (
      <div className="flex items-center justify-center  bg-blue-900 h-screen">
        <section className="w-96">
          <form
            className="w-full h-fit border bg-gray-50"
            
          >
            <h1 className="my-3 flex justify-center font-bold  text-2xl">
              Register
            </h1>
            <div className="my-7 flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
                type="text"
                name="name"
                placeholder="name"
                
              />
            </div>
            <div className="my-7 flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
                type="text"
                name="detail"
                placeholder="detail"
                
              />
            </div>
            <div className="my-7 flex justify-center">
              <input
                className="bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64"
                type="text"
                name="price"
                placeholder="price"
                
              />
            </div>
            <button
              type="submit"
              className=" border border-gray-500 ml-16 rounded-md bg-blue-300 w-16 my-2 px-1"
            >
              submit
            </button>
            <button
              type="reset"
              className=" border border-gray-500 ml-3 bg-blue-300 rounded-md w-16 my-2 px-1"
            >
              clear
            </button>
          </form>
        </section>
      </div>
    
  );
};

export default Register;
