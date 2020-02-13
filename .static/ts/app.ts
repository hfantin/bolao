import { JogosController } from './controllers/jogoscontroller';
const controller = new JogosController();
$('.form').submit(controller.adiciona.bind(controller));
