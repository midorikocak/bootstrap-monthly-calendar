(function( $ ){

    function monthTable(day, month, year)
    {
        var lastDay = new Date(year, month + 1, 0).getDate();

        var firstWeekDay = new Date(year, month, 0).getDay();

        var previousMonthLastDay = new Date(year, month, 0).getDate();

        if(month!=new Date().getMonth())
        {
            var today = 0;
        }
        else if (year==new Date().getFullYear())
        {
            var today = day;
        }

        var startDay = previousMonthLastDay - (firstWeekDay);

        var counter = 0;

        var month_names = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

        var currentMonth = month_names[month];

        var output ='<table class="table-condensed table-bordered table-striped">\n\t<thead>\n\t\t<tr>\n\t\t\t<th colspan="7">\n\t\t\t\t<span class="btn-group">\n\t\t\t\t\t<a id="left" class="btn"><i class="icon-chevron-left"></i></a>\n\t\t\t\t\t<a class="btn active">';
        output += currentMonth + " "+year+'</a>\n\t\t\t\t\t<a id="right"  class="btn"><i class="icon-chevron-right"></i></a>\n\t\t\t\t</span>\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>Mo</th>\n\t\t\t<th>Tu</th>\n\t\t\t<th>We</th>\n\t\t\t<th>Th</th>\n\t\t\t<th>Fr</th>\n\t\t\t<th>Sa</th>\n\t\t\t<th>Su</th>\n\t\t</tr>\n\t</thead>\n\t<tbody data-month="'+month+'" data-year="'+year+'">\n';

        var monthNumbers = startDay;

        output += '\t\t<tr>\n';


        var resetCounter = 0;

        //console.debug(startDay,previousMonthLastDay,firstWeekDay,lastDay)

        if(firstWeekDay == 6)
        {
            var limit = 42;
        }
        else
        {
            var limit = 35;
        }
        var reset = 0;
        while(counter<limit)
        {
            
            if(counter==firstWeekDay+1)
            {
                monthNumbers = 1;
                reset = 1;
            }
            if(reset==0)
            {
                var tdOpener = '<td id="'+monthNumbers+'-'+(month)+'-'+year+'">';
            }
            else
            {
                var tdOpener = '<td id="'+monthNumbers+'-'+(month+1)+'-'+year+'">';
            }

            //console.debug(monthNumbers,lastDay+1);
            

            // Week Lines
            if(counter%7!=0)
            {
                output += '\t\t'+tdOpener+monthNumbers+'</td>\n';
            }
            else if (counter!=0)
            {
                output += "\t\t"+tdOpener+monthNumbers+"</td>\n\t\t</tr>\n";
                if(counter!=35)
                {
                    output+= "\t\t<tr>\n";
                }
            }

            counter++;
            monthNumbers++;

            if(monthNumbers==lastDay+1 && counter>28)
            {
                //Reset month number when month is finished
                monthNumbers=1;
                var resetCounter = counter;
            }

            // td openers
            if(monthNumbers==today)
            {
                tdOpener = '\t<td class="btn-primary" id="'+monthNumbers+'-'+(month+1)+'-'+year+'">';
            }
            else if(counter<firstWeekDay+1)
            {
                tdOpener = '\t<td class="muted" id="'+monthNumbers+'-'+(month+1)+'-'+year+'">';
            }
            else if(resetCounter!=0)
            {
                tdOpener = '\t<td class="muted" id="'+monthNumbers+'-'+(month+1)+'-'+year+'">';
            }
            else
            {
                tdOpener = "\t<td id='"+monthNumbers+"-"+(month+1)+"-"+year+"'>";
            }

            if (counter==limit)
            {
                output += "\t\t"+tdOpener+monthNumbers+"</td>\n\t\t</tr>\n";
            }

        }
        output += '\t</tbody>\n</table>';
        return output;
    }

    $.fn.calendar = function(callback) {


        var date = new Date(), day = date.getDate(), year = date.getFullYear(), month = date.getMonth();

        var methods = {
            init : function( ) {
                var content = monthTable(day,month,year);

                var $this = $(this);
                $this.html(content);
                $('#right').click(function(e) {
                    methods.nextMonth.call($this);
                });
                $('#left').click(function(e) {
                    methods.prevMonth.call($this);
                });
                if (typeof callback == 'function') { // make sure the callback is a function
                    callback.call($this); // brings the scope to the callback
                }
                else if(callback=='next')
                {
                    methods.nextMonth.call($this);
                }
                else if(callback=='prev')
                {
                    methods.prevMonth.call($this);
                }
            },
            nextMonth : function( ) {
                month++;
                if((month)%12==0)
                {
                    month=0;
                    ++year;
                }
                //console.log(month,year)
                var content = monthTable(day,month,year);
                var $this = $(this);
                $this.empty();
                $this.html(content);
                $('#right').click(function(e) {
                    methods.nextMonth.call($this);
                });
                $('#left').click(function(e) {
                    methods.prevMonth.call($this);
                });
                if (typeof callback == 'function') { // make sure the callback is a function
                    callback.call($this); // brings the scope to the callback
                }
            },
            prevMonth : function( ) {
                --month;
                //console.log(month,year);
                var content = monthTable(day,month,year);
                var $this = $(this);
                $this.empty();
                $this.html(content);
                $('#right').click(function(e) {
                    methods.nextMonth.call($this);
                });
                $('#left').click(function(e) {
                    methods.prevMonth.call($this);
                });
                if (typeof callback == 'function') { // make sure the callback is a function
                    callback.call($this); // brings the scope to the callback
                }
                if((month)%12==0)
                {
                    month=12;
                    --year;
                }
            }
        };



        return this.each(function( method ) {
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
            }

        });

    };
    })( jQuery );
