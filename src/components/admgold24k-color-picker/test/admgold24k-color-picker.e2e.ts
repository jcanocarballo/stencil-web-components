import { newE2EPage } from '@stencil/core/testing';

describe('admgold24k-color-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admgold24k-color-picker></admgold24k-color-picker>');

    const element = await page.find('admgold24k-color-picker');
    expect(element).toHaveClass('hydrated');
  });
});
