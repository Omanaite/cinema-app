import { MovieDetailDbResponse } from './types';

export function returnNameOfCrewMember(
  crewMember: 'Director' | 'Screenplay',
  data: MovieDetailDbResponse
) {
  const crew = Array.isArray(data.credits.crew) ? data.credits.crew as any[] : [];
  let crewMemberObject = crew.find(i => i.job === crewMember);
  if (typeof crewMemberObject !== 'undefined') {
    return crewMemberObject.name;
  } else {
    return '(not found)';
  }
}