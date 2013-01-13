jQuery['fn']['megaMenu'] = function (_0xcbd7x1) {
    $('.dropcontent')['css']('left', 'auto')['hide']();
    $('.fullwidth')['css']('left', '-1px')['hide']();
    switch (_0xcbd7x1) {
    case 'hover_fade':
        $('li')['hover'](function () {
            $(this)['children']()['stop']()['fadeTo'](400, 1);
        }, function () {
            $(this)['children']('div')['stop']()['fadeTo'](400, 0, function () {
                $(this)['hide']();
            });
        });
        break;;
    case 'hover_fadein':
        $('li')['hover'](function () {
            $(this)['children']()['stop']()['fadeTo'](400, 1)['show']();
        }, function () {
            $(this)['children']('div')['stop']()['hide']();
        });
        break;;
    case 'hover_slide':
        $('li')['hover'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['children']('div')['slideDown']('fast');
            _0xcbd7x2['hover'](function () {}, function () {
                $(this)['children']('div')['slideUp'](200);
            });
        });
        break;;
    case 'hover_toggle':
        $('li')['hover'](function () {
            $(this)['children']('div')['toggle']('fast')['show']();
        });
        break;;
    case 'click_fade':
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['children']()['fadeIn'](400)['show']();
            _0xcbd7x2['hover'](function () {}, function () {
                _0xcbd7x2['children']('div')['fadeOut'](400);
            });
        });
        break;;
    case 'click_slide':
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['children']()['slideDown']('fast')['show']();
            _0xcbd7x2['hover'](function () {}, function () {
                _0xcbd7x2['children']('div')['slideUp']('slow');
            });
        });
        break;;
    case 'click_toggle':
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['children']('div')['toggle']('fast')['show']();
            _0xcbd7x2['hover'](function () {}, function () {
                _0xcbd7x2['children']('div')['hide']('slow');
            });
        });
        break;;
    case 'click_open_close':
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            $(this)['children']()['fadeTo'](400, 1);
        });
        break;;
    case 'opened_first':
        $('li:first-child > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    case 'opened_last':
        $('li:last-child > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    case 'opened_second':
        $('li:nth-child(2) > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    case 'opened_third':
        $('li:nth-child(3) > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    case 'opened_fourth':
        $('li:nth-child(4) > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    case 'opened_fifth':
        $('li:nth-child(5) > div')['fadeTo'](400, 1)['parent']()['toggleClass']('active');
        $('li')['click'](function () {
            var _0xcbd7x2 = $(this);
            _0xcbd7x2['toggleClass']('active');
            _0xcbd7x2['siblings']()['removeClass']('active');
            $('.dropcontent, .fullwidth')['fadeOut'](400, 0);
            _0xcbd7x2['find']('.dropcontent, .fullwidth')['fadeTo'](400, 1);
        });
        break;;
    };
};