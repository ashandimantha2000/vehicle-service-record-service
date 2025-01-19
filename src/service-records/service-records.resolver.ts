import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveReference,
} from '@nestjs/graphql';
import { ServiceRecordsService } from './service-records.service';
import { ServiceRecord } from './entities/service-record.entity';
import { CreateServiceRecordInput } from './dto/create-service-record.input';
import { UpdateServiceRecordInput } from './dto/update-service-record.input';

@Resolver(() => ServiceRecord)
export class ServiceRecordsResolver {
  constructor(private readonly serviceRecordsService: ServiceRecordsService) {}

  @Mutation(() => ServiceRecord)
  createServiceRecordssss(
    @Args('createServiceRecordInput') createServiceRecordInput: CreateServiceRecordInput,
  ): Promise<ServiceRecord> {
    return this.serviceRecordsService.create(createServiceRecordInput);
  }

  @Query(() => [ServiceRecord], { name: 'findAllRecords' })
  findAll() {
    return this.serviceRecordsService.findAll();
  }

  @Query(() => ServiceRecord, { name: 'findOneRecord' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.serviceRecordsService.findOne(id);
  }


  //Update Service Record
  @Mutation(() => ServiceRecord)
  updateServiceRecord(
    @Args('id', { type: () => String }) id: string,
    @Args('updateServiceRecordInput') updateServiceRecordInput: UpdateServiceRecordInput,
  ): Promise<ServiceRecord> {
    return this.serviceRecordsService.update(id, updateServiceRecordInput);
  }

  @Mutation(() => ServiceRecord)
  removeServiceRecord(@Args('id', { type: () => String }) id: string) {
    return this.serviceRecordsService.remove(id);
  }

  // @ResolveReference()
  // resolveReference(reference: {
  //   __typename: string;
  //   id: string;
  // }): Promise<ServiceRecord> {
  //   return this.serviceRecordsService.findOne(reference.id);
  // }
}
