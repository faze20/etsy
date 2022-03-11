import clientPromise from "../../lib/mongodb"
import { hash } from 'bcrypt'


const handler = async (req , res) => {
    
  const { fullName, password, email } = req.body
 

  try{
      if( req.method== 'POST'){

        const client = await clientPromise
        const db = client.db("users")
        const results = await db.collection('Etsy user').find({ fullName : fullName }).toArray();
          
          if(results.length == 0 || results === undefined ){
              hash(password, 10, async function(err, hash) {
                await db.collection('Etsy user').insertOne({
                        fullName:fullName,
                        email: email,
                        password:hash,
                      });
                    });
              res.json({message: 'Thanks! welcome onboard' })
            
          } else {
              res.json({message: 'Fullname already exist'})
          }
      }
          
         
      
  } catch (e) {
      res.status(500).json({message: e.message});
  }
}

export default handler