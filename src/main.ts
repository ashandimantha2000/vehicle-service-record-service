import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { ServiceRecordsResolver } from './service-records/service-records.resolver';
import { CarRecordResolver } from './service-records/vehicle.resolver';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3002);

  // const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  // const schema = await gqlSchemaFactory.create([ServiceRecordsResolver, CarRecordResolver]);
  // console.log('Schema ==> \n', printSchema(schema));
}
bootstrap();
