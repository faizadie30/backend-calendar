const { Schedules } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    title: 'string|empty:false',
    type: 'string|empty:false',
    start_date: 'string|min:10',
    end_date: 'string|empty:false',
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: 'error',
      message: validate,
    });
  }

  const addSchedule = await Schedules.create(req.body);

  return res.json({
    status: 'success',
    data: addSchedule,
  });
};
