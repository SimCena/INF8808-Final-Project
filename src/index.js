'use strict'

import * as buckets from './scripts/viz1.js'
import * as preprocess from './scripts/preprocess.js'

export let data = [];

d3.csv('./volsQuebec2022.csv').then(function (data) {
    preprocess.setData(data);
    console.log(data)
    buckets.displayBucketGraph(5);
    buckets.setUpSlider();

})