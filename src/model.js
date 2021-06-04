const { Client } = require( 'pg' )
const client = new Client( {
    user: 'postgres',
    host: 'localhost',
    database: 'node_js',
    password: 'root',
    port: 5432,
} )

const connecting = () => {
    try {

        client.connect()
    } catch ( e ) {
        console.log( e )
        return false
    }
    return true
}

const disconect = () => {
    try {
        client.end()
    } catch ( er ) {
        console.log( e )
    }
}
module.exports = { connecting, disconect, client }