'use strict';

/**
 * paket router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::paket.paket');
