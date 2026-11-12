import type { JSX } from 'react';
import { Fragment } from 'react';
import type { Playlist, Song } from './data';

interface Props {
  playlist: Playlist;
}

function PlaylistCardSolution({ playlist }: Props): JSX.Element {
  const { title, tags, info, songs } = playlist;

  // 1. for...of 문 + push: 반복문으로 JSX 요소 배열 만들기
  //    문자열 배열은 값 자체가 고유하므로 key 로 사용할 수 있음
  const tagItems: JSX.Element[] = [];
  for (const tag of tags) {
    tagItems.push(
      <li key={tag} className="tag">
        #{tag}
      </li>,
    );
  }

  // 2. 렌더 함수: 같은 모양의 <li> 를 여러 목록에서 재사용
  //    key 는 index 가 아닌 데이터의 고유 id 를 사용
  const renderSongItem = ({ id, title, artist, isLiked }: Song) => (
    <li key={id}>
      <span className="songTitle">{title}</span>
      <span className="artist">{artist}</span>
      {isLiked && <span aria-label="좋아요">❤️</span>}
    </li>
  );

  // 3. filter + map: 조건에 맞는 항목만 골라서 렌더링
  const likedSongs = songs.filter((song) => song.isLiked);

  return (
    <article className="playlistCard">
      <h2>{title}</h2>

      <ul className="tags">{tagItems}</ul>

      {/* 4. Object.entries + Fragment: 객체를 설명 목록(dl)으로 렌더링
             <dt>, <dd> 두 요소를 묶기 위해 key 를 줄 수 있는 <Fragment> 사용 (<></> 에는 key 불가) */}
      <dl className="info">
        {Object.entries(info).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <h3>전체 곡 ({songs.length})</h3>
      {/* 5. map: 배열 → JSX 배열 */}
      <ol className="songs">{songs.map(renderSongItem)}</ol>

      <h3>최근 추가 순</h3>
      {/* 6. toReversed(): 원본 배열을 바꾸지 않고 역순 배열을 새로 만듦 (reverse() 는 원본을 변경!) */}
      <ol className="songs">{songs.toReversed().map(renderSongItem)}</ol>

      <h3>좋아요한 곡 ({likedSongs.length})</h3>
      {/* 7. 빈 목록 처리: 리스트 렌더링 + 조건부 렌더링 */}
      {likedSongs.length > 0 ? (
        <ul className="songs">{likedSongs.map(renderSongItem)}</ul>
      ) : (
        <p className="empty">좋아요한 곡이 없어요.</p>
      )}
    </article>
  );
}

export default PlaylistCardSolution;
