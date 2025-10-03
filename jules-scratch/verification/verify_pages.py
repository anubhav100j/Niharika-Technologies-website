import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Get the absolute path to the HTML files
        base_path = os.path.abspath("NiharikaTech")

        # Verify index.html
        await page.goto(f"file://{base_path}/index.html")
        await page.screenshot(path="jules-scratch/verification/index.png")

        # Verify services.html
        await page.goto(f"file://{base_path}/services.html")
        await page.screenshot(path="jules-scratch/verification/services.png")

        # Verify partners.html
        await page.goto(f"file://{base_path}/partners.html")
        await page.screenshot(path="jules-scratch/verification/partners.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())