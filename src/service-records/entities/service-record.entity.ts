import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@ObjectType()
//Expouse to the GraphQL Gatway
@Directive('@key(fields: "vin")')
@Entity()
export class ServiceRecord {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Field({ nullable: true })
  @Column({ nullable: true })
  vin: string;

  @Field()
  @Column()
  service_name: string;

  //Many to one relationship
  @Field(() => Vehicle, { nullable: true })
  vehicle: Vehicle;
}
