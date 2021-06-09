const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOOSE_CONN_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
})