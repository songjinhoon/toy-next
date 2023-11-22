import { findAllUser } from '@/app/utils/actions/user';
import CreateUserFormClient from '@/app/components/organism/createUserFormClient';
import CommonTitle from '@/app/components/atom/text/commonTitle';

const Page = async () => {
  const users = await findAllUser();
  return (
    <>
      <CommonTitle title={'Server Action Error Handle Test'} />
      <CreateUserFormClient></CreateUserFormClient>
      {users.map((user: any) => (
        <div key={user.id} style={{ display: 'flex' }}>
          <p>{user.id}-----</p>
          <p>{user.username}-----</p>
          <p>{user.password}-----</p>
          <p>{user.nickname}-----</p>
          <p>{user.email}-----</p>
          <p>{user.tellNum}-----</p>
        </div>
      ))}
    </>
  );
};

export default Page;
