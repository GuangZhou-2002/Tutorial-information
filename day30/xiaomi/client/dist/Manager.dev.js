"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Manager =
/*#__PURE__*/
function () {
  function Manager(data) {
    _classCallCheck(this, Manager);

    this.data = data;
    this.root = null;
  }

  _createClass(Manager, [{
    key: "init",
    value: function init() {
      this.renderUI();
      this.addEventHandler();
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      var typeHtml = this.data.types.map(function (item, idx) {
        return "<li class=".concat(idx === 0 ? "active" : "", ">").concat(item, "</li>");
      }).join("");
      var ulHtml = "";
      this.data.data.forEach(function (item, index) {
        var liHtml = item.map(function (ele) {
          return "<li class=\"list-item\">\n                           <img src=".concat(ele.src, ">\n                           <h3 class=\"title\">").concat(ele.title, "</h3>\n                           <p class=\"desc\">\u7CBE\u54C1\u5546\u54C1</p>\n                           <p class=\"price\">\n                               <span>").concat(ele.price, "</span>\n                           </p>\n                     </li>");
        }).join("");
        ulHtml += "<ul class=\"list ".concat(index == 0 ? "current" : "", "\">").concat(liHtml, "</ul>");
      });
      var html = "<div class=\"box\">\n                    <div class=\"box-header\">\n                        <h2 class=\"title\">".concat(this.data.title, "</h2>\n                        <ul class=\"box-header-list\">").concat(typeHtml, "</ul>\n                    </div>\n                    <div class=\"box-content\">\n                        <div class=\"left\">\n                            <li><img src=").concat(this.data.srcA, " alt=\"\"></li>\n                            <li><img src=").concat(this.data.srcB, " alt=\"\"></li>\n                        </div>\n                        <div class=\"right\">").concat(ulHtml, "</div>\n                    </div>\n                </div>");
      this.root = $(html);
      this.root.appendTo("body");
    }
  }, {
    key: "addEventHandler",
    value: function addEventHandler() {
      var self = this;
      this.root.find(".box-header-list").children("li").mouseenter(function () {
        /* 1、设置当前标签的选中状态(排它) */
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        /* 2、设置让列表进行切换 */
        // console.log($(".list", self.root));

        $(".list", self.root).eq(index).addClass("current").siblings().removeClass("current");
      });
    }
  }]);

  return Manager;
}();