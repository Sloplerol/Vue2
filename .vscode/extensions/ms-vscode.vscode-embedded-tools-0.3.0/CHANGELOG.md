# Change Log

## 0.3.0 - 2022-08-31

### Added
- Added support for ARM's `embedded-debug` debug type.

### Changed
- Edited the pinning experience such that on pinning an element, that element is selected.
- ST project conversion verifies that `com.st.stm32cube.ide.mcu.MCUProjectNature` exists as a nature in the `.project` file before starting conversion.

### Fixed
- The RTOS view now supports FreeRTOS versions that do not include `uxTopUsedPriority`.
- Peripheral view search results are now updated when the selected SVD changes.

## 0.2.0 - 2022-08-04

### Added
- The peripheral and RTOS views now work with [Cortex-Debug](https://github.com/Marus/cortex-debug) debug sessions. A recent build of Cortex-Debug that includes [this commit](https://github.com/Marus/cortex-debug/commit/ef59a834be96569859aca8273366296b430e77c0) is required.
- A warning appears when a workspace contains a `vcpkg-configuration.json` file but VS Code is not running in a vcpkg environment.
- Added the `vscode-embedded.convertStProject` command to open projects created in STM32CubeIDE.
- Added the `vscode-embedded.st.gdb`, `vscode-embedded.st.gdbserver`, `vscode-embedded.st.cubeprogrammer`, `vscode-embedded.st.svd`, and `vscode-embedded.st.cubemx` commands for use as [command variables](https://code.visualstudio.com/docs/editor/variables-reference#_command-variables). Each command will return the path to the respective tool from STM32CubeIDE or STM32CubeMX.
- Added an "Open With STM32CubeMX" entry on the Explorer context menu for *.ioc files.
- Support for filtering peripherals by name and description, and registers, clusters, and fields by name in the peripheral view.
- Added description to registers and fields in the peripheral view.

### Changed
- Removed dependency on the [VS Code Serial Monitor extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-serial-monitor).

### Fixed
- Accessibility fixes.
- Fixed an issue where the pin icon was overlapping with text.

## 0.1.1 - 2022-06-06

### Added
- Dependency on new [VS Code Serial Monitor extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-serial-monitor).
- Icon to pin elements to the top of the Peripheral View.
- Threads from the Zephyr RTOS are displayed in the the RTOS Viewer.
- Add telemetry.json so that when users run `code --telemetry` they can view what telemetry the extension emits.

### Changed
- The extension now supports [Remote Development](https://code.visualstudio.com/docs/remote/remote-overview).
- Pressing Esc or Ctrl now dismisses the error tooltip when editing a peripheral register value.

### Fixed
- Fixed a bug where attempting to edit a peripheral register while the debugger wasn't paused would cause displayed values to become blank.
- Fixed the error message that appears when attempting to write an invalid value to a peripheral register's field. The message now correctly specifies that the value must be binary.

## 0.1.0 - 2022-03-09

Initial Release.