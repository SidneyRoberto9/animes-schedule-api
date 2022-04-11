import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Anime, AnimeDocument } from './entities/anime.entity';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Injectable()
export class AnimesService {
  constructor(
    @InjectModel(Anime.name) private animeModel: Model<AnimeDocument>,
  ) {}

  create(createAnimeDto: CreateAnimeDto) {
    const anime = new this.animeModel(createAnimeDto);
    return anime.save();
  }

  findAll() {
    return this.animeModel.find();
  }

  findSeasonAll(year: string, premiered: string) {
    if (premiered.charAt(0).toLowerCase() === premiered[0].charAt(0)) {
      premiered = premiered.replace(premiered[0], premiered[0].toUpperCase());
    }

    return this.animeModel
      .find()
      .then((animes) =>
        animes.filter(
          (anime) => anime.year === year && anime.premiered === premiered,
        ),
      );
  }

  findOne(id: string) {
    return this.animeModel.findById(id);
  }

  activeAiringAll(value: boolean) {
    return this.animeModel.find().then((animes) => {
      animes.forEach((anime) => {
        anime.airing = value;
        anime.save();
      });
    });
  }

  activeAiringSeason(year: string, premiered: string, value: boolean) {
    if (premiered.charAt(0).toLowerCase() === premiered[0].charAt(0)) {
      premiered = premiered.replace(premiered[0], premiered[0].toUpperCase());
    }

    return this.animeModel.find().then((animes) => {
      animes.forEach((anime) => {
        if (anime.year === year && anime.premiered === premiered) {
          anime.airing = value;
          anime.save();
        }
      });
    });
  }

  update(id: string, updateAnimeDto: UpdateAnimeDto) {
    return this.animeModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: UpdateAnimeDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.animeModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
