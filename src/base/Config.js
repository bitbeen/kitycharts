var Config = kc.Config = kity.createClass( 'Config', {

    constructor: function ( config ) {
        this.config = config || {};
    },

    getConfig: function () {
        return this.config;
    },

    getOption: function ( path ) {
        return kity.Utils.queryPath( path, this.config );
    },

    setOption: function ( path, value ) {
        if( kity.Utils.queryPath( path, this.config ) !== undefined ){
            eval( 'this.config.' + path + ' = value' );
        }
    }

} );