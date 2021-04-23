import { newE2EPage } from '@stencil/core/testing';

describe('media-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<media-box></media-box>');

    const element = await page.find('media-box');
    expect(element).toHaveClass('hydrated');
  });
});
