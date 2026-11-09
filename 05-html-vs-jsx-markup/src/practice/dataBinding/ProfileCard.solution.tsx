import type { JSX } from 'react';
import { profile, todayQuotes } from './data';
import { getRandom } from '@/utils/getRandom';

function ProfileCardSolution(): JSX.Element {
  // 1. 구조 분해 할당
  const { name, nickname, birthYear, avatar, github, themeColor, job, skills, isOpenToWork } = profile;

  // 2. 계산된 값도 변수로 만들어 바인딩할 수 있음
  const age = new Date().getFullYear() - birthYear;

  // 3. getRandom(n) 은 0 ~ n-1 을 반환하므로 length 를 그대로 전달
  const quote = todayQuotes[getRandom(todayQuotes.length)];

  return (
    <article className="profileCard" style={{ borderColor: themeColor }}>
      <img className="avatar" src={avatar} alt={`${name} 프로필 사진`} />
      <h2>
        {name}{' '}
        <small>@{nickname}</small>
      </h2>

      <p className="job">
        {job.title} · {job.company}
      </p>

      <dl className="info">
        <div>
          <dt>나이</dt>
          <dd>{age}세</dd>
        </div>
        <div>
          <dt>GitHub</dt>
          <dd>
            <a href={github} target="_blank" rel="noopener noreferrer">
              {github}
            </a>
          </dd>
        </div>
        <div>
          <dt>기술 스택</dt>
          <dd>
            {skills.join(' / ')} ({skills.length}개)
          </dd>
        </div>
        <div>
          <dt>구직 중</dt>
          <dd>
            {String(isOpenToWork)} ({isOpenToWork ? '예' : '아니오'})
          </dd>
        </div>
      </dl>

      <blockquote className="quote">{quote}</blockquote>
    </article>
  );
}

export default ProfileCardSolution;
