import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ToastConfig } from '../assets/toast-config';

@Injectable( {
  providedIn: 'root'
} )
export class MhrjToastService
{

  message = '';
  data: ToastConfig;
  hasChild = false;
  child: HTMLElement = null;
  childExitClass: string = null;

  private renderer: Renderer2;
  constructor( private rendererFactory: RendererFactory2 )
  {
    this.renderer = this.rendererFactory.createRenderer( null, null );
  }

  raise( message?: string, data?: ToastConfig )
  {
    this.data = ( typeof data !== 'undefined' && data ) ? data : {};
    this.message = ( typeof message !== 'undefined' && message ) ? message : '';
    const msg = this.data.message ? this.data.message : this.message ? this.message : 'hello this is a test!!!';
    const toastType = this.data.toastType ? this.data.toastType : 'normal';
    const panelClass = this.data.panelClass ? this.data.panelClass : toastType;
    const horizontalPosition = this.data.horizontalPosition ? this.data.horizontalPosition : 'right';
    const verticalPosition = this.data.verticalPosition ? this.data.verticalPosition : 'top';
    const entryClass = `toast-entry-${verticalPosition}-${horizontalPosition}`;
    const exitClass = `toast-exit-${verticalPosition}-${horizontalPosition}`;
    const container: HTMLElement = this.renderer.createElement( 'div' );
    container.className = `toast-container ${verticalPosition} ${horizontalPosition}`;
    const msgBox: HTMLElement = this.renderer.createElement( 'div' );
    if ( typeof this.data.panelClass !== 'undefined' ) { }
    msgBox.classList.add( 'toast-message' );
    msgBox.classList.add( panelClass );
    msgBox.classList.add( entryClass );
    msgBox.innerHTML = msg;
    container.appendChild( msgBox );
    if ( this.hasChild )
    {
      this.child.classList.add( this.childExitClass );
    }
    setTimeout( () =>
    {
      document.body.appendChild( container );
      this.hasChild = true;
      this.child = container;
      this.childExitClass = exitClass;
    }, 200 );
    setTimeout( () =>
    {
      container.classList.add( exitClass );
      setTimeout( () =>
      {
        document.body.removeChild( container );
      }, 2000 );
    }, 5000 );
  }

}
