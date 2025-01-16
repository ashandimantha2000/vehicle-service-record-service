import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceRecordInput } from './dto/create-service-record.input';
import { UpdateServiceRecordInput } from './dto/update-service-record.input';
import { ServiceRecord } from './entities/service-record.entity';

@Injectable()
export class ServiceRecordsService {
  constructor(
    @InjectRepository(ServiceRecord)
    private serviceRecordsRepository: Repository<ServiceRecord>,
  ) {}

  create(createServiceRecordInput: CreateServiceRecordInput): Promise<ServiceRecord> {
    const newRecord = this.serviceRecordsRepository.create(createServiceRecordInput);
    return this.serviceRecordsRepository.save(newRecord);
  }

  findAll(): Promise<ServiceRecord[]> {
    return this.serviceRecordsRepository.find();
  }

  findOne(id: string): Promise<ServiceRecord> {
    return this.serviceRecordsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateServiceRecordInput: UpdateServiceRecordInput): Promise<ServiceRecord> {
    await this.serviceRecordsRepository.update(id, updateServiceRecordInput);
    return this.serviceRecordsRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.serviceRecordsRepository.delete(id);
  }
}