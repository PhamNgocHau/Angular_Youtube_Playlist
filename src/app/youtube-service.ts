import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'VQ1a4SuXIiw', song: 'Kygo & Ellie Goulding - First Time (outamatic Remix)'},
    {id: 'lZOgjUfGTWA', song: 'Best of Vocal Deep House Mix 2019 Relaxing Music'},
    {id: '5TvrjYl1uew', song: 'BASS BOOSTED🔈 CAR MUSIC MIX 2018 🔥 BEST EDM, BOUNCE, ELECTRO HOUSE #26'},
    {id: 'ualSK9XsZ4o', song: 'Nonstop Vinahouse 2019 | NST Full Track Thái Hoàng - DJ Triệu Muzik | Nhạc Sàn Hay Mới Nhất 2019'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];
  constructor() {}
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
