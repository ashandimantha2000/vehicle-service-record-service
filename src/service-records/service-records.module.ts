import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRecordsService } from './service-records.service';
import { ServiceRecordsResolver } from './service-records.resolver';
import { ServiceRecord } from './entities/service-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRecord])],
  providers: [ServiceRecordsResolver, ServiceRecordsService],
})
export class ServiceRecordsModule {}