import { useState } from "react";
import styles from "../../Contact.module.css";
import axiosInstance from "../../utils/axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const isAuth = localStorage.getItem('isAuth');
  const [contact, setContact] = useState({
    name:'',
    email:'',
    title:'',
    description:''
  })
  const handleChange= (event)=>{
    const{name, value} = event.target;
    setContact(prevState=>({
      ...prevState, // 바꾸지 않는 값은 유지
      [name]: value // 바꾸는 값을 오버라이드
    }));
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();

    const body = {
      ...contact
    }

    try{
      await axiosInstance.post('/contacts', body);
      toast.info('Success!')
    } catch(err){
      console.error(err);
    }
  }
  const navigate = useNavigate();
  const moveToContactList = () =>{
    console.log('move to Contact List!')
    navigate('/contactList')
  }

  return (
    <div className="px-10 py-10 sm:px-4 lg:px-40 -bg-white" >
      <div className={styles.contact4} >
        {/** find us */}
        <div className="flex gap-0">
          <div className="px-10 py-4 w-full h-539px lg:w-1/3 p-2 min-h-96 justify-center items-center -bg--color-silver rounded-md">
            <h3 className="py-10 font-bold text-3xl">CONTACT INFO</h3>
            <h3 className="text-lg text-left">
              You can always reach us via following contact details. We will give our best to reach you as possible.
            </h3>
            <h3 className="text-lg font-semibold text-left py-3 mt-3">Phone:&nbsp;&nbsp;+977 976 242 2532</h3>
            <h3 className="text-lg font-semibold text-left py-3">Email:&nbsp;&nbsp;claschoolnp@gmail.com</h3>
            <h3 className="text-lg font-semibold text-left py-3 mb-5">Address:&nbsp;&nbsp;Madhyapur Thimi 6, Hulakroad</h3>
          </div>
          <div className="flex relative w-full lg:w-2/3 p-2 -bg--color rounded-md" >  
            <iframe
                className="absolute w-full h-full left-0 top-0"
              src={`https://www.google.com/maps/embed/v1/place?q=Creative+Learners'+Academy,Nepal&key=AIzaSyCw0Dr2tS1QJ-4DAlccHNDWwwP_Kj110io`}
/>
          </div>
        </div>

        {/** contact form */}
        <div className="mt-10 mb-10 isolate self-center -bg--color-gainsboro-100 py-10 rounded-md">
          <div className="text-center">
            <h2 className="py-10 font-bold text-3xl text---third-template-colour">Contact Us</h2>
          </div>
          <form onSubmit={handleSubmit} className="px-10 lg:px-40">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div >
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text---third-template-colour text-left">Name</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"  
                    onChange={handleChange}
                    value={contact.name}
                  />
                </div>
              </div>
              <div >
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 text-left">Email</label>
                <div className="mt-2.5">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"   
                    onChange={handleChange}
                    value={contact.email}
                  />
                </div>  
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block text-sm font-semibold leading-6 text---third-template-colour text-left">Title</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6"  
                    onChange={handleChange}
                    value={contact.title}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900 text-left">Message</label>
                <div className="mt-2.5">
                  <textarea 
                    name="description" 
                    id="description" 
                    rows="4" 
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset -ring--medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:-ring--medium sm:text-sm sm:leading-6" 
                    onChange={handleChange}
                    value={contact.description}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button type="submit" className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base">
                Submit
              </button>
            </div>
          </form>
        </div>
        {isAuth ==='true'&& (
            <div className="mt-2 flex justify-center mb-1">
              <button className="-bg--color-silver text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base" onClick={moveToContactList}>Move to Contact List</button>
            </div>
        )}
      </div>         
    </div>
  );
};

export default Contact;
