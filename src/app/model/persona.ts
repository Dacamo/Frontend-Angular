import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { TipoDocumento } from './tipoDocumento';
export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  tipoDocumentoIdentidad = new TipoDocumento;
}

