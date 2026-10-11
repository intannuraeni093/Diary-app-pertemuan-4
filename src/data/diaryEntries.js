
const happyImage = require('../../assets/moods/happy.png');
const produktifImage = require('../../assets/moods/produktif.png');
const calmImage = require('../../assets/moods/calm.png');
const sadImage = require('../../assets/moods/sad.png');
const excitedImage = require('../../assets/moods/excited.png');

export const diaryEntries = [
  {
    id: 1,
    mood: 'happy',
    title: 'Jalan jalan pagi',
    date: '2026-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki selama 30 menit. Udaranya sangat sejuk...',
    moodSource: happyImage,
  },
  {
    id: 2,
    mood: 'Produktif',
    title: 'Kuliah pagi',
    date: '2026-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodSource: produktifImage,
  },
  {
    id: 3,
    mood: 'calm down',
    title: 'Senja di Taman',
    date: '2026-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit yang indah...',
    moodSource: calmImage,
  },
  {
    id: 4,
    mood: 'sad',
    title: 'Hujan Seharian',
    date: '2026-10-03',
    preview:
      'Rencana jalan-jalan batal karena hujan deras. Akhirnya cuma rebahan di kamar...',
    moodSource: sadImage,
  },
  {
    id: 5,
    mood: 'excited',
    title: 'Demo Proyek Berhasil',
    date: '2026-10-02',
    preview:
      'Presentasi aplikasi mobile berjalan lancar dan dosen memberi nilai bagus. Senang sekali!',
    moodSource: excitedImage,
  },
];
