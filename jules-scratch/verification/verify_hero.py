import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML file
        base_path = os.path.abspath("NiharikaTech")

        # Verify index.html
        await page.goto(f"file://{base_path}/index.html")
        # Wait for animations to start
        await page.wait_for_timeout(2000)
        await page.screenshot(path="jules-scratch/verification/hero_effect.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())