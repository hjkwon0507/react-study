import Layout from '../components/shared/Layout';
import 'moment/locale/ko';
import moment from 'moment';

function Subscription() {
  // 형태: 년-월-일T시-분-초
  const time1 = moment('2021-09-10T08:00:33');
  const time2 = moment('2021-09-24T08:00:33');
  const time3 = moment('2021-09-24T09:50:33');

  console.log('time1과의 차이:', time1.fromNow());
  console.log('time2과의 차이:', time2.fromNow());
  console.log('time3과의 차이:', time3.fromNow());

  return (
    <Layout activeMenu="subscription">
      <div>* 구독</div>
    </Layout>
  );
}

export default Subscription;