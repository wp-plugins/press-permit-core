function pp_jqid(selector){return selector.replace(/:/g,'\\:');}
jQuery(document).ready(function($){$(".pp-hidden-subdiv h3").click(function(e){e.preventDefault();$(this).siblings(".hide-if-js").show();});$(document).on('mouseenter','#userprofile_groupsdiv_pp ul.pp-agents-list li label',function(){var func=function(lbl){$(lbl).closest('li').find('a').show();}
window.setTimeout(func,300,$(this));});$('span.pp-alert').each(function(){var msg=$(this).html();if(msg){$('<div id="message" class="error fade">'+msg+'</div>').insertAfter('#wpbody h2');}});});function agp_escape_id(myid){return myid.replace(/(:|\.)/g,'\\$1');}
function pp_show_elem(classAttrib,$){if(-1==classAttrib.indexOf(' ')){$('#'+classAttrib).show();}else{ppClass=pp_match_class(classAttrib);if(ppClass)
$('#'+ppClass).show();}}
function pp_show_class(classAttrib,$){if(-1==classAttrib.indexOf(' ')){$('.'+classAttrib).show();}else{ppClass=pp_match_class(classAttrib);if(ppClass)
$('.'+ppClass).show();}}
function pp_match_class(classAttrib,$){var elemClasses=classAttrib.split(' ');for(i=0;i<elemClasses.length;i++){if(elemClasses[i].indexOf("pp-")==0||elemClasses[i].indexOf("pp_")==0||elemClasses[i].indexOf("-pp_")>=0){return elemClasses[i];break;}}
return false;}