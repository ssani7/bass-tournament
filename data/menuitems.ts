import {
   BLOG_ICON,
   FORUM_ICON,
   NEWS_ICON,
   SUPPORT_ICON,
} from '@/utils/constants/community_image_menuitem';
const menuitems_games = [
   {
      name: 'Categories',
      items: [
         {
            title: 'Popular Games',
         },
         {
            title: 'Download Games',
         },
         {
            title: 'New Games',
         },
         {
            title: 'Free to Play Games',
         },

         {
            title: 'Best Games',
         },
      ],
   },
   {
      name: 'Platforms',
      items: [
         {
            title: 'Browser Games',
         },
         {
            title: 'PC Games',
         },
         {
            title: 'Mac Games',
         },
         {
            title: 'Mobile Games',
         },
         {
            title: 'Flash Games',
         },
         {
            title: 'HTML5 Games',
         },
      ],
   },
   {
      name: 'OS',
      items: [
         {
            title: 'Window Games',
         },
         {
            title: 'iOS Games',
         },
         {
            title: 'Andriod Games',
         },
      ],
   },
   {
      name: 'Devices',
      items: [
         {
            title: 'iPhone Games',
         },
         {
            title: 'iPad Games',
         },
      ],
   },
];

const genres = [
   'Casual Games',
   'MMORPG Games',
   'Tower Defense Games',
   'Shooting Games',
   'War Games',
   'Adventure Games',
   'Survival Games',
   'Match 3 Games',
   'Action Games',
   'MMO Games',
   'Multiplayer Games',
   'PvP Games',
   'RPG Games',
   'Strategy Games',
   'Castle Games',
   'Medieval Games',
   'Solitaire Games',
   'Puzzle Games',
   'Robot Games',
];

const community_menuitems = [
   {
      name: 'Forum',
      icon: FORUM_ICON,
   },
   {
      name: 'News',
      icon: NEWS_ICON,
   },
   {
      name: 'Blog',
      icon: BLOG_ICON,
   },
   {
      name: 'Support',
      icon: SUPPORT_ICON,
   },
];

const generators = [
   'Nickname Generator',
   'Fantasy Name Generator',
   'Elf Name Generator',
   'Gamertag Generator',
   'DND Name Generator',
   'Game Name Generator',
   'Clan Name Generator',
   'Superhero Name Generator',
   'RPG Name Generator',
];
export {
   menuitems_games as MENUITEMS_GAMES,
   genres as GENRES,
   community_menuitems as MENUITEMS_COMMUNITY,
   generators as MENUITEMS_RESOURCES,
};
