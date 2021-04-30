import { FunctionalComponent, h } from '@stencil/core';

interface YoutubePlayerProps {
  source: string;
}

export const YoutubePlayer: FunctionalComponent<YoutubePlayerProps> = ({source}) => {
  return (
    <div>
      <h2>Youtube</h2>
      <iframe width="560" height="315" src={source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
  )
}