import PropTypes from 'prop-types';
import defaultImage from './default.png';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImage}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
