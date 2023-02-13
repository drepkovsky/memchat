import { AuthResolver } from '#app/auth/auth.resolver';
import { AuthService } from '#app/auth/auth.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
