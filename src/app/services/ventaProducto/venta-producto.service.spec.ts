import { TestBed } from '@angular/core/testing';

import { VentaProductoService } from './venta-producto.service';

describe('VentaProductoService', () => {
  let service: VentaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
