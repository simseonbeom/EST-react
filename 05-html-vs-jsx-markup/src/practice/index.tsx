import './practice.css';
import type { JSX } from 'react';
import { ProfileCard } from './dataBinding';
import { OrderCard, OrderCardSolution } from './conditionalRendering';
import { orders } from './conditionalRendering/data';
import { PlaylistCard } from './renderList';
import { playlists } from './renderList/data';

function Practice(): JSX.Element {
  return (
    <div className="practice">
      <section>
        <h1>Practice</h1>
        <ProfileCard />
      </section>

      <section>
        <h1>Conditional Rendering</h1>
        {/* 정답과 비교하려면 OrderCard 대신 OrderCardSolution 을 렌더링해 보세요. */}
        <div className="orderCards">
          <OrderCardSolution order={orders[0]} />
          <OrderCardSolution order={orders[1]} />
          <OrderCardSolution order={orders[2]} />
          <OrderCardSolution order={orders[3]} />
        </div>
      </section>

      <section>
        <h1>Render List</h1>
        {/* 정답과 비교하려면 PlaylistCard 대신 PlaylistCardSolution 을 렌더링해 보세요. */}
        <div className="playlistCards">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Practice;
