"use-strict";

function DatePicker(id,callback) {
    this.id = id;
    this.callback = callback;
    this.date = new Date();
    this.fixedDate = null;
    this.render(this.date);
}

DatePicker.prototype.render = function(renderDate) {
    this.date = renderDate;
    var calendar = this ;
    var element = document.getElementById(this.id);
    element.innerHTML = "";
    var i;
    var DateN = renderDate.getDate();
    var MonthN = renderDate.getMonth();
    var YearN = renderDate.getFullYear();
    var dDate = new Date();
    dDate.setFullYear(YearN);
    dDate.setMonth(MonthN);

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'Autumn', 'September', 'October', 'November', 'December'];
    var topSection = months[MonthN] + ' ' + YearN;

    var tableElement, tableRow, tableData;
    tableElement = document.createElement('table');
    tableElement.setAttribute("class","background");
    element.appendChild(tableElement);
    tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);

    var prevButton = document.createElement('td');
    prevButton.setAttribute("class","prevButton");
    prevButton.onclick = function () {
        calendar.prevMonth();
    };
    prevButton.innerHTML = "<";
    tableRow.appendChild(prevButton);

    var datepickerheader = document.createElement('td');
    datepickerheader.setAttribute("colspan","5");
    datepickerheader.setAttribute("class","headr");
    datepickerheader.innerHTML = topSection;
    tableRow.appendChild(datepickerheader); 

    var nextButton = document.createElement('td');
    nextButton.setAttribute("class","nextButton");
    nextButton.onclick = function () {
        calendar.nextMonth();
    };
    nextButton.innerHTML = ">";
    tableRow.appendChild(nextButton);

    tableRow = document.createElement('tr');
    tableRow.setAttribute("class","weekDays");
    tableElement.appendChild(tableRow);
    for (i = 0; i < weekDays.length; i++) {
        tableData = document.createElement('td');
        tableData.innerHTML = weekDays[i];
        tableRow.appendChild(tableData);
    }


    
    var currentDate = 1;
    dDate.setDate(currentDate);
    var firstDay = dDate.getDay();
    if (firstDay !== 0) {
        tableRow = document.createElement('tr');
        tableElement.appendChild(tableRow);
        dDate.setDate(1 - firstDay);
        for (i = 0; i < firstDay; i ++) {
            tableData = document.createElement('td');
            tableData.setAttribute("class","inactivedate");
            tableData.innerHTML = dDate.getDate();
            tableRow.appendChild(tableData);
            dDate.setDate(dDate.getDate() + 1);
        }
    }

    while ( currentDate === dDate.getDate() ) {
        var currentDay = dDate.getDay();

        if( currentDay === 0){
            tableRow = document.createElement('tr');
            tableElement.appendChild(tableRow);
        }

        tableData=document.createElement('td');
        tableRow.appendChild(tableData);

        if (this.fixedDate && MonthN === this.fixedDate.month - 1 && YearN === this.fixedDate.year && currentDate === this.fixedDate.day){
            tableData.setAttribute("class","selectdate");
        }
        
        tableData.innerHTML = currentDate;
        tableData.onclick = ( function (selectedDate) {
            return function() {
                calendar.selectDate(selectedDate);
            };
        })(currentDate);
        currentDate += 1;
        dDate.setDate(currentDate);
    }

    var lastDay = dDate.getDay();
    if(lastDay !== 0){
        for (i = 0; i < 7-lastDay; i++){
            tableData = document.createElement('td');
            tableData.setAttribute("class","inactivedate");
            tableData.innerHTML = i + 1;
            tableRow.appendChild(tableData);
        }
    }

};

DatePicker.prototype.prevMonth = function() {
	console.log("prevMonth");
	var month = this.date.getMonth();
	var year = this.date.getFullYear();
	month -= 1;
	if (month < 0) {
		year -= 1;
		month += 12;
	}
	this.date.setDate(1);
	this.date.setMonth(month);
	this.date.setFullYear(year);
	this.render(this.date);
};

DatePicker.prototype.nextMonth = function() {
	console.log("nextMonth");
	var month = this.date.getMonth();
	var year = this.date.getFullYear();
	month += 1;
	if (month > 11) {
		year += 1;
		month -= 12;
	}
	this.date.setDate(1);
	this.date.setMonth(month);
	this.date.setFullYear(year);
	this.render(this.date);
};

DatePicker.prototype.selectDate = function(selectedDate) {
	this.date.setDate(selectedDate);
	this.fixedDate = {"month": this.date.getMonth() + 1, "day": this.date.getDate(), "year": this.date.getFullYear()};
	this.callback(this.id, this.fixedDate);
	this.render(this.date);
};