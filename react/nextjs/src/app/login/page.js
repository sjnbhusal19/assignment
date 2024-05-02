import customNav from "@/components/Navbar/page";
import {Button,Input} from "@nextui-org/react";

const Login = () => {
  return (
    <div>
    <customNav/>
    <div className="flex justify-center">
    <div className='border border-black m-5 w-72 p-10'>
      <h1>Login page</h1><br/>
      <Input type="email" label="Email" /><br/>
    <input placeholder='Enter password' type='password'></input><br/>
    <Button radius="full" className="bg-gradient-to-tr from-green-500 to-yellow-500 text-white shadow-lg">
      Submit
    </Button>
    </div>
    </div>
    </div>
  );
};

export default Login;