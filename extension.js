// Fork of hide-dock-in-overview@roslax by RosGtHub
// https://github.com/RosGtHub/Hide-dock-in-overview

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';

export default class DockExtension {
  constructor() {
    this._showingSignalId = null;
    this._hidingSignalId = null;
    this._timeoutId = 0;
    this._delay = 200;
  }

  enable() {
    this._showingSignalId = Main.overview.connect('showing', () => {
      this._cancelTimeout();
      Main.overview.dash.hide();
    });

    this._hidingSignalId = Main.overview.connect('hiding', () => {
      this._timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, this._delay, () => {
        Main.overview.dash.show();
        this._timeoutId = 0;
        return GLib.SOURCE_REMOVE;
      });
    });
  }

  disable() {
    if (this._showingSignalId) {
      Main.overview.disconnect(this._showingSignalId);
      this._showingSignalId = null;
    }
    if (this._hidingSignalId) {
      Main.overview.disconnect(this._hidingSignalId);
      this._hidingSignalId = null;
    }
    this._cancelTimeout();
    Main.overview.dash.show();
  }

  _cancelTimeout() {
    if (this._timeoutId) {
      GLib.source_remove(this._timeoutId);
      this._timeoutId = 0;
    }
  }
}
