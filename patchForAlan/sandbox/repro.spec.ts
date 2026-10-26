import { test, expect } from '@playwright/test';

test.describe('Feedback form', () => {
  test('clears textarea after successful submission', async ({ page }) => {
    // Navigate to the app
    await page.goto('/');

    // Locate the textarea by its accessible label
    const feedbackTextarea = page.getByLabel('Your feedback');

    // Fill in some feedback
    const feedbackText = 'Great app! Very useful.';
    await feedbackTextarea.fill(feedbackText);

    // Submit the form
    const submitButton = page.getByRole('button', { name: 'Submit Feedback' });
    await submitButton.click();

    // Verify the success message appears
    const successMessage = page.getByRole('status');
    await expect(successMessage).toContainText('Feedback submitted successfully!');

    // Verify the submitted feedback text is displayed in the success message
    await expect(successMessage).toContainText(feedbackText);

    // The textarea should be cleared after submission
    await expect(feedbackTextarea).toHaveValue('');
  });
});
