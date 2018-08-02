(function(window){var svgSprite='<svg><symbol id="icon-geren-copy" viewBox="0 0 1024 1024"><path d="M963.1744 838.8608c-31.9488-172.6464-182.0672-299.008-357.376-299.008l-183.296 0c-179.4048 0-330.752 130.2528-360.0384 306.7904l0 0c-14.5408 89.088 54.4768 168.7552 143.5648 168.7552l613.7856 0c90.3168 0 159.5392-82.3296 143.5648-171.4176L963.3792 838.8608 963.1744 838.8608zM880.8448 921.1904c-14.5408 18.6368-37.2736 27.8528-61.0304 27.8528L207.2576 949.0432c-23.9616 0-45.056-9.216-59.8016-27.8528-15.9744-17.2032-21.2992-41.1648-18.6368-63.6928C151.552 712.4992 275.0464 606.208 422.5024 606.208l182.0672 0c143.5648 0 267.0592 102.1952 292.2496 244.5312l1.2288 5.3248C902.144 878.592 896.8192 902.5536 880.8448 921.1904L880.8448 921.1904zM880.8448 921.1904"  ></path><path d="M321.536 440.7296c53.248 53.0432 122.2656 79.6672 191.2832 79.6672 66.3552 0 134.144-25.1904 185.9584-74.3424l2.6624-2.6624c91.7504-87.6544 100.9664-229.7856 19.8656-328.0896l0 0c-54.4768-65.1264-131.4816-98.304-208.6912-98.304l0 66.3552c61.0304 0 118.1696 26.624 156.8768 74.3424 58.368 70.4512 51.8144 175.3088-14.7456 237.7728l-2.6624 2.6624c-38.5024 35.84-87.6544 55.7056-139.4688 55.7056-54.4768 0-106.2912-21.2992-143.5648-59.8016l-1.2288-1.2288c-62.464-62.464-67.7888-160.768-14.5408-231.2192 38.5024-50.3808 97.0752-78.4384 160.768-78.4384L514.048 16.9984l0 0c-79.6672 0-159.5392 34.6112-212.5824 103.6288l0 0c-74.3424 95.6416-66.3552 232.448 19.8656 318.8736L321.536 440.7296 321.536 440.7296zM321.536 440.7296"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M795.045158 383.134846h-31.45457v-121.874966c0-146.520679-104.40588-261.25988-252.750086-261.25988-148.936725 0-250.436198 117.185895-250.436198 261.25988v121.874966h-31.45457c-69.370658 0-125.787632 57.269996-125.787632 127.70821v383.088875c0 70.443322 56.422082 127.713318 125.787632 127.713318h566.095424c69.370658 0 125.797848-57.269996 125.797848-127.713318V510.848164c0-70.438214-56.42719-127.713318-125.797848-127.713318z m-471.757254-121.874966c0-108.803799 73.288433-197.400667 187.552598-197.400667 113.07402 0 189.846054 86.706938 189.846054 197.400667v121.874966H323.287904v-121.874966z m534.640854 632.672051c0 35.224215-28.205933 63.854105-62.8836 63.854105H228.949734c-34.672559 0-62.904032-28.624782-62.904032-63.854105V510.848164c0-35.219107 28.231473-63.854105 62.904032-63.854105h566.095424c34.672559 0 62.8836 28.634998 62.8836 63.854105v383.083767zM511.984676 574.656298c-34.718531 0-62.8836 28.624782-62.8836 63.900076 0 23.639453 12.662533 44.260125 31.45457 55.303448v104.339477c0 17.612107 14.067211 31.878527 31.42903 31.878527 17.382251 0 31.45457-14.26642 31.45457-31.878527v-104.349693a63.966479 63.966479 0 0 0 31.45457-55.293232c0-35.270186-28.159962-63.900076-62.90914-63.900076z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)