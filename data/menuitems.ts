import {
   BLOG_ICON,
   FORUM_ICON,
   NEWS_ICON,
   SUPPORT_ICON,
} from '@/utils/constants/community_image_menuitem';
const menuitems_games = [
   {
      name: 'Home',
   },
   {
      name: 'About',
   },
   {
      name: 'Resources',
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
