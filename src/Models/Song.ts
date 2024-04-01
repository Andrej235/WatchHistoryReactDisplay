export default class Song {
  id: number;
  name: string;
  artist: string;
  listens: number;
  constructor(id: number, name: string, artist: string, listens: number) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.listens = listens;
  }
}
