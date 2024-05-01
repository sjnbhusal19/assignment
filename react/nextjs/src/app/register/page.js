
const register = () => {
  return (
    <>
    <div className="flex justify-center">
    <div className='border border-black m-5 w-72 p-10'>
      <h1>Register page</h1><br/>
    <input placeholder='Enter your name'></input><br/>
    <input placeholder='Enter password' type='password'></input><br/>
    <input placeholder='address'></input><br/>
    <input placeholder='Enter email'></input><br/>
    <button className="bg-green-700 text-white p-2 rounded-xl shadow-md">submit</button>
    </div>
    </div>
    </>
  )
}

export default register