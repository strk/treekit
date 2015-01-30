(function(NS) {
  'use strict';

  NS.Config = {
    map: {
      center: [40.8343, -73.9279],
      zoom: 17,
      maxZoom: 19,
      minZoom: 14
    },
    layers: [
      {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 19
      }
    ],
    previewLayers: [
      {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '<a href="http://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 19
      }
    ],
    cartodb: {
      queryUrl: 'https://treekit.cartodb.com/api/v2/sql/',

      blockfaceTable: 'blockface_live',
      blockfaceSurveyTable: 'blockface_survey_live',
      speciesTable: 'species_list_live',
      treesTable: 'trees_live',
      areasTable: 'survey_areas',

      genusField: 'latin_common_genus',
      speciesField: 'latin_species',
      widelyPlantedField: 'widely_planted'
    }
  };


}(window.TreeKit = window.TreeKit || {}));
