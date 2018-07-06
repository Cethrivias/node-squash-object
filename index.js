'use strict';

const set = require('lodash.set');

module.exports = {
    /**
     * Expands object
     *
     * @param {Object} obj Object to expand
     * @returns {Object} Expanded object
     */
    expand(obj) {
        const result = {};
        for (let i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            set(result, i, obj[i]);
        }
        return result;
    },

    /**
     * Flattens object
     *
     * @param {Object} obj Object to flatten
     * @returns {Object} Flattened object
     */
    flatten(obj) {
        const result = {};
        for (let i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] === 'object') {
                const flatObj = flatten(obj[i]);
                for (let j in flatObj) {
                    result[`${i}.${j}`] = flatObj[j];
                }
            } else {
                result[i] = obj[i];
            }
        }
        return result;
    }
};
