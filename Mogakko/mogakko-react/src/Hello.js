import styles from './Hello.module.css';

function Hello() {
  return (
    <div className={styles.hello}>
      <h1 className={styles.title}>넷플릭스</h1>
      <p>넷플릭스(Netflix)는 전세계에 유료 가입자만 5700만명에 이르는 명실상부한 세계 최대 유료 동영상 스트리밍 서비스다.</p>
      <p>1997년 넷플릭스는 비디오와 DVD를 우편·택배로 배달하는 서비스로 시작했다.</p>
      <p>원래 미국에서 시작된 서비스지만, 가입자 5700만 중 1800만명이 해외 구독자다. 넷플릭스는 앞으로도 미국 방송 업계 석권을 넘어 해외 시장 개척에 적극 나서 성장세를 이어나갈 기세다.</p>
    </div>
  );
}

export default Hello;