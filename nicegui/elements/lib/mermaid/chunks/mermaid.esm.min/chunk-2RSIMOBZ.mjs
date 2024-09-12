import{a as g}from"./chunk-UWHJNN4Q.mjs";import{a as v,b as W}from"./chunk-U6LOUQAF.mjs";import{d as T}from"./chunk-KMOJB3TB.mjs";import{m as w}from"./chunk-AC3VT7B7.mjs";import{Ca as _,G as S,Ga as B,X as L,b as k,fa as $}from"./chunk-NQURTBEV.mjs";import{a as d}from"./chunk-GTKDMUJJ.mjs";var Z=d((a,t,r,p)=>{t.forEach(o=>{F[o](a,r,p)})},"insertMarkers"),G=d((a,t,r)=>{k.trace("Making markers for ",r),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),V=d((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),q=d((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),A=d((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",r+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),I=d((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",r+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),N=d((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),Q=d((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),j=d((a,t,r)=>{a.append("marker").attr("id",r+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",r+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),z=d((a,t,r)=>{a.append("defs").append("marker").attr("id",r+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),F={extension:G,composition:V,aggregation:q,dependency:A,lollipop:I,point:N,circle:Q,cross:j,barb:z},tt=Z;var H=d((a,t,r,p,o)=>{t.arrowTypeStart&&C(a,"start",t.arrowTypeStart,r,p,o),t.arrowTypeEnd&&C(a,"end",t.arrowTypeEnd,r,p,o)},"addEdgeMarkers"),J={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},C=d((a,t,r,p,o,c)=>{let n=J[r];if(!n){k.warn(`Unknown arrow type: ${r}`);return}let e=t==="start"?"Start":"End";a.attr(`marker-${t}`,`url(${p}#${o}_${c}-${n}${e})`)},"addEdgeMarker");var M={},m={},bt=d(()=>{M={},m={}},"clear"),xt=d((a,t)=>{let r=L(),p=S(r.flowchart.htmlLabels),o=t.labelType==="markdown"?T(a,t.label,{style:t.labelStyle,useHtmlLabels:p,addSvgBackground:!0},r):g(t.label,t.labelStyle),c=a.insert("g").attr("class","edgeLabel"),n=c.insert("g").attr("class","label");n.node().appendChild(o);let e=o.getBBox();if(p){let i=o.children[0],l=$(o);e=i.getBoundingClientRect(),l.attr("width",e.width),l.attr("height",e.height)}n.attr("transform","translate("+-e.width/2+", "+-e.height/2+")"),M[t.id]=c,t.width=e.width,t.height=e.height;let s;if(t.startLabelLeft){let i=g(t.startLabelLeft,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),f=l.insert("g").attr("class","inner");s=f.node().appendChild(i);let h=i.getBBox();f.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),m[t.id]||(m[t.id]={}),m[t.id].startLeft=l,u(s,t.startLabelLeft)}if(t.startLabelRight){let i=g(t.startLabelRight,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),f=l.insert("g").attr("class","inner");s=l.node().appendChild(i),f.node().appendChild(i);let h=i.getBBox();f.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),m[t.id]||(m[t.id]={}),m[t.id].startRight=l,u(s,t.startLabelRight)}if(t.endLabelLeft){let i=g(t.endLabelLeft,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),f=l.insert("g").attr("class","inner");s=f.node().appendChild(i);let h=i.getBBox();f.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),l.node().appendChild(i),m[t.id]||(m[t.id]={}),m[t.id].endLeft=l,u(s,t.endLabelLeft)}if(t.endLabelRight){let i=g(t.endLabelRight,t.labelStyle),l=a.insert("g").attr("class","edgeTerminals"),f=l.insert("g").attr("class","inner");s=f.node().appendChild(i);let h=i.getBBox();f.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),l.node().appendChild(i),m[t.id]||(m[t.id]={}),m[t.id].endRight=l,u(s,t.endLabelRight)}return o},"insertEdgeLabel");function u(a,t){L().flowchart.htmlLabels&&a&&(a.style.width=t.length*9+"px",a.style.height="12px")}d(u,"setTerminalWidth");var yt=d((a,t)=>{k.debug("Moving label abc88 ",a.id,a.label,M[a.id],t);let r=t.updatedPath?t.updatedPath:t.originalPath,p=L(),{subGraphTitleTotalMargin:o}=v(p);if(a.label){let c=M[a.id],n=a.x,e=a.y;if(r){let s=w.calcLabelPosition(r);k.debug("Moving label "+a.label+" from (",n,",",e,") to (",s.x,",",s.y,") abc88"),t.updatedPath&&(n=s.x,e=s.y)}c.attr("transform",`translate(${n}, ${e+o/2})`)}if(a.startLabelLeft){let c=m[a.id].startLeft,n=a.x,e=a.y;if(r){let s=w.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.startLabelRight){let c=m[a.id].startRight,n=a.x,e=a.y;if(r){let s=w.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.endLabelLeft){let c=m[a.id].endLeft,n=a.x,e=a.y;if(r){let s=w.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}if(a.endLabelRight){let c=m[a.id].endRight,n=a.x,e=a.y;if(r){let s=w.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",r);n=s.x,e=s.y}c.attr("transform",`translate(${n}, ${e})`)}},"positionEdgeLabel"),D=d((a,t)=>{let r=a.x,p=a.y,o=Math.abs(t.x-r),c=Math.abs(t.y-p),n=a.width/2,e=a.height/2;return o>=n||c>=e},"outsideNode"),K=d((a,t,r)=>{k.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);let p=a.x,o=a.y,c=Math.abs(p-r.x),n=a.width/2,e=r.x<t.x?n-c:n+c,s=a.height/2,i=Math.abs(t.y-r.y),l=Math.abs(t.x-r.x);if(Math.abs(o-t.y)*n>Math.abs(p-t.x)*s){let f=r.y<t.y?t.y-s-o:o-s-t.y;e=l*f/i;let h={x:r.x<t.x?r.x+e:r.x-l+e,y:r.y<t.y?r.y+i-f:r.y-i+f};return e===0&&(h.x=t.x,h.y=t.y),l===0&&(h.x=t.x),i===0&&(h.y=t.y),k.debug(`abc89 topp/bott calc, Q ${i}, q ${f}, R ${l}, r ${e}`,h),h}else{r.x<t.x?e=t.x-n-p:e=p-n-t.x;let f=i*e/l,h=r.x<t.x?r.x+l-e:r.x-l+e,x=r.y<t.y?r.y+f:r.y-f;return k.debug(`sides calc abc89, Q ${i}, q ${f}, R ${l}, r ${e}`,{_x:h,_y:x}),e===0&&(h=t.x,x=t.y),l===0&&(h=t.x),i===0&&(x=t.y),{x:h,y:x}}},"intersection"),R=d((a,t)=>{k.debug("abc88 cutPathAtIntersect",a,t);let r=[],p=a[0],o=!1;return a.forEach(c=>{if(!D(t,c)&&!o){let n=K(t,p,c),e=!1;r.forEach(s=>{e=e||s.x===n.x&&s.y===n.y}),r.some(s=>s.x===n.x&&s.y===n.y)||r.push(n),o=!0}else p=c,o||r.push(c)}),r},"cutPathAtIntersect"),Lt=d(function(a,t,r,p,o,c,n){let e=r.points;k.debug("abc88 InsertEdge: edge=",r,"e=",t);let s=!1,i=c.node(t.v);var l=c.node(t.w);l?.intersect&&i?.intersect&&(e=e.slice(1,r.points.length-1),e.unshift(i.intersect(e[0])),e.push(l.intersect(e[e.length-1]))),r.toCluster&&(k.debug("to cluster abc88",p[r.toCluster]),e=R(r.points,p[r.toCluster].node),s=!0),r.fromCluster&&(k.debug("from cluster abc88",p[r.fromCluster]),e=R(e.reverse(),p[r.fromCluster].node).reverse(),s=!0);let f=e.filter(O=>!Number.isNaN(O.y)),h=B;r.curve&&(o==="graph"||o==="flowchart")&&(h=r.curve);let{x,y:X}=W(r),Y=_().x(x).y(X).curve(h),b;switch(r.thickness){case"normal":b="edge-thickness-normal";break;case"thick":b="edge-thickness-thick";break;case"invisible":b="edge-thickness-thick";break;default:b=""}switch(r.pattern){case"solid":b+=" edge-pattern-solid";break;case"dotted":b+=" edge-pattern-dotted";break;case"dashed":b+=" edge-pattern-dashed";break}let U=a.append("path").attr("d",Y(f)).attr("id",r.id).attr("class"," "+b+(r.classes?" "+r.classes:"")).attr("style",r.style),y="";(L().flowchart.arrowMarkerAbsolute||L().state.arrowMarkerAbsolute)&&(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,y=y.replace(/\(/g,"\\("),y=y.replace(/\)/g,"\\)")),H(U,r,y,n,o);let E={};return s&&(E.updatedPath=e),E.originalPath=r.points,E},"insertEdge");export{tt as a,bt as b,xt as c,yt as d,Lt as e};