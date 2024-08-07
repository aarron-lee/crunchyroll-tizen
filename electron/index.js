const { app, components, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      contextIsolation: true,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  // disable alt for menu bar
  //   win.setMenu(null);

  const userAgent =
    "Mozilla/5.0 (SMART-TV; LINUX; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.0 TV Safari/537.36";

  win.webContents.setUserAgent(userAgent);

  win.loadFile("./static/build/index.html", {
    userAgent:
      "Mozilla/5.0 (SMART-TV; LINUX; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.0 TV Safari/537.36",
  });

  ipcMain.on("gamepadButtonPress", (_, buttonName) => {
    handleGamepadButtonPress(win, buttonName);
  });
}

app.whenReady().then(async () => {
  await components.whenReady();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function handleGamepadButtonPress(mainWindow, buttonName) {
  if (buttonName === "bButton") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "escape",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "escape" });
  }
  if (buttonName === "aButton") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "space",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "space" });
  }
  if (buttonName === "dPadDown") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "tab",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "tab" });
  }
  if (buttonName === "dPadUp") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "shift",
    });
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "tab",
      modifiers: ["shift"],
    });
    mainWindow.webContents.sendInputEvent({
      type: "keyUp",
      keyCode: "tab",
      modifiers: ["shift"],
    });
    mainWindow.webContents.sendInputEvent({
      type: "keyUp",
      keyCode: "shift",
    });
  }
  if (buttonName == "dPadLeft") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "left",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "left" });
  }
  if (buttonName == "dPadRight") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "right",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "right" });
  }
  if (buttonName == "up") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "up",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "up" });
  }
  if (buttonName == "down") {
    mainWindow.webContents.sendInputEvent({
      type: "keyDown",
      keyCode: "down",
    });
    mainWindow.webContents.sendInputEvent({ type: "keyUp", keyCode: "down" });
  }
}
