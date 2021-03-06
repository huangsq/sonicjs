var dataService = require('./data.service');
var helperService = require('./helper.service');
var fileService = require('./file.service');
var moduleService = require('./module.service');
var globalService = require('./global.service');

var eventBusService = require('./event-bus.service');
const css = require('css');
const axios = require('axios');
var csstree = require('css-tree');
var cssbeautify = require('cssbeautify');


module.exports = javascriptService = {

    startup: async function () {
        eventBusService.on('getRenderedPagePostDataFetch', async function (options) {
            if (options && options.page) {
                await javascriptService.getJsLinks(options);
            }
        });
    },

    // getGeneratedCss: async function () {

    //     var cssString = '';// 'body {background:lightblue;}';
    //     cssString = await this.processSections(cssString)
    //     var ast = css.parse(cssString);

    //     let cssFile = css.stringify(ast);
    //     return cssFile;
    // },

    getJsLinks: async function (options) {

        options.page.data.jsLinks = [];
        globalService.moduleJsFiles.forEach(link => {
            options.page.data.jsLinks += `<script src="${link}"></script>`;
        });
    },

    // processSections: async function (cssString) {

    //     let sections = await dataService.getContentByContentType('section')
    //     sections.forEach(section => {
    //         if (section.data.background) {
    //             if (section.data.background.type === 'color') {
    //                 let color = section.data.background.color;
    //                 cssString += ` section[data-id="${section.id}"]{background-color:${color}}`
    //             }
    //         }
    //     });

    //     return cssString;
    // },

    // getJsFile: async function (page) {
    //     //get template.css
    //     let cssString = await fileService.getFile('storage/css/template.css');
    //     //parse the css
    //     var ast = csstree.parse(cssString);
    //     let cleanCss = csstree.generate(ast);
    //     let beatifulCss = cssbeautify(cleanCss);

    //     page.data.editor = { "css" : beatifulCss} ;
    // },



}