import cookie from "cookie";
import clientPromise from "../../lib/mongodb"

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
    // cookie.set("signinToken" , req.username , {expires: 1/24});
    // const { username , password } = req.body
    res.json({ id: 3, uname: 'korde bello', email: 'koredebello22@example.com'})

    // res.json({success: true , name: 'Afeez20' })
  }
  