
import customNav from "@/components/Navbar/page";
import {Button,Input} from "@nextui-org/react";


const register = () => {
  return (
    <div>
    <customNav/>
    <div className="flex justify-center">
    <div className='border border-black m-5 w-72 p-10'>
      <h1>Register page</h1><br/>
      <Input type="email" label="Enter Email" /><br/>
      <Input type="Password" label="Enter Password" /><br/>
    <Input type="Address" label="Enter Address" /><br/>
    <Input type="User Name" label="Enter User Name" /><br/>
    <Button radius="full" className="bg-gradient-to-tr from-green-500 to-yellow-500 text-white shadow-lg">
      Submit
    </Button>
    </div>
    </div>
    </div>
  )
}

export default register