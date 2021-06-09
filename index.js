// const express = require('express')
//
// const path = require('path')
//
// const app = express()
//
// const chalk = require('chalk')
//
// app.get('/', ((req, res) => {
//   res.send('hello world')
// }))
//
// app.use('/site',express.static(path.resolve(__dirname, "public")))
//
// app.use('/art',express.static(path.resolve(__dirname, 'article.txt')))
//
// app.listen(3000, () =>{
//   console.log(chalk.bold( "запущен сервер http://localhost:3000/"))
// })


const express = require('express')

const app = express()

app.all('/', ((req, res) => {
  res.send('hello world')
}))

app.get('/users',((req, res) => {
  res.send(['user1', 'user2', 'user3']);
}))

app.post('/users',((req, res) => {
  res.send('юзер добавлен')
}))
app.delete('/user/:id', ((req, res) => {
  res.send('юзер с ID :id удален')
}))
app.patch('/user/:id',((req, res) => {
  res.send('юзер с ID :id изменен')
}))
app.get('/file',((req, res) => {
  res.send('отправить любой файл')
}))
app.all('/admin',((req, res) => {
  res.send("не хватает прав доступа")
}))

app.listen(3000)
