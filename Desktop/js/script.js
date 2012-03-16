/*
initializations
*/
	
	/*proquo-min.js*/
	$('.quote').proQuo()
	/*@-@*/
	
/*@--@*/

/*
modules
*/

	/*responsive tables*/
	/*tables are automatically contained within a wrapping class, .tablecontainer. This ensures that the tables do no resize but are made scrollable via overflow:scroll. Default styling for tables is located within elements.less*/
	$(function()
		{
			var table=$('table'),
			tablerows=$('table > tbody > tr'),
			tablecontainer=$('.tablecontainer'),
			tableinstructions=$('.tableinstructions'),
			inner=$('.inner');
			
			$(table)
				.wrap('<div class="inner">')
				
				$(table).parent(inner)
					.wrap('<div class="tablecontainer">')
					.after('<!-- @.inner-->')
					.end();
					
					$(tablecontainer)
						.append('<div class="tableinstructions"></div><!-- @.tableinstructions-->')
						.after('<!-- @.tablecontainer-->')
						.end();
						
						$(tablecontainer)
							.each(function(i)
								{
									if($(this).find(table).width() > ($(this).width()))
										{
											$(this)
												.find(tableinstructions)
													.css('display','block')
											$(this)
												.find(inner)
													.css('margin-right',$(tableinstructions).width());
										}
								}
							);
		}
	);
	/*@-@*/
	
	/*remove rows*/
	/*a commonly used prototyping tool for simulating removing rows from a table*/
	$('.removerow')
		.click(function()
			{
				$(this)
					.parents('tr')
					.remove();
			}
		);

/*@--@*/