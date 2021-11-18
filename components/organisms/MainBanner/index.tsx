import Illustration from './Illustration';
import ContentText from './ContentText';

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <ContentText/>
          <Illustration/>
        </div>
      </div>
    </section>
  );
}
