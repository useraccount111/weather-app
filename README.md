# weather-app

A weather app that uses the MetOffice Datapoint API.

## **Please note that this is not official and is just a project using their API.**

The people who made this:

- `salbtw`
- `ZubayrMXashi`
- `useraccount111`

## How to use the application

If you would like the website code then see `build/index.html`. You do not need to continue reading.
If you would like to generate the Weather Application then continue reading.

You must first build it.
See this excerpt from `package.json` at lines `27-40`:
```json
{
  "scripts": {
    "...": "...",
    "start": "electron-forge start",
    "...": "...",
    "electron": "electron .",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "make-mac-x86-64": "electron-forge make --arch=x64",
    "make-mac-universal": "electron-forge make --arch=universal",
    "make-mac-arm64": "electron-forge make --arch=arm64",
    "make-win-x86-64": "electron-forge make --platform=win32 --arch=x64",
    "make-win-x86": "electron-forge make --platform=win32 --arch=ia32"
  },
}
```
### Mac options
+ Pick `make-mac-x86-64` to make an x86_64 application. (This may be run on Apple Silicon + Rosetta 2 albeit slower than a Universal/Native version.)
+ Pick `make-mac-universal` to make an application that is compatible with both x86_64 and Apple Silicon.
+ Pick `make-mac-arm64` to make an Apple Silicon only application.
### Windows options
+ Pick `make-win-x86-64` to make an x86_64 application for Windows (64-bit).
+ Pick `make-win-x86` to make an x86 application (32-bit).

If you are using another operating system and would like to build this app or would like more information, please see this link: https://www.electronforge.io/cli

Run `npm run commandhere` to build the application, where `commandhere` is a placeholder for any of the aforementioned options.
After the command is finished, it should generate the application.

To generate a key that you can use inside the app, please see https://register.metoffice.gov.uk/WaveRegistrationClient/public/newaccount.do?service=datapoint

Enjoy :)
