import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceRecord } from './service-record.entity';

//nest automatically generates the schema for the entity
@ObjectType()
@Directive('@extends')
@Directive(`@key(fields: "vin")`)
export class Vehicle {
  @Field()
  @Directive('@external')
  vin: string;

  //One to many relationship
  @Field(() => [ServiceRecord], { nullable: true })
  carServices: ServiceRecord[];
}
