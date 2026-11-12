
import type { JSX } from 'react';
import type { Playlist } from './data';

interface Props {
  playlist: Playlist;
}

function PlaylistCard({ playlist }: Props): JSX.Element {
  const { title, tags, info, songs } = playlist;

  // TODO 1. for...of 문 + push

  const tagItems: JSX.Element[] = [];

  // TODO 2. 렌더 함수 만들기


  // TODO 3. filter
  //         songs 중 isLiked 가 true 인 곡만 골라 likedSongs 에 담으세요.
  const likedSongs = songs;

  return (
    <article className="playlistCard">
      <h2>{title}</h2>

      {/* TODO 1 에서 만든 tagItems 를 <ul> 안에 넣으세요. */}
      <ul className="tags">
        <li className="tag">#태그</li>
      </ul>

      {/* TODO 4. Object.entries + map */}
      <dl className="info">
        <dt>키</dt>
        <dd>값</dd>
      </dl>

      {/* songs.length 로 곡 수를 출력하세요. */}
      <h3>전체 곡 (0)</h3>
      {/* TODO 2 의 renderSongItem 과 map 을 사용해 전체 곡을 렌더링하세요. */}
      <ol className="songs">
        <li>곡 제목</li>
      </ol>

      <h3>최근 추가 순</h3>
      {/* TODO 5. 전체 곡을 역순으로 렌더링하세요.*/}
      <ol className="songs">
        <li>곡 제목</li>
      </ol>

      <h3>좋아요한 곡 ({likedSongs.length})</h3>
      {/* TODO 6. 빈 목록 처리 */}
      <ul className="songs">
        <li>곡 제목</li>
      </ul>
    </article>
  );
}

export default PlaylistCard;
