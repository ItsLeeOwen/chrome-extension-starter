'use strict';

console.log("chrome-extension-starter background.js?")

let TMP_TOKEN

chrome.runtime.onConnect.addListener(onConnect)
chrome.runtime.onInstalled.addListener(onInstalled)
chrome.runtime.onMessage.addListener(onMessage)
chrome.runtime.onUpdateAvailable.addListener(onUpdateAvailable)

chrome.identity.getAuthToken({
  "interactive": true,
}, onAuthToken)

function onConnect() {
  console.log("background.js onConnect")
}

function onInstalled() {
  console.log("background.js onInstalled")
}

function onMessage(req, sender, res) {
  console.log("background.js onMessage", req.event)
  switch (req.event) {
    case "HELLO":
      return res({
        farewell: "goodbye",
      })
    case "LOGOUT":
      return res(logout())
  }
}

function onUpdateAvailable() {
  console.log("background.js onUpdateAvailable")
}

function onAuthToken(token) {
  if (chrome.runtime.lastError) {
    console.log("shoot", chrome.runtime.lastError)
  }
  TMP_TOKEN = token
  console.log("onAuthToken", token)
  //setTimeout(() => logout(token), 1000)
}

function logout() {
  console.log("logout", TMP_TOKEN)
  chrome.identity.removeCachedAuthToken({
    token: TMP_TOKEN,
  }, () => {
    console.log('removed auth cache')
    return {
      loggedOut: true,
    }
  })
  return {
    loggedOut: true,
  }
}