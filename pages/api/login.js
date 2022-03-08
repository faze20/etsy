// import cookie from "cookie";

// export default (req, res) => {
//     res.setHeader(
//         "Set-Cookie",
//         cookie.serialize("signinToken", req.body.signinToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV !== "development",
//         maxAge: 60 * 60,
//         sameSite: "strict",
//         path: "/",
//         })
//     );
//     res.statusCode = 200;
//     res.json({ success: true , username: 'admin'});
// };

export default function handler(req, res) {

    // const { username , password } = req.body


    return res.json({success: true , name: 'Afeez20' })
    

    
  }
  