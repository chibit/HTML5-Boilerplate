/*
modules
*/

	/*responsive tables*/
	/*tables are automatically contained within a wrapping class, .tablecontainer. This ensures that the tables do no resize but are made scrollable via overflow:scroll. Default styling for tables is located within elements.less*/
	$(function()
		{
			var table=$('table');
			$(table)
				.wrap('<div class="tablecontainer">')
					$('.tablecontainer')
						.after('<!-- @.tablecontainer-->');
		}
	);
	/*@-@*/

/*@--@*/