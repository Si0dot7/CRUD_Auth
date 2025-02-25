import {useState,useEffect} from 'react'
import axios, { AxiosHeaders } from 'axios'
import {Link} from 'react-router-dom'

const TableData = () => {

    const [data,setData] = useState([])
    const [form,setForm] = useState([
        {
            name:'',
            detail:'',
            price:''
        }
    ])

    const loadData=async()=>{
        try {
            const getData = await axios.get(import.meta.env.VITE_API_URI+'/product')
            setData(getData?.data)
            
        } catch (error) {
            console.log(error);
            console.log('loadData error');
            
        }
    }

    useEffect(()=>{
        loadData()
    },[])

    const handleChange=(e)=>{
        setForm(
           { ...form,[e.target.name]: e.target.value}
        )
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post(import.meta.env.VITE_API_URI+'/product',form)
        loadData()
    }

    const handleDelete=async(id)=>{
        await axios.delete(import.meta.env.VITE_API_URI+'/product/'+id)
        loadData()
    }

  return (
    <main className='flex min-h-[50vh] w-screen h-screen bg-blue-900'>
        <div className='flex justify-between gap-96 mx-44'>
            <section className='flex items-center w-96'>
                <form className='w-full h-fit border bg-gray-50' onSubmit={(e)=>handleSubmit(e)}>
                    <h1 className='my-3 flex justify-center font-bold  text-2xl'>Form Data</h1>
                    <div className='my-7 flex justify-center'>
                        <input 
                        className='bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64'
                        type='text'
                        name='name' placeholder='name'
                        onChange={(e)=>handleChange(e)}
                        />
                    </div>
                    <div className='my-7 flex justify-center'>
                        <input 
                        className='bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64'
                        type='text'
                        name='detail' placeholder='detail'
                        onChange={(e)=>handleChange(e)}
                        />
                    </div>
                    <div className='my-7 flex justify-center'>
                        <input 
                        className='bg-gray-50 border border-gray-300 pl-2 py-1 rounded-md w-64'
                        type='text'
                        name='price' placeholder='price'
                        onChange={(e)=>handleChange(e)}
                        />
                    </div>
                    <button type='submit' className=' border border-gray-500 ml-16 rounded-md bg-blue-300 w-16 my-2 px-1'>submit</button>
                    <button type='reset' className=' border border-gray-500 ml-3 bg-blue-300 rounded-md w-16 my-2 px-1'>clear</button>
                </form>
            </section>
            <section className='flex items-center w-96'>
                <div>
                <h1 className='my-3 flex justify-center font-bold  text-2xl text-white'>Display</h1>
                    <table className='w-4xl text-sm text-center text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    # 
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    name
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    detail
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    price
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Remove
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data.map((item,index)=>{
                                return(
                                    <tr className='bg-white border-b border-gray-200' key={index}>
                                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                            {index+1}
                                        </th>
                                        <td scope='row' className='px-6 py-4'>
                                            {item.name}
                                        </td>
                                        <td scope='row' className='px-6 py-4'>
                                            {item.detail}
                                        </td>
                                        <td scope='row' className='px-6 py-4'>
                                            {item.price}
                                        </td>
                                        <td scope='row' className='px-6 py-4'>
                                            <button className='border border-red-600 p-1 bg-red-500 text-white' onClick={()=>handleDelete(item._id)}>Delete</button>
                                        </td>
                                        <td scope='row' className='px-6 py-4'>
                                           <Link to={'/edit/'+item._id}>
                                           Edit
                                           </Link>
                                        </td>
                                    </tr>
                                );
                            }):
                            console.log(error)  
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </main>
  )
}

export default TableData