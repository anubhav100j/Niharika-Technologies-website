from playwright.sync_api import sync_playwright, expect
import pathlib

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get the current working directory as a URI
    file_prefix = pathlib.Path.cwd().as_uri()

    # Verify index.html
    index_url = f"{file_prefix}/index.html"
    page.goto(index_url)
    page.screenshot(path="jules-scratch/verification/index_screenshot.png")

    # Verify services.html
    services_url = f"{file_prefix}/services.html"
    page.goto(services_url)
    page.screenshot(path="jules-scratch/verification/services_screenshot.png")

    browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)