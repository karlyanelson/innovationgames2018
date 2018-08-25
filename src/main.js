import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var data = {
//   customer: {
//     project: {
//       id: '1234',
//       dateRange: [
//         {
//           start: 'August 6, 2018',
//           end: 'August 10, 2018',
//           resources: [
//             {
//               name: 'Jesse Reese',
//               task: 'Make a computer',
//               hours: [
//                 {
//                   name: 'Monday',
//                   shorthand: 'Mon',
//                   date: '08/06',
//                   hourscompleted: '8'
//                 },
//                 {
//                   name: 'Tuesday',
//                   shorthand: 'Tue',
//                   date: '08/07',
//                   hourscompleted: '8'
//                 },
//                 {
//                   name: 'Wednesday',
//                   shorthand: 'Wed',
//                   date: '08/08',
//                   hourscompleted: '8'
//                 },
//                 {
//                   name: 'Thursday',
//                   shorthand: 'Thu',
//                   date: '08/09',
//                   hourscompleted: '8'
//                 },
//                 {
//                   name: 'Friday',
//                   shorthand: 'Fri',
//                   date: '08/10',
//                   hourscompleted: '8'
//                 }
//               ],
//               approved: false,
//               rejected: false,
//               burnrate: {
//                 completed: '100',
//                 total: '500'
//               }
//             }
//           ]
//         }
//       ]
//     }
//   }
// }

new Vue({
  render: h => h(App),
  data: {
    fancyName: 'Jenny'
  }
}).$mount('#app')
