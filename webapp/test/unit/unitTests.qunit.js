/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comkpo/lcdreporting/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
