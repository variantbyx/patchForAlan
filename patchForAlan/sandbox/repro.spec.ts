import { test, expect } from '@playwright/test';

test.describe('Feedback form', () => {
  test('textarea is cleared after successful submission', async ({ page }) => {
    // Navigate to the application
    const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000';
    await page.goto(baseUrl);

    // Locate the textarea by its accessible label
    const feedbackTextarea = page.getByLabel('Your feedback');

    // Fill the textarea with sample feedback
    const sampleFeedback = 'Great app! Really enjoyed using it.';
    await feedbackTextarea.fill(sampleFeedback);

    // Submit the form
    await page.getByRole('button', { name: /submit feedback/i }).click();

    // Verify that the success message appears
    const statusMessage = page.getByRole('status');
    await expect(statusMessage).toBeVisible();
    await expect(statusMessage).toContainText('Feedback submitted successfully!');

    // Verify that the textarea has been cleared
    await expect(feedbackTextarea).toHaveValue('');
  });
});
