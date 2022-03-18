import { Spinner } from 'components/Spinner/Spinner';

import { useSkillsListQuery } from './SkillsList.query.generated';
import { SkillDescription } from './SkillsList.styles';

export const SkillsList = () => {
  const { loading, data } = useSkillsListQuery();

  if (loading) {
    return <Spinner />;
  }

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <ul>
      {data.skills.map((item, i) => (
        <li key={item.id}>
          {item.name} - <SkillDescription>{item.description}</SkillDescription>
        </li>
      ))}
    </ul>
  );
};
