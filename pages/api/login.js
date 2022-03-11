import cookie from "cookie";
import clientPromise from "../../lib/mongodb"

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
  
  }
  