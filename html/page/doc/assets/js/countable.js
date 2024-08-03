var defaultOptions={countable:!0,position:"top",margin:"10px",float:"right",fontsize:"0.9em",color:"rgb(90,90,90)",language:"english",isExpected:!0};function plugin(t,o){if(defaultOptions.countable){let e;t.beforeEach(function(t){return e=t.match(/([\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g).length,t}),t.afterEach(function(t,o){let i=e+" words",n=Math.ceil(e/400)+" min";"chinese"===defaultOptions.language&&(i=e+" 字",n=Math.ceil(e/400)+" 分钟"),o(`
        ${"bottom"===defaultOptions.position?t:""}
        <div style="margin-${defaultOptions.position?"bottom":"top"}: ${defaultOptions.margin};">
            <span style="
                  float: ${"right"===defaultOptions.float?"right":"left"};
                  font-size: ${defaultOptions.fontsize};
                  color:${defaultOptions.color};">
            ${i}
            ${defaultOptions.isExpected?"&nbsp; | &nbsp;"+n:""}
            </span>
            <div style="clear: both"></div>
        </div>
        ${"bottom"!==defaultOptions.position?t:""}
        `)})}}window.$docsify.count=Object.assign(defaultOptions,window.$docsify.count),window.$docsify.plugins=[].concat(plugin,window.$docsify.plugins);