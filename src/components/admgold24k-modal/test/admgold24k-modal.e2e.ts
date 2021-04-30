import { newE2EPage } from '@stencil/core/testing';

describe('admgold24k-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admgold24k-modal></admgold24k-modal>');

    const element = await page.find('admgold24k-modal');
    expect(element).toHaveClass('hydrated');
  });
});
