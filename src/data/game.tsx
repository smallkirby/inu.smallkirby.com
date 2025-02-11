type Fav = null | 'o' | '!';
type Platform =
  | 'SP'
  | 'switch'
  | 'PS5'
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
  play_period?: string;
  play_hour?: string;
};

export const games: Game[] = [
  {
    title: 'Ender Magnolia: Bloom in the Mist',
    link: 'https://www.endermagnolia.com/en/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_hour: '20h',
    play_period: '2025.01.25-2025.02.01',
  },
  {
    title: 'Omori',
    link: 'https://www.omori-game.com/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '20h',
    play_period: '2025.01.19-2025.01.25',
  },
  {
    title: 'Emio – The Smiling Man: Famicom Detective Club',
    link: 'https://www.nintendo.com/jp/switch/a7lqa/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '5h',
    play_period: '2024.11.10-2024.12.08',
  },
  {
    title: 'Dragon Quest III:The Seeds of Salvation',
    link: 'https://www.dragonquest.jp/roto-trilogy/dq3/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '50h',
    play_period: '2024.11.16-2024.12.06',
  },
  {
    title: 'Astro Bot',
    link: 'https://www.playstation.com/en-us/games/astro-bot/',
    platform: 'PS5',
    clear: true,
    fav: 'o',
    play_hour: '17h',
    play_period: '2024.12.14-2024.12.31',
  },
  {
    title: 'No Case Should Remain Unsolved',
    link: 'https://playism.com/en/game/ncsru/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '3h',
    play_period: '2024.10.19-2024.11.02',
  },
  {
    title: 'Stellar Blade',
    link: 'https://www.playstation.com/ja-jp/games/stellar-blade/',
    platform: 'PS5',
    clear: true,
    fav: '!',
    play_hour: '30h',
  },
  {
    title: 'Super Mario Party Jamboree',
    link: 'https://www.nintendo.com/jp/switch/a7hla/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_hour: '5h',
    play_period: '2024.10.19-2024.10.20',
  },
  {
    title: 'Elden Ring',
    link: 'https://www.eldenring.jp/index.html',
    platform: 'PS5',
    clear: true,
    fav: 'o',
    play_hour: '90h+',
  },
  {
    title: 'Replica',
    link: 'https://www.nintendo.com/us/store/products/replica-switch',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '2h',
    play_period: '2024.09.20-2024.09.21',
  },
  {
    title: 'Powerful Pro Baseball 2024-2025',
    link: 'https://www.konami.com/pawa/2024-2025/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_hour: '10h',
    play_period: '2024.08.24-2024.08.30',
  },
  {
    title: "Marvel's Spider-Man 2",
    link: 'https://www.playstation.com/ja-jp/games/marvels-spider-man-2/',
    platform: 'PS5',
    clear: true,
    fav: null,
  },
  {
    title: 'JUDGE EYES: wills of death',
    link: 'https://www.playstation.com/en-id/games/judgment/',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: 'God of War Ragnarök',
    link: 'https://www.playstation.com/ja-jp/games/god-of-war-ragnarok/',
    platform: 'PS4',
    clear: true,
    fav: null,
  },
  {
    title: 'Unreal Life',
    link: 'https://www.nintendo.com/us/store/products/unreal-life-switch/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '5h',
    play_period: '2024.07.01-2024.07.08',
  },
  {
    title: 'Shin Megami Tensei V Vengeance',
    link: 'https://megaten5.jp/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_hour: '20h',
    play_period: '2024.06.14-2024.06.22',
  },
  {
    title: 'PARANORMASIGHT: The Seven Mysteries of Honjo',
    link: 'https://www.nintendo.com/us/store/products/paranormasight-the-seven-mysteries-of-honjo-switch',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '10h',
    play_period: '2024.06.01-2024.06.05',
  },
  {
    title: 'Paper Mario RPG',
    link: 'https://www.nintendo.com/jp/switch/a9qda/index.html',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_hour: '50h',
    play_period: '2024.05.23-2024.05.31',
  },
  {
    title: 'Unicorn Overload',
    link: 'https://unicornoverlord.atlus.com/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '40h',
    play_period: '2024.04.21-2024.05.18',
  },
  {
    title: 'TRIANGLE STRATEGY',
    link: 'https://www.jp.square-enix.com/trianglestrategy/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_hour: '50h',
    play_period: '2024.03.22-2024.04.19',
  },
  {
    title: 'OCTOPATH TRAVELER II',
    link: 'https://www.jp.square-enix.com/octopathtraveler2/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2024.02.23-2024.03.21',
    play_hour: '80h+',
  },
  {
    title: 'Final Fantasy VII Remake',
    link: 'https://www.jp.square-enix.com/ffvii_remake/',
    platform: 'PS4',
    clear: false,
    fav: null,
    play_hour: '14h',
  },
  {
    title: 'Ghost of Tsushima Director’s Cut',
    link: 'https://store.playstation.com/ja-jp/product/JP9000-PPSA03209_00-GHOSTDIRECTORPS5',
    platform: 'PS4',
    clear: true,
    fav: null,
    play_hour: '47h',
  },
  {
    title: 'NieR Replicant ver.1.22474487139...',
    link: 'https://www.jp.square-enix.com/nierreplicantv1p2/',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: 'Hogwarts Legacy',
    link: 'https://www.hogwartslegacy.com/en-us',
    platform: 'PS4',
    clear: true,
    fav: null,
  },
  {
    title: 'レスレリアーナのアトリエ - 忘れられた錬金術と極夜の解放者',
    link: 'https://www.gamecity.ne.jp/atelier/resleriana/',
    platform: 'SP',
    clear: false,
    fav: null,
    play_hour: '10h',
  },
  {
    title: 'Genshin Impact',
    link: 'https://genshin.hoyoverse.com/en/',
    platform: 'PS4',
    clear: false,
    fav: null,
    play_hour: '10h',
  },
  {
    title: "Assassin's Creed Origins",
    link: 'https://ubisoft.co.jp/aco/',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: '天穂のサクナヒメ',
    link: 'https://www.marv.jp/special/game/sakuna/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2023.11.6-2023.11.7',
    play_hour: '3h',
  },
  {
    title: 'Super Mario Bros. Wonder',
    link: 'https://supermariobroswonder.nintendo.com/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023,10.20-2023.12.21',
    play_hour: '10h',
  },
  {
    title: 'イースX -NORDICSノーディクス-',
    link: 'https://www.falcom.co.jp/ysx/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2023,10.21-2023,10.27',
    play_hour: '30h',
  },
  {
    title: '13 Sentinels: Aegis Rim',
    link: 'https://13sar.jp/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2023.10.16-2023.10.20',
    play_hour: '20h',
  },
  {
    title: 'Sekiro: Shadows Die Twice',
    link: 'https://www.sekiro.jp/',
    platform: 'PS4',
    clear: true,
    fav: '!',
    play_hour: '110h+',
  },
  {
    title: 'ARMORED CORE™ VI FIRES OF RUBICON™',
    link: 'https://www.armoredcore.net/index.html',
    platform: 'PS4',
    clear: true,
    fav: 'o',
  },
  {
    title: '違う冬のぼくら',
    link: 'https://store-jp.nintendo.com/list/software/70010000068759.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.10.05-2023.10.06',
    play_hour: '4h',
  },
  {
    title: 'Slay the Spire',
    link: 'https://store.steampowered.com/app/646570/Slay_the_Spire/',
    platform: 'switch',
    clear: false,
    fav: 'o',
    play_period: '2023.9.30-2024.12.31',
    play_hour: '30h',
  },
  {
    title: '牧場物語 Welcome！ワンダフルライフ',
    link: 'https://www.bokumono.com/series/welcome/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2023.02.15-2023.11.05',
    play_hour: '11h',
  },
  {
    title: 'ダンガンロンパ 希望の学園と絶望の高校生',
    link: null,
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.10.11-2023.10.13',
    play_hour: '16h',
  },
  {
    title: 'The Legend of Zelda: Tears of the Kingdom',
    link: 'https://zelda.nintendo.com/tears-of-the-kingdom/',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2023.05.13-2023.06.09',
    play_hour: '90h+',
  },
  {
    title: 'Bayonetta 3',
    link: 'https://www.nintendo.co.jp/switch/axb7a/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.11.01-2023.12.25',
    play_hour: '4h',
  },
  {
    title: 'Fire Emblem Engage',
    link: 'https://www.nintendo.co.jp/switch/ayfna/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.01.20-2023.10.28',
    play_hour: '60h+',
  },
  {
    title: 'Pikmin 4',
    link: 'https://www.nintendo.co.jp/switch/ampya/index.html',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2023.08.11-2023.08.16',
    play_hour: '25h',
  },
  {
    title: 'Harvestella',
    link: 'https://www.jp.square-enix.com/harvestella/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2023.05.02-2023.05.20',
    play_hour: '60h+',
  },
  {
    title: 'Return to Shironagasu Island',
    link: 'https://tabinomichi.jp/shironagasu/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.01.17',
    play_hour: '7h',
  },
  {
    title: 'Horizon Forbidden West',
    link: 'https://www.playstation.com/ja-jp/games/horizon-forbidden-west/',
    platform: 'PS4',
    clear: true,
    fav: '!',
  },
  {
    title: 'Kirby and the Forgotten Land',
    link: 'https://www.nintendo.co.jp/switch/arzga/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.04.15-2022.06.10',
    play_hour: '5h',
  },
  {
    title: 'Undertale',
    link: 'https://undertale.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2021.12.06-2021.12.06',
    play_hour: '1h',
  },
  {
    title: 'Factorio',
    link: 'https://www.factorio.com/',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2022.11.05-2023.01.01',
    play_hour: '60h+',
  },
  {
    title: 'Timelie',
    link: 'https://store-jp.nintendo.com/list/software/70010000048276.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2021.12.31-2022.01.01',
    play_hour: '1h',
  },
  {
    title: 'Brigandine: The Legend of Runersia',
    link: 'https://brigandine.happinet-games.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2021.12.12-2021.12.12',
    play_hour: '1h',
  },
  {
    title: 'Astral Chain',
    link: 'https://www.nintendo.co.jp/switch/ab48a/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2021.10.19-2021.10.20',
    play_hour: '5h',
  },
  {
    title: 'Xenoblade Chronicles 3',
    link: 'https://www.nintendo.co.jp/switch/az3ha/index.html',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2022.07.29-2022.08.14',
    play_hour: '90h+',
  },
  {
    title: 'Xenoblade Chronicles 2',
    link: 'https://www.nintendo.co.jp/switch/adena/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.02.02-2022.02.19',
    play_hour: '20h',
  },
  {
    title: 'GNOSIA',
    link: 'http://d-mebius.com/gnosias/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2021.12.06-2023.08.20',
    play_hour: '15h',
  },
  {
    title: '有翼のフロイライン',
    link: 'https://www.exabilities.com/yuyoku-f-jp',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2022.01.02-2022.01.02',
    play_hour: '1h',
  },
  {
    title: 'Mario Golf: Super Rush',
    link: 'https://mariogolf.nintendo.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2021.07.18-2022.02.06',
    play_hour: '10h',
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    link: 'https://www.spike-chunsoft.co.jp/witcher3/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.02.12-2022.02.19',
    play_hour: '5h',
  },
  {
    title: 'Hollow Knight',
    link: 'https://www.hollowknight.com/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2023.01.11-2023.01.11',
    play_hour: '2h',
  },
  {
    title: 'Ender Lilies: Quietus of the Knights',
    link: 'https://en.enderlilies.com/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2021.07.18-2023.01.04',
    play_hour: '25h',
  },
  {
    title: 'The DioField Chronicle',
    link: 'https://www.jp.square-enix.com/diofieldchronicle/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2022.10.22-2022.11.01',
    play_hour: '20h',
  },
  {
    title: 'Atelier Ryza 3: Alchemist of the End & the Secret Key',
    link: 'https://www.gamecity.ne.jp/atelier/ryza3/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.03.24-2023.04.28',
    play_hour: '50h',
  },
  {
    title: 'Atelier Ryza 2: Lost Legends & the Secret Fairy',
    link: 'https://www.gamecity.ne.jp/atelier/ryza2/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.12.31-2023.02.23',
    play_hour: '2h',
  },
  {
    title: 'Splatoon 3',
    link: 'https://www.nintendo.co.jp/switch/av5ja/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.10.14-2022.11.01',
    play_hour: '20h',
  },
  {
    title: 'Pikmin 3 Deluxe',
    link: 'https://pikmin3.nintendo.com/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2020.10.30-2023.05.01',
    play_hour: '20h',
  },
  {
    title: 'Atelier Sophie: The Alchemist of the Mysterious Book',
    link: 'https://social.gust.co.jp/sophie/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.01.01-2022.01.01',
    play_hour: '2h',
  },
  {
    title: 'OCTOPATH TRAVELER',
    link: 'https://www.jp.square-enix.com/octopathtraveler/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2021.11.19-2023.09.06',
    play_hour: '70h+',
  },
  {
    title: 'AI: The Somnium Files – Nirvana Initiative',
    link: 'https://www.spike-chunsoft.co.jp/ai-nirvana/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2023.01.14-2023.01.17',
    play_hour: '20h',
  },
  {
    title: 'Splatoon 2',
    link: 'https://www.nintendo.co.jp/switch/aab6a/index.html',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2018.04.14-2018.08.18',
    play_hour: '20h',
  },
  {
    title: 'Monster Hunter XX',
    link: 'https://www.monsterhunter.com/xx/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2018.06.15-2019.03.03',
    play_hour: '90h+',
  },
  {
    title: 'Persona 5 Royal',
    link: 'https://p5r.jp/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2022.12.11-2022.12.26',
    play_hour: '80h+',
  },
  {
    title: 'Monster Hunter Rise: Sunbreak',
    link: 'https://www.monsterhunter.com/rise-sunbreak/en-us/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2021.03.28-2024.12.31',
    play_hour: '250h+',
  },
  {
    title: '7 Days to End with You',
    link: 'https://playism.com/en/game/7daystoendwithyou/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2023.02.22-2023.02.23',
    play_hour: '3h',
  },
  {
    title: 'Animal Crossing: New Horizons',
    link: 'https://www.nintendo.co.jp/switch/acbaa/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2020.03.20-2023.10.28',
    play_hour: '80h+',
  },
  {
    title: 'Bravely Default 2',
    link: 'https://www.jp.square-enix.com/bd2/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2022.01.07-2022.01.28',
    play_hour: '60h+',
  },
  {
    title: 'Baba Is You',
    link: 'https://hempuli.com/baba/',
    platform: 'switch',
    clear: false,
    fav: 'o',
  },
  {
    title: 'Civilization VI',
    link: 'https://civilization.com/ja-JP/',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2020.07.27-2023.01.08',
    play_hour: '200h+',
  },
  {
    title: 'Fire Emblem: Three Houses',
    link: 'https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2021.11.01-2023.10.27',
    play_hour: '300h+',
  },
  {
    title: 'Pokémon Scarlet and Violet',
    link: 'https://scarletviolet.pokemon.com/en-us/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2022.11.19-2022.12.10',
    play_hour: '30h',
  },
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    link: 'https://www.nintendo.co.jp/zelda/index.html',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2018.11.07-2019.03.24',
    play_hour: '60h+',
  },
  {
    title: 'Pokémon Legends: Arceus',
    link: 'https://legends.pokemon.com/en-us/',
    platform: 'switch',
    clear: false,
    fav: null,
    play_period: '2022.01.30-2022.02.02',
    play_hour: '6h',
  },
  {
    title: 'Pokémon Sword and Shield',
    link: 'https://swordshield.pokemon.com/en-us/',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2019.12.15-2019.12.21',
    play_hour: '22h',
  },
  {
    title: 'Taiko no Tatsujin: Drum "n" Fun!',
    link: 'https://switch.taiko-ch.net/',
    platform: 'switch',
    clear: true,
    fav: 'o',
    play_period: '2021.08.15-2023.02.23',
    play_hour: '25h',
  },
  {
    title: 'Paper Mario: The Origami King',
    link: 'https://www.nintendo.co.jp/switch/aruua/index.html',
    platform: 'switch',
    clear: true,
    fav: null,
    play_period: '2020.07.21-2020.09.05',
    play_hour: '20h',
  },
  {
    title: 'Super Smash Bros. Ultimate',
    link: 'https://www.smashbros.com/en_US/',
    platform: 'switch',
    clear: true,
    fav: '!',
    play_period: '2018.12.07-',
    play_hour: '1600h+',
  },
  {
    title: 'Watch Dogs 2',
    link: 'https://www.ubisoft.co.jp/wd2/',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: 'Horizon Zero Dawn',
    link: 'https://www.playstation.com/ja-jp/games/horizon-zero-dawn/',
    platform: 'PS4',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Persona 5',
    link: 'https://persona5.jp/',
    platform: 'PS4',
    clear: true,
    fav: '!',
    play_period: '80h+',
  },
  {
    title: 'Gravity Rush 2',
    link: 'https://www.playstation.com/ja-jp/games/gravity-rush-2/',
    clear: false,
    fav: null,
    platform: 'PS4',
  },
  {
    title: 'Bloodborne The Old Hunters Edition',
    link: 'https://store.playstation.com/ja-jp/product/JP9000-CUSA03014_00-BLOODBORNE0000JP',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: 'The Last of Us Remastered',
    link: 'https://www.playstation.com/en-us/games/the-last-of-us-remastered/',
    platform: 'PS4',
    clear: true,
    fav: null,
  },
  {
    title: 'NieR:Automata',
    link: 'https://www.jp.square-enix.com/nierautomata/',
    platform: 'PS4',
    clear: true,
    fav: 'o',
  },
  {
    title: "Uncharted 4: A Thief's End",
    link: 'https://www.playstation.com/en-us/games/uncharted-4-a-thiefs-end/',
    platform: 'PS4',
    clear: true,
    fav: 'o',
  },
  {
    title: "Marvel's Spider-Man",
    link: 'https://www.playstation.com/ja-jp/games/marvels-spider-man-remastered/',
    platform: 'PS4',
    clear: true,
    fav: null,
  },
  {
    title: 'Monster Hunter World: Iceborne',
    link: 'https://www.monsterhunter.com/world-iceborne/us/',
    platform: 'PS4',
    clear: false,
    fav: null,
  },
  {
    title: 'Life Is Strange: Before the Storm',
    link: 'https://www.jp.square-enix.com/lisbts/',
    platform: 'PS4',
    clear: true,
    fav: null,
  },
  {
    title: 'Monster Hunter 3',
    link: 'https://www.capcom-games.com/product/ja-jp/monsterhunterportable3rd/',
    platform: 'Wii',
    clear: true,
    fav: null,
  },
  {
    title: 'Super Robot Wars L',
    link: null,
    platform: 'DS',
    clear: true,
    fav: 'o',
  },
  {
    title: '太鼓の達人ぽ~たぶるDX',
    link: null,
    platform: 'PSP',
    clear: true,
    fav: null,
  },
  {
    title: 'Monster Hunter Portable 2ndG',
    link: 'https://www.capcom-games.com/product/ja-jp/monsterhunterportable2ndg/',
    platform: 'PSP',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Professor Layton and the Curious Village',
    link: null,
    clear: true,
    platform: 'DS',
    fav: null,
  },
  {
    title: 'Paper Mario RPG (The Thousand-Year Door)',
    link: 'https://www.nintendo.co.jp/ngc/g8mj/index.html',
    platform: 'GC',
    clear: true,
    fav: '!',
  },
  {
    title: 'Doshin the Giant',
    link: 'https://www.nintendo.co.jp/ngc/gkdj/',
    platform: 'GC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Pikmin 2',
    link: null,
    platform: 'GC',
    clear: true,
    fav: null,
  },
  {
    title: 'Pikmin',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'GiFTPiA',
    link: 'https://www.nintendo.co.jp/ngc/ggfj/index.html',
    platform: 'GC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Mario Kart ~ Double Dash!!',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Kirby Air Ride',
    link: null,
    platform: 'GC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Pokémon Emerald',
    link: null,
    platform: 'GBA',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Pokémon Gold and Silver',
    link: null,
    platform: 'GBC',
    clear: true,
    fav: 'o',
  },
  {
    title: 'Virtua Fighter',
    link: null,
    platform: 'SS',
    clear: false,
    fav: null,
  },
];
