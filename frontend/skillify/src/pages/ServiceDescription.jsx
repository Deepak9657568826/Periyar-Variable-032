import React from 'react'

const ServiceDescription = () => {
  return (
    <div className=' ml-20 flex'>
      <div className="p-10 bg-white  md:w-1/2">
  <h2>Title</h2>
  <div className="bg-white rounded-lg shadow-lg">
    <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg"/>
    <div className="p-6">
      <h2 className="font-bold mb-2 text-2xl ">Card with an image
      </h2>
      <p className=" mb-2">This is a little bit better of a card!</p>
      
    </div>

  </div>
</div>
<div className=" shadow-md rounded bg-white-100 w-80 h-40 mx-auto  px-4 py-5">

<div className="">
  <h3 className="text-lg font-bold">Erin Lindford</h3>
  <span>Product engineer</span>
  </div>
  <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
             
            >
              Start a Conversation
            </button>
</div>
    </div>
  )
}

export default ServiceDescription
