console.log("chrome-extension-starter content.js?")

setTimeout(sayHello, 2000)

chrome.runtime.onConnect.addListener(onConnect)

function sayHello() {
  chrome.runtime.sendMessage({
    event: "HELLO",
  }, response => {
    console.log("content.js", "sayHello", response)
  })
}

function onConnect() {
  console.log("content.js onConnect")
  sayHello()
}