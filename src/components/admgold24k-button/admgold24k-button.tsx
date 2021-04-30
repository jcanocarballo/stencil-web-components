import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'admgold24k-button',
  styleUrl: 'admgold24k-button.css',
  shadow: true,
})
export class Admgold24kButton {

  @Prop() text: string = 'Button';
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {
          this.text
        }
      </button>
    );
  }

}
