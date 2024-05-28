'use strict';

/**
 * paket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paket.paket');
