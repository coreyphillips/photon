var exec = require("child_process").exec;
var os = require("os");

function postInstallMac() {
	exec("cd ios && pod install && cd ..");
}
function postInstallLinWin() {
	//exec("");
}

if (os.type() === "Linux")
	postInstallLinWin();
else if (os.type() === "Windows_NT")
	postInstallLinWin();
else if (os.type() === "Darwin")
	postInstallMac();
else
	throw new Error("Unsupported OS found: " + os.type());
