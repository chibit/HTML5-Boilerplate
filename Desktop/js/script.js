/*
modules
*/

	/*responsive tables*/
	/*tables are automatically contained within a wrapping class, .tablecontainer. This ensures that the tables do no resize but are made scrollable via overflow:scroll. Default styling for tables is located within elements.less*/
	$(function()
		{
			var table=$('table');
			var tableinstructionswidth=
			$(table)
				.wrap('<div class="tablecontainer">')
					$('.tablecontainer')
						.append('<div class="tableinstructions">Swipe to browse</div><!-- @.tableinstructions-->')
						.after('<!-- @.tablecontainer-->')
						.end();
						if(table.width() > ($('.tablecontainer').width()))
							{
								$('.tableinstructions')
									.css('display','block')
								$(table)
									.css('margin-left',$('.tableinstructions').width());
							}
		}
	);
	/*@-@*/

/*@--@*/