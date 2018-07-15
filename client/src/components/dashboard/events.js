import moment from 'moment';


export default [
  {
      _id: 1,
      start: new Date(),
      number: '',
      end: new Date(moment().add(0, "days")),
      title: "Jan <> Joe",
      desc: 'Big conference for important people'
    },
    {
      _id: 2,
      start: new Date(moment().add(6, "days")),
      end: new Date(moment().add(6, "days")),
      title: "Rick <> Joe",
      desc: 'Big conference for important people'
    },
    {
      _id: 3,
      start: new Date(moment().add(10, "days")),
      end: new Date(moment().add(10, "days")),
      title: "Aleisha <> Joe",
      desc: 'Big conference for important people'
    },
    {
      _id: 4,
      start: new Date(moment().add(2, "days")),
      end: new Date(moment().add(2, "days")),
      title: "Maddie <> James",
      desc: 'Big conference for important people'
    },
]
