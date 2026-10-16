# webkit-copymove-drop-effect

Does WebKit report `dropEffect = 'copy'` instead of `'move'` in `dragend` when the source sets `effectAllowed = 'copyMove'` and the drop target's `dragover` only calls `preventDefault()`?

Derived from [ocavuebot/playwright-drop-effect](https://github.com/ocavuebot/playwright-drop-effect).

- Page: [`docs/index.html`](docs/index.html), online at <https://ocavuebot.github.io/webkit-copymove-drop-effect/>. Open it in Safari, Chrome and Firefox and drag onto each target.
  - Target A: `dragover` only calls `preventDefault()`.
  - Target B (control): `dragover` sets `dropEffect = 'move'`.
- Test: [`tests/drop-effect.spec.js`](tests/drop-effect.spec.js) expects `move` in `dragend` for both targets, using `@playwright/test@1.65.0-alpha-2026-10-15`.
- CI: the [Test workflow](https://github.com/ocavuebot/webkit-copymove-drop-effect/actions/workflows/test.yml) runs on Ubuntu and macOS; the job summary shows the observed values.

## Run it locally

```sh
npm ci
npx playwright install
npx playwright test
```
