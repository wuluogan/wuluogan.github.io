(function () {
  'use strict';

  var $html = document.documentElement;
  var $body = document.body;
  var $toc = document.getElementById('toc');
  var $backTop = document.getElementById('backTop');
  var $toolboxMobile = document.getElementById('toolbox-mobile');
  var $scrollProgressBar = document.getElementById('scroll-progress-bar');
  var $cover = document.getElementById('cover');
  var $close = document.getElementById('close');
  var $modalDialog = document.getElementById('modal-dialog');
  var scrollTop = 0;
  var tocTop = 20;
  var $themeColor = document.getElementById('theme-color');


  (function init() {
    if ($backTop) {
      scrollTop = $body.scrollTop || $html.scrollTop;
      scrollTop > 10 ? Util.addClass($backTop, 'show') : Util.removeClass($backTop, 'show');
    }

    if ($toc) {
      var tocHeight = parseInt(window.getComputedStyle($toc)['height'], 10);
      var winHeight = document.documentElement.clientHeight;
      if (tocHeight + 20 > winHeight) {
        return;
      }
      scrollTop = $body.scrollTop || $html.scrollTop;
      scrollTop > 180 ? Util.addClass($toc, 'fixed') : Util.removeClass($toc, 'fixed');
    }

    if ($themeColor) {
      $themeColor.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        isDark ? enableLightMode() : enableDarkMode();
        if (!isDark) {
          localStorage.setItem('darkModeEnabled', true);
        } else {
          localStorage.removeItem('darkModeEnabled');
        }
      });
    }


  }());

  // 禁用鼠标右键
  document.oncontextmenu = function () { return false; };

  document.addEventListener('DOMContentLoaded', function () {
    if ($themeColor) {
      if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-mode');
        $themeColor.getElementsByTagName('i')[0].className = 'icon-moon';
      } else {
        document.body.classList.add('light-mode');
        $themeColor.getElementsByTagName('i')[0].className = 'icon-sun';
      }
    }
    FastClick.attach(document.body);
  }, false);

  window.noZensmooth = true;

  // scroll spy
  scrollSpy.init({
    nodeList: document.querySelectorAll('.toc-link'),
    scrollTarget: window
  });

  // toc and backTop
  Util.bind(window, 'scroll', function () {
    scrollTop = $body.scrollTop || $html.scrollTop;
    if ($toc) {
      var tocHeight = parseInt(window.getComputedStyle($toc)['height'], 10);
      var winHeight = document.documentElement.clientHeight;
      if (tocHeight + 20 > winHeight) {
        return;
      }

      scrollTop > 180 ? Util.addClass($toc, 'fixed') : Util.removeClass($toc, 'fixed');
    }

    if ($backTop) {
      scrollTop > 10 ? Util.addClass($backTop, 'show') : Util.removeClass($backTop, 'show');
    }

    // 绑定滚动
    if ($scrollProgressBar) {
      scrollTop = $body.scrollTop || $html.scrollTop;
      const percent = scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
      $scrollProgressBar.style.visibility = Math.round(percent) === 0 ? 'hidden' : 'visible';
      $scrollProgressBar.style.width = `${percent.toFixed(3)}%`;
    }
  });

  if ($backTop) {
    Util.bind($backTop, 'click', function () {
      zenscroll.to($body)
    });
  }

  if ($toc) {
    var $toc = document.getElementById('toc');
    var $tocLinks = document.querySelectorAll('.toc-link');
    var links = Array.prototype.slice.call($tocLinks);

    links.forEach(function (element) {
      Util.bind(element, 'click', function (e) {
        var $target = document.getElementById(this.hash.substring(1));
        zenscroll.to($target)
        e.preventDefault();
      });
    });
  }

  if ($toolboxMobile) {
    Util.bind($toolboxMobile, 'click', function () {
      Util.addClass($modalDialog, 'show-dialog')
      Util.removeClass($modalDialog, 'hide-dialog');

      Util.addClass($cover, 'show')
      Util.removeClass($cover, 'hide');
    });


    Util.bind($cover, 'click', closeModal);
    Util.bind($close, 'click', closeModal);
  }


  if (location.pathname === '/search/') {
    Util.request('GET', '/search.json', function (data) {
      var $inputSearch = document.getElementById('input-search');
      Util.bind($inputSearch, 'keyup', function () {
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);

        if (this.value.trim().length <= 0) {
          return;
        }

        var results = filterPosts(data, keywords);
        var $listSearch = document.getElementById('list-search');
        $listSearch.innerHTML = createInnerHTML(results);
      });

    });
  }


  function filterPosts(data, keywords) {
    var results = [];

    data.forEach(function (item) {
      var isMatch = false;
      var matchKeyWords = [];
      item.content = item.content.replace(/<[^>]*>/g, '');

      keywords.forEach(function (word) {
        var reg = new RegExp(word, 'i');
        var indexTitle = item.title.search(reg);
        var indexContent = item.content.search(reg);

        if (indexTitle > -1 || indexContent > -1) {
          isMatch = true;
          matchKeyWords.push(word);
        }
      });

      if (isMatch) {
        item.matchKeyWords = matchKeyWords;
        results.push(item);
      }
    });

    return results;
  }

  function createInnerHTML(results) {
    var content = '';
    results.forEach(function (item) {
      var postContent;
      postContent = highlightText(item.content, item.matchKeyWords);
      postContent = getPreviewContent(postContent, item.matchKeyWords);

      item.title = highlightText(item.title, item.matchKeyWords);

      item = '<li class="item">' +
        '<a href="' + item.url + '"" target="_blank">' +
        '<h3 class="title">' + item.title + '</h3>' +
        '</a>' +
        '<p class="post-content">' + postContent + '</h3>' +
        '</li>';
      content += item;
    });

    return content;
  }

  function getPreviewContent(content, matchKeyWords) {
    var isMatch = false;
    var index = 0;
    matchKeyWords.forEach(function (word) {
      var reg = new RegExp(word, 'i');
      index = content.search(reg);
      if (index < 0) {
        return;
      }

      isMatch = true;
    });

    if (isMatch) {
      if (index < 120) {
        content = content.substr(0, 140);
      } else {
        content = content.substr(index - 60, 200);
      }
    } else {
      content = content.substr(0, 120);
    }

    return content;
  }

  function highlightText(text, matchKeyWords) {
    text = text.replace(/<[^>]*>/g, '');
    matchKeyWords.forEach(function (word) {
      var reg = new RegExp('(' + word + ')', 'ig');
      text = text.replace(reg, '<span class="color-hightlight">$1</span>');
    });

    return text;
  }


  function closeModal() {
    Util.addClass($modalDialog, 'hide-dialog')
    Util.removeClass($modalDialog, 'show-dialog');
    Util.addClass($cover, 'hide')
    Util.removeClass($cover, 'show');
  }

  function enableLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    $themeColor.getElementsByTagName('i')[0].className = 'icon-sun';
  }

  function enableDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    $themeColor.getElementsByTagName('i')[0].className = 'icon-moon';
  }

}());
