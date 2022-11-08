describe('ids-splitter e2e tests', () => {
  let errors = [];

  beforeAll(async () => {
    page.on('pageerror', error => errors.push(error.text));

    await page.goto('http://localhost:3000/ids-splitter');
  });

  it('renders with no errors', () => {
    expect(errors.length).toBe(0);
  });
});
