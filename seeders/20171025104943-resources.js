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
        id: 4,
        url: 'https://www.azattyk.org/z/828',
        path_1: '#ordinaryItems',
        path_2: 'li .content a@href',
        group_id: 1180,
        active: true
      },
      {
        id: 5,
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
        id: 10,
        url: 'http://kaktus.media/?lable=8',
        path_1: '.block_content .cat_content ul',
        path_2: 'li .t a@href',
        group_id: 1179,
        active: true
      },
      {
        id: 11,
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
      }
    ];
    return queryInterface.bulkInsert('resources', resources);
  },
  
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('resources', null, {});
  }
};