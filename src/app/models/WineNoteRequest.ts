import { WineNoteUpsert } from './WineNoteUpsert';

export class WineNoteRequest {
  wineId: number;
  user: string;
  wineNotes: string[] = [];
  upsert: WineNoteUpsert[] = [];
  date: string;
}
