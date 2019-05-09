/**
 * this is test for Event.
 * @test {Event}
 */
describe('test Event', ()=>{
  /**
   * this is test for Event#method.
   * @test {MyClass#method}
   */
  it('has a method', ()=>{
    assert(new MyClass(100).method);
  });
});
