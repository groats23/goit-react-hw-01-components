import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container(props) {
  return <div className={s.container}>{props.children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
