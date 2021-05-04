import { CapitalizeUserPipe } from './capitalize-user.pipe';

describe('CapitalizeUserPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeUserPipe();
    expect(pipe).toBeTruthy();
  });
});
