import { newSpecPage } from '@stencil/core/testing';
import { Admgold24kButton } from '../admgold24k-button';

describe('admgold24k-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Admgold24kButton],
      html: `<admgold24k-button></admgold24k-button>`,
    });
    expect(page.root).toEqualHtml(`
      <admgold24k-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admgold24k-button>
    `);
  });
});
