# Hide Dock in Overview

A GNOME Shell extension that hides the dash/dock when entering overview mode, keeping your workspace clean and distraction-free.

> **This is a community fork of [hide-dock-in-overview](https://github.com/RosGtHub/Hide-dock-in-overview) by [RosGtHub](https://github.com/RosGtHub).**  
> The original project has been sunset by its author. This fork exists to continue maintenance and compatibility updates (hopefully).  
> Special thanks to [gookie-dev](https://github.com/gookie-dev) for consistently keeping the original extension up to date before.

![screenshot](https://github.com/RosGtHub/Hide-dock-in-overview/assets/89165766/a5b113de-62ba-4ac1-bfee-609b14ae23f7)

---

## Compatibility

| GNOME Shell | Status |
|---|---|
| 46 | ✅ Supported |
| 47 | ✅ Supported |
| 48 | ✅ Supported |
| 50 | ✅ Supported |

---

## Installation

### Manual

```bash
# Clone the repository
git clone https://github.com/cipheraenys/Hide-Dock-In-Overview

# Move it to the extensions directory
mv Hide-Dock-In-Overview ~/.local/share/gnome-shell/extensions/Hide-Dock-In-Overview@Ciferatorium
```

Then log out and log back in (required on Wayland), and enable the extension:

```bash
gnome-extensions enable Hide-Dock-In-Overview@Ciferatorium
```

Or enable it via [GNOME Extensions](https://extensions.gnome.org) app or [Extension Manager](https://github.com/mjakeman/extension-manager).

---

## Contributing

Issues and pull requests are welcome. If you're on a GNOME version not listed above and it works (or doesn't), feel free to open an issue and let me know.

---

## Credits

This project is based on the original work by [RosGtHub](https://github.com/RosGtHub/Hide-dock-in-overview).

---

## License

This project inherits the original [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) from [RosGtHub/Hide-dock-in-overview](https://github.com/RosGtHub/Hide-dock-in-overview).
See [LICENSE](LICENSE) for details.
