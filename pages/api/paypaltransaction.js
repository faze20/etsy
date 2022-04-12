export default function handler(req, res) {
    const order = req.body
    console.log(order)
    res.status(200).json({ order: order.orderId})
  }
  
