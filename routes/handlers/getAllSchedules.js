const { Schedules } = require('../../models');
module.exports = async (req, res) => {
  const sqlOptions = {
    attributes: ['id', 'title', 'type', 'start_date', 'end_date', 'created_at'],
  };

  const schedules = await Schedules.findAll(sqlOptions);
  return res.json({
    status: 'success',
    data: schedules,
  });
};
