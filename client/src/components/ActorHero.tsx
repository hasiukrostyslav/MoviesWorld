import { imgSize, imgURL } from '../utils/constants';
import type { Actor } from '../utils/types';
import Poster from './Poster';

interface ActorHeroProps {
  actor: Actor;
}

function ActorHero({ actor }: ActorHeroProps) {
  const { name, birthday, deathday, biography, age, birthplace, imgPath } =
    actor;

  return (
    <div className="my-14">
      <div className="flex h-full gap-10">
        <div className="basis-1/4">
          <Poster src={`${imgURL}${imgSize.large}${imgPath}`} title={name} />
        </div>

        <div className="flex basis-2/3 flex-col">
          <div className="flex flex-col gap-2">
            <h2 className="mb-4 flex items-end gap-2 text-3xl font-bold">
              {name}
            </h2>

            <ul className="flex gap-4">
              <li>
                Age{' '}
                <span className="text-sm italic text-slate-500 dark:text-slate-400">
                  {age}
                </span>
              </li>
              <li>
                Birthday{' '}
                <span className="text-sm italic text-slate-500 dark:text-slate-400">
                  {birthday}
                </span>
              </li>
              <li>
                Birthplace{' '}
                <span className="text-sm italic text-slate-500 dark:text-slate-400">
                  {birthplace}
                </span>
              </li>
              {deathday && (
                <li>
                  Deathday{' '}
                  <span className="text-sm italic text-slate-500 dark:text-slate-400">
                    {deathday}
                  </span>
                </li>
              )}
            </ul>

            <p className="my-4 text-sm">{biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorHero;
