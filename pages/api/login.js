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

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("users")
  const data = await db.collection('users').find({ name : req.body.username }).toArray();
  const properties = JSON.parse(JSON.stringify(data))

  const filtered = properties.map(property => {
    return {
      _id:property._id,
      name:property.name,
      image:property.avatar,
      role:property.role,
      email:property.email,
      createdAt:property.createdAt,
    }
  })

  res.json( filtered[0] )
  // res.json({ id: 3, uname: 'korde bello', email: 'koredebello22@example.com'})
    // res.json({success: true , name: 'Afeez20' })
  }
  