'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var resources = [
      {
        id: 1,
        url: 'http://www.eurosport.ru/',
        path_1: '.storylist-latest-content',
        path_2: '.storylist-latest__picture a@href',
        group_id: 1194,
        active: true
      },
      {
        id: 2,
        url: 'https://rus.azattyk.org/z/4795',
        path_1: '#ordinaryItems',
        path_2: 'li .content a@href',
        group_id: 1181,
        active: true
      },
      {
        id: 5,
        url: 'https://www.azattyk.org/z/828',
        path_1: '#ordinaryItems',
        path_2: 'li .content a@href',
        group_id: 1180,
        active: true
      },
      {
        id: 4,
        url: 'http://www.elle.ru/allarticles/',
        path_1: '.place-js',
        path_2: '.c1.drm a.newsItem__imgBlock@href',
        group_id: 1199,
        active: true
      },
      {
        id: 6,
        url: 'https://esquire.ru/stories',
        path_1: '.cardlist',
        path_2: 'ul li a@href',
        group_id: 1192,
        active: true
      },
      {
        id: 7,
        url: 'http://www.eurosport.ru/football',
        path_1: '.storylist-latest-content',
        path_2: '.storylist-latest__picture a@href',
        group_id: 1195,
        active: true
      },
      {
        id: 8,
        url: 'https://habrahabr.ru/all/',
        path_1: '.posts_list ul',
        path_2: 'article h2 a@href',
        group_id: 1191,
        active: true
      },
      {
        id: 9,
        url: 'http://lmndeit.kg/',
        path_1: '#dpe_fp_widget-3',
        path_2: '.recent-widget .block-inner a@href',
        group_id: 1182,
        active: true
      },
      {
        id: 11,
        url: 'http://kaktus.media/?lable=8',
        path_1: '.block_content .cat_content ul',
        path_2: 'li .t a@href',
        group_id: 1179,
        active: true
      },
      {
        id: 10,
        url: 'https://kloop.kg/news/',
        path_1: '.wpb_wrapper',
        path_2: '.td_block_wrap .td_block_inner .td-module-thumb a@href',
        group_id: 1186,
        active: true
      },
      {
        id: 12,
        url: 'http://ky.kloop.asia/news/',
        path_1: '.wpb_wrapper',
        path_2: '.td_block_wrap .td_block_inner .td-module-thumb a@href',
        group_id: 1187,
        active: true
      },
      {
        id: 13,
        url: 'http://knews.kg/',
        path_1: '.lenta .wpb_wrapper',
        path_2: '.td_block_wrap .td_block_inner h3 a@href',
        group_id: 1189,
        active: true
      },
      {
        id: 18,
        url: 'http://kurut.kg/',
        path_1: '#main .home_page ul',
        path_2: 'li .home-post-title a@href',
        group_id: 1190,
        active: true
      },
      {
        id: 15,
        url: 'http://kyrtag.kg/',
        path_1: '.news-list ul',
        path_2: 'li .v-news-head .v-news-info h3 a@href',
        group_id: 1183,
        active: true
      },
      {
        id: 16,
        url: 'https://pikabu.ru/best',
        path_1: '.inner_wrap .stories',
        path_2: '.story__main .story__header-title a.story__title-link@href',
        group_id: 1679,
        active: true
      },
      {
        id: 17,
        url: 'http://saat.kg/',
        path_1: '.wpb_wrapper .vc_tta-container .vc_general.vc_tta.vc_tta-tabs',
        path_2: '.td-block-row h3 a@href',
        group_id: 1188,
        active: true
      },
      {
        id: 14,
        url: 'https://www.sports.ru/news/football/',
        path_1: '.tabs-container ul',
        path_2: '.panel.active-panel .news a@href',
        group_id: 1197,
        active: true
      },
      {
        id: 19,
        url: 'https://www.sports.ru/',
        path_1: '.columns-layout__main',
        path_2: 'article h2 a@href',
        group_id: 1196,
        active: true
      },
      {
        id: 20,
        url: 'http://stylish.kg/',
        path_1: '#block-views-main-page-block-1 .view-content',
        path_2: '.views-field.views-field-title .field-content a@href',
        group_id: 1198,
        active: true
      },
      {
        id: 21,
        url: 'https://techcrunch.com/',
        path_1: '.l-main',
        path_2: 'ul li h2 a@href',
        group_id: 1193,
        active: true
      },
      {
        id: 22,
        url: 'https://www.akchabar.kg/news/',
        path_1: '.col-md-6.content_news_list',
        path_2: '.news_list_wrapper a@href',
        group_id: 1168,
        active: true
      },
      {
        id: 23,
        url: 'https://www.edimdoma.ru/retsepty',
        path_1: '.grid-two-column__column.grid-two-column__column_center.tags_content_pages_container',
        path_2: '.card-container .card .card__content .card__description  a@href',
        group_id: 1165,
        active: true
      },
      {
        id: 24,
        url: 'http://www.forbes.ru/news',
        path_1: '.panel-pane.pane-page-content',
        path_2: '.block-href-material.block-href-material-0.active .item-material .href-material@href',
        group_id: 1158,
        active: true
      },
      {
        id: 25,
        url: 'https://www.kp.kg/',
        path_1: 'None',
        path_2: 'None',
        group_id: 1145,
        active: true
      },
      {
        id: 26,
        url: 'http://www.rbc.ru/',
        path_1: '.custom-scroll__inner.js-scrollable-content',
        path_2: '.news-feed__list a@href',
        group_id: 1152,
        active: true
      },
      {
        id: 27,
        url: 'http://www.the-village.ru/',
        path_1: '.posts-layout.posts-layout-with-news',
        path_2: '.lastnews-block .post-item.post-item-news a@href',
        group_id: 1156,
        active: true
      },
      {
        id: 28,
        url: 'https://vc.ru/',
        path_1: '.feed__container',
        path_2: '.feed__item a.entry_content__link@href',
        group_id: 1163,
        active: true
      },
      {
        id: 29,
        url: 'https://lady.mail.ru/stars/',
        path_1: '.cols__wrapper',
        path_2: '.cell a.newsitem__title.link-holder@href',
        group_id: 1162,
        active: true
      },
      {
        id: 30,
        url: 'https://hightech.fm/api/internal/archive',
        path_1: 'None',
        path_2: 'None',
        group_id: 1161,
        active: true
      },
      {
        id: 31,
        url: 'https://ria.ru/lenta/',
        path_1: '.b-lists-wr .b-list-normal',
        path_2: '.b-list__item  a@href',
        group_id: 1164,
        active: true
      },
      {
        id: 32,
        url: 'https://lostfilm.info/news/',
        path_1: '.grid_9 #movie-header',
        path_2: '.news-container a.submenu-btn-nodrop.relative@href',
        group_id: 770,
        active: true
      },
      {
        id: 33,
        url: 'https://www.zakon.kz/news/',
        path_1: '.border-content #dle-content',
        path_2: 'a@href',
        group_id: 1260,
        active: true
      },
      {
        id: 34,
        url: 'https://data.nur.kz/posts?search[top_status]=1,2&search[section_id]=1&search[language]=ru&per-page=30&search[status]=3&sort=-published_at&thumbnail=r305x185&_format=json&fields=id,slug,catchy_title,description,published_at,thumb,comment_count,section_id&page=1',
        path_1: 'None',
        path_2: 'None',
        group_id: 1261,
        active: true
      },
      {
        id: 35,
        url: 'https://tengrinews.kz/',
        path_1: '#lenta_block',
        path_2: '.ten a@href',
        group_id: 1262,
        active: true
      },
      {
        id: 36,
        url: 'https://www.sports.kz/',
        path_1: '.news-list.hotmobile .scroll-hot-news',
        path_2: 'ul li a@href',
        group_id: 1264,
        active: true
      },
      {
        id: 37,
        url: 'https://365info.kz/category/poslednie-novosti/',
        path_1: '.row.category__items',
        path_2: '.item a.item__link@href',
        group_id: 1263,
        active: true
      },
      {
        id: 38,
        url: 'https://vk.com/in.humour',
        path_1: '.wall_item',
        path_2: '.wi_author a@data-post-id',
        group_id: 98,
        active: true
      },
      {
        id: 39,
        url: 'https://vk.com/refoot',
        path_1: '.wall_item',
        path_2: '.wi_author a@data-post-id',
        group_id: 1268,
        active: true
      },
      {
        id: 40,
        url: 'https://vk.com/faceumma',
        path_1: '.wall_item',
        path_2: '.wi_author a@data-post-id',
        group_id: 1265,
        active: true
      }
    ];
    return queryInterface.bulkInsert('resources', resources);
  },
  
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('resources', null, {});
  }
};