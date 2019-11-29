import { Controller, Get, Put, Delete, Body, Param, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { photoDTO } from './photo.dto';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService){}

    @Get()
    showAllPhotos(){
        console.log("form controller start point");
        const getAll = this.photoService.showAll();
        console.log("form controller = ", getAll);
        console.log("form controller end point");
        return getAll;
    }

    @Post()
    createPhoto(@Body() data: photoDTO){
        return this.photoService.create(data);
    }

    @Get(':id')
    readPhoto(@Param('id') id: string){
        return this.photoService.read(id);
    }

    @Put(':id')
    updatePhoto(@Param('id') id: string,
                @Body() data: Partial<photoDTO>            
    ){
        return this.photoService.update(id, data);
    }

    @Delete(':id')
    destroyPhoto(@Param('id') id: string){
        return this.photoService.destroy(id);
    }
}
