/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

				__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
					try {
						__webpack_require__.r(__webpack_exports__);
						browser.runtime.onInstalled.addListener(() => {
							browser.contextMenus.create({
								id: "sampleContextMenu",
								title: "Sample Context Menu",
								contexts: ["all"],
							});
						});
						const result = await browser.storage.local.get("content");
						console.log("Content value:", result);
						await browser.notifications.create({
							type: "basic",
							iconUrl: browser.runtime.getURL("icon.png"),
							title: "Hello, World!",
							message: "This is a simple notification.",
						});
						browser.runtime.onInstalled.addListener(() => {
							browser.contextMenus.create({
								id: "bookmarkContextMenu",
								title: "Bookmark Context Menu",
								contexts: ["bookmark"],
							});
						});
						function setItem() {
							console.log("OK");
						}
						function onError(error) {
							console.log(error);
						}
						function createManagedFolderIfNecessary() {
							console.log("Creating managed folder if necessary");
							// Get managed folder.
							browser.storage.local.get("managedFolder").then((result) => {
								if (result.managedFolder === undefined) {
									// Create managed folder.
									browser.bookmarks
										.create({
											title: "Managed Folder 1",
											parentId: "toolbar_____",
											index: 0,
											type: "folder",
										})
										.then((newFolder) => {
											// Update internal state.
											browser.storage.local.set({
												managedFolder: newFolder.id,
											});
										});
								}
								else {
									// Update internal state.
									// managedFolder = result.managedFolder;
								}
							});
						}
						/// Initializes the extension.
						function initialize() {
							console.log("Initializing extension");
							// Create empty managed folder if none exists.
							createManagedFolderIfNecessary();
						}
						initialize();
						console.log("Add bookmark listeners");
						// This will run when a bookmark is created.
						browser.bookmarks.onCreated.addListener((info, newBookmark) => {
							// do something
							console.log("bookmark created");
							console.dir(info);
							console.dir(newBookmark);
							console.log("Setting local storage value");
							browser.storage.local
								.set({
									content: {
										value: "Hello, World!",
									},
								})
								.then(setItem, onError);
							// browser.runtime.sendMessage({ message: 'content' });
							// If was inserted into a managed folder...
							// a) Was empty managed folder: Update internal state. Create new empty folder.
							// b) Was not empty managed folder: Update internal state.
						});
						browser.bookmarks.onMoved.addListener((id, moveInfo) => {
							// do something
							console.log("bookmark moved");
							console.dir(id);
							console.dir(moveInfo);
						});
						browser.bookmarks.onRemoved.addListener((id, removeInfo) => {
							// do something
							console.log("bookmark removed");
							console.dir(id);
							console.dir(removeInfo);
						});
						browser.bookmarks.onChanged.addListener((id, changeInfo) => {
							// do something
							console.log("bookmark changed");
							console.dir(id);
							console.dir(changeInfo);
						});
						console.log("Listening to Tabs");
						browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
							// do something
							console.log("tab updated");
							console.dir(tabId);
							console.dir(changeInfo);
							console.dir(tab);
						});
						// browser.contextMenus.create({
						// 	id: "test-item",
						// 	title: "Test context-menu item",
						// 	contexts: ["all"],
						// }, onCreated);
						console.log("mark 2");
						browser.contextMenus.onClicked.addListener((info) => {
							switch (info.menuItemId) {
								case "sampleContextMenu":
									alert("Test worked!");
									break;
							}
						});
						console.log("Search bookmarks:");
						// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/search
						function onFulfilled(bookmarkItems) {
							// item:
							/*
								  Object { id: "5guFHGfu0JsG", title: "(3) Shurjoka bald in Haft? Verfahren wegen Volksverhetzung droht! | Anwalt Christian Solmecke - YouTube", index: 68, dateAdded: 1740467483425, type: "bookmark", url: "https://www.youtube.com/watch?v=27-GyTKuT2o", parentId: "nPWDNVcJUmTt" }
								  dateAdded: 1740467483425
								  id: "5guFHGfu0JsG"
								  index: 68​
								  parentId: "nPWDNVcJUmTt"
								  title: "(3) Shurjoka bald in Haft? Verfahren wegen Volksverhetzung droht! | Anwalt Christian Solmecke - YouTube"
								  type: "bookmark"
								  url: "https://www.youtube.com/watch?v=27-GyTKuT2o"
							  */
							console.dir(bookmarkItems[0]);
						}
						function onRejected(error) {
							console.log(`An error: ${error}`);
						}
						browser.bookmarks.search({}).then(onFulfilled, onRejected);


						__webpack_async_result__();
					} catch (e) { __webpack_async_result__(e); }
				}, 1);

				/***/
})

		/******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
			/******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
			/******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
		/******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if (queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
				/******/
}
			/******/
}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if (dep !== null && typeof dep === "object") {
/******/ 				if (dep[webpackQueues]) return dep;
/******/ 				if (dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
					/******/
}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
					/******/
});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
							/******/
}
						/******/
}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => { };
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
					/******/
}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
					/******/
});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => { }));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if (d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
					/******/
}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
					/******/
});
/******/ 				return fn.r ? promise : getResult();
					/******/
}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
			/******/
};
		/******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
			/******/
};
		/******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
	/******/
	/******/
})()
	;
//# sourceMappingURL=background.js.map