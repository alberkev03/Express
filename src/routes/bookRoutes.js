import { Router } from "express";
import bookControllers from "../controllers/bookControllers.js";

const router = Router()

router.get('/', bookControllers.showAllBooks)
router.get('/find/:id', bookControllers.filterBook)
router.post('/new', bookControllers.addBook)
router.delete('/delete/:id', bookControllers.deleteBook)
router.patch('/edit/:id', bookControllers.editBook)
export default router