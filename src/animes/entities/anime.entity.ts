import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { link } from '../dto/create-anime.dto';

export type AnimeDocument = Anime & Document;

@Schema()
export class Anime {
  @Prop()
  title: string;

  @Prop()
  title_english: string;

  @Prop()
  title_Japanese: string;

  @Prop()
  image_url: string;

  @Prop()
  type: string;

  @Prop()
  episodes: number;

  @Prop()
  status: string;

  @Prop()
  airing: boolean;

  @Prop()
  weekday: string;

  @Prop()
  rating: string;

  @Prop()
  synopsis: string;

  @Prop()
  year: string;

  @Prop()
  premiered: string;

  @Prop()
  producers: string[];

  @Prop()
  licensors: string[];

  @Prop()
  studios: string[];

  @Prop()
  genres: string[];

  @Prop()
  external_links: link[];
}

export const AnimeSchema = SchemaFactory.createForClass(Anime);
