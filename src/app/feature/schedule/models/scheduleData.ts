export interface ScheduleEvents {
  toFrom : number[]
  hours: Hour[];
}

export interface Hour {
  position: string;
  events:   Event[];
}

export interface Event {
  day:       string;
  hour : string;
  subject:   string;
  teacher:   Teacher;
  classroom: string;
}

export interface Teacher {
  name:  string;
  color: string;
}

export interface CordenatesEvent {
  day : string,
  hour : string

}