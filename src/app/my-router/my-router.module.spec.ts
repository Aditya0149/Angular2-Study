import { MyRouterModule } from './my-router.module';

describe('MyRouterModule', () => {
  let myRouterModule: MyRouterModule;

  beforeEach(() => {
    myRouterModule = new MyRouterModule();
  });

  it('should create an instance', () => {
    expect(myRouterModule).toBeTruthy();
  });
});
