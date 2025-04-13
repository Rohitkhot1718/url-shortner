import express from 'express'
import {createUrl, getUrl, deleteUrl} from '../controllers/url.js'

const router = express.Router()

router.post('/' , createUrl)
router.get('/:shortUrlId', getUrl)
router.delete('/:shortUrlId', deleteUrl )


export default router