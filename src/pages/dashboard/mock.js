export default {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00",
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00",
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00",
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00",
    },
  ],
  bigStat: [
    {
      product: "Region 6",
      total: {
        monthly: 4.32,
        weekly: 1.46,
        daily: 0.39,
        percent: { value: 3.7, profit: false },
      },
      color: "primary",
      registrations: {
        monthly: { value: 162, profit: false },
        weekly: { value: 90, profit: true },
        daily: { value: 33, profit: true },
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true },
      },
    },
    {
      product: "Region 21",
      total: {
        monthly: 7.54,
        weekly: 2.8,
        daily: 0.27,
        percent: { value: 2.5, profit: true },
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false },
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false },
      },
    },
    {
      product: "Region 4",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true },
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false },
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true },
      },
    },
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation',
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company",
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails',
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post',
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app',
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps',
    },
  ],
  table: [
    {
      id: 0,
      name: "LOWES OF NE LOUISVILLE, KY",
      sales: "$233,956",
      comp: "2.91%",
      status: "positive",
    },
    {
      id: 1,
      name: "LOWES OF E EVANSVILLE, IN",
      sales: "$231,673",
      comp: "3.79%",
      status: "positive",
    },
    {
      id: 2,
      name: "LOWES OF SE CINCINNATI, OH",
      sales: "$228,722",
      comp: "-3.40%",
      status: "negative",
    },
    {
      id: 3,
      name: "LOWES OF FLORENCE, OH",
      sales: "$225,456",
      comp: "0.15%",
      status: "neutral",
    },
    {
      id: 4,
      name: "LOWES OF KIRKWOOD, MO",
      sales: "$224,129",
      comp: "1.19%",
      status: "positive",
    },
  ],
};
