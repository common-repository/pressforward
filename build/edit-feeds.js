(()=>{"use strict";const e=window.wp.i18n;function t(){jQuery("body.post-type-pf_feed #submitdiv h3.hndle span").text((0,e.__)("Activate","pressforward")),jQuery("body.post-type-pf_feed").find('#post_status option[value="draft"]').text((0,e.__)("Inactive","pressforward")),jQuery("body.post-type-pf_feed").find('#post_status option[value="publish"]').text((0,e.__)("Active","pressforward"));const t=document.getElementById("post_status");if(!t)return;const s=t.value;"publish"===s&&jQuery("body.post-type-pf_feed").find("#post-status-display").text((0,e.__)("Active","pressforward")),"Draft"===s&&jQuery("body.post-type-pf_feed").find("#post-status-display").text((0,e.__)("Inactive","pressforward")),jQuery("body.post-type-pf_feed").find("#save-post").attr("value",(0,e.__)("Save Inactive","pressforward")),"publish"!==s&&jQuery("body.post-type-pf_feed").find("#publish").attr("value",(0,e.__)("Make Active","pressforward")),jQuery("body.post-type-pf_feed #save-post").click((function(){setTimeout((function(){jQuery("body.post-type-pf_feed").find("#save-post").attr("value",(0,e.__)("Save Inactive","pressforward"))}),50)}))}jQuery(window).load((function(){t(),jQuery("body.post-type-pf_feed").on("click",".edit-post-status",(function(){t()})),jQuery("body.post-type-pf_feed").on("click",".save-post-status",(function(){t()})),jQuery("body.post-type-pf_feed").on("click",".refresh-feed",(function(t){t.preventDefault(),t.target.classList.add("loading");const s=jQuery(this).attr("data-pf-feed");jQuery(".pf-feed-refresh-status").remove(),jQuery.post(ajaxurl,{action:"ajax_update_feed_handler",feed_id:s},(s=>{const{success:r,data:d}=s,{feedItemCount:o,itemsAdded:a,nextRetrievalDate:n,nextRetrievalString:p}=d,i=t.target.closest("tr"),f=document.createElement("div");f.classList.add("notice"),f.classList.add(r?"notice-success":"notice-error"),
// translators: Number of feed items added.
f.textContent=r?(0,e.sprintf)((0,e.__)("Feed refreshed successfully. Created %s new feed items.","pressforward"),a):(0,e.__)("There was an error refreshing the feed.","pressforward");const u=document.createElement("td");u.setAttribute("colspan",i.children.length),u.appendChild(f);const c=document.createElement("tr").appendChild(u);if(c.classList.add("pf-feed-refresh-status"),i.before(c),r&&(o&&(i.querySelector(".items_retrieved").textContent=o),n&&p)){const e=i.querySelector(".last_retrieved abbr");e&&(e.setAttribute("title",n),e.textContent=p)}t.target.classList.remove("loading")}))}))}))})();