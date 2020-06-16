"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(data) {
    _classCallCheck(this, Slider);

    this.data = data;
    this.slider = null;
    this.sliderBox = null;
    this.sliderControl = null;
    this.sliderNav = null;
    this.timer = null;
    this.index = 0;
    this.len = this.data.length;
    this.sliderBoxItemWidth = 700;
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.createUI(); //1、创建标签
      //    this.setSliderItemBackgroundColor(); //2、设置背景颜色

      this.autoPlayer(); //3、自动播放

      this.addEventHandlerWithSlider();
      this.addEventHandlerWithControl();
      this.addEventHandlerWithSliderNavItem();
    }
  }, {
    key: "autoPlayer",
    value: function autoPlayer() {
      var _this = this;

      /* 核心：开启定时器，计算位移并设置标签的left */

      /* 注意：考虑临界情况 */
      this.timer = setInterval(function () {
        _this.next();

        _this.selectSliderNavItem(_this.index);
      }, 2000);
    }
  }, {
    key: "addEventHandlerWithSlider",
    value: function addEventHandlerWithSlider() {
      var _this2 = this;

      this.slider.mouseenter(function () {
        return clearInterval(_this2.timer);
      });
      this.slider.mouseleave(function () {
        return _this2.autoPlayer();
      });
    }
  }, {
    key: "addEventHandlerWithControl",
    value: function addEventHandlerWithControl() {
      var _this3 = this;

      $(".prev", this.slider).click(function () {
        _this3.prev();

        _this3.selectSliderNavItem(self.index);
      });
      $(".next", this.slider).click(function () {
        _this3.next();

        _this3.selectSliderNavItem(self.index);
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      this.index--;

      if (this.index == -1) {
        this.index = this.len - 1;
      }

      this.sliderBox.css("left", -(this.index * this.sliderBoxItemWidth) + "px");
    }
  }, {
    key: "next",
    value: function next() {
      this.index++;

      if (this.index == this.len) {
        this.index = 0;
      }

      this.sliderBox.css("left", -(this.index * this.sliderBoxItemWidth) + "px");
    }
  }, {
    key: "addEventHandlerWithSliderNavItem",
    value: function addEventHandlerWithSliderNavItem() {
      var self = this; //    let navItems = Array.from(this.sliderNav.children);
      //    navItems = this.sliderNav.children()

      this.sliderNav.children().each(function (idx, item) {
        console.log("item", item, "idx", idx);

        item.onclick = function () {
          // console.log(this, idx);

          /* 当点击焦点的时候：(1) 设置当前标签的选中状态 (2) 切换显示对应的图片 */
          // navItems.forEach(item => item.classList.remove("active"));
          // this.classList.add("active");
          console.log("+++");
          self.selectSliderNavItem(idx);
          self.index = idx; //    self.sliderBox.style.left = -(self.index * self.sliderBoxItemWidth) + "px";

          self.sliderBox.css("left", -(self.index * self.sliderBoxItemWidth) + "px");
        };
      });
    }
  }, {
    key: "selectSliderNavItem",
    value: function selectSliderNavItem(idx) {
      //    let navItems = Array.from(this.sliderNav.children);
      //    navItems.forEach(item => item.classList.remove("active"));
      //    navItems[idx].classList.add("active");
      this.sliderNav.children().eq(idx).addClass("active").siblings().removeClass("active");
    }
  }, {
    key: "createUI",
    value: function createUI() {
      var sliderBoxItem = this.data.map(function (item) {
        return "<li class=\"slider-box-item\"><img src=".concat(item, "></li>");
      }).join("");
      var sliderNavItem = this.data.map(function (item, idx) {
        return "<li class=\"slider-nav-item ".concat(idx == 0 ? "active" : "", "\">").concat(idx + 1, "</li>\n                ");
      }).join("");
      this.slider = $("\n                    <div class='slider'>\n                        <ul class='slider-box'>\n                            ".concat(sliderBoxItem, "\n                        </ul>\n                        <div class='slider-control'>\n                            <span class=\"prev\">&lt;</span> <span class=\"next\">&gt;</span>\n                        </div>\n                        <ol class='slider-nav'>\n                            ").concat(sliderNavItem, "\n                        </ol>\n                    </div>"));
      $("body").append(this.slider);
      this.sliderControl = $(".slider-control", this.slider);
      this.sliderBox = $(".slider-box", this.slider);
      this.sliderNav = $(".slider-nav", this.slider);
    }
  }, {
    key: "setSliderItemBackgroundColor",
    value: function setSliderItemBackgroundColor() {
      var _this4 = this;

      Array.from(this.sliderBox.children).forEach(function (item) {
        return item.style.background = _this4.getRandomColor();
      });
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      var r = parseInt(Math.random() * 256);
      var g = parseInt(Math.random() * 256);
      var b = parseInt(Math.random() * 256);
      return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    }
  }]);

  return Slider;
}();