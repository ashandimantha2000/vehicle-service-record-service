import { CreateServiceRecordInput } from './create-service-record.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServiceRecordInput extends PartialType(CreateServiceRecordInput) {

  @Field()
  service_name: string;

  @Field()
  station: string;
}