# WebKit on macOS reports `dropEffect = 'copy'` in `dragend` for `effectAllowed = 'copyMove'`

In Playwright's WebKit on macOS, when the drag source sets `effectAllowed = 'copyMove'` and the drop target's `dragover` only calls `preventDefault()`, `dataTransfer.dropEffect` in `dragend` is `copy`. Real Safari, Chromium, Firefox, and Playwright's WebKit on Linux all report `move`.

- Repo: https://github.com/ocavuebot/webkit-copymove-drop-effect
- Page: https://ocavuebot.github.io/webkit-copymove-drop-effect/
- Environment: GitHub Actions macOS v26.6.2, Playwright v1.65.0-alpha-2026-10-15, WebKit 27.2 (build 2376)

## Steps

1. Open the page. The source sets `effectAllowed = 'copyMove'`.
2. Drag "Drag me" onto Target A (`dragover` only calls `preventDefault()`).
3. Drag "Drag me" onto Target B (`dragover` sets `dropEffect = 'move'`).

Or run `npm ci && npx playwright install webkit && npx playwright test --project=webkit` on macOS.

**Expected:** `dragend` reports `move` for A and B, as in real Safari.

**Actual:** `dragend` reports `copy` for A.

## Results

| Env | Playwright | Browser | Target A | Target B |
| --- | --- | --- | --- | --- |
| GitHub Actions macos-latest | v1.65.0-alpha-2026-10-15 | WebKit 27.2 (build 2376) | $\color{red}{\textbf{copy}}$ | $\color{green}{\textbf{move}}$ |
| GitHub Actions macos-latest | v1.65.0-alpha-2026-10-15 | Chromium 156.0.8078.12 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| GitHub Actions macos-latest | v1.65.0-alpha-2026-10-15 | Firefox 157.0 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| GitHub Actions ubuntu-latest | v1.65.0-alpha-2026-10-15 | WebKit 27.2 (build 2376) | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| GitHub Actions ubuntu-latest | v1.65.0-alpha-2026-10-15 | Chromium 156.0.8078.12 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| GitHub Actions ubuntu-latest | v1.65.0-alpha-2026-10-15 | Firefox 157.0 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| MacBook | None (manual) | Safari 27.0.1 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| MacBook | None (manual) | Chrome 155 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |
| MacBook | None (manual) | Firefox 157 | $\color{green}{\textbf{move}}$ | $\color{green}{\textbf{move}}$ |

## Screenshots

GitHub Actions macOS v26.6.2, Playwright v1.65.0-alpha-2026-10-15, WebKit 27.2 (build 2376)

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/macos-webkit.jpg)

GitHub Actions macOS v26.6.2, Playwright v1.65.0-alpha-2026-10-15, Chromium 156.0.8078.12

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/macos-chromium.jpg)

GitHub Actions macOS v26.6.2, Playwright v1.65.0-alpha-2026-10-15, Firefox 157.0

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/macos-firefox.jpg)

GitHub Actions Ubuntu v24.04.5 LTS, Playwright v1.65.0-alpha-2026-10-15, WebKit 27.2 (build 2376)

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/ubuntu-webkit.jpg)

GitHub Actions Ubuntu v24.04.5 LTS, Playwright v1.65.0-alpha-2026-10-15, Chromium 156.0.8078.12

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/ubuntu-chromium.jpg)

GitHub Actions Ubuntu v24.04.5 LTS, Playwright v1.65.0-alpha-2026-10-15, Firefox 157.0

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/ubuntu-firefox.jpg)

MacBook, Safari 27.0.1 (manual)

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/manual/macos-safari.png)

MacBook, Chrome 155 (manual)

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/manual/macos-chrome.png)

MacBook, Firefox 157 (manual)

![](https://raw.githubusercontent.com/ocavuebot/webkit-copymove-drop-effect/main/screenshots/manual/macos-firefox.png)
