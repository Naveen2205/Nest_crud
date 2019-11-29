import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { photoDTO } from './photo.dto';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Photo) 
        private readonly photoRepository: Repository<Photo>){}

    async showAll(){
        return await this.photoRepository.find();
    } 

    async create(data: photoDTO){
        const photo = await this.photoRepository.create(data);
        await this.photoRepository.save(data);
        return photo;
    }

    async read(id: string){
        return await this.photoRepository.findOne({where : {id}});
    }

    async update(id: string, data: Partial<photoDTO>){
        await this.photoRepository.update(id, data);
        return await this.photoRepository.findOne(id);
    }

    async destroy(id: string){
        await this.photoRepository.delete(id);
        return { deleted: true };''
    }
}
