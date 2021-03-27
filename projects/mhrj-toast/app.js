const path = require( 'path' )
const fs = require( 'fs' )
var cwd = process.cwd();
var file = path.join( cwd, '../../src/styles.scss' )
var newData = '@import "../node_modules/mhrj-toast/src/assets/styles.scss";'
if ( !fs.existsSync( file ) )
{
  file = path.join( file, '../../src/styles.css' )
}
var data = fs.readFileSync( file ).toString()
var check = data.split( newData )
if ( check.length < 2 )
{
  var finalData = newData.concat( '\n', data )
  fs.writeFileSync( file, finalData )
}
fs.rmSync( 'app.js' )
