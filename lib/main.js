var module = require('./module/module.js');

define(['./module/module-amd.js'], function (theModule) {
	console.log(theModule.doSomething());
});

console.log(module.doSomething());