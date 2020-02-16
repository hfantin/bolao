import { JogosController, ResultadosController } from './controllers/index';
const controller = new JogosController();
const rcontroller = new ResultadosController();
$('.form').submit(controller.adiciona.bind(controller));
