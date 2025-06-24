import { CategoryFilterPipe } from '../pipe/category-filter.pipe';

describe('CategoryFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CategoryFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
