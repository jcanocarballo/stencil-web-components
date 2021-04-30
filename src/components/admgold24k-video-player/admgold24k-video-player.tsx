import { Component, h, Prop } from "@stencil/core";
import { VemeoPlayer } from "./funtional-components/vimeo-player";
import { YoutubePlayer } from "./funtional-components/youtube-player";

const VIDEO_PROVIDERS = {
  YOUTUBE: 'youtube',
  VIMEO: 'vimeo'
}

@Component({
  tag: "admgold24k-video-player",
  styleUrl: "admgold24k-video-player.css"
})
export class Admgold24kVideoPlayer {

  @Prop() source: string;
  @Prop() provider: string = VIDEO_PROVIDERS.YOUTUBE;
  
  render() {

    if(!this.source){
      return <div>No se proporciono ruta del video</div>
    }

    return (
      <div>
        {
          this.provider === VIDEO_PROVIDERS.YOUTUBE && 
          <VemeoPlayer source={this.source}></VemeoPlayer>
        }
        {
          this.provider === VIDEO_PROVIDERS.VIMEO && 
          <YoutubePlayer source={this.source}></YoutubePlayer>
        }
      </div>
    )
  }
}