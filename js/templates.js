(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['timeline'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row path-item\">\n  "
    + ((stack1 = ((helper = (helper = helpers.leftThenRight || (depth0 != null ? depth0.leftThenRight : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"leftThenRight","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  <h3>"
    + alias3(((helper = (helper = helpers.timeline_title || (depth0 != null ? depth0.timeline_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_title","hash":{},"data":data}) : helper)))
    + "</h3>\n  <p>\n    "
    + alias3(((helper = (helper = helpers.timeline_content || (depth0 != null ? depth0.timeline_content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_content","hash":{},"data":data}) : helper)))
    + "\n  </p>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.timeline_link_icon : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "  <br />\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <a href=\""
    + alias3(((helper = (helper = helpers.timeline_link || (depth0 != null ? depth0.timeline_link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.timeline_link_icon || (depth0 != null ? depth0.timeline_link_icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link_icon","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.timeline_video_link_mp4 : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <a class=\"final-video\">"
    + alias3(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n      <div class=\"embedded-video\">\n        <video width=\"352\" height=\"288\" controls>\n          <source src=\""
    + alias3(((helper = (helper = helpers.timeline_video_link_mp4 || (depth0 != null ? depth0.timeline_video_link_mp4 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_video_link_mp4","hash":{},"data":data}) : helper)))
    + "\" type=\"video/mp4\">\n          <source src=\""
    + alias3(((helper = (helper = helpers.timeline_video_link_ogg || (depth0 != null ? depth0.timeline_video_link_ogg : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_video_link_ogg","hash":{},"data":data}) : helper)))
    + "\" type=\"video/ogg\">\n          Your browser does not support the video tag.  Might want to get something new.\n        </video>\n      </div>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <a href=\""
    + alias3(((helper = (helper = helpers.timeline_link || (depth0 != null ? depth0.timeline_link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.timeline_link_text || (depth0 != null ? depth0.timeline_link_text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timeline_link_text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();