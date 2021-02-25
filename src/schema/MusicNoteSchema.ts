import NoteName from "../types/NoteName";

type MusicNoteSchema = {
  id: number;
  noteName: NoteName;
  noteDuration: number;
  phraseEnd?: number; // the id of the ending note
}
export default MusicNoteSchema;