import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceRecordInput {
  @Field()
  service_name: string;
}
