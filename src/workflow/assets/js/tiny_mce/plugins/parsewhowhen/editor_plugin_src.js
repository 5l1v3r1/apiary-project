(function() {
	tinymce.create('tinymce.plugins.ParseWhoWhenPlugin', {
		init : function(ed, url) {
			var t = this, s, v, o;
			t.editor = ed;
		},
		createControl: function(n, cm) {
			switch (n) {
				case 'parsewhowhenlistbox':
					var t = this, ed = t.editor, each = tinymce.each;
					var pwwlb = cm.createListBox('parsewhowhenlistbox', {
						title : 'Who/When',
						onselect : function(v) {
							ed.execCommand('assignApiaryElement', false, v);
						}
					});
					
					ed.onInit.add(function() {
						var items = ed.getParam('parsewhowhen_items');

						if (items) {
							each(items, function(item) {
								var keys = 0;

								each(item, function() {keys++;});

								if (keys > 1)
								{
									pwwlb.add(item.title, item.classes);
								}
							});
						}
					});

					// Add values to the listbox when tinymce init is called by using parsewhowhen_items

					// Return the new listbox instance
					return pwwlb;
			}
			return null;
		},

		getInfo : function() {
			return {
				longname : 'Parse Who and When Apiary Project specimenMetadata elements.',
				author : 'Apiary Research Project',
				authorurl : 'http://demo.apiaryproject.org',
				infourl : 'http://demo.apiaryproject.org',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('parsewhowhen', tinymce.plugins.ParseWhoWhenPlugin);
})();