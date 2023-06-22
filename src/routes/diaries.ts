import { Request, Response, NextFunction, Router } from 'express'
import * as diaryService from '../services/diaryService'
import validateDiaryEntry from '../middleware/validation'

const router = Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

const middleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    validateDiaryEntry(req.body)
    next()
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}

router.post('/', middleware, (req, res) => {
  try {
    const addedDiaryEntry = diaryService.addDiary(req.body)
    res.send(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
