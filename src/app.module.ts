import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { ServiceRecordsModule } from './service-records/service-records.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {path:'src/schema.gql', federation: 2},
      typePaths: ['src/schema.gql'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'service-db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServiceRecordsModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
