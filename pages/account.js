import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



function Account() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  

  const handleSubmit =  async (e)=>{
    e.preventDefault()
    if( password === confirmPassword ){
      const res = await fetch("http://localhost:3000/api/register", {
        method: 'POST',
        body: JSON.stringify({fullName, email, password }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*', 
        },
      })
      const result = await res.json()
      setSuccessMessage(result.message)

      setPassword('')
      router.push('/api/auth/signin')
    } else{
      setMessage('password do not match')
      return
    }
    
  
    
  }
  
  


  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                    <p className='text-xs text-green-700'>{successMessage}</p>

                    <input 
                      onChange={(e) =>setFullName(e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" required/>

                    <input 
                    onChange={(e) =>setEmail(e.target.value)}
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" required />

                    <input 
                    onChange={(e) =>setPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" required />
                        <p className='text-xs text-red-700'>{message}</p>
                    <input 
                    onChange={(e) =>setConfirmPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" required/>

                    <button
                      
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-green-dark focus:outline-none my-1"
                    >
                      Create Account
                    </button>
                      </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">Terms of Service</a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#"> Privacy Policy</a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link href="/api/auth/signin">
                      <a className="no-underline border-b border-blue text-blue" >Log in.</a>
                    </Link>
                </div>
            </div>
        </div>
  
  )
}

export default Account



