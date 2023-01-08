const PythonShell = require('python-shell').PythonShell;
function run()
{
  console.log("Hi");
  PythonShell.run('f.py', null, function (err) {
    if (err) throw err;
    console.log('finished');
  });
}
module.exports=run