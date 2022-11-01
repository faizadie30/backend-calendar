const { Schedules } = require('../../models');
const Validator = require('fastest-validator');
const moment = require('moment');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: 'string|empty:false',
    type: 'string|empty:false',
    start_date: 'string|empty:false',
    end_date: 'string|empty:false',
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const data = {
    title: req.body.title,
    type: req.body.type,
    startDate: moment(req.body.start_date, 'YYYY-MM-DD HH:mm:ss').toDate(),
    endDate: moment(req.body.end_date, 'YYYY-MM-DD HH:mm:ss').toDate(),
  };

  const addSchedule = await Schedules.create(data);

  return res.json({
    status: 'success',
    data: addSchedule,
  });
};
