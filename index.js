'use strict';
const whosOut = require('./whosOut')
const schedule = require('node-schedule')

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = 1
rule.hour = 2
// Don't forget the minute!
rule.minute = 0

const j = schedule.scheduleJob(rule, function(err) {
  if (err) {
    console.log(err)
  }
  whosOut()
})

whosOut()
console.log('PTO Bot for',process.env.BAMBOOHR_SUBDOMAIN)

console.log('Messages scheduled for Mondays at 7am EST!')
