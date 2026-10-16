import { expect, test } from '@playwright/test'

for (const id of ['implicit', 'explicit']) {
  test(`dragend dropEffect is move (${id})`, async ({ page }, testInfo) => {
    await page.goto(new URL('../docs/index.html', import.meta.url).href)

    await page.locator('#source').hover()
    await page.mouse.down()
    await page.locator(`#${id}`).hover()
    await page.mouse.up()

    const drop = await page.locator(`#${id}-drop`).textContent()
    const dragend = await page.locator(`#${id}-dragend`).textContent()
    console.log(`RESULT ${testInfo.project.name} ${id}: drop=${drop} dragend=${dragend}`)
    testInfo.annotations.push({ type: 'result', description: `drop=${drop} dragend=${dragend}` })

    await expect(page.locator(`#${id}-dragend`)).toHaveText('move')
  })
}
