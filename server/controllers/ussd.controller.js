import menu from '../services/flow/ussd-menu';
import dispatchService from '../services/dispatch-service';

function start(req, res, next) {
  menu.run(req.body, (ussdResult) => {
    res.send(ussdResult);
  });
}

function getDispatchInfo(req, res, next) {
  const gin = parseInt(req.query.gin, 10);
  const info = dispatchService.getDispatchInfo(gin);
  res.json(info);
}

function getDispatchViaProxy(req, res, next) {
  dispatchService.getDispatchInfoViaProxy(req.query.gin).then((dispatch) => {
    res.json(dispatch);
  });
}

function received(req, res, next) {
  // TODO: store the received amount to the database
  res.send({});
}

export default { start, getDispatchInfo, getDispatchViaProxy, received };
