import clientPromise from "../../lib/mongodb"
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("users")
  const password = bcrypt.hash(req.body.password , 10).then(password => password)
  await db.collection('Etsy user').insertOne({
    fullName: req.body.fullName,
    email: req.body.email,
    password:password,
  });

 
  console.log(req.body)
    res.json({message: 'registered success' })
}