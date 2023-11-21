import { findAllUser } from '@/app/utils/actions/user';
import CreateForm from '@/app/components/molecule/createForm';

const Page = async () => {
  const users = await findAllUser();
  return (
    <div>
      <h1>Server Action Test</h1>
      {/*<AddForm></AddForm>*/}
      <CreateForm></CreateForm>
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
    </div>
  );
};

export default Page;
