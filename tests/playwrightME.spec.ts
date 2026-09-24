import {test } from '@playwright/test'

test('get multiple element',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
    let elements = page.locator('.list-group-item')
    console.log(await elements.first().allTextContents())
})