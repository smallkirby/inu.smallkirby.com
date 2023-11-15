type Fav = null | 'o' | '!';
type Platform =
  | 'switch'
  | 'PS4'
  | 'GC'
  | 'PSP'
  | 'DS'
  | 'Wii'
  | 'SS'
  | 'GBC'
  | 'GB'
  | 'GBA';

export type Game = {
  title: string;
  link: string | null;
  platform: Platform;
  clear: boolean;
  fav: Fav;
  date: string | null;
};

export const games: Game[] = [
  {
    title: 'Genshin Impact',
    link: 'https://genshin.hoyoverse.com/en/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Assassin\'s Creed Origins',
    link: 'https://ubisoft.co.jp/aco/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: '天穂のサクナヒメ',
    link: 'https://www.marv.jp/special/game/sakuna/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Super Mario Bros. Wonder',
    link: 'https://supermariobroswonder.nintendo.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'イースX -NORDICSノーディクス-',
    link: 'https://www.falcom.co.jp/ysx/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: '13 Sentinels: Aegis Rim',
    link: 'https://13sar.jp/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Sekiro: Shadows Die Twice',
    link: 'https://www.sekiro.jp/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'ARMORED CORE™ VI FIRES OF RUBICON™',
    link: 'https://www.armoredcore.net/index.html',
    platform: 'PS4',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: '違う冬のぼくら',
    link: 'https://store-jp.nintendo.com/list/software/70010000068759.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Slay the Spire',
    link: 'https://store.steampowered.com/app/646570/Slay_the_Spire/',
    platform: 'switch',
    clear: false,
    fav: 'o',
    date: null,
  },
  {
    title: '牧場物語 Welcome！ワンダフルライフ',
    link: 'https://www.bokumono.com/series/welcome/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'ダンガンロンパ 希望の学園と絶望の高校生',
    link: null,
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'The Legend of Zelda: Tears of the Kingdom',
    link: 'https://zelda.nintendo.com/tears-of-the-kingdom/',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Bayonetta 3',
    link: 'https://www.nintendo.co.jp/switch/axb7a/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Fire Emblem Engage',
    link: 'https://www.nintendo.co.jp/switch/ayfna/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Pikmin 4',
    link: 'https://www.nintendo.co.jp/switch/ampya/index.html',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Harvestella',
    link: 'https://www.jp.square-enix.com/harvestella/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Return to Shironagasu Island',
    link: 'https://tabinomichi.jp/shironagasu/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Horizon Forbidden West',
    link: 'https://www.playstation.com/ja-jp/games/horizon-forbidden-west/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Kirby and the Forgotten Land',
    link: 'https://www.nintendo.co.jp/switch/arzga/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Undertale',
    link: 'https://undertale.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Factorio',
    link: 'https://www.factorio.com/',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Timelie',
    link: 'https://store-jp.nintendo.com/list/software/70010000048276.html',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Brigandine: The Legend of Runersia',
    link: 'https://brigandine.happinet-games.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Astral Chain',
    link: 'https://www.nintendo.co.jp/switch/ab48a/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Xenoblade Chronicles 3',
    link: 'https://www.nintendo.co.jp/switch/az3ha/index.html',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Xenoblade Chronicles 2',
    link: 'https://www.nintendo.co.jp/switch/adena/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'GNOSIA',
    link: 'http://d-mebius.com/gnosias/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: '有翼のフロイライン',
    link: 'https://www.exabilities.com/yuyoku-f-jp',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Mario Golf: Super Rush',
    link: 'https://mariogolf.nintendo.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    link: 'https://www.spike-chunsoft.co.jp/witcher3/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Hollow Knight',
    link: 'https://www.hollowknight.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Ender Lilies: Quietus of the Knights',
    link: 'https://en.enderlilies.com/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'The DioField Chronicle',
    link: 'https://www.jp.square-enix.com/diofieldchronicle/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Atelier Ryza 3: Alchemist of the End & the Secret Key',
    link: 'https://www.gamecity.ne.jp/atelier/ryza3/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Atelier Ryza 2: Lost Legends & the Secret Fairy',
    link: 'https://www.gamecity.ne.jp/atelier/ryza2/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Splatoon 3',
    link: 'https://www.nintendo.co.jp/switch/av5ja/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Pikmin 3 Deluxe',
    link: 'https://pikmin3.nintendo.com/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Atelier Sophie: The Alchemist of the Mysterious Book',
    link: 'https://social.gust.co.jp/sophie/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'OCTOPATH TRAVELER',
    link: 'https://www.jp.square-enix.com/octopathtraveler/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'AI: The Somnium Files – Nirvana Initiative',
    link: 'https://www.spike-chunsoft.co.jp/ai-nirvana/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Splatoon 2',
    link: 'https://www.nintendo.co.jp/switch/aab6a/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Monster Hunter XX',
    link: 'https://www.monsterhunter.com/xx/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Monster Hunter Rise: Sunbreak',
    link: 'https://www.monsterhunter.com/rise-sunbreak/en-us/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: '7 Days to End with You',
    link: 'https://playism.com/en/game/7daystoendwithyou/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Animal Crossing: New Horizons',
    link: 'https://www.nintendo.co.jp/switch/acbaa/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Bravely Default 2',
    link: 'https://www.jp.square-enix.com/bd2/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Baba Is You',
    link: 'https://hempuli.com/baba/',
    platform: 'switch',
    clear: false,
    fav: 'o',
    date: null,
  },
  {
    title: 'Civilization VI',
    link: 'https://civilization.com/ja-JP/',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Fire Emblem: Three Houses',
    link: 'https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Pokémon Scarlet and Violet',
    link: 'https://scarletviolet.pokemon.com/en-us/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    link: 'https://www.nintendo.co.jp/zelda/index.html',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Pokémon Legends: Arceus',
    link: 'https://legends.pokemon.com/en-us/',
    platform: 'switch',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Pokémon Sword and Shield',
    link: 'https://swordshield.pokemon.com/en-us/',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Taiko no Tatsujin: Drum "n" Fun!',
    link: 'https://switch.taiko-ch.net/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Paper Mario: The Origami King',
    link: 'https://www.nintendo.co.jp/switch/aruua/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Super Smash Bros. Ultimate',
    link: 'https://www.smashbros.com/en_US/',
    platform: 'switch',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Watch Dogs 2',
    link: 'https://www.ubisoft.co.jp/wd2/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Horizon Zero Dawn',
    link: 'https://www.playstation.com/ja-jp/games/horizon-zero-dawn/',
    platform: 'PS4',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Persona 5',
    link: 'https://persona5.jp/',
    platform: 'PS4',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Marvel\'s Spider-Man',
    link: 'https://www.playstation.com/ja-jp/games/marvels-spider-man-remastered/',
    platform: 'PS4',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Monster Hunter World: Iceborne',
    link: 'https://www.monsterhunter.com/world-iceborne/us/',
    platform: 'PS4',
    clear: false,
    fav: null,
    date: null,
  },
  {
    title: 'Monster Hunter 3',
    link: 'https://www.capcom-games.com/product/ja-jp/monsterhunterportable3rd/',
    platform: 'Wii',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Super Robot Wars L',
    link: null,
    platform: 'DS',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: '太鼓の達人ぽ~たぶるDX',
    link: null,
    platform: 'PSP',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Monster Hunter Portable 2ndG',
    link: 'https://www.capcom-games.com/product/ja-jp/monsterhunterportable2ndg/',
    platform: 'PSP',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Professor Layton and the Curious Village',
    link: null,
    clear: true,
    platform: 'DS',
    fav: null,
    date: null,
  },
  {
    title: 'Paper Mario RPG (The Thousand-Year Door)',
    link: 'https://www.nintendo.co.jp/ngc/g8mj/index.html',
    platform: 'GC',
    clear: true,
    fav: '!',
    date: null,
  },
  {
    title: 'Doshin the Giant',
    link: 'https://www.nintendo.co.jp/ngc/gkdj/',
    platform: 'GC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Pikmin 2',
    link: null,
    platform: 'GC',
    clear: true,
    fav: null,
    date: null,
  },
  {
    title: 'Pikmin',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'GiFTPiA',
    link: 'https://www.nintendo.co.jp/ngc/ggfj/index.html',
    platform: 'GC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Mario Kart ~ Double Dash!!',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Kirby Air Ride',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Pokémon Emerald',
    link: null,
    platform: 'GBA',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Pokémon Gold and Silver',
    link: null,
    platform: 'GBC',
    clear: true,
    fav: 'o',
    date: null,
  },
  {
    title: 'Virtua Fighter',
    link: null,
    platform: 'SS',
    clear: false,
    fav: null,
    date: null,
  },
];
