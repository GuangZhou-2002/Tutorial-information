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

      this.setSliderItemBackgroundColor(); //2、设置背景颜色

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

      this.slider.onmouseenter = function () {
        return clearInterval(_this2.timer);
      };

      this.slider.onmouseleave = function () {
        return _this2.autoPlayer();
      };
    }
  }, {
    key: "addEventHandlerWithControl",
    value: function addEventHandlerWithControl() {
      var _this3 = this;

      this.sliderControl.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if (target.className == "prev") {
          _this3.prev();
        }

        if (target.className == "next") {
          _this3.next();
        }

        _this3.selectSliderNavItem(_this3.index);
      };
    }
  }, {
    key: "prev",
    value: function prev() {
      this.index--;

      if (this.index == -1) {
        this.index = this.len - 1;
      }

      this.sliderBox.style.left = -(this.index * this.sliderBoxItemWidth) + "px";
    }
  }, {
    key: "next",
    value: function next() {
      this.index++;

      if (this.index == this.len) {
        this.index = 0;
      }

      this.sliderBox.style.left = -(this.index * this.sliderBoxItemWidth) + "px";
    }
  }, {
    key: "addEventHandlerWithSliderNavItem",
    value: function addEventHandlerWithSliderNavItem() {
      var self = this;
      var navItems = Array.from(this.sliderNav.children);
      navItems.forEach(function (item, idx) {
        item.onclick = function () {
          // console.log(this, idx);

          /* 当点击焦点的时候：(1) 设置当前标签的选中状态 (2) 切换显示对应的图片 */
          // navItems.forEach(item => item.classList.remove("active"));
          // this.classList.add("active");
          self.selectSliderNavItem(idx);
          self.index = idx;
          self.sliderBox.style.left = -(self.index * self.sliderBoxItemWidth) + "px";
        };
      });
    }
  }, {
    key: "selectSliderNavItem",
    value: function selectSliderNavItem(idx) {
      var navItems = Array.from(this.sliderNav.children);
      navItems.forEach(function (item) {
        return item.classList.remove("active");
      });
      navItems[idx].classList.add("active");
    }
  }, {
    key: "createUI",
    value: function createUI() {
      this.createSliderNav();
      this.createSliderBox();
      this.createSliderControl();
      this.slider = document.createElement("div");
      this.slider.className = "slider";
      this.slider.appendChild(this.sliderBox);
      this.slider.appendChild(this.sliderControl);
      this.slider.appendChild(this.sliderNav);
      document.body.appendChild(this.slider);
    }
  }, {
    key: "createSliderBox",
    value: function createSliderBox() {
      this.sliderBox = document.createElement("ul");
      this.sliderBox.className = "slider-box";
      this.sliderBox.innerHTML = this.data.map(function (item) {
        return "<li class=\"slider-box-item\"><img src=".concat(item, "></li>");
      }).join("");
    }
  }, {
    key: "createSliderControl",
    value: function createSliderControl() {
      this.sliderControl = document.createElement("div");
      this.sliderControl.className = "slider-control";
      this.sliderControl.innerHTML = "<span class=\"prev\">&lt;</span> <span class=\"next\">&gt;</span>";
    }
  }, {
    key: "createSliderNav",
    value: function createSliderNav() {
      this.sliderNav = document.createElement("ol");
      this.sliderNav.className = "slider-nav";
      this.sliderNav.innerHTML = this.data.map(function (item, idx) {
        return "<li class=\"slider-nav-item ".concat(idx == 0 ? "active" : "", "\">").concat(idx + 1, "</li>\n                ");
      }).join("");
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