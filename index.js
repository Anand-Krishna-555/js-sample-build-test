'use strict';

/* Getting browser details */
function getBrowser() {
    try {
        function getBrowserVersion(userAgent, regex) { return userAgent.match(regex) ? userAgent.match(regex)[2] : null };
        const userAgent = navigator.userAgent;
        let browser = "unkown";
       
        // Detect browser name
        browser = (/chrome|crios/i).test(userAgent) && !(/opr|opera|chromium|edg|ucbrowser|googlebot/i).test(userAgent) ? 'Chrome' : browser;
        browser = (/safari/i).test(userAgent) && !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent) ? 'Safari' : browser;
        browser = (/chromium/i).test(userAgent) ? 'Chromium' : browser;
        browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i).test(userAgent) ? 'Mozilla Firefox' : browser;
        browser = (/edg/i).test(userAgent) ? 'Edge' : browser;
        browser = (/googlebot/i).test(userAgent) ? 'GoogleBot' : browser;
        browser = (/opr|opera/i).test(userAgent) ? 'Opera' : browser;
        browser = (/ucbrowser/i).test(userAgent) ? 'UCBrowser' : browser;
        browser = (/; msie|trident/i).test(userAgent) && !(/ucbrowser/i).test(userAgent) ? 'IE' : browser;
        browser = (!!window.navigator.brave && !!window.navigator.brave.isBrave.name && window.navigator.brave.isBrave.name =='isBrave') ? 'Brave': browser;
       
        // detect browser version
        switch (browser) {
            case 'UCBrowser': return browser + "/" + getBrowserVersion(userAgent, /(ucbrowser)\/([\d\.]+)/i); case 'UCBrowser': return browser + "/" + getBrowserVersion(userAgent, /(ucbrowser)\/([\d\.]+)/i); case 'Edge': return browser + "/" + getBrowserVersion(userAgent, /(edge|edga|edgios|edg)\/([\d\.]+)/i); case 'GoogleBot': return browser + "/" + getBrowserVersion(userAgent, /(googlebot)\/([\d\.]+)/i); case 'Chromium': return browser + "/" + getBrowserVersion(userAgent, /(chromium)\/([\d\.]+)/i); case 'Mozilla Firefox': return browser + "/" + getBrowserVersion(userAgent, /(firefox|fxios)\/([\d\.]+)/i); case 'Chrome': return browser + "/" + getBrowserVersion(userAgent, /(chrome|crios)\/([\d\.]+)/i); case 'Safari': return browser + "/" + getBrowserVersion(userAgent, /(safari)\/([\d\.]+)/i); case 'Opera': return browser + "/" + getBrowserVersion(userAgent, /(opera|opr)\/([\d\.]+)/i); case 'IE': const version = getBrowserVersion(userAgent, /(trident)\/([\d\.]+)/i); return version ? browser + "/" + parseFloat(version) + 4.0 : browser + "/7.0";case 'Brave': return browser + "/" + getBrowserVersion(userAgent, /(chrome|crios)\/([\d\.]+)/i);
            default: return "unknown/0.0.0.0";
        }
    } catch (e) { console.log('SDK:: Error on getting browserType: ', e); return "unknown/0.0.0.0" }
}

window.onload = (e) => {
    console.log("Hello from Bundler Practice");
    console.log(getBrowser());
};
