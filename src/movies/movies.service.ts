import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieDocument } from 'src/schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    try {
      const newObj = await this.movieModel.create(createMovieDto);
      return newObj;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    const res = await this.movieModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    const res = await this.movieModel.findById(id).exec();
    return res;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    try {
      const updatedObj = await this.movieModel
        .findByIdAndUpdate(id, updateMovieDto)
        .exec();
      return updatedObj;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    await this.movieModel.findByIdAndRemove(id).exec();
    return `Movie with id ${id} successfully removed`;
  }
}
