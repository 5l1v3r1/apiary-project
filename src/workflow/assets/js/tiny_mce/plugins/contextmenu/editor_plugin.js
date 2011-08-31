(function(){var Event=tinymce.dom.Event,each=tinymce.each,DOM=tinymce.DOM;tinymce.create('tinymce.plugins.ContextMenu',{init:function(ed){var t=this,showMenu,contextmenuNeverUseNative,realCtrlKey;t.editor=ed;contextmenuNeverUseNative=ed.settings.contextmenu_never_use_native;t.onContextMenu=new tinymce.util.Dispatcher(this);showMenu=ed.onContextMenu.add(function(ed,e){if((realCtrlKey!==0?realCtrlKey:e.ctrlKey)&&!contextmenuNeverUseNative)return;Event.cancel(e);if(e.target.nodeName=='IMG')ed.selection.select(e.target);t._getMenu(ed).showMenu(e.clientX||e.pageX,e.clientY||e.pageX);Event.add(ed.getDoc(),'click',function(e){hide(ed,e)});ed.nodeChanged()});ed.onRemove.add(function(){if(t._menu)t._menu.removeAll()});function hide(ed,e){realCtrlKey=0;if(e&&e.button==2){realCtrlKey=e.ctrlKey;return}if(t._menu){t._menu.removeAll();t._menu.destroy();Event.remove(ed.getDoc(),'click',hide)}};ed.onMouseDown.add(hide);ed.onKeyDown.add(hide);ed.onKeyDown.add(function(ed,e){if(e.shiftKey&&!e.ctrlKey&&!e.altKey&&e.keyCode===121){Event.cancel(e);showMenu(ed,e)}})},getInfo:function(){return{longname:'Contextmenu',author:'Moxiecode Systems AB',authorurl:'http://tinymce.moxiecode.com',infourl:'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/contextmenu',version:tinymce.majorVersion+"."+tinymce.minorVersion}},_getMenu:function(ed){var t=this,m=t._menu,se=ed.selection,col=se.isCollapsed(),el=se.getNode()||ed.getBody(),am,p1,p2;if(m){m.removeAll();m.destroy()}p1=DOM.getPos(ed.getContentAreaContainer());p2=DOM.getPos(ed.getContainer());m=ed.controlManager.createDropMenu('contextmenu',{offset_x:p1.x+ed.getParam('contextmenu_offset_x',0),offset_y:p1.y+ed.getParam('contextmenu_offset_y',0),constrain:1,keyboard_focus:true});t._menu=m;m.add({title:'advanced.cut_desc',icon:'cut',cmd:'Cut'}).setDisabled(col);m.add({title:'advanced.copy_desc',icon:'copy',cmd:'Copy'}).setDisabled(col);m.add({title:'advanced.paste_desc',icon:'paste',cmd:'Paste'});m.add({title:'Sean What',icon:'paste',cmd:'Paste'});if((el.nodeName=='A'&&!ed.dom.getAttrib(el,'name'))||!col){m.addSeparator();m.add({title:'advanced.link_desc',icon:'link',cmd:ed.plugins.advlink?'mceAdvLink':'mceLink',ui:true});m.add({title:'advanced.unlink_desc',icon:'unlink',cmd:'UnLink'})}m.addSeparator();m.add({title:'advanced.image_desc',icon:'image',cmd:ed.plugins.advimage?'mceAdvImage':'mceImage',ui:true});m.addSeparator();am=m.addMenu({title:'contextmenu.align'});am.add({title:'contextmenu.left',icon:'justifyleft',cmd:'JustifyLeft'});am.add({title:'contextmenu.center',icon:'justifycenter',cmd:'JustifyCenter'});am.add({title:'contextmenu.right',icon:'justifyright',cmd:'JustifyRight'});am.add({title:'contextmenu.full',icon:'justifyfull',cmd:'JustifyFull'});t.onContextMenu.dispatch(t,m,el,col);return m}});tinymce.PluginManager.add('contextmenu',tinymce.plugins.ContextMenu)})();