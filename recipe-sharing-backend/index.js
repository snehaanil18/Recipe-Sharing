const jsonserver = require('json-server')

const recServer = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

const port = 3001 

recServer.use(middleware)
recServer.use(router)

recServer.listen(port,() =>{
    console.log('Restaurant server listening on port' + port);
})