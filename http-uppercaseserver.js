const http = require('http')
const map = require('through2-map')
const port = process.argv[2]
const server = http.createServer(function (req, res) {
	if (req.method !== 'POST') return res.end('The server only accepts POST requests')
	req.pipe(map((c) => {
		return c.toString().toUpperCase()
	})).pipe(res)
})





	
//	req.pipe(map(function (chunk) {
//	return chunk.toString().toUpperCase()
//	})).pipe(res)
//})
server.listen(port)
