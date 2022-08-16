const http = require('http')
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  console.log('method:', req.method)
  console.log('url:', req.url)

  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(
      JSON.stringify({
        message: `You have used GET method with the url: ${req.url}`,
        url: req.url
      })
    )
  }
  else if (req.method === 'POST')
    res.write('You have used POST method')

  res.end()
})

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`)
})
