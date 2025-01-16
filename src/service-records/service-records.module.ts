import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRecordsService } from './service-records.service';
import { ServiceRecordsResolver } from './service-records.resolver';
import { ServiceRecord } from './entities/service-record.entity';
import { CarRecordResolver } from './vehicle.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRecord])],
  providers: [ServiceRecordsResolver, ServiceRecordsService, CarRecordResolver],
})
export class ServiceRecordsModule {}