import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUsuario } from './pagina-usuario';

describe('PaginaUsuario', () => {
  let component: PaginaUsuario;
  let fixture: ComponentFixture<PaginaUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
