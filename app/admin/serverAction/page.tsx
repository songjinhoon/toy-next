import { findAllUser } from '@/app/utils/actions/user';
import CreateUserFormServer from '@/app/components/organism/createUserFormServer';
import CommonTitle from '@/app/components/atom/text/commonTitle';

const Page = async () => {
  const users = await findAllUser();
  return (
    <>
      <CommonTitle title={'Server Action Test'} />
      <CreateUserFormServer></CreateUserFormServer>
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
