# Contributing

Thanks for helping! The most valuable contributions for a GNOME Shell extension
are compatibility reports and small, well tested fixes.

## Ways to contribute

- **Compatibility reports**: if you run a GNOME version not listed in the README
  and the extension works or breaks, open a bug report with your GNOME version
  and session type (X11 or Wayland).
- **Bug reports**: use the bug report template and include relevant
  `gnome-shell` log output.
- **Code and docs**: pull requests welcome.

## Workflow

1. Branch from `Master` using `feat/`, `fix/`, or `docs/` prefixes.
2. Keep commits in [Conventional Commits](https://www.conventionalcommits.org)
   style (`feat:`, `fix:`, `docs:`, `chore:`).
3. Fill in the pull request template. Compatibility changes require a README
   table update in the same PR.
4. CI validates `metadata.json` and the required files on every push and pull
   request, so keep it green.

## Releases

The release workflow attaches an installable zip to GitHub Releases for every
`v*` tag. Bump the integer `version` in `metadata.json` together with the tag.
