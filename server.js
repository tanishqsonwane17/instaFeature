const app = require('./src/app')
const dbConnection = require('./src/db/db')
dbConnection()
app.listen(4000, () => console.log('Server running on port 4000'))