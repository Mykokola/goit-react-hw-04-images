import { Button } from './Button.styled';
import PropTypes from 'prop-types'
export const ButtonLoadMore = ({ loadMore }) => {
  return <Button onClick={loadMore}>Load more</Button>;
};
ButtonLoadMore.propTypes = {
    loadMore:PropTypes.func.isRequired
}