import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceRecordInput {
  @Field()
  vin: string;

  @Field()
  service_name: string;

  @Field()
  station: string;
}