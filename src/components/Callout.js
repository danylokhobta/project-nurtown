import './Callout.sass';
import Title from './Title';
import LinkButton from './LinkButton';

function Callout({title, text, img, btnText, btnUrl}) {
  return (
    <div className="Callout">
      <div className='images'>
        <img src={require(`../images/${img}`)} alt='Callout Media' />
      </div>
      <div className='content'>
        <Title text={title} isSubTitle={true}/>
        <p>{text}</p>
        <LinkButton
          text={btnText}
          url={btnUrl}
          type='light'
          showArrow={true}
        />
      </div>
    </div>
  );
}

export default Callout;
