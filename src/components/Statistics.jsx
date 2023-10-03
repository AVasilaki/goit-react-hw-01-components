import PropTypes from 'prop-types';
import { Wrapper } from './Statistics.styled';
export const Panel = ({ title, children }) => {
  return (
    <Wrapper>
      <section className="statistics">
        {title.length > 0 && <h2 className="title">{title}</h2>}
        {children}
      </section>
    </Wrapper>
  );
};

export const Statistics = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(data => (
        <li key={data.id} className="item">
          <span className="label">{data.label}</span>
          <span className="percentage">- {data.percentage} %</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};
