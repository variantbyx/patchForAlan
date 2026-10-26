
const { test, expect } = require("@playwright/test");

test("feedback input should clear after submission", async ({ page }) => {
    await page.goto(
        process.env.BASE_URL || "http://host.docker.internal:5173"
    );

    await page
        .getByLabel("Your feedback")
        .fill("The login button is broken");

    await page.getByRole("button", {
        name: "Submit Feedback",
    }).click();

    await expect(
        page.getByLabel("Your feedback")
    ).toHaveValue("");
});
