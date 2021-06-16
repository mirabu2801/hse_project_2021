import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Board} from "../../interfaces";

interface DateCalendar {
 date: Date;
 day: string;
 disabled: boolean;
}

@Component({
  selector: 'app-ez-calendar',
  templateUrl: './ez-calendar.component.html',
  styleUrls: ['./ez-calendar.component.scss']
})
export class EzCalendarComponent implements OnInit {
  @Input() inputDate: Date = null;

  constructor() { }

  @Output() pushDate =  new EventEmitter<Date>();
  pushDateTrigger(): void{
    const tmp = new Date(this.selectedYear, this.selectedMonth, Number(this.selectedDay));
    this.pushDate.emit(tmp);
  }

  arrDayOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  arrMonth = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ]

  selectedDay = null;
  selectedMonth = null;
  selectedYear = null;

  month = 10;
  year = 2020;

  calendar = [[]];
  goNextMonth(): void {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    this.buildCalendar();
  }
  goPrevMonth(): void {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    this.buildCalendar();
  }

  // checkEquality(date: Date): boolean {
  //   const now = new Date();
  //   return now.getDay() === date.getDay() && now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear();
  // }

  buildDateCalendar(day: number): DateCalendar {
    if (day === -1) {
      return {
        date: null,
        day: ' ',
        disabled: true,
      };
    }

    const tmp = new Date(this.year, this.month, day + 1);

    return {
      date: tmp,
      day: String(day),
      disabled: tmp < new Date(),
    };
  }

  buildCalendar(): void {
    this.calendar = [[]];
    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day === 0) { day = 7; } // сделать воскресенье (0) последним днем
      return day - 1;
    }

    let d = new Date(this.year, this.month);

    for (let i = 0; i < getDay(d); i++) {
      this.calendar[0].push(this.buildDateCalendar(-1));
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() === this.month) {
      // if (this.calendar[this.calendar.length - 1].length === 7) {
      //   this.calendar.push([]);
      // }
      this.calendar[this.calendar.length - 1].push(this.buildDateCalendar(d.getDate()));
      if (getDay(d) % 7 === 6) {
        this.calendar.push([]);
      }
      d.setDate(d.getDate() + 1);
    }

    while (getDay(d) !== 0) {
      this.calendar[this.calendar.length - 1].push(this.buildDateCalendar(-1));
      d.setDate(d.getDate() + 1);
    }
  }

  selectedDate(day): void {
    this.selectedDay = day;
    this.selectedMonth = this.month;
    this.selectedYear = this.year;
    this.pushDateTrigger();
  }

  ngOnInit(): void {
    if (this.inputDate) {
      this.year = this.inputDate.getFullYear();
      this.month = this.inputDate.getMonth();

      this.selectedDay = String(this.inputDate.getDate());
      this.selectedMonth = this.month;
      this.selectedYear = this.year;
    }

    this.buildCalendar();
  }

}
