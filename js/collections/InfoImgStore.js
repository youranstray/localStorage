// JavaScript Document
/**
 * Created with JetBrains WebStorm.
 * User: ChenFeng
 * Date: 13-4-27
 * Time: 下午2:28
 * To change this template use File | Settings | File Templates.
 */
/*require.config({
	baseUrl:'/localStorage/js',
	paths: {
		jquery': 'libs/jquery-2.1.1',
		underscore': 'libs/underscore',
		backbone': 'libs/backbone',
		InfoImg': 'models/InfoImg'
	}
});
*/
define(function(require, exports, module){
    var Backbone, InfoImg;

    Backbone = require(['../libs/backbone']);
    require(['../libs/backbone.localStorage']);

    var $ = require(['../libs/jquery-2.1.1']);
    var _ = require(['../libs/underscore']);

    InfoImg = require(['../models/InfoImg']);


    var InfoImgStore = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: InfoImg,

        // Save all of the todo items under the `"todos-backbone"` namespace.
        localStorage: new Backbone.LocalStorage("cfxixi-XiXiInfo-Img"),

        // Filter down the list of all todo items that are finished.
        done: function() {
            return this.filter(function(todo){ return todo.get('Id'); });
        },

        // Filter down the list to only todo items that are still not finished.
        remaining: function() {
            return this.without.apply(this, this.done());
        }

    });

    module.exports = new InfoImgStore();
})

