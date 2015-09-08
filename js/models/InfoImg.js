//InfoImg数据模型
define(function(require, exports, module){
    var Backbone = require('backbone');
    var InfoImg = Backbone.Model.extend({

        // Default attributes for the todo item.
        defaults: function() {
            return {
                Id: "0",
                Created_at: (new Date()).format("yyyy-MM-dd hh:mm:ss"),
                Retweeted_status: "resources/images/nodata.png",
                Text:"亲，暂时没有数据哦",
                Name:"CF西西工作室",
                UserId:"-1"
            };
        },

        // Ensure that each todo created has `title`.
        initialize: function() {
            if (!this.get("Id")) {
                this.set({"Id": this.defaults().Id});
            }

            if (!this.get("Created_at")) {
                this.set({"Created_at": this.defaults().Created_at});
            }

            if (!this.get("Retweeted_status")) {
                this.set({"Retweeted_status": this.defaults().Retweeted_status});
            }

            if (!this.get("Text")) {
                this.set({"Text": this.defaults().Text});
            }

            if (!this.get("Name")) {
                this.set({"Name": this.defaults().Name});
            }

            if (!this.get("UserId")) {
                this.set({"UserId": this.defaults().UserId});
            }

        }

    });

    module.exports = InfoImg;
});
