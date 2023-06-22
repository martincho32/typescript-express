import express from 'express'
import diaryRouter from './routes/diaries'
import * as dotenv from 'dotenv'

dotenv.config()
if (!process.env.PORT) {
  console.log('No port value specified...')
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()
app.use(express.json())

app.get('/ping', (_, res) => {
  console.log('someone pinged here!! ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
