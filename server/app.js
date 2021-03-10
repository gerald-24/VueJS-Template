const express = require('express')
const port = 3050
const router = require('./routes/controller.js')
// const others = require('./routes/others.js')
// const queries = require('./routes/query')
const serveIndex = require('serve-index')
const app = express()
app.use('/', router)
// app.use('/others',others)
// app.use('/',queries)

app.use('/Attachments', express.static('\\\\fsplanmngt\\STOP_2\\STOP'), serveIndex('\\\\fsplanmngt\\STOP_2\\STOP', {
	'icons': true,
	'view': 'details'
}))


app.listen(port, function () {
	console.log('listening to port ' + port);
})

// \\\\fsplanmngt\\STOP_2\\STOP
// ==========================temp==============================
module.exports = router;