import style from './style.module.css';

function UsersItem({ first_name, last_name, avatar, email }) {

  return (
    <div className={style.container}>
      <div className={style.item}>
        <img src={avatar} alt="title" />
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UsersItem;