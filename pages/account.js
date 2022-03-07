import cookie from "js-cookie";
import { useState } from 'react'
import { useRouter } from 'next/router'


function Account({isLoggedIn, signinToken}) {
  const router = useRouter()
  const [clickLoggedIn, setclickLoggedIn] = useState(false)
  const [uname, setUname] = useState('')

  const handleSignin = () => {
    fetch("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ signinToken: "ABCD" }),
    }).then( res => res.json())
    .then(result =>  setUname(result.username))
    // router.push('/account')
    
  }

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then( res => res.json())
    .then(result => setUname(result.message))
    
  }

  return (
    <div>
      {isLoggedIn ? 
      <div>
        <h1 className="mb-8">
          You are logged in  token : {signinToken}
          , {uname}
        </h1>
        <button 
        onClick={handleLogout}
        // onClick={()=> {
        //   cookie.set("signinToken" , "lokoso12", {expires: 1/24});
        // }}
        className="bg-blue-500 mx-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log out
        </button>

        <button 
        onClick={handleSignin}
            // onClick={()=> {
            //   cookie.remove("signinToken")
            // }}
            className="bg-transparent mx-8 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Sign in
         </button>

      </div> : 
      <div>
        <div>
          <h2>
            you are logged out.token : {signinToken}
          </h2>
          <form action="">
            <button 
            onClick={handleSignin}
            // onClick={()=> {
            //   cookie.remove("signinToken")
            // }}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Sign in
            </button>
          </form>
        </div>

      </div>
      
      }
    </div>
  )
}

export default Account

export async function getServerSideProps({req , res }) {
  const isLoggedIn = true
  return {
    props: {
      signinToken: req.cookies.signinToken || "",
      isLoggedIn: isLoggedIn,
      }
  }
}