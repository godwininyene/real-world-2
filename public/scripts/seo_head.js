// <!-- Twitter conversion tracking base code -->
! function(e, t, n, s, u, a) {
    e.twq || (s = e.twq = function() {
            s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = 'https://static.ads-twitter.com/uwt.js',
        a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
}(window, document, 'script');
twq('config', 'owt4m');
// <!-- End Twitter conversion tracking base code -->

// <!-- Twitter conversion tracking event code -->
// Insert Twitter Event ID
//   twq('event', 'tw-owt4m-owt4x', {
//     value: null // use this to pass the value of the conversion (e.g. 5.00)
//   });
// <!-- End Twitter conversion tracking event code -->

// And add this on purchase - with value: as the purchase value
{ /* <script async src="https://a.ads.rmbl.ws/ratag?id=AV-28586"></script> */ }
window._ratagData = window._ratagData || [];

function ratag() {
    _ratagData.push(arguments);
}
// function ratag_conversion(url) {
//   let callback = function() {
//     if (typeof url !== 'undefined') {
//       window.location = url;
//     }
//   };

//   ratag('conversion', {to: 1971, callback: callback});
//   return false;
// }

{
    /* <button type="button" onclick="ratag_conversion('https://mydomain.com/mypath')">Click Me!</button>
    This on the trigger element
    (purchase) */
}

// <!-- Snap Pixel Code -->
(function(e, t, n) {
    if (e.snaptr) return;
    var a = e.snaptr = function() {
        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
    };
    a.queue = [];
    var s = 'script';
    r = t.createElement(s);
    r.async = !0;
    r.src = n;
    var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
})(window, document,
    'https://sc-static.net/scevent.min.js');

snaptr('init', 'bbab97a0-f0bd-42f5-afe3-bf63c761d20d', {
    'user_email': 'INSERT_USER_EMAIL'
});

snaptr('track', 'PAGE_VIEW');
// <!-- End Snap Pixel Code -->
// To the bottom of the header
snaptr('track', 'PAGE_VIEW', {
    'price': INSERT_PRICE,
    'user_email': 'INSERT_USER_EMAIL'
})
// snaptr('track', 'PURCHASE', {'price': INSERT_PRICE, 'currency': 'INSERT_CURRENCY', 'transaction_id': 'INSERT_TRANSACTION_ID', 'item_ids': ['INSERT_ITEM_ID_1', 'INSERT_ITEM_ID_2'], 'item_category': 'INSERT_ITEM_CATEGORY', 'number_items': INSERT_NUMBER_ITEMS, 'uuid_c1': 'INSERT_UUID_C1', 'user_email': 'INSERT_USER_EMAIL', 'user_phone_number': 'INSERT_USER_PHONE_NUMBER', 'user_hashed_email': 'INSERT_USER_HASHED_EMAIL', 'user_hashed_phone_number': 'INSERT_USER_HASHED_PHONE_NUMBER'})
// On purchase



//new 
adroll_adv_id = "OBRCH635HVDHXBXXXHAHDY";
adroll_pix_id = "4CPDZQY7ERBGDFY7DXAVPF";
adroll_version = "2.0";
(function(w, d, e, o, a) {
    w.__adroll_loaded = true;
    w.adroll = w.adroll[];
    w.adroll.f = ['setProperties', 'identify', 'track', 'identify_email', 'get_cookie'];
    var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js";
    for (a = 0; a < w.adroll.f.length; a++) {
        w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]](function(n) {
            return function() {
                w.adroll.push([n, arguments])
            }
        })(w.adroll.f[a])
    }
    e = d.createElement('script');
    o = d.getElementsByTagName('script')[0];
    e.async = 1;
    e.src = roundtripUrl;
    o.parentNode.insertBefore(e, o);
})(window, document);
adroll.track("pageView");