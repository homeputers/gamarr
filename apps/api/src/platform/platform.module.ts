import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

@Module({
  imports: [PrismaModule],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
