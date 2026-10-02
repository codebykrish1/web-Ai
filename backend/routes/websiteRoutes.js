import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import {
    generateWebsite,
    getAllWebsite,
    getWebsiteById,
    changeWebsite,
    deployWebsite,
    getBySlug
} from '../controllers/websiteController.js'

const router = express.Router()

router.post('/generate', isAuthenticated, generateWebsite)
router.post('/update/:id', isAuthenticated, changeWebsite)
router.get('/getall', isAuthenticated, getAllWebsite)
router.get('/deploy/:id', isAuthenticated, deployWebsite)
router.get('/getbyslug/:slug', getBySlug)
router.get('/getbyid/:id', isAuthenticated, getWebsiteById)

export default router
