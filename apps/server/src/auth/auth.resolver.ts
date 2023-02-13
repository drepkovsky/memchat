import { AuthService } from '#app/auth/auth.service';
import { LoginInput } from '#app/auth/dto/login.input';
import { SignupInput } from '#app/auth/dto/signup.input';
import { User } from '#app/auth/entities/user.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginInput)
  login(@Args('loginInput') createAuthInput: LoginInput) {
    // return this.authService.create(createAuthInput);
  }

  @Query(() => User, { name: 'me' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    // return this.authService.findOne(id);
  }

  @Mutation(() => User)
  signup(@Args('signUpInput') updateAuthInput: SignupInput) {
    // return this.authService.update(updateAuthInput.id, updateAuthInput);
  }
}
