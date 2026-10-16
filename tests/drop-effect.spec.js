import { expect, test } from '@playwright/test'

test('dragend dropEffect is move', async ({ page, browser }, testInfo) => {
  await page.goto(new URL('../docs/index.html', import.meta.url).href)

  for (const id of ['a', 'b']) {
    await page.locator('#source').hover()
    await page.mouse.down()
    await page.locator(`#${id}`).hover()
    await page.mouse.up()
  }

  await page.screenshot({ path: `screenshots/${process.env.SCREENSHOT_NAME ?? testInfo.project.name}.jpg`, type: 'jpeg', quality: 90 })
  const a = await page.locator('#a-result').textContent()
  const b = await page.locator('#b-result').textContent()
  console.log(`RESULT ${process.env.OS_NAME ?? ''} ${testInfo.project.name} ${browser.version()}: A=${a} B=${b}`)

  expect({ a, b }).toEqual({ a: 'move', b: 'move' })
})
