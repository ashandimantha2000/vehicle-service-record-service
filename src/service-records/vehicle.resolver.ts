import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Vehicle } from './entities/vehicle.entity';
import { ServiceRecordsService } from './service-records.service';
import { ServiceRecord } from './entities/service-record.entity';
 
@Resolver(() => Vehicle)
export class CarRecordResolver {
  constructor(private readonly serviceRecordsService: ServiceRecordsService) {}
 
  @ResolveField(() => [ServiceRecord], { name: 'serviceRecords' })
  async carRecord(@Parent() car: Vehicle): Promise<ServiceRecord[]> {
    return await this.serviceRecordsService.findbyvin(car.vin);
  }
  
}
