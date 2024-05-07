module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  // makers: [
  //   {
  //     name: '@electron-forge/maker-squirrel',
  //     config: {},
  //   },
  //   {
  //     name: '@electron-forge/maker-zip',
  //     platforms: ['darwin'],
  //   },
  //   {
  //     name: '@electron-forge/maker-deb',
  //     config: {},
  //   },
  //   {
  //     name: '@electron-forge/maker-rpm',
  //     config: {},
  //   },
  // ],
  "makers": [
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin",
        "linux",
        "mas",
        "win32"
      ],
      "config": {}
    }
  ]
};
