const mongoose = require('mongoose');
const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name : String,
  admin : String,
  employees : [String],
  campaigns : [{
    name : String,
    text : String,
    when : String,
    active : Boolean
  }]
});

BusinessSchema.methods.createDefaultCampaigns = function createDefaultCampaigns(id){
  this.model('Business').findById(id).then((business) => {
    //Reminders
    business.campaigns.push({
      name : "Reminders",
      text : "Hi *name*, this is *business* reminding you of your appointment tomorrow at *time*",
      when : "24",
      active : false
    });
    //Reviews
    business.campaigns.push({
      name : "Reviews",
      text : "Hi *name*, did you enjoy your time at *business*? Let us know at (insert link)",
      when : "24",
      active : false
    });
    //Revisits
    business.campaigns.push({
      name : "Revisits",
      text : "Hi *name*, we hope you come back to *business*. Here's a discount for you at (insert link)",
      when : "30",
      active : false
    });
    //Promotions
    business.campaigns.push({
      name : "Promotions",
      text : "(Insert Promotion Here)",
      when : "2",
      active : false
    });
    business.save();
  })
}

const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
