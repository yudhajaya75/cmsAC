/**
 * hyperlink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hyperlink.hyperlink');
