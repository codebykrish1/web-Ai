import Razorpay from 'razorpay'
import crypto from 'crypto'
import { User } from '../models/userModel.js'

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})

export const createOrder = async (req, res) => {
    try {
        const { amount, planId, credits } = req.body

        const options = {
            amount: amount * 100, // paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`
        }

        const order = await razorpay.orders.create(options)

        return res.status(200).json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
            planId,
            credits
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

        const body = razorpay_order_id + '|' + razorpay_payment_id
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_SECRET_KEY)
            .update(body)
            .digest('hex')

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ message: 'Invalid payment signature' })
        }

        // Fetch order to get credits from notes or use request body
        const { credits } = req.body

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { $inc: { credits: credits || 500 } },
            { new: true }
        )

        return res.status(200).json({ message: 'Payment verified', user })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
