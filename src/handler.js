const { connecting, disconect, client } = require( './model' )

const resp = {
    status: false,
    msg: '',
    data: []

}

const sayHello = ( req, res ) => {
    const status = connecting()
    if ( status ) {
        return client.query( 'select * from notebook_online.note' )
            .then( ( result ) => {
                resp.status = true
                resp.msg = 'Data ditemukan'
                resp.data = result.rows
            } ).catch( ( err ) => {
                console.log( err )
                resp.status = false
                resp.msg = 'Terjadi Kesalahan saat pengambilan data'
            } ).finally( () => {
                disconect()
                res.json( resp )
            } )
    } else {
        disconect()
        res.json( resp )
    }
}

module.exports = { sayHello }