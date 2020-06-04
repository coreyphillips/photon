var exec = require("child_process").exec;
var os = require("os");

function postInstallMac() {
	exec("cd ios && pod install && cd .. && cd node_modules/react-native-lightning && yarn install && ./node_modules/.bin/rn-nodeify --install buffer,stream,assert,events,crypto,vm,process --hack");
}
function postInstallLinWin() {
	exec("cd node_modules/react-native-lightning && yarn install && ./node_modules/.bin/rn-nodeify --install buffer,stream,assert,events,crypto,vm,process --hack");
}

if (os.type() === "Linux")
	postInstallLinWin();
else if (os.type() === "Windows_NT")
	postInstallLinWin();
else if (os.type() === "Darwin")
	postInstallMac();
else
	throw new Error("Unsupported OS found: " + os.type());
