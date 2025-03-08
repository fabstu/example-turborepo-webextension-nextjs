browser.runtime.onInstalled.addListener(() => {
	browser.contextMenus.create({
		id: "sampleContextMenu",
		title: "Sample Context Menu",
		contexts: ["all"],
	});
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
	browser.storage.local.get('managedFolder').then((result) => {
		if (result.managedFolder === undefined) {
			// Create managed folder.
			browser.bookmarks.create({
				title: 'Managed Folder 1',
				parentId: 'toolbar_____',
				index: 0,
				type: 'folder',
			}).then((newFolder) => {
				// Update internal state.
				browser.storage.local.set({
					managedFolder: newFolder.id,
				});
			});
		} else {
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
	console.log('bookmark created');
	console.dir(info);
	console.dir(newBookmark);
	console.log("Setting local storage value")
	browser.storage.local.set({
		content: {
			value: 'Hello, World!'
		}
	}).then(setItem, onError);
	// browser.runtime.sendMessage({ message: 'content' });

	// If was inserted into a managed folder...
	// a) Was empty managed folder: Update internal state. Create new empty folder.
	// b) Was not empty managed folder: Update internal state.
});

browser.bookmarks.onMoved.addListener((id, moveInfo) => {
	// do something
	console.log('bookmark moved');
	console.dir(id);
	console.dir(moveInfo);
});

browser.bookmarks.onRemoved.addListener((id, removeInfo) => {
	// do something
	console.log('bookmark removed');
	console.dir(id);
	console.dir(removeInfo);
});

browser.bookmarks.onChanged.addListener((id, changeInfo) => {
	// do something
	console.log('bookmark changed');
	console.dir(id);
	console.dir(changeInfo);
});

console.log('Listening to Tabs');

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// do something
	console.log('tab updated');
	console.dir(tabId);
	console.dir(changeInfo);
	console.dir(tab);
});

// browser.contextMenus.create({
// 	id: "test-item",
// 	title: "Test context-menu item",
// 	contexts: ["all"],
// }, onCreated);

console.log('mark 2');

browser.contextMenus.onClicked.addListener((info) => {
	switch (info.menuItemId) {
		case "sampleContextMenu":
			alert("Test worked!");
			break
	}
});

console.log('Search bookmarks:');

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
