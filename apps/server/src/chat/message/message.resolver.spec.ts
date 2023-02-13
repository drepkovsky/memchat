import { MessageResolver } from '#app/chat/message/message.resolver';
import { MessageService } from '#app/chat/message/message.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageResolver', () => {
  let resolver: MessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageResolver, MessageService],
    }).compile();

    resolver = module.get<MessageResolver>(MessageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
