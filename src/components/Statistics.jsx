export const Panel = ({ title, children }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export const Statistics = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(data => (
        <li key={data.id} className="item">
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage} </span>
        </li>
      ))}
    </ul>
  );
};
