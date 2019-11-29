import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('photo')
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;

   @CreateDateColumn()
   created: Date;

   @Column('text')
   photo: string;

   @Column('text')
   description: string;
}