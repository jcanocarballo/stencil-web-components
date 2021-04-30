import { newE2EPage } from '@stencil/core/testing';

describe('admgold24k-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admgold24k-button></admgold24k-button>');

    const element = await page.find('admgold24k-button');
    expect(element).toHaveClass('hydrated');
  });
});
