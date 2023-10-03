import PropTypes from 'prop-types';
import { Wrapper } from './TractionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount} </td>
                <td>{item.currency} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
