(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['timeline'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"row path-item\">\n  ";
  stack1 = ((helper = (helper = helpers.leftThenRight || (depth0 != null ? depth0.leftThenRight : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"leftThenRight","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  <h3>"
    + escapeExpression(((helper = (helper = helpers.timeline_title || (depth0 != null ? depth0.timeline_title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_title","hash":{},"data":data}) : helper)))
    + "</h3>\n  <p>\n    "
    + escapeExpression(((helper = (helper = helpers.timeline_content || (depth0 != null ? depth0.timeline_content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_content","hash":{},"data":data}) : helper)))
    + "\n  </p>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.links : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.timeline_link_icon : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  <br />\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a href=\""
    + escapeExpression(((helper = (helper = helpers.timeline_link || (depth0 != null ? depth0.timeline_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.timeline_link_icon || (depth0 != null ? depth0.timeline_link_icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link_icon","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.timeline_video_link_mp4 : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <a class=\"video\">"
    + escapeExpression(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n      <div class=\"embedded-video\">\n        <video width=\"352\" height=\"288\" controls>\n          <source src=\""
    + escapeExpression(((helper = (helper = helpers.timeline_video_link_mp4 || (depth0 != null ? depth0.timeline_video_link_mp4 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_video_link_mp4","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n          <source src=\""
    + escapeExpression(((helper = (helper = helpers.timeline_video_link_ogg || (depth0 != null ? depth0.timeline_video_link_ogg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_video_link_ogg","hash":{},"data":data}) : helper)))
    + "\" type=\"video/ogg\">\n          Your browser does not support the video tag.  Might want to get something new.\n        </video>\n      </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <a href=\""
    + escapeExpression(((helper = (helper = helpers.timeline_link || (depth0 != null ? depth0.timeline_link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();