export interface MeetingActivityInterface {
  read: boolean;
  hours: string;
  details: string;
}

export interface MeetingsInterface {
  time: string;
  activity: MeetingActivityInterface[];
}

export const meetingsData = [
  //specific time
  {
    time: "Today",
    //activity ARRAY
    activity: [
      {
        read: false,
        hours: "3:15",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
    ],
  },
  //specific time
  {
    time: "Tomorrow",
    //activity ARRAY
    activity: [
      {
        read: false,
        hours: "3:15",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "10:00",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
    ],
  },
  //specific time
  {
    time: "This Week",
    //activity ARRAY
    activity: [
      {
        read: false,
        hours: "Sep 3",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "Sep 3",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 3",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 3",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 3",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "Sep 7",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: true,
        hours: "Sep 7",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
      {
        read: false,
        hours: "Sep 8",
        details: `<strong>Mini Soman;</strong> Mean stack developer; 4th phase interview | <strong>3:15 - 3:45</strong>`,
      },
    ],
  },
];
