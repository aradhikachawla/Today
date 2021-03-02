
console.log("Total Extension Chrome background running");

chrome.browserAction.onClicked.addListener(buttonclicked);
function buttonclicked(tab){
    console.log("buttonclicked");
    console.log(tab);
    let message = { "txt" : "Today Hello Hi Hi" }
    chrome.tabs.sendMessage(tab.id,message);

}